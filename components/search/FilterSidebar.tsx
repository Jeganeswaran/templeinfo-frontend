export default function FilterSidebar({
  onClose,
  isMobile = false,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) {
  const deities = [
    { emoji: "🕉️", name: "சிவன்" },
    { emoji: "🪷", name: "பெருமாள்" },
    { emoji: "🔱", name: "முருகன்" },
    { emoji: "🌺", name: "அம்மன்" },
    { emoji: "🐘", name: "விநாயகர்" },
  ];

  const categories = [
    "108 Divya Desam",
    "275 Paadal Petra Sthalam",
    "Arupadai Veedu",
    "Pancha Bhoota Sthalam",
    "Navagraha Temples",
  ];

  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-amber-900">வடிகட்டிகள்</h3>
        <button className="text-sm text-orange-600 hover:underline">Clear All</button>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">மாநிலம்</h4>
        <select className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
          <option value="">அனைத்து மாநிலங்கள்</option>
          <option value="tamilnadu">Tamil Nadu</option>
          <option value="kerala">Kerala</option>
          <option value="karnataka">Karnataka</option>
          <option value="andhra">Andhra Pradesh</option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">நகரம்</h4>
        <select className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
          <option value="">அனைத்து நகரங்கள்</option>
          <option value="chennai">Chennai</option>
          <option value="madurai">Madurai</option>
          <option value="trichy">Trichy</option>
          <option value="thanjavur">Thanjavur</option>
          <option value="kanchipuram">Kanchipuram</option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">கடவுள்</h4>
        <div className="space-y-2">
          {deities.map((deity) => (
            <label
              key={deity.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 cursor-pointer transition"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm">
                {deity.emoji} {deity.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">கோவில் வகை</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 cursor-pointer transition"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">வரலாற்று காலம்</h4>
        <select className="w-full p-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
          <option value="">அனைத்து காலங்கள்</option>
          <option value="chola">Chola Period</option>
          <option value="pandya">Pandya Period</option>
          <option value="pallava">Pallava Period</option>
          <option value="vijayanagara">Vijayanagara Period</option>
          <option value="nayak">Nayak Period</option>
        </select>
      </div>

      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition">
        Apply Filters
      </button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h3 className="font-bold text-lg text-amber-900">வடிகட்டிகள்</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">{content}</div>
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
          <button className="flex-1 py-3 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition">
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            Apply Filters
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="bg-white rounded-md shadow-lg border border-border p-6 sticky top-28">
      {content}
    </div>
  );
}
