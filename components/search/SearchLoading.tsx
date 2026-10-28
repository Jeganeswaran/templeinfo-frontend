export function SearchLoading() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-white rounded-3xl overflow-hidden shadow border border-orange-100"
        >
          <div className="h-48 w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
          <div className="p-5">
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-3" />
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}