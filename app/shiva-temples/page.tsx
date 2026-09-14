"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { temples as allTemples } from "@/data/temples";
import { Temple } from "@/data/types";
import { TempleHero, TempleGrid } from "@/components/temples";
import { Pagination } from "@/components/blog";

const PAGE_SIZE = 12;

function ShivaTemplesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [temples, setTemples] = useState<Temple[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const loadData = useCallback(() => {
    setLoading(true);

    // Filter temples directly instead of using the service
    let filtered = allTemples.filter(t => t.category === "shiva");

    // Apply search if provided
    if (searchValue) {
      const search = searchValue.toLowerCase();
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(search) ||
        t.nameTamil.toLowerCase().includes(search) ||
        t.location.toLowerCase().includes(search)
      );
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedData = filtered.slice(startIndex, startIndex + PAGE_SIZE);

    setTemples(paginatedData);
    setTotalCount(total);
    setTotalPages(totalPages);
    setLoading(false);
  }, [searchValue, currentPage]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const updateUrl = useCallback(
    (params: Record<string, string | null>) => {
      const newParams = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === "") {
          newParams.delete(key);
        } else {
          newParams.set(key, value);
        }
      });

      const queryString = newParams.toString();
      router.push(queryString ? `/shiva-temples?${queryString}` : "/shiva-temples", {
        scroll: false,
      });
    },
    [router, searchParams]
  );

  const handleSearch = () => {
    setCurrentPage(1);
    updateUrl({ search: searchValue, page: null });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <TempleHero
        title="Shiva Temples"
        titleTamil="சிவன் கோவில்கள்"
        subtitle="Lord Shiva Temples"
        description="தமிழ்நாட்டின் புகழ்பெற்ற சிவன் கோவில்கள், பஞ்ச பூத ஸ்தலங்கள், பாடல் பெற்ற ஸ்தலங்கள் மற்றும் பல புனித சிவத்தலங்கள்"
        emoji="🕉️"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-amber-900">{totalCount}</span> கோவில்கள் கிடைத்தன
            </p>
          </div>

          <TempleGrid temples={temples} loading={loading} />

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ShivaTemplesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div></div>}>
      <ShivaTemplesContent />
    </Suspense>
  );
}
