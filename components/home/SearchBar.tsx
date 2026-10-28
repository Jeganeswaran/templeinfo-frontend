"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { sampleTemples } from "@/lib/sampleTemples";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return sampleTemples.slice(0, 4);
    }

    return sampleTemples.filter((temple) =>
      [temple.name, temple.deity, temple.district, temple.state, temple.location]
        .some((field) => field.toLowerCase().includes(normalized))
    );
  }, [query]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-[2rem] border border-white/50 bg-white/95 p-2 shadow-2xl backdrop-blur md:flex-row">
        <div className="relative flex-1">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-600" />
          <input
            className="w-full rounded-[1.3rem] border border-orange-100 bg-white px-12 py-4 text-sm font-medium outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            placeholder="Search by temple name, deity, district, or location"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Link
          href={query ? `/search?q=${encodeURIComponent(query)}` : "/search"}
          className="inline-flex items-center justify-center rounded-[1.3rem] bg-orange-600 px-8 py-4 font-black text-white transition hover:bg-orange-700"
        >
          Search
        </Link>
      </form>

      {query && (
        <div className="mt-4 rounded-2xl border border-white/70 bg-white/95 p-4 text-left shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-700">
              Search Preview
            </span>
            <span className="text-xs text-gray-500">
              {matches.length} result{matches.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {matches.length > 0 ? (
              matches.map((temple) => (
                <Link key={temple.id} href={`/temple/${temple.id}`} className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-orange-50">
                  <span className="text-sm font-bold text-amber-950">{temple.name}</span>
                  <span className="text-xs text-gray-500">{temple.district}</span>
                </Link>
              ))
            ) : (
              <span className="text-sm text-gray-500">No temples found</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
