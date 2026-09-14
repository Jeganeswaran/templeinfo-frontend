"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { articleService } from "@/services";
import { Article, ArticleCategory } from "@/data/types";

export default function Articles() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<ArticleCategory[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const [articlesData, categoriesData] = await Promise.all([
        articleService.getLatest(4),
        articleService.getCategories(),
      ]);
      setArticles(articlesData);
      setCategories(categoriesData.slice(0, 3));
    };
    loadData();
  }, []);

  const tags = [
    { label: "All", id: null },
    ...categories.map((c) => ({ label: c.name, id: c.id })),
  ];

  const filteredArticles = activeTag
    ? articles.filter((a) => a.category.id === activeTag)
    : articles;

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <span className="text-orange-600 uppercase tracking-widest text-sm">
              Temple Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
              கோவில் கட்டுரைகள்
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mt-5 rounded-full"></div>
          </div>
          <Link
            href="/blog"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
          >
            View All →
          </Link>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => setActiveTag(tag.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTag === tag.id
                  ? "bg-orange-600 text-white"
                  : "bg-white border text-gray-700 hover:bg-orange-50"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
              >
                <Link
                  href={`/blog/${article.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition border block"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className={`text-xs font-semibold ${article.category.color}`}
                    >
                      {article.category.name}
                    </span>
                    <h3 className="font-bold text-lg text-amber-900 mt-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {article.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
