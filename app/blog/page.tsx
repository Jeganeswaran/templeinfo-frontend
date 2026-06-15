"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { articleService } from "@/services";
import { Article, ArticleCategory } from "@/data/types";
import {
  BlogHero,
  CategoryTags,
  BlogToolbar,
  FeaturedBlogCard,
  BlogCard,
  Pagination,
  BlogSidebar,
  EmptyState,
} from "@/components/blog";

const PAGE_SIZE = 6;

function BlogListingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [categories, setCategories] = useState<ArticleCategory[]>([]);
  const [popularPosts, setPopularPosts] = useState<Article[]>([]);
  const [recentPosts, setRecentPosts] = useState<Article[]>([]);
  const [popularTags, setPopularTags] = useState<string[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(
    searchParams.get("category") || null
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "latest");
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const loadData = useCallback(async () => {
    setLoading(true);

    const [categoriesData, featured, popular, recent] = await Promise.all([
      articleService.getCategories(),
      articleService.getFeatured(),
      articleService.getPopular(3),
      articleService.getLatest(3),
    ]);

    setCategories(categoriesData);
    setFeaturedArticle(featured);
    setPopularPosts(popular);
    setRecentPosts(recent);
    setPopularTags(articleService.getPopularTags());

    const result = await articleService.getPaginated({
      category: activeCategory || undefined,
      search: searchValue || undefined,
      sortBy: sortBy as "latest" | "oldest" | "popular" | "views",
      page: currentPage,
      pageSize: PAGE_SIZE,
    });

    setArticles(result.data);
    setTotalCount(result.total);
    setTotalPages(result.totalPages);
    setLoading(false);
  }, [activeCategory, searchValue, sortBy, currentPage]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const updateUrl = useCallback(
    (params: Record<string, string | null>) => {
      const newParams = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === "") {
          newParams.delete(key);
        } else {
          newParams.set(key, value);
        }
      });

      const queryString = newParams.toString();
      router.push(queryString ? `/blog?${queryString}` : "/blog", {
        scroll: false,
      });
    },
    [router, searchParams]
  );

  const handleSearch = () => {
    setCurrentPage(1);
    updateUrl({ search: searchValue, page: null });
  };

  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    updateUrl({ category: categoryId, page: null });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
    updateUrl({ sort: value, page: null });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setActiveCategory(null);
    setSortBy("latest");
    setCurrentPage(1);
    router.push("/blog");
  };

  const showFeatured =
    !searchValue && !activeCategory && currentPage === 1 && featuredArticle;

  const displayArticles = showFeatured
    ? articles.filter((a) => a.id !== featuredArticle?.id)
    : articles;

  return (
    <>
      <BlogHero
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
      />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <CategoryTags
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />

              <BlogToolbar
                totalCount={totalCount}
                sortBy={sortBy}
                onSortChange={handleSortChange}
              />

              {loading ? (
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-3xl overflow-hidden shadow border border-orange-100 animate-pulse"
                    >
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-5">
                        <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
                        <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
                        <div className="h-8 w-full bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : displayArticles.length === 0 ? (
                <EmptyState onClearSearch={handleClearSearch} />
              ) : (
                <>
                  {showFeatured && featuredArticle && (
                    <FeaturedBlogCard article={featuredArticle} />
                  )}

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {displayArticles.map((article) => (
                      <BlogCard key={article.id} article={article} />
                    ))}
                  </div>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              )}
            </div>

            {/* Sidebar */}
            <BlogSidebar
              categories={categories}
              popularPosts={popularPosts}
              recentPosts={recentPosts}
              popularTags={popularTags}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogListingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div></div>}>
      <BlogListingContent />
    </Suspense>
  );
}
