import Image from "next/image";

import type { Temple } from "@/types/temple-search.types";

interface Props {
  temple: Temple;
}

export function TempleImage({ temple }: Props) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-muted">

      <Image
        src={temple.image}
        alt={temple.name}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />

      {temple.featured && (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur">
          Featured
        </span>
      )}
    </div>
  );
}