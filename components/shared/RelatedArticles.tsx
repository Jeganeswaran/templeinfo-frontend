import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/types";

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
  maxItems?: number;
  className?: string;
}

export default function RelatedArticles({
  articles,
  title = "Related Articles",
  maxItems = 2,
  className = "",
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold text-amber-900 mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {articles.slice(0, maxItems).map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.id}`}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition border border-amber-100 group"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-orange-600 font-semibold">
                {article.category.name}
              </span>
              <h4 className="font-bold text-amber-900 mt-2 group-hover:text-orange-600 transition line-clamp-2">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500 mt-2">{article.readTime} min read</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
