"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { templeService } from "@/services";
import { Temple } from "@/data/types";
import { District } from "@/data/districts";
import { TempleHero, TempleGrid } from "@/components/temples";
import { Pagination } from "@/components/blog";

const PAGE_SIZE = 12;

export default function DistrictTemplesPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = params.slug as string;

  const [district, setDistrict] = useState<District | null>(null);
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

    const districtData = await templeService.getDistrictById(slug);
    setDistrict(districtData);

    if (districtData) {
      const result = await templeService.getPaginated({
        district: slug,
        search: searchValue || undefined,
        page: currentPage,
        pageSize: PAGE_SIZE,
      });

      setTemples(result.data);
      setTotalCount(result.total);
      setTotalPages(result.totalPages);
    }
    setLoading(false);
  }, [slug, searchValue, currentPage]);

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
      router.push(queryString ? `/district/${slug}?${queryString}` : `/district/${slug}`, {
        scroll: false,
      });
    },
    [router, searchParams, slug]
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

  if (!loading && !district) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-6xl mb-4">📍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">மாவட்டம் கிடைக்கவில்லை</h1>
          <p className="text-gray-600 mb-6">நீங்கள் தேடும் மாவட்டம் கிடைக்கவில்லை</p>
          <Link href="/" className="text-orange-600 hover:underline">
            ← முகப்புக்கு திரும்பு
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <TempleHero
        title={district?.name || "District"}
        titleTamil={district?.nameTamil || "மாவட்டம்"}
        subtitle={`${district?.state || "Tamil Nadu"} Temples`}
        description={district?.descriptionTamil}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
      />

      {/* District Info */}
      {district && (
        <section className="py-8 bg-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">{district.templeCount}+</p>
                  <p className="text-gray-600">கோவில்கள்</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-amber-900">{district.name}</p>
                  <p className="text-gray-600">{district.state}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">{district.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-600">முகப்பு</Link>
            <span>/</span>
            <span className="text-gray-700">{district?.nameTamil}</span>
          </nav>

          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-amber-900">{totalCount}</span> கோவில்கள் கிடைத்தன
            </p>
          </div>

          <TempleGrid temples={temples} loading={loading} emptyMessage={`No temples found in ${district?.name || "this district"}`} />

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
