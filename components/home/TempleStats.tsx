interface Stat {
  value: string;
  labelTamil: string;
  labelEnglish: string;
}

const stats: Stat[] = [
  {
    value: "5000+",
    labelTamil: "கோவில்கள்",
    labelEnglish: "Registered temples across Tamil Nadu",
  },
  {
    value: "38",
    labelTamil: "மாவட்டங்கள்",
    labelEnglish: "Complete coverage across Tamil Nadu",
  },
  {
    value: "1000+",
    labelTamil: "திருவிழாக்கள்",
    labelEnglish: "Annual temple festivals celebrated",
  },
  {
    value: "24/7",
    labelTamil: "தகவல் சேவை",
    labelEnglish: "Always available temple information",
  },
];

export default function TempleStats() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Temple Universe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            கோவில் புள்ளிவிவரங்கள்
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            தமிழகத்தின் புனித கோவில்கள் மற்றும் ஆன்மீக பாரம்பரியத்தின் ஒரு பார்வை
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md border border-white shadow-lg rounded-3xl p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="text-5xl font-extrabold text-orange-600 drop-shadow">
                {stat.value}
              </div>
              <p className="mt-3 font-semibold text-amber-900">
                {stat.labelTamil}
              </p>
              <p className="text-xs text-gray-500 mt-2">{stat.labelEnglish}</p>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-orange-100/40 to-amber-100/40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
