"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Temple } from "@/data/types";
import type { TempleGroupDetail } from "@/data/temple-groups";
import { TempleHero, TempleGrid } from "@/components/temples";
import { Pagination } from "@/components/blog";

interface PaadalPetraSthalamPageClientProps {
  groupInfo?: TempleGroupDetail;
  temples: Temple[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  searchValue: string;
}

export default function PaadalPetraSthalamPageClient({
  groupInfo,
  temples,
  totalCount,
  totalPages,
  currentPage,
  searchValue: initialSearch,
}: PaadalPetraSthalamPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(initialSearch);

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
      const nextUrl = queryString
        ? `/paadal-petra-sthalam?${queryString}`
        : "/paadal-petra-sthalam";

      router.push(nextUrl, { scroll: false });
    },
    [router, searchParams]
  );

  const handleSearch = () => {
    updateUrl({ search: searchValue || null, page: null });
  };

  const handlePageChange = (nextPage: number) => {
    updateUrl({ page: nextPage.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <TempleHero
        title="275 Paadal Petra Sthalam"
        titleTamil="275 பாடல் பெற்ற ஸ்தலங்கள்"
        subtitle="Temples Praised by Nayanmars"
        description={groupInfo?.descriptionTamil}
        emoji="🕉️"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
        bgColor="from-blue-50 to-white"
      />

      <section className="py-8 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">தேவாரம்</h3>
              <p className="text-sm text-gray-600">
                திருஞானசம்பந்தர், திருநாவுக்கரசர், சுந்தரர் ஆகிய மூவரால் பாடப்பெற்ற புனித பாடல்கள்
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">63 நாயன்மார்கள்</h3>
              <p className="text-sm text-gray-600">
                சிவபெருமானின் பக்தர்களாக விளங்கிய 63 நாயன்மார்களால் போற்றப்பட்ட புனித தலங்கள்
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">சைவ சிந்தாந்தம்</h3>
              <p className="text-sm text-gray-600">
                தமிழ் சைவ மரபின் மிக முக்கியமான புனித தலங்களாக கருதப்படும் 275 கோவில்கள்
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-3">முக்கியத்துவம்</h2>
            <p className="text-gray-600">{groupInfo?.significanceTamil}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              மொத்தம் <span className="font-semibold text-blue-900">{groupInfo?.totalCount}</span> ஸ்தலங்கள் |
              காண்பிக்கப்படுவது: <span className="font-semibold text-blue-900">{totalCount}</span>
            </p>
          </div>

          <TempleGrid temples={temples} emptyMessage="No Paadal Petra Sthalam temples found" />

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
