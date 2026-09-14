"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { articleService } from "@/services";
import { Article, ArticleCategory } from "@/data/types";
import {
  PageLoading,
  NotFoundState,
  ArticleHero,
  TableOfContentsMobile,
  AuthorBox,
  NewsletterCTA,
  RelatedArticles,
  TagList,
  TocItem,
} from "@/components/shared";
import { ArticleContent, ArticleMetaBar, BlogSidebar } from "@/components/blog";
import Leaderboard from "@/components/googleAds/Leaderboard";
import InlineRectangle from "@/components/googleAds/InlineRectangle";

const DEFAULT_TOC_ITEMS: TocItem[] = [
  { id: "intro", label: "Introduction" },
  { id: "content", label: "Main Content" },
  { id: "conclusion", label: "Conclusion" },
];

const DEFAULT_AUTHOR_BIO =
  "தமிழ்நாட்டின் கோவில்களை ஆராய்ந்து எழுதி வருகிறார். பல்வேறு ஆன்மீக தலங்கள் பற்றிய கட்டுரைகளை எழுதியுள்ளார்.";

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<ArticleCategory[]>([]);
  const [popularPosts, setPopularPosts] = useState<Article[]>([]);
  const [recentPosts, setRecentPosts] = useState<Article[]>([]);
  const [popularTags, setPopularTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      setLoading(true);
      const [articleData, categoriesData, popular, recent] = await Promise.all([
        articleService.getById(slug),
        articleService.getCategories(),
        articleService.getPopular(3),
        articleService.getLatest(3),
      ]);

      if (articleData) {
        setArticle(articleData);
        const related = await articleService.getRelated(slug, 3);
        setRelatedArticles(related);
      }

      setCategories(categoriesData);
      setPopularPosts(popular);
      setRecentPosts(recent);
      setPopularTags(articleService.getPopularTags());
      setLoading(false);
    }
    loadArticle();
  }, [slug]);

  if (loading) {
    return <PageLoading variant="article" />;
  }

  if (!article) {
    return (
      <NotFoundState
        icon="📄"
        title="கட்டுரை கிடைக்கவில்லை"
        description="நீங்கள் தேடும் கட்டுரை கிடைக்கவில்லை"
        backLink="/blog"
        backLabel="அனைத்து கட்டுரைகளுக்கும் திரும்பு"
      />
    );
  }

  const breadcrumbs = [
    { label: "முகப்பு", href: "/" },
    { label: "கட்டுரைகள்", href: "/blog" },
    { label: article.title.slice(0, 30) + "..." },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <ArticleHero
        image={article.image}
        title={article.title}
        description={article.description}
        categoryName={article.category.name}
        categoryNameTamil={article.category.nameTamil}
        breadcrumbs={breadcrumbs}
      />

      <div className="relative z-10 bg-[#FFFBF5]">
        <ArticleMetaBar article={article} />

        {/* Google Ads - Leaderboard */}
        <Leaderboard />

        <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <article className="flex-1 max-w-3xl order-2 lg:order-1">
              <TableOfContentsMobile items={DEFAULT_TOC_ITEMS} className="mb-8" />

              <div className="bg-white rounded-3xl shadow-lg border border-amber-100 p-6 md:p-10">
                <ArticleContent article={article} />
              </div>

              <TagList tags={article.tags} className="mt-8" />

              <AuthorBox
                author={article.author}
                bio={DEFAULT_AUTHOR_BIO}
                className="mt-8"
              />

              <RelatedArticles
                articles={relatedArticles}
                className="mt-12"
              />

              {/* Google Ads - Inline Rectangle */}
              <div className="mt-12">
                <InlineRectangle />
              </div>

              <NewsletterCTA className="mt-12" />
            </article>

            <BlogSidebar
              categories={categories}
              popularPosts={popularPosts}
              recentPosts={recentPosts}
              popularTags={popularTags}
            />
          </div>
        </div>
      </section>
      </div>

      <style jsx global>{`
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #451a03;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .article-content h3 {
          font-size: 1.35rem;
          font-weight: 600;
          color: #78350f;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .article-content p {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .article-content ul,
        .article-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
          color: #4b5563;
        }

        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }

        .article-content blockquote {
          border-left: 4px solid #ea580c;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #78350f;
          background: #fff7ed;
          padding: 1.5rem;
          border-radius: 0 1rem 1rem 0;
        }

        .article-content img {
          border-radius: 1rem;
          margin: 1.5rem 0;
        }

        .article-content a {
          color: #ea580c;
          text-decoration: underline;
        }

        .article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }

        .article-content th,
        .article-content td {
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          text-align: left;
        }

        .article-content th {
          background: #fff7ed;
          font-weight: 600;
          color: #78350f;
        }
      `}</style>
    </div>
  );
}
