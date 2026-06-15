import Image from "next/image";
import Link from "next/link";

interface Temple {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

const featuredTemples: Temple[] = [
  {
    id: "meenakshi-amman",
    name: "மீனாட்சி அம்மன் கோவில்",
    location: "மதுரை",
    description:
      "சக்தி பீடங்களில் முக்கியமானது. மீனாட்சி அம்மன் மற்றும் சுந்தரேஸ்வரர் அருள்புரியும் மிகப்பெரிய வரலாற்றுச் சிறப்பு மிக்க திருக்கோவில்.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
  },
  {
    id: "annamalaiyar",
    name: "அருணாசலேஸ்வரர் கோவில்",
    location: "திருவண்ணாமலை",
    description:
      "அக்னி தலமாக விளங்கும் சிவபெருமான் அருள்புரியும் பஞ்ச பூத ஸ்தலங்களில் ஒன்று. கிரிவலம் மிகவும் புகழ்பெற்றது.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
  },
  {
    id: "srirangam",
    name: "ஸ்ரீரங்கம்",
    location: "திருச்சி",
    description:
      "108 திவ்ய தேசங்களில் மிக முக்கியமான வைஷ்ணவ திருத்தலம். ரங்கநாதர் பெருமாள் வீற்றிருக்கும் புண்ணிய ஸ்தலம்.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: "brihadeeswarar",
    name: "பிரகதீஸ்வரர் கோவில்",
    location: "தஞ்சாவூர்",
    description:
      "சோழர் கால கட்டிடக்கலையின் உச்சமாக விளங்கும் உலக பாரம்பரிய யுனெஸ்கோ கோவில். சிவபெருமான் அருள்புரியும் தலம்.",
    image: "https://images.unsplash.com/photo-1581852057105-68d8d43e891f",
  },
  {
    id: "chidambaram",
    name: "சிதம்பரம் நடராஜர் கோவில்",
    location: "சிதம்பரம்",
    description:
      "ஆனந்த தாண்டவம் ஆடும் நடராஜர் பெருமானின் பஞ்ச சபைகளில் ஆகாச சபை என போற்றப்படும் புனித தலம்.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
];

export default function FeaturedTemples() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-orange-600 uppercase tracking-widest text-sm">
              Featured Temples
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
              சிறப்பு கோவில்கள்
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mt-5 rounded-full"></div>
          </div>
          <Link
            href="/temple-search"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
          >
            View More Temples →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredTemples.map((temple) => (
            <Link
              key={temple.id}
              href={`/temple/${temple.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition border border-orange-100"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={temple.image}
                  alt={temple.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-amber-900">
                  {temple.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{temple.location}</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                  {temple.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
