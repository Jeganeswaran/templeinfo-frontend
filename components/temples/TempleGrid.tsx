import { Temple } from "@/data/types";
import TempleCard from "./TempleCard";

interface TempleGridProps {
  temples: Temple[];
  loading?: boolean;
  emptyMessage?: string;
}

export default function TempleGrid({ temples, loading = false, emptyMessage = "No temples found" }: TempleGridProps) {
  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden shadow border border-orange-100 animate-pulse"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-5">
              <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (temples.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🛕</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-500">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {temples.map((temple) => (
        <TempleCard key={temple.id} temple={temple} />
      ))}
    </div>
  );
}
