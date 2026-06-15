"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { templeService, articleService } from "@/services";
import { Temple, Article } from "@/data/types";
import { TempleCard } from "@/components/temples";
import { BlogCard } from "@/components/blog";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"temples" | "articles">("temples");
  const [temples, setTemples] = useState<Temple[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setTemples([]);
      setArticles([]);
      return;
    }

    setLoading(true);
    const [templeResults, articleResults] = await Promise.all([
      templeService.search(query),
      articleService.search(query),
    ]);
    setTemples(templeResults);
    setArticles(articleResults);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery, performSearch]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      performSearch(searchQuery.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const totalResults = temples.length + articles.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <span className="text-orange-600 uppercase tracking-widest text-sm">
              Search
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
              தேடுங்கள்
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-3 flex shadow-lg border border-amber-100">
            <div className="flex-1 flex items-center gap-3 px-4">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="flex-1 py-3 outline-none text-lg"
                placeholder="கோவில் அல்லது கட்டுரையை தேடுக..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 rounded-xl transition"
            >
              தேடுக
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="text-sm text-gray-500">Popular:</span>
            {["மீனாட்சி", "திருவண்ணாமலை", "ஸ்ரீரங்கம்", "பழனி", "திவ்ய தேசம்"].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setSearchQuery(term);
                  router.push(`/search?q=${encodeURIComponent(term)}`);
                  performSearch(term);
                }}
                className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm hover:bg-amber-200 transition"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">தேடுகிறது...</p>
          </div>
        ) : initialQuery ? (
          <>
            {/* Results Summary */}
            <div className="mb-8">
              <p className="text-gray-600">
                &quot;{initialQuery}&quot; க்கு <span className="font-semibold text-amber-900">{totalResults}</span> முடிவுகள் கிடைத்தன
              </p>
            </div>

            {/* Tabs */}
            {totalResults > 0 && (
              <div className="flex gap-4 mb-8 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("temples")}
                  className={`pb-3 px-2 font-medium transition ${
                    activeTab === "temples"
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  கோவில்கள் ({temples.length})
                </button>
                <button
                  onClick={() => setActiveTab("articles")}
                  className={`pb-3 px-2 font-medium transition ${
                    activeTab === "articles"
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  கட்டுரைகள் ({articles.length})
                </button>
              </div>
            )}

            {/* Results */}
            {totalResults === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  முடிவுகள் கிடைக்கவில்லை
                </h2>
                <p className="text-gray-500 mb-6">
                  வேறு சொற்களைப் பயன்படுத்தி மீண்டும் தேடுங்கள்
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/shiva-temples" className="text-orange-600 hover:underline">
                    சிவன் கோவில்கள் →
                  </Link>
                  <Link href="/vishnu-temples" className="text-orange-600 hover:underline">
                    விஷ்ணு கோவில்கள் →
                  </Link>
                  <Link href="/blog" className="text-orange-600 hover:underline">
                    கட்டுரைகள் →
                  </Link>
                </div>
              </div>
            ) : activeTab === "temples" ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {temples.map((temple) => (
                  <TempleCard key={temple.id} temple={temple} />
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </>
        ) : (
          /* No search yet - show categories */
          <div className="text-center py-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-8">
              அல்லது வகை வாரியாக உலாவுங்கள்
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <Link
                href="/shiva-temples"
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center"
              >
                <div className="text-3xl mb-2">🕉️</div>
                <p className="font-medium text-gray-800">சிவன் கோவில்கள்</p>
              </Link>
              <Link
                href="/vishnu-temples"
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center"
              >
                <div className="text-3xl mb-2">🪷</div>
                <p className="font-medium text-gray-800">விஷ்ணு கோவில்கள்</p>
              </Link>
              <Link
                href="/murugan-temples"
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center"
              >
                <div className="text-3xl mb-2">🔱</div>
                <p className="font-medium text-gray-800">முருகன் கோவில்கள்</p>
              </Link>
              <Link
                href="/amman-temples"
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center"
              >
                <div className="text-3xl mb-2">🌺</div>
                <p className="font-medium text-gray-800">அம்மன் கோவில்கள்</p>
              </Link>
              <Link
                href="/vinayagar-temples"
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center"
              >
                <div className="text-3xl mb-2">🐘</div>
                <p className="font-medium text-gray-800">விநாயகர் கோவில்கள்</p>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div></div>}>
      <SearchContent />
    </Suspense>
  );
}
