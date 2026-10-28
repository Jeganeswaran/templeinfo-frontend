import Link from "next/link";

const deityCategories = [
  { href: "/temple-search?deity=shiva", icon: "🕉️", label: "சிவன்" },
  { href: "/temple-search?deity=vishnu", icon: "🪷", label: "பெருமாள்" },
  { href: "/temple-search?deity=murugan", icon: "🔱", label: "முருகன்" },
  { href: "/temple-search?deity=amman", icon: "🌺", label: "அம்மன்" },
  { href: "/temple-search?deity=vinayagar", icon: "🐘", label: "விநாயகர்" },
  { href: "/temple-search?deity=navagraha", icon: "☀️", label: "நவக்கிரகம்" },
];

export default function DeityCategories() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-orange-600 uppercase tracking-widest text-sm font-bold">
            Deity Categories
          </span>
          <h2 className="text-4xl font-black mt-3 text-amber-950 md:text-5xl">
            கடவுள் வகைகள்
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {deityCategories.map((category) => (
            <div key={category.label} className="min-w-0">
              <Link
                href={category.href}
                className="group flex min-h-32 flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-3xl sm:text-4xl">{category.icon}</div>
                <div className="mt-2 text-sm font-bold text-gray-700 transition group-hover:text-orange-600">
                  {category.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
