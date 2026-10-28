"use client";

import { FilterState } from "@/types/temple-search.types";
import { SearchFilters } from "./SearchFilters";

interface MobileFilterDrawerProps {
  open: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: React.Dispatch<React.SetStateAction<FilterState>>;
  onClear: () => void;
}

export function MobileFilterDrawer({
  open,
  onClose,
  filters,
  onChange,
  onClear,
}: MobileFilterDrawerProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50"
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h3 className="font-bold text-lg text-amber-900">வடிகட்டிகள்</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Close filters"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 flex-1">
          <SearchFilters
            filters={filters}
            onChange={onChange}
            onClear={onClear}
            onApply={onClose}
          />
        </div>
      </div>
    </div>
  );
}