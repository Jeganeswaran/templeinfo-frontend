import Link from "next/link";
import Image from "next/image";
import { sampleTemples } from "@/lib/sampleTemples";

export default function SampleTempleListings() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-700">
              Sacred Discoveries
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-amber-950">
              Sample Temple Listings
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-600">
              Discover iconic Tamil heritage sites across major districts and sacred landscapes.
            </p>
          </div>
          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-400 px-6 py-3 font-bold text-orange-700 transition hover:bg-orange-600 hover:text-white"
          >
            Explore All Temples
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sampleTemples.map((temple) => (
            <article key={temple.id} className="group overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={temple.image}
                  alt={temple.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-orange-800 shadow">
                  {temple.deity}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-700">
                  <span>{temple.district}</span>
                  <span className="text-gray-300">•</span>
                  <span>{temple.state}</span>
                </div>
                <h3 className="mt-3 text-xl font-black text-amber-950 leading-tight">
                  {temple.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {temple.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-gray-500">
                    {temple.location}
                  </span>
                  <Link
                    href={`/temple/${temple.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 transition hover:text-orange-900"
                  >
                    Visit
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
