"use client";

import { Article, Temple } from "@/data/types";
import { ViewMode } from "@/types/temple-search.types";
import { BlogCard } from "@/components/blog";
import TempleCard from "@/components/temples/TempleCard";

interface TempleListProps {
  mode: "temples" | "articles";
  temples: Temple[];
  articles: Article[];
  viewMode: ViewMode;
}

export function TempleList({
  mode,
  temples,
  articles,
  viewMode,
}: TempleListProps) {
  if (mode === "articles") {
    return (
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${
        viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
      }`}
    >
      {temples.map((temple) => (
        <TempleCard key={temple.id} temple={temple} viewMode={viewMode} />
      ))}
    </div>
  );
}