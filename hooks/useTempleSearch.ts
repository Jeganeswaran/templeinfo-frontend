"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { templeService, articleService } from "@/services";
import { Temple, Article } from "@/data/types";
import {
  EMPTY_FILTERS,
  FilterState,
  UseTempleSearchResult,
} from "@/types/temple-search.types";
import { buildSearchUrl } from "@/utils/temple-search.utils";

export function useTempleSearch(): UseTempleSearchResult {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";   // ← source of truth, no state

  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const [temples, setTemples] = useState<Temple[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const performSearch = useCallback(async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) {
      setTemples([]);
      setArticles([]);
      return;
    }

    setLoading(true);
    try {
      const [templeResults, articleResults] = await Promise.all([
        templeService.search(trimmed),
        articleService.search(trimmed),
      ]);
      setTemples(templeResults);
      setArticles(articleResults);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch when the URL query changes — this IS an effect because it
  // synchronizes with an external system (the network), not internal state.
  useEffect(() => {
    if (!query) return;

    let ignore = false;

    const fetchResults = async () => {
      setLoading(true);

      try {
        const [templeResults, articleResults] = await Promise.all([
          templeService.search(query),
          articleService.search(query),
        ]);

        if (ignore) return;

        setTemples(templeResults);
        setArticles(articleResults);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchResults();

    return () => {
      ignore = true;
    };
  }, [query]);

  const handleSearch = useCallback(
    (q: string) => {
      const trimmed = q.trim();
      if (!trimmed) return;
      router.push(buildSearchUrl(trimmed));
    },
    [router]
  );

  const clearFilters = useCallback(() => {
    setFilters(EMPTY_FILTERS);
  }, []);

  return {
    query,
    filters,
    setFilters,
    clearFilters,
    temples,
    articles,
    loading,
    performSearch: handleSearch,
  };
}