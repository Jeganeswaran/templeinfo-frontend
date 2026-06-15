"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { templeService } from "@/services";
import { Temple } from "@/data/types";
import { TempleHero, TempleGrid } from "@/components/temples";
import { Pagination } from "@/components/blog";
import { templeGroupDetails, panchaBhootaElements } from "@/data/temple-groups";

const PAGE_SIZE = 12;
const GROUP_ID = "pancha-bootha-sthalam";

function PanchaBhoothaSthalamContent() {
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
      router.push(queryString ? `/pancha-bootha-sthalam?${queryString}` : "/pancha-bootha-sthalam", {
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
        title="Pancha Bhoota Sthalam"
        titleTamil="பஞ்ச பூத ஸ்தலங்கள்"
        subtitle="Five Elemental Temples"
        description={groupInfo?.descriptionTamil}
        emoji="🔥"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
        bgColor="from-green-50 to-white"
      />

      {/* Elements Info Section */}
      <section className="py-8 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-green-900 mb-6 text-center">ஐந்து மூலகங்களும் அவற்றின் கோவில்களும்</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {panchaBhootaElements.map((element) => (
              <div
                key={element.element}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-green-100"
              >
                <div className="text-4xl mb-2">{element.emoji}</div>
                <p className={`text-lg font-bold ${element.color}`}>{element.elementTamil}</p>
                <p className="text-sm text-gray-600 mt-1">{element.element}</p>
                <p className="text-xs text-gray-500 mt-2">{element.temple}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h2 className="text-xl font-bold text-green-900 mb-3">முக்கியத்துவம்</h2>
            <p className="text-gray-600">{groupInfo?.significanceTamil}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              மொத்தம் <span className="font-semibold text-green-900">{groupInfo?.totalCount}</span> ஸ்தலங்கள் |
              காண்பிக்கப்படுவது: <span className="font-semibold text-green-900">{totalCount}</span>
            </p>
          </div>

          <TempleGrid temples={temples} loading={loading} emptyMessage="No Pancha Bhoota Sthalam temples found" />

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

export default function PanchaBhoothaSthalamPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div></div>}>
      <PanchaBhoothaSthalamContent />
    </Suspense>
  );
}
