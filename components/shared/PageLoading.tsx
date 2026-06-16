interface PageLoadingProps {
  variant?: "article" | "temple" | "list";
}

export default function PageLoading({ variant = "article" }: PageLoadingProps) {
  if (variant === "temple") {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden shadow border border-orange-100 animate-pulse"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-5">
              <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
              <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="relative h-[400px] md:h-[500px] bg-gray-200 animate-pulse" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded-2xl mt-8"></div>
        </div>
      </div>
    </div>
  );
}
