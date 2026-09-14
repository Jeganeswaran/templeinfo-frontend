import { ArticleCategory } from "@/data/types";

interface CategoryTagsProps {
  categories: ArticleCategory[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export default function CategoryTags({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTagsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
          activeCategory === null
            ? "bg-orange-600 text-white border-orange-600"
            : "bg-white border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-200"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
            activeCategory === category.id
              ? "bg-orange-600 text-white border-orange-600"
              : "bg-white border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-200"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
