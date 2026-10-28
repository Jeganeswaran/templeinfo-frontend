import type { Temple } from "@/types/temple-search.types";

interface Props {
  temple: Temple;
}

export function TempleInfo({ temple }: Props) {
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
          {temple.deity}
        </span>
      </div>

      <h3 className="line-clamp-1 text-lg font-semibold">
        {temple.name}
      </h3>

      {temple.description && (
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {temple.description}
        </p>
      )}
    </>
  );
}