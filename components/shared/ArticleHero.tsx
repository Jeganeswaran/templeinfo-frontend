import Image from "next/image";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

interface ArticleHeroProps {
  image: string;
  title: string;
  description?: string;
  categoryName: string;
  categoryNameTamil?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function ArticleHero({
  image,
  title,
  description,
  categoryName,
  categoryNameTamil,
  breadcrumbs,
}: ArticleHeroProps) {
  return (
    <section className="sticky top-0 z-0">
      <div className="relative w-full h-[280px] md:h-[320px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="absolute top-6 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb items={breadcrumbs} variant="light" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-6 pb-6">
          <div className="flex flex-wrap gap-3 mb-3">
            <span className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full font-semibold">
              {categoryName}
            </span>
            {categoryNameTamil && (
              <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-sm rounded-full">
                {categoryNameTamil}
              </span>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-white/80 text-base mt-3 max-w-3xl line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
