import Image from "next/image";
import Link from "next/link";

interface ElementTemple {
  id: string;
  name: string;
  location: string;
  element: string;
  elementEmoji: string;
  elementColor: string;
  borderColor: string;
  image: string;
}

const panchaBhootaTemples: ElementTemple[] = [
  {
    id: "ekambareswarar",
    name: "காஞ்சி ஏகாம்பரநாதர்",
    location: "காஞ்சிபுரம்",
    element: "Earth",
    elementEmoji: "🌍",
    elementColor: "bg-green-500",
    borderColor: "border-green-100",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
  },
  {
    id: "jambukeswarar",
    name: "ஜம்புகேஸ்வரர்",
    location: "திருவானைக்காவல்",
    element: "Water",
    elementEmoji: "💧",
    elementColor: "bg-blue-500",
    borderColor: "border-blue-100",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
  },
  {
    id: "arunachaleswarar",
    name: "அருணாசலேஸ்வரர்",
    location: "திருவண்ணாமலை",
    element: "Fire",
    elementEmoji: "🔥",
    elementColor: "bg-red-500",
    borderColor: "border-red-100",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
  {
    id: "kalahasteeswara",
    name: "காளஹஸ்தீஸ்வரர்",
    location: "ஸ்ரீகாளஹஸ்தி",
    element: "Air",
    elementEmoji: "💨",
    elementColor: "bg-cyan-500",
    borderColor: "border-cyan-100",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: "nataraja-chidambaram",
    name: "சிதம்பரம் நடராஜர்",
    location: "சிதம்பரம்",
    element: "Space",
    elementEmoji: "🌌",
    elementColor: "bg-purple-500",
    borderColor: "border-purple-100",
    image: "https://images.unsplash.com/photo-1581852057105-68d8d43e891f",
  },
];

export default function PanchaBhootaSthalam() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="relative mb-14">
          {/* View More Button - Desktop */}
          <div className="absolute top-0 right-0 hidden md:block">
            <Link
              href="/temple-category/pancha-bhoota"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-amber-200 shadow-md text-orange-700 font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              View All 5 Temples →
            </Link>
          </div>

          {/* Center Content */}
          <div className="text-center">
            <span className="text-orange-600 uppercase tracking-widest text-sm">
              Sacred Shiva Temples
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
              பஞ்ச பூத சிவன் கோவில்கள்
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              நிலம், நீர், நெருப்பு, காற்று மற்றும் ஆகாயத்தை பிரதிபலிக்கும் ஐந்து
              புனித சிவ தலங்கள்
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {panchaBhootaTemples.map((temple) => (
            <Link
              key={temple.id}
              href={`/temple/${temple.id}`}
              className={`group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition border ${temple.borderColor}`}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={temple.image}
                  alt={temple.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <div
                  className={`absolute top-3 left-3 px-2 py-1 ${temple.elementColor} text-white text-xs rounded-full font-semibold`}
                >
                  {temple.elementEmoji} {temple.element}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-amber-900">{temple.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{temple.location}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-8">
          <Link
            href="/temple-category/pancha-bhoota"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            View All 5 Temples →
          </Link>
        </div>
      </div>
    </section>
  );
}
