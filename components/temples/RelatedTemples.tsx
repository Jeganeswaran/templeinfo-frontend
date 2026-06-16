import { Temple } from "@/data/types";
import TempleCard from "./TempleCard";

interface RelatedTemplesProps {
  temples: Temple[];
  title?: string;
  className?: string;
}

export default function RelatedTemples({
  temples,
  title = "தொடர்புடைய கோவில்கள்",
  className = "",
}: RelatedTemplesProps) {
  if (temples.length === 0) return null;

  return (
    <section className={`bg-gray-50 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-amber-900 mb-8">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {temples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      </div>
    </section>
  );
}
