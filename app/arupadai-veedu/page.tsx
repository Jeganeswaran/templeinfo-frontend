"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { templeService } from "@/services";
import { Temple } from "@/data/types";
import { TempleHero, TempleGrid } from "@/components/temples";
import { Pagination } from "@/components/blog";
import { templeGroupDetails, arupadaiVeeduOrder } from "@/data/temple-groups";

const PAGE_SIZE = 12;
const GROUP_ID = "arupadai-veedu";

function ArupadaiVeeduContent() {
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
      router.push(queryString ? `/arupadai-veedu?${queryString}` : "/arupadai-veedu", {
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
        title="Arupadai Veedu"
        titleTamil="ஆறுபடை வீடுகள்"
        subtitle="Six Abodes of Lord Murugan"
        description={groupInfo?.descriptionTamil}
        emoji="🔱"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
        bgColor="from-red-50 to-white"
      />

      {/* Pilgrimage Order Section */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-red-900 mb-6 text-center">யாத்திரை வரிசை</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {arupadaiVeeduOrder.map((veedu) => (
              <div
                key={veedu.order}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-red-100"
              >
                <div className="w-10 h-10 bg-red-100 text-red-700 rounded-full mx-auto mb-2 flex items-center justify-center font-bold">
                  {veedu.order}
                </div>
                <p className="text-sm font-medium text-gray-800">{veedu.nameTamil}</p>
                <p className="text-xs text-gray-500 mt-1">{veedu.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <h2 className="text-xl font-bold text-red-900 mb-3">முக்கியத்துவம்</h2>
            <p className="text-gray-600">{groupInfo?.significanceTamil}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              மொத்தம் <span className="font-semibold text-red-900">{groupInfo?.totalCount}</span> படை வீடுகள் |
              காண்பிக்கப்படுவது: <span className="font-semibold text-red-900">{totalCount}</span>
            </p>
          </div>

          <TempleGrid temples={temples} loading={loading} emptyMessage="No Arupadai Veedu temples found" />

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

export default function ArupadaiVeeduPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div></div>}>
      <ArupadaiVeeduContent />
    </Suspense>
  );
}
