import Image from "next/image";
import SearchBar from "@/components/home/SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1544588440-fc7551331160"
        alt="Sacred temple heritage"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />

      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-100">
            TempleDetails
          </span>
          <h1 className="mt-8 font-black leading-tight text-white text-5xl md:text-7xl">
            Tamil Nadu Sacred Heritage
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/90">
            Discover temples, festivals, districts, and devotional journeys.
          </p>

          <div className="mt-10">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}