interface BlogToolbarProps {
  totalCount: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function BlogToolbar({
  totalCount,
  sortBy,
  onSortChange,
}: BlogToolbarProps) {
  return (
    <div className="bg-white rounded-2xl shadow border border-amber-100 p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
      <div className="text-sm text-gray-600">
        <span className="font-semibold text-amber-900">{totalCount}</span>{" "}
        கட்டுரைகள் கிடைத்தன
      </div>
      <div className="flex items-center gap-4">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-xl text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
          <option value="views">Most Viewed</option>
        </select>
      </div>
    </div>
  );
}
