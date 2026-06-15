"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { templeService } from "@/services";
import { District } from "@/data/districts";

export default function DistrictsPage() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDistricts() {
      const data = await templeService.getAllDistricts();
      setDistricts(data);
      setLoading(false);
    }
    loadDistricts();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Browse by Location
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            மாவட்டங்கள்
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            மாவட்டம் வாரியாக கோவில்களை உலாவுங்கள்
          </p>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-orange-100 animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {districts.map((district) => (
              <Link
                key={district.id}
                href={`/district/${district.id}`}
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-300 transition group"
              >
                <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition">
                  {district.nameTamil}
                </h3>
                <p className="text-sm text-gray-500">{district.name}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{district.state}</span>
                  <span className="text-xs text-orange-600 font-medium">
                    {district.templeCount}+ கோவில்கள்
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
