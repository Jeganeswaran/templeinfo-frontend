"use client";

import Link from "next/link";

interface EmptySearchProps {
  variant: "no-query" | "no-results";
  onClear: () => void;
}

export function EmptySearch({ variant, onClear }: EmptySearchProps) {
  if (variant === "no-query") {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🕉️</div>
        <h3 className="text-xl font-bold text-amber-900 mb-2">
          கோவில்களை தேடுங்கள்
        </h3>
        <p className="text-gray-500 mb-6">
          தேடல் பெட்டியில் கோவில் பெயர், மாவட்டம் அல்லது கடவுள் பெயரை உள்ளிடவும்
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/shiva-temples" className="text-orange-600 hover:underline">
            சிவன் கோவில்கள் →
          </Link>
          <Link href="/vishnu-temples" className="text-orange-600 hover:underline">
            விஷ்ணு கோவில்கள் →
          </Link>
          <Link href="/blog" className="text-orange-600 hover:underline">
            கட்டுரைகள் →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-20">
      <div className="text-6xl mb-4">🕉️</div>
      <h3 className="text-xl font-bold text-amber-900 mb-2">
        கோவில்கள் கிடைக்கவில்லை
      </h3>
      <p className="text-gray-500 mb-6">
        உங்கள் தேடலுக்கு பொருந்தும் கோவில்கள் எதுவும் இல்லை. வேறு வடிகட்டிகளை
        முயற்சிக்கவும்.
      </p>
      <button
        onClick={onClear}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Clear All Filters
      </button>
    </div>
  );
}