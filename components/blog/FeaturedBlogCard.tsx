import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/types";
import { format } from "date-fns";

interface FeaturedBlogCardProps {
  article: Article;
}

export default function FeaturedBlogCard({ article }: FeaturedBlogCardProps) {
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
    <Link
      href={`/blog/${article.id}`}
      className="block bg-white rounded-3xl overflow-hidden shadow-lg border border-amber-100 mb-8 group"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-semibold">
              Featured
            </span>
            <span
              className={`px-3 py-1 ${article.category.bgColor} ${article.category.color} text-xs rounded-full`}
            >
              {article.category.name}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 group-hover:text-orange-600 transition">
            {article.title}
          </h2>
          <p className="text-gray-600 mt-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 ${authorColors} rounded-full flex items-center justify-center font-bold`}
              >
                {article.author.initial}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {article.author.name}
                </p>
                <p className="text-xs text-gray-500">{article.author.role}</p>
              </div>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              {format(new Date(article.publishedAt), "MMMM d, yyyy")}
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              {article.readTime} min read
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
