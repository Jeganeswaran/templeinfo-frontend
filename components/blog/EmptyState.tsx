interface EmptyStateProps {
  onClearSearch: () => void;
}

export default function EmptyState({ onClearSearch }: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <div className="text-6xl mb-4">📚</div>
      <h3 className="text-xl font-bold text-amber-900 mb-2">
        கட்டுரைகள் கிடைக்கவில்லை
      </h3>
      <p className="text-gray-500 mb-6">
        உங்கள் தேடலுக்கு பொருந்தும் கட்டுரைகள் எதுவும் இல்லை. வேறு வார்த்தைகளை
        முயற்சிக்கவும்.
      </p>
      <button
        onClick={onClearSearch}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Clear Search
      </button>
    </div>
  );
}
