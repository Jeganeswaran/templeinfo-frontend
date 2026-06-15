import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/types";
import { format } from "date-fns";

interface BlogCardProps {
  article: Article;
}

export default function BlogCard({ article }: BlogCardProps) {
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
      className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition border border-orange-100 group block"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-2 py-1 ${article.category.bgColor} ${article.category.color} text-xs rounded-full`}
          >
            {article.category.name}
          </span>
        </div>
        <h3 className="font-bold text-lg text-amber-900 group-hover:text-orange-600 transition line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {article.description}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 ${authorColors} rounded-full flex items-center justify-center text-sm font-bold`}
            >
              {article.author.initial}
            </div>
            <span className="text-sm text-gray-600">{article.author.name}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{format(new Date(article.publishedAt), "MMM d, yyyy")}</span>
            <span>•</span>
            <span>{article.readTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
