"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { templeService } from "@/services";
import { Temple } from "@/data/types";
import { TempleHero, TempleGrid } from "@/components/temples";
import { Pagination } from "@/components/blog";
import { templeGroupDetails, navagrahaInfo } from "@/data/temple-groups";

const PAGE_SIZE = 12;
const GROUP_ID = "navagraha-temples";

function NavagrahaTemplesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const groupInfo = templeGroupDetails.find(g => g.id === GROUP_ID);

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

  const loadData = useCallback(async () => {
    setLoading(true);

    const result = await templeService.getPaginated({
      group: GROUP_ID,
      search: searchValue || undefined,
      page: currentPage,
      pageSize: PAGE_SIZE,
    });

    setTemples(result.data);
    setTotalCount(result.total);
    setTotalPages(result.totalPages);
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
      router.push(queryString ? `/navagraha-temples?${queryString}` : "/navagraha-temples", {
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
        title="Navagraha Temples"
        titleTamil="நவகிரக கோவில்கள்"
        subtitle="Nine Planetary Temples"
        description={groupInfo?.descriptionTamil}
        emoji="☀️"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
        bgColor="from-purple-50 to-white"
      />

      {/* Navagraha Info Cards */}
      <section className="py-8 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-purple-900 mb-6 text-center">ஒன்பது கிரகங்களும் அவற்றின் கோவில்களும்</h2>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            {navagrahaInfo.map((graha) => (
              <div
                key={graha.planet}
                className="bg-white rounded-xl p-3 text-center shadow-sm border border-purple-100"
              >
                <div className={`w-10 h-10 ${graha.color} rounded-full mx-auto mb-2`}></div>
                <p className="text-sm font-medium text-gray-800">{graha.planetTamil}</p>
                <p className="text-xs text-gray-500">{graha.planet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <h2 className="text-xl font-bold text-purple-900 mb-3">முக்கியத்துவம்</h2>
            <p className="text-gray-600">{groupInfo?.significanceTamil}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              மொத்தம் <span className="font-semibold text-purple-900">{groupInfo?.totalCount}</span> நவகிரக கோவில்கள் |
              காண்பிக்கப்படுவது: <span className="font-semibold text-purple-900">{totalCount}</span>
            </p>
          </div>

          <TempleGrid temples={temples} loading={loading} emptyMessage="No Navagraha temples found" />

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

export default function NavagrahaTemplesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div></div>}>
      <NavagrahaTemplesContent />
    </Suspense>
  );
}
