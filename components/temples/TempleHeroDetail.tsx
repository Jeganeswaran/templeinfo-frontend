import Image from "next/image";
import Link from "next/link";
import { Temple } from "@/data/types";
import { Breadcrumb, BreadcrumbItem } from "@/components/shared";

interface TempleHeroDetailProps {
  temple: Temple;
  deityCategory?: {
    nameTamil: string;
  } | null;
}

export default function TempleHeroDetail({ temple, deityCategory }: TempleHeroDetailProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "முகப்பு", href: "/" },
  ];

  if (deityCategory) {
    breadcrumbs.push({
      label: deityCategory.nameTamil,
      href: `/${temple.category}-temples`,
    });
  }

  breadcrumbs.push({ label: temple.nameTamil });

  return (
    <section className="relative h-96 md:h-[500px]">
      <Image
        src={temple.image}
        alt={temple.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={breadcrumbs} variant="light" className="mb-4" />

          {temple.element && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full mb-4">
              {temple.element.emoji} {temple.element.name} Element
            </span>
          )}

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {temple.nameTamil}
          </h1>
          <p className="text-xl text-white/90 mb-4">{temple.name}</p>

          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{temple.locationTamil}, {temple.location}</span>
            </div>
            <span>•</span>
            <span>{temple.deityTamil}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
