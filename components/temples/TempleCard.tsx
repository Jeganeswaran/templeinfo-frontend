import Image from "next/image";
import Link from "next/link";
import { Temple } from "@/data/types";

interface TempleCardProps {
  temple: Temple;
  viewMode?: "grid" | "list";
}

export default function TempleCard({
  temple,
  viewMode = "grid",
}: TempleCardProps) {
  if (viewMode === "grid") {
    return (
      <Link
        href={`/temple/${temple.id}`}
        className="bg-white rounded rounded-t-md overflow-hidden shadow hover:shadow-xl transition border border-border group block"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={temple.image}
            alt={temple.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          {temple.element && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm flex items-center gap-1">
              <span>{temple.element.emoji}</span>
              <span className={temple.element.color}>
                {temple.element.name}
              </span>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg text-amber-900 group-hover:text-orange-600 transition line-clamp-1">
            {temple.nameTamil}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{temple.name}</p>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{temple.locationTamil}</span>
          </div>
          <p className="text-xs text-gray-500 mt-3 line-clamp-2">
            {temple.descriptionTamil}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-orange-600 font-medium">
              {temple.deityTamil}
            </span>
            <span className="text-xs text-gray-400">View Details →</span>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        href={`/temple/${temple.id}`}
        className="bg-white rounded rounded-s-md overflow-hidden shadow hover:shadow-xl transition border border-border"
      >
        <div className="flex group">
          <div className="relative w-1/3 min-h-48 overflow-hidden">
            <Image
              src={temple.image}
              alt={temple.name}
              fill
              className="group-hover:scale-105 transition duration-500"
            />
            {temple.element && (
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm flex items-center gap-1">
                <span>{temple.element.emoji}</span>
                <span className={temple.element.color}>
                  {temple.element.name}
                </span>
              </div>
            )}
          </div>
          <div className="p-5 w-2/3">
            <h3 className="font-bold text-lg text-amber-900 group-hover:text-orange-600 transition line-clamp-1">
              {temple.nameTamil}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{temple.name}</p>
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{temple.locationTamil}</span>
            </div>
            <p className="text-xs text-gray-500 mt-3 line-clamp-2">
              {temple.descriptionTamil}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-orange-600 font-medium">
                {temple.deityTamil}
              </span>
              <span className="text-xs text-gray-400">View Details →</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
