interface AuthorAvatarProps {
  initial: string;
  color: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap: Record<string, string> = {
  orange: "bg-orange-100 text-orange-600",
  purple: "bg-purple-100 text-purple-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  amber: "bg-amber-100 text-amber-600",
};

const sizeMap = {
  sm: "w-8 h-8 text-sm",
  md: "w-14 h-14 text-xl",
  lg: "w-20 h-20 text-3xl",
};

export default function AuthorAvatar({
  initial,
  color,
  size = "md",
  className = "",
}: AuthorAvatarProps) {
  const colorClasses = colorMap[color] || "bg-gray-100 text-gray-600";
  const sizeClasses = sizeMap[size];

  return (
    <div
      className={`${sizeClasses} ${colorClasses} rounded-full flex items-center justify-center font-bold ${className}`}
    >
      {initial}
    </div>
  );
}

export { colorMap };
