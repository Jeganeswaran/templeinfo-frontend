import Image from "next/image";
import Link from "next/link";
import { Article, ArticleCategory } from "@/data/types";

interface BlogSidebarProps {
  categories: ArticleCategory[];
  popularPosts: Article[];
  recentPosts: Article[];
  popularTags: string[];
}

export default function BlogSidebar({
  categories,
  popularPosts,
  recentPosts,
  popularTags,
}: BlogSidebarProps) {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-28 space-y-6">
        {/* Google Ads Placeholder */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Google Ads (300x250)</span>
          </div>
          <div className="mt-2 bg-gray-200 h-[250px] rounded-lg flex items-center justify-center text-gray-500 text-xs">
            Advertisement
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
          <h3 className="font-bold text-lg text-amber-900 mb-4">Categories</h3>
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/blog?category=${category.id}`}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-orange-50 transition"
                >
                  <span className="text-gray-700">{category.name}</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Posts */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
          <h3 className="font-bold text-lg text-amber-900 mb-4">
            Popular Posts
          </h3>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="flex gap-3 group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-amber-900 group-hover:text-orange-600 transition line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {post.views?.toLocaleString()} views
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
          <h3 className="font-bold text-lg text-amber-900 mb-4">
            Recent Posts
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block group"
              >
                <h4 className="font-semibold text-sm text-amber-900 group-hover:text-orange-600 transition">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-2">Newsletter</h3>
          <p className="text-white/90 text-sm mb-4">
            புதிய கட்டுரைகள் மற்றும் கோவில் தகவல்களை பெற பதிவு செய்யுங்கள்
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="உங்கள் மின்னஞ்சல்"
              className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="w-full bg-white text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-50 transition">
              Subscribe
            </button>
          </div>
          <p className="text-white/70 text-xs mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        {/* Google Ads Placeholder */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Google Ads (300x600)</span>
          </div>
          <div className="mt-2 bg-gray-200 h-[300px] rounded-lg flex items-center justify-center text-gray-500 text-xs">
            Advertisement
          </div>
        </div>

        {/* Popular Tags */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
          <h3 className="font-bold text-lg text-amber-900 mb-4">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag.toLowerCase()}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-700 transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
