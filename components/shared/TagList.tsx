import Link from "next/link";

interface TagListProps {
  tags: string[];
  label?: string;
  basePath?: string;
  className?: string;
}

export default function TagList({
  tags,
  label = "Tags:",
  basePath = "/blog?tag=",
  className = "",
}: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {label && <span className="text-sm text-gray-500">{label}</span>}
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`${basePath}${tag}`}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-700 transition"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
