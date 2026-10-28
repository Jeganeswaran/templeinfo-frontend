"use client";

import { SearchForm } from "./SearchForm";

interface SearchHeaderProps {
  initialQuery?: string;
  onSearch: (q: string) => void;
}

export function SearchHeader({ initialQuery, onSearch }: SearchHeaderProps) {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Discover Sacred Temples
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            கோவில் தேடல்
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            தமிழ்நாட்டின் ஆயிரக்கணக்கான புனித கோவில்களை கண்டறியுங்கள்
          </p>
        </div>

        <div className="mt-10">
          <SearchForm initialValue={initialQuery} onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}