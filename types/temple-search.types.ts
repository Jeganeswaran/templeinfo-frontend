import type { Article, Temple } from "@/data/types";

export type { Temple };

export type SearchTab = "temples" | "articles";
export type ViewMode = "grid" | "list";
export type SortBy = "popular" | "rating" | "nearest" | "recent";

export interface FilterState {
  state: string;
  city: string;
  deities: string[];
  categories: string[];
  era: string;
}

export interface Deity {
  emoji: string;
  name: string;
}

export const EMPTY_FILTERS: FilterState = {
  state: "",
  city: "",
  deities: [],
  categories: [],
  era: "",
};

export interface UseTempleSearchResult {
  query: string;                                  // read-only, from URL
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  clearFilters: () => void;
  temples: Temple[];
  articles: Article[];
  loading: boolean;
  performSearch: (q: string) => void;
}