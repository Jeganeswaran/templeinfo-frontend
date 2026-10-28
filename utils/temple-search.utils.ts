import { FilterState } from "@/types/temple-search.types";

export function encodeQuery(q: string): string {
  return encodeURIComponent(q.trim());
}

export function buildSearchUrl(q: string): string {
  const trimmed = q.trim();
  return trimmed ? `/search?q=${encodeQuery(trimmed)}` : "/search";
}

export function hasActiveFilters(f: FilterState): boolean {
  return Boolean(
    f.state ||
      f.city ||
      f.era ||
      f.deities.length ||
      f.categories.length
  );
}