"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { templeService, articleService } from "@/services";
import { Temple, Article } from "@/data/types";
import { BlogCard } from "@/components/blog";
import TempleCard from "@/components/temples/TempleCard";

function FilterSidebar({
  onClose,
  isMobile = false,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) {
  const deities = [
    { emoji: "🕉️", name: "சிவன்" },
    { emoji: "🪷", name: "பெருமாள்" },
    { emoji: "🔱", name: "முருகன்" },
    { emoji: "🌺", name: "அம்மன்" },
    { emoji: "🐘", name: "விநாயகர்" },
  ];

  const categories = [
    "108 Divya Desam",
    "275 Paadal Petra Sthalam",
    "Arupadai Veedu",
    "Pancha Bhoota Sthalam",
    "Navagraha Temples",
  ];

  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-amber-900">வடிகட்டிகள்</h3>
        <button className="text-sm text-orange-600 hover:underline">Clear All</button>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">மாநிலம்</h4>
        <select className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
          <option value="">அனைத்து மாநிலங்கள்</option>
          <option value="tamilnadu">Tamil Nadu</option>
          <option value="kerala">Kerala</option>
          <option value="karnataka">Karnataka</option>
          <option value="andhra">Andhra Pradesh</option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">நகரம்</h4>
        <select className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
          <option value="">அனைத்து நகரங்கள்</option>
          <option value="chennai">Chennai</option>
          <option value="madurai">Madurai</option>
          <option value="trichy">Trichy</option>
          <option value="thanjavur">Thanjavur</option>
          <option value="kanchipuram">Kanchipuram</option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">கடவுள்</h4>
        <div className="space-y-2">
          {deities.map((deity) => (
            <label
              key={deity.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 cursor-pointer transition"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm">
                {deity.emoji} {deity.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">கோவில் வகை</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 cursor-pointer transition"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">வரலாற்று காலம்</h4>
        <select className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
          <option value="">அனைத்து காலங்கள்</option>
          <option value="chola">Chola Period</option>
          <option value="pandya">Pandya Period</option>
          <option value="pallava">Pallava Period</option>
          <option value="vijayanagara">Vijayanagara Period</option>
          <option value="nayak">Nayak Period</option>
        </select>
      </div>

      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition">
        Apply Filters
      </button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h3 className="font-bold text-lg text-amber-900">வடிகட்டிகள்</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">{content}</div>
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
          <button className="flex-1 py-3 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition">
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            Apply Filters
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="bg-white rounded-md shadow-lg border border-border p-6 sticky top-28">
      {content}
    </div>
  );
}

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"temples" | "articles">("temples");
  const [temples, setTemples] = useState<Temple[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <span className="text-orange-600 uppercase tracking-widest text-sm">
              Discover Sacred Temples
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">கோவில் தேடல்</h1>
            <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              தமிழ்நாட்டின் ஆயிரக்கணக்கான புனித கோவில்களை கண்டறியுங்கள்
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-10 bg-white rounded-2xl p-3 max-w-4xl mx-auto flex shadow-lg border border-border">
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
                placeholder="கோவில் பெயர், மாவட்டம், கடவுள்..."
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
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Filter Sidebar (Desktop) */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <FilterSidebar />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded shadow border border-border p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-orange-50 transition"
                >
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
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filters
                </button>

                {/* Tabs */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("temples")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                      activeTab === "temples"
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    கோவில்கள் ({temples.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("articles")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                      activeTab === "articles"
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    கட்டுரைகள் ({articles.length})
                  </button>
                </div>

                {/* Results Count */}
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-amber-900">{totalResults}</span> முடிவுகள்
                  கிடைத்தன
                </div>

                {/* Sort & View Toggle */}
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-border rounded-xl text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="nearest">Nearest</option>
                    <option value="recent">Recently Added</option>
                  </select>

                  {/* View Toggle */}
                  <div className="hidden sm:flex border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 transition ${
                        viewMode === "grid" ? "bg-orange-600 text-white" : "hover:bg-gray-100"
                      }`}
                    >
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
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 transition ${
                        viewMode === "list" ? "bg-orange-600 text-white" : "hover:bg-gray-100"
                      }`}
                    >
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
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {initialQuery && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    &quot;{initialQuery}&quot;
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        router.push("/search");
                      }}
                      className="hover:text-orange-600"
                    >
                      ×
                    </button>
                  </span>
                </div>
              )}

              {/* Content */}
              {loading ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-3xl overflow-hidden shadow border border-orange-100"
                    >
                      <div className="h-48 w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
                      <div className="p-5">
                        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-3" />
                        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-2" />
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : !initialQuery ? (
                /* No search yet - show empty state */
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🕉️</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    கோவில்களை தேடுங்கள்
                  </h3>
                  <p className="text-gray-500 mb-6">
                    தேடல் பெட்டியில் கோவில் பெயர், மாவட்டம் அல்லது கடவுள் பெயரை உள்ளிடவும்
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
              ) : totalResults === 0 ? (
                /* No results */
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🕉️</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    கோவில்கள் கிடைக்கவில்லை
                  </h3>
                  <p className="text-gray-500 mb-6">
                    உங்கள் தேடலுக்கு பொருந்தும் கோவில்கள் எதுவும் இல்லை. வேறு வடிகட்டிகளை
                    முயற்சிக்கவும்.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      router.push("/search");
                    }}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : activeTab === "temples" ? (
                /* Temple Results */
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "sm:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {temples.map((temple) => (
                    <TempleCard key={temple.id} temple={temple} viewMode={viewMode} />
                  ))}
                </div>
              ) : (
                /* Article Results */
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalResults > 0 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition disabled:opacity-50"
                    disabled
                  >
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-orange-600 text-white font-semibold">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-orange-50 transition font-semibold">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-orange-50 transition font-semibold">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-orange-50 transition font-semibold">
                    10
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setShowMobileFilters(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <FilterSidebar onClose={() => setShowMobileFilters(false)} isMobile />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
