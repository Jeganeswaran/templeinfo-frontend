import { apiService } from "./api.service";
import { articles, articleCategories, popularTags } from "@/data/articles";
import { Article, ArticleCategory, FilterOptions, PaginatedResponse } from "@/data/types";

export interface ArticleFilterOptions extends FilterOptions {
  category?: string;
  tag?: string;
  featured?: boolean;
}

class ArticleService {
  async getAll(): Promise<Article[]> {
    return apiService.getAll(articles);
  }

  async getById(id: string): Promise<Article | null> {
    return apiService.getById(articles, id);
  }

  async getFeatured(): Promise<Article | null> {
    const all = await apiService.filter(articles, (article) => article.featured === true);
    return all[0] || null;
  }

  async getLatest(limit: number = 5): Promise<Article[]> {
    const sorted = await apiService.sort(articles, "publishedAt", "desc");
    return sorted.slice(0, limit);
  }

  async getPopular(limit: number = 5): Promise<Article[]> {
    const sorted = await apiService.sort(articles, "views", "desc");
    return sorted.slice(0, limit);
  }

  async getByCategory(categoryId: string): Promise<Article[]> {
    return apiService.filter(articles, (article) => article.category.id === categoryId);
  }

  async getByTag(tag: string): Promise<Article[]> {
    const lowerTag = tag.toLowerCase();
    return apiService.filter(articles, (article) =>
      article.tags.some((t) => t.toLowerCase() === lowerTag)
    );
  }

  async search(query: string): Promise<Article[]> {
    return apiService.search(articles, ["title", "description"], query);
  }

  async getPaginated(options: ArticleFilterOptions = {}): Promise<PaginatedResponse<Article>> {
    const { category, tag, featured, search, sortBy = "latest", page = 1, pageSize = 10 } = options;

    const filterFn = (article: Article): boolean => {
      if (category && article.category.id !== category) return false;
      if (tag && !article.tags.some((t) => t.toLowerCase() === tag.toLowerCase())) return false;
      if (featured !== undefined && article.featured !== featured) return false;
      if (search) {
        const lowerSearch = search.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(lowerSearch);
        const matchesDesc = article.description.toLowerCase().includes(lowerSearch);
        if (!matchesTitle && !matchesDesc) return false;
      }
      return true;
    };

    let filteredArticles = articles.filter(filterFn);

    switch (sortBy) {
      case "oldest":
        filteredArticles = [...filteredArticles].sort(
          (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        );
        break;
      case "popular":
      case "views":
        filteredArticles = [...filteredArticles].sort(
          (a, b) => (b.views || 0) - (a.views || 0)
        );
        break;
      case "latest":
      default:
        filteredArticles = [...filteredArticles].sort(
          (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        break;
    }

    const total = filteredArticles.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedData = filteredArticles.slice(startIndex, startIndex + pageSize);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      totalPages,
    };
  }

  async getCategories(): Promise<ArticleCategory[]> {
    return apiService.getAll(articleCategories);
  }

  async getCategoryById(id: string): Promise<ArticleCategory | null> {
    return apiService.getById(articleCategories, id);
  }

  getPopularTags(): string[] {
    return popularTags;
  }

  async getRelated(articleId: string, limit: number = 4): Promise<Article[]> {
    const article = await this.getById(articleId);
    if (!article) return [];

    const sameCategoryArticles = await apiService.filter(
      articles,
      (a) => a.category.id === article.category.id && a.id !== articleId
    );

    if (sameCategoryArticles.length >= limit) {
      return sameCategoryArticles.slice(0, limit);
    }

    const otherArticles = await apiService.filter(
      articles,
      (a) => a.category.id !== article.category.id && a.id !== articleId
    );

    return [...sameCategoryArticles, ...otherArticles].slice(0, limit);
  }
}

export const articleService = new ArticleService();
export default ArticleService;
