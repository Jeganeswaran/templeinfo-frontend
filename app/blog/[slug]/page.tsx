"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articleService } from "@/services";
import { Article } from "@/data/types";
import { format } from "date-fns";
import { BlogCard } from "@/components/blog";

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      setLoading(true);
      const articleData = await articleService.getById(slug);
      if (articleData) {
        setArticle(articleData);
        const related = await articleService.getRelated(slug, 3);
        setRelatedArticles(related);
      }
      setLoading(false);
    }
    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">கட்டுரை கிடைக்கவில்லை</h1>
          <p className="text-gray-600 mb-6">நீங்கள் தேடும் கட்டுரை கிடைக்கவில்லை</p>
          <Link href="/blog" className="text-orange-600 hover:underline">
            ← அனைத்து கட்டுரைகளுக்கும் திரும்பு
          </Link>
        </div>
      </div>
    );
  }

  const authorColorMap: Record<string, string> = {
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    amber: "bg-amber-100 text-amber-600",
  };

  const authorColors =
    authorColorMap[article.author.color] || "bg-gray-100 text-gray-600";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-600">முகப்பு</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange-600">கட்டுரைகள்</Link>
            <span>/</span>
            <span className="text-gray-700">{article.category.name}</span>
          </nav>

          {/* Category Badge */}
          <span className={`inline-block px-3 py-1 ${article.category.bgColor} ${article.category.color} text-sm rounded-full mb-4`}>
            {article.category.nameTamil}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 ${authorColors} rounded-full flex items-center justify-center text-sm font-bold`}>
                {article.author.initial}
              </div>
              <span>{article.author.name}</span>
            </div>
            <span>•</span>
            <span>{format(new Date(article.publishedAt), "MMMM d, yyyy")}</span>
            <span>•</span>
            <span>{article.readTime} min read</span>
            {article.views && (
              <>
                <span>•</span>
                <span>{article.views.toLocaleString()} views</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {article.description}
          </p>

          {article.content ? (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          ) : (
            <div className="space-y-6 text-gray-700">
              <p>
                இந்த கட்டுரை {article.category.nameTamil} பிரிவின் கீழ் வருகிறது.
                இது தமிழ்நாட்டின் புகழ்பெற்ற கோவில்கள் மற்றும் ஆன்மீக தலங்கள் பற்றிய
                முழுமையான தகவல்களை வழங்குகிறது.
              </p>
              <p>
                நாம் இந்த கட்டுரையில் வரலாறு, கட்டிடக்கலை, புராண பின்னணி,
                திருவிழாக்கள் மற்றும் பயண குறிப்புகள் பற்றி விரிவாக காண்போம்.
              </p>
              <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">வரலாற்று பின்னணி</h2>
              <p>
                தமிழ்நாட்டின் கோவில்கள் ஆயிரக்கணக்கான ஆண்டுகால வரலாற்றைக் கொண்டவை.
                சோழர், பாண்டியர், பல்லவர் மற்றும் நாயக்கர் காலங்களில் கட்டப்பட்ட
                இந்த கோவில்கள் கட்டிடக்கலையின் உச்சமாக விளங்குகின்றன.
              </p>
              <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">கட்டிடக்கலை சிறப்புகள்</h2>
              <p>
                திராவிட கட்டிடக்கலையின் தனித்துவமான அம்சங்களான கோபுரங்கள்,
                மண்டபங்கள், விமானங்கள் மற்றும் பிரகாரங்கள் பற்றி அறிந்து கொள்வோம்.
              </p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Box */}
        <div className="mt-8 p-6 bg-amber-50 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 ${authorColors} rounded-full flex items-center justify-center text-2xl font-bold`}>
              {article.author.initial}
            </div>
            <div>
              <h3 className="font-bold text-amber-900">{article.author.name}</h3>
              {article.author.role && (
                <p className="text-sm text-gray-600">{article.author.role}</p>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-8">தொடர்புடைய கட்டுரைகள்</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <BlogCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
