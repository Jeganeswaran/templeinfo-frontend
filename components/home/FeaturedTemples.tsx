import Link from "next/link";
import { TempleCard } from "../temples";
import { temples } from "@/data/temples";

const featuredTemples = temples.filter((temple) => temple.featured).slice(0, 4);

export default function FeaturedTemples() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-orange-600 uppercase tracking-widest text-sm">
              Featured Temples
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
              சிறப்பு கோவில்கள்
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mt-5 rounded-full"></div>
          </div>
          <Link
            href="/temples"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
          >
            View More Temples →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTemples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      </div>
    </section>
  );
}
