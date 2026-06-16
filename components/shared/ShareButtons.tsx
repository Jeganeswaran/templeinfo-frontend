interface ShareButtonsProps {
  className?: string;
  showLabel?: boolean;
}

export default function ShareButtons({
  className = "",
  showLabel = true,
}: ShareButtonsProps) {
  const buttons = [
    { label: "f", bg: "bg-blue-600", name: "Facebook" },
    { label: "𝕏", bg: "bg-black", name: "Twitter" },
    { label: "W", bg: "bg-green-500", name: "WhatsApp" },
    { label: "in", bg: "bg-blue-700", name: "LinkedIn" },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && <span className="text-sm text-gray-500 mr-2">Share:</span>}
      {buttons.map((btn) => (
        <button
          key={btn.name}
          title={`Share on ${btn.name}`}
          className={`w-9 h-9 ${btn.bg} rounded-full flex items-center justify-center text-white text-sm hover:-translate-y-0.5 transition`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
