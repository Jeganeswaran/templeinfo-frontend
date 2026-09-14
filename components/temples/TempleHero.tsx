interface TempleHeroProps {
  title: string;
  titleTamil: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearch?: () => void;
  showSearch?: boolean;
  bgColor?: string;
}

export default function TempleHero({
  title,
  titleTamil,
  subtitle,
  description,
  emoji,
  searchValue = "",
  onSearchChange,
  onSearch,
  showSearch = true,
  bgColor = "from-amber-50 to-white",
}: TempleHeroProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <section className={`relative pt-20 bg-gradient-to-b ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          {emoji && <div className="text-5xl mb-4">{emoji}</div>}
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            {subtitle || title}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            {titleTamil}
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          {description && (
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {showSearch && onSearchChange && (
          <div className="mt-10 bg-white rounded-2xl p-3 max-w-3xl mx-auto flex shadow-lg border border-amber-100">
            <div className="flex-1 flex items-center gap-3 px-4">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="flex-1 py-3 outline-none"
                placeholder="கோவில்களில் தேடுக..."
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              onClick={onSearch}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 rounded-xl transition"
            >
              தேடுக
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
