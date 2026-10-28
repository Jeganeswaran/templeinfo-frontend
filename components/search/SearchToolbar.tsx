"use client";

import { SearchTab, SortBy, ViewMode } from "@/types/temple-search.types";
import { SORT_OPTIONS } from "@/data/temple-search.data";

interface SearchToolbarProps {
  activeTab: SearchTab;
  onTabChange: (tab: SearchTab) => void;
  templeCount: number;
  articleCount: number;
  totalResults: number;
  sortBy: SortBy;
  onSortChange: (s: SortBy) => void;
  viewMode: ViewMode;
  onViewChange: (v: ViewMode) => void;
  onOpenFilters: () => void;
}

export function SearchToolbar({
  activeTab,
  onTabChange,
  templeCount,
  articleCount,
  totalResults,
  sortBy,
  onSortChange,
  viewMode,
  onViewChange,
  onOpenFilters,
}: SearchToolbarProps) {
  return (
    <div className="bg-white rounded shadow border border-border p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
      <button
        onClick={onOpenFilters}
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

      <div className="flex gap-2">
        <button
          onClick={() => onTabChange("temples")}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            activeTab === "temples"
              ? "bg-orange-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          கோவில்கள் ({templeCount})
        </button>
        <button
          onClick={() => onTabChange("articles")}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            activeTab === "articles"
              ? "bg-orange-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          கட்டுரைகள் ({articleCount})
        </button>
      </div>

      <div className="text-sm text-gray-600">
        <span className="font-semibold text-amber-900">{totalResults}</span>{" "}
        முடிவுகள் கிடைத்தன
      </div>

      <div className="flex items-center gap-4">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortBy)}
          className="px-4 py-2 border border-border rounded-xl text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
        >
          {SORT_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        <div className="hidden sm:flex border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => onViewChange("grid")}
            className={`p-2 transition ${
              viewMode === "grid" ? "bg-orange-600 text-white" : "hover:bg-gray-100"
            }`}
            aria-label="Grid view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
          <button
            onClick={() => onViewChange("list")}
            className={`p-2 transition ${
              viewMode === "list" ? "bg-orange-600 text-white" : "hover:bg-gray-100"
            }`}
            aria-label="List view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
}