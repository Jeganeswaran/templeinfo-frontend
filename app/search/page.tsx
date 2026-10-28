import { Suspense } from "react";
import { SearchPage } from "@/components/search/SearchPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full" />
        </div>
      }
    >
      <SearchPage />
    </Suspense>
  );
}