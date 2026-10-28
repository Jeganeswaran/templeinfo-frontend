"use client";

import { FilterState } from "@/types/temple-search.types";
import {
  CATEGORIES,
  CITIES,
  DEITIES,
  ERAS,
  STATES,
} from "@/data/temple-search.data";

interface SearchFiltersProps {
  filters: FilterState;
  onChange: React.Dispatch<React.SetStateAction<FilterState>>;
  onClear: () => void;
  onApply?: () => void;
}

export function SearchFilters({
  filters,
  onChange,
  onClear,
  onApply,
}: SearchFiltersProps) {
  const toggleArray = (key: "deities" | "categories", value: string) => {
    onChange((prev) => {
      const has = prev[key].includes(value);
      return {
        ...prev,
        [key]: has
          ? prev[key].filter((v) => v !== value)
          : [...prev[key], value],
      };
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-amber-900">வடிகட்டிகள்</h3>
        <button
          onClick={onClear}
          className="text-sm text-orange-600 hover:underline"
        >
          Clear All
        </button>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">மாநிலம்</h4>
        <select
          value={filters.state}
          onChange={(e) =>
            onChange((p) => ({ ...p, state: e.target.value }))
          }
          className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
        >
          <option value="">அனைத்து மாநிலங்கள்</option>
          {STATES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">நகரம்</h4>
        <select
          value={filters.city}
          onChange={(e) =>
            onChange((p) => ({ ...p, city: e.target.value }))
          }
          className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
        >
          <option value="">அனைத்து நகரங்கள்</option>
          {CITIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">கடவுள்</h4>
        <div className="space-y-2">
          {DEITIES.map((deity) => (
            <label
              key={deity.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 cursor-pointer transition"
            >
              <input
                type="checkbox"
                checked={filters.deities.includes(deity.name)}
                onChange={() => toggleArray("deities", deity.name)}
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm">
                {deity.emoji} {deity.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">கோவில் வகை</h4>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 cursor-pointer transition"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => toggleArray("categories", category)}
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">வரலாற்று காலம்</h4>
        <select
          value={filters.era}
          onChange={(e) => onChange((p) => ({ ...p, era: e.target.value }))}
          className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
        >
          <option value="">அனைத்து காலங்கள்</option>
          {ERAS.map((era) => (
            <option key={era.value} value={era.value}>
              {era.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onApply}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Apply Filters
      </button>
    </div>
  );
}