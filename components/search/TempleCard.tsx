import Link from "next/link";
import {
  FiMapPin,
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";


import { TempleImage } from "./TempleImage";
import { TempleInfo } from "./TempleInfo";

import type { Temple } from "@/types/temple-search.types";

interface Props {
  temple: Temple;
}

export function TempleCard({ temple }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg">

      <div className="relative">
        <TempleImage temple={temple} />

        <button
          type="button"
          aria-label="Add to favorites"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur"
        >
          <FiHeart  className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">

        <TempleInfo temple={temple} />

        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <FiMapPin  className="h-3.5 w-3.5" />
            {temple.district}
          </div>

          <Link
            href={`/temple/${temple.id}`}
            className="flex items-center gap-1 text-sm font-medium"
          >
            Explore
            <FiArrowRight  className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

        </div>
      </div>
    </article>
  );
}