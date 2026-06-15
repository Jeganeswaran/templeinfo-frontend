export default function InlineRectangle() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Ad 1 */}
          <div className="flex-1 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Google Ads - Rectangle (300x250)</span>
            </div>
            <div className="mt-2 bg-gray-200 h-[250px] rounded-lg flex items-center justify-center text-gray-500 text-xs">
              Advertisement Placeholder
            </div>
          </div>

          {/* Ad 2 */}
          <div className="flex-1 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Google Ads - Rectangle (300x250)</span>
            </div>
            <div className="mt-2 bg-gray-200 h-[250px] rounded-lg flex items-center justify-center text-gray-500 text-xs">
              Advertisement Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
