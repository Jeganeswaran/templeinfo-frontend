"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useTempleSearch } from "@/hooks/useTempleSearch";
import { SearchTab, ViewMode, SortBy } from "@/types/temple-search.types";
import { SearchHeader } from "@/components/search/SearchHeader";
import { SearchFilters } from "@/components/search/SearchFilters";
import { SearchToolbar } from "@/components/search/SearchToolbar";
import { SearchLoading } from "@/components/search/SearchLoading";
import { EmptySearch } from "@/components/search/EmptySearch";
import { MobileFilterDrawer } from "@/components/search/MobileFilterDrawer";
import { TempleList } from "@/components/search/TempleList";

export function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("q") || "";

  const {
    query,
    filters,
    setFilters,
    clearFilters,
    temples,
    articles,
    loading,
    performSearch,
  } = useTempleSearch();

  const [activeTab, setActiveTab] = useState<SearchTab>("temples");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortBy>("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const totalResults = temples.length + articles.length;

  const clearSearch = () => {
    performSearch("");
    router.push("/search");
  };

  return (
    <div className="min-h-screen">
      <SearchHeader initialQuery={initialQuery} onSearch={performSearch} />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Desktop filters */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="bg-white rounded-md shadow-lg border border-border p-6 sticky top-28">
                <SearchFilters
                  filters={filters}
                  onChange={setFilters}
                  onClear={clearFilters}
                />
              </div>
            </aside>

            <div className="flex-1">
              <SearchToolbar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                templeCount={temples.length}
                articleCount={articles.length}
                totalResults={totalResults}
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewMode={viewMode}
                onViewChange={setViewMode}
                onOpenFilters={() => setShowMobileFilters(true)}
              />

              {/* Active query chip */}
              {initialQuery && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    &quot;{initialQuery}&quot;
                    <button
                      onClick={clearSearch}
                      className="hover:text-orange-600"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  </span>
                </div>
              )}

              {loading ? (
                <SearchLoading />
              ) : !initialQuery ? (
                <EmptySearch variant="no-query" onClear={clearSearch} />
              ) : totalResults === 0 ? (
                <EmptySearch variant="no-results" onClear={clearSearch} />
              ) : (
                <TempleList
                  mode={activeTab}
                  temples={temples}
                  articles={articles}
                  viewMode={viewMode}
                />
              )}

              {totalResults > 0 && (
                <Pagination />
              )}
            </div>
          </div>
        </div>
      </section>

      <MobileFilterDrawer
        open={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        filters={filters}
        onChange={setFilters}
        onClear={clearFilters}
      />
    </div>
  );
}

function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition disabled:opacity-50"
        disabled
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}