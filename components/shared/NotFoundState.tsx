import Link from "next/link";

interface NotFoundStateProps {
  icon?: string;
  title: string;
  description: string;
  backLink: string;
  backLabel: string;
}

export default function NotFoundState({
  icon = "📄",
  title,
  description,
  backLink,
  backLabel,
}: NotFoundStateProps) {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link href={backLink} className="text-orange-600 hover:underline">
          ← {backLabel}
        </Link>
      </div>
    </div>
  );
}
