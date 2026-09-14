import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
  className?: string;
}

export default function Breadcrumb({
  items,
  variant = "dark",
  className = "",
}: BreadcrumbProps) {
  const baseClasses =
    variant === "light"
      ? "text-white/80 hover:text-white"
      : "text-gray-500 hover:text-orange-600";
  const activeClasses = variant === "light" ? "text-white" : "text-gray-700";
  const separatorClasses = variant === "light" ? "text-white/60" : "text-gray-400";

  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <span className={separatorClasses}>/</span>}
          {item.href ? (
            <Link href={item.href} className={`${baseClasses} transition`}>
              {item.label}
            </Link>
          ) : (
            <span className={activeClasses}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
