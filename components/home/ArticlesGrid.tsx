import Image from "next/image";
import Link from "next/link";
import { articleService } from "@/services";

export default async function ArticlesGrid() {
  const articles = await articleService.getLatest(4);

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-orange-600 uppercase tracking-widest text-sm">
              Temple Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
              கோவில் கட்டுரைகள்
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mt-5 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              தமிழக கோவில்களின் வரலாறு, ஆன்மீக முக்கியத்துவம் மற்றும் பயண
              வழிகாட்டிகள்.
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
          >
            View All Blogs →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition border"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-amber-900">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
