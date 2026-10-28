import { notFound } from "next/navigation";
import { templeService } from "@/services";
import { templeGroupDetails } from "@/data/temple-groups";
import PaadalPetraSthalamPageClient from "@/components/temples/PaadalPetraSthalamPageClient";

const PAGE_SIZE = 12;
const GROUP_ID = "275-paadal-petra-sthalam";

interface PaadalPetraSthalamPageProps {
  searchParams?: Promise<{
    search?: string | string[];
    page?: string | string[];
  }>;
}

export default async function PaadalPetraSthalamPage({
  searchParams,
}: PaadalPetraSthalamPageProps) {
  const search = await searchParams;

  const searchValue = Array.isArray(search?.search)
    ? search.search[0] ?? ""
    : typeof search?.search === "string"
      ? search.search
      : "";

  const pageInput = Array.isArray(search?.page)
    ? search.page[0] ?? "1"
    : typeof search?.page === "string"
      ? search.page
      : "1";

  const currentPage = Number.isNaN(Number(pageInput)) ? 1 : Math.max(1, Number(pageInput));
  const groupInfo = templeGroupDetails.find((group) => group.id === GROUP_ID);

  if (!groupInfo) {
    notFound();
  }

  const result = await templeService.getPaginated({
    group: GROUP_ID,
    search: searchValue || undefined,
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <PaadalPetraSthalamPageClient
      groupInfo={groupInfo}
      temples={result.data}
      totalCount={result.total}
      totalPages={result.totalPages}
      currentPage={currentPage}
      searchValue={searchValue}
    />
  );
}
