import Link from "next/link";
import { templeGroupDetails } from "@/data/temple-groups";

export default function TempleGroupsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Sacred Temple Collections
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            சிறப்பு தலங்கள்
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            தமிழ்நாட்டின் புகழ்பெற்ற கோவில் தொகுப்புகள் - திவ்ய தேசங்கள், பாடல் பெற்ற ஸ்தலங்கள்,
            ஆறுபடை வீடுகள், பஞ்ச பூத ஸ்தலங்கள் மற்றும் நவக்கிரக கோவில்கள்
          </p>
        </div>
      </section>

      {/* Temple Groups Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templeGroupDetails.map((group) => (
            <Link
              key={group.id}
              href={`/${group.id === "275-paadal-petra-sthalam" ? "paadal-petra-sthalam" : group.id === "navagraha-temples" ? "navagraha-temples" : group.id}`}
              className={`bg-gradient-to-br ${group.gradient} border ${group.borderColor} rounded-3xl p-6 hover:shadow-xl transition group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{group.emoji}</div>
                <span className={`px-3 py-1 ${group.bgColor} ${group.titleColor} text-sm font-medium rounded-full`}>
                  {group.totalCount} கோவில்கள்
                </span>
              </div>

              <h3 className={`text-xl font-bold ${group.titleColor} mb-2`}>
                {group.nameTamil}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{group.name}</p>

              <p className="text-sm text-gray-500 mt-4 line-clamp-2">
                {group.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-200/50">
                <span className={`text-sm ${group.titleColor} font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all`}>
                  View All Temples →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Deity Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
            தெய்வ வகைகள் அடிப்படையில் கோவில்கள்
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link
              href="/shiva-temples"
              className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center group"
            >
              <div className="text-4xl mb-3">🕉️</div>
              <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition">சிவன்</h3>
              <p className="text-sm text-gray-500 mt-1">Shiva Temples</p>
            </Link>

            <Link
              href="/vishnu-temples"
              className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center group"
            >
              <div className="text-4xl mb-3">🪷</div>
              <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition">பெருமாள்</h3>
              <p className="text-sm text-gray-500 mt-1">Vishnu Temples</p>
            </Link>

            <Link
              href="/murugan-temples"
              className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center group"
            >
              <div className="text-4xl mb-3">🔱</div>
              <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition">முருகன்</h3>
              <p className="text-sm text-gray-500 mt-1">Murugan Temples</p>
            </Link>

            <Link
              href="/amman-temples"
              className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center group"
            >
              <div className="text-4xl mb-3">🌺</div>
              <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition">அம்மன்</h3>
              <p className="text-sm text-gray-500 mt-1">Amman Temples</p>
            </Link>

            <Link
              href="/vinayagar-temples"
              className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition text-center group"
            >
              <div className="text-4xl mb-3">🐘</div>
              <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition">விநாயகர்</h3>
              <p className="text-sm text-gray-500 mt-1">Vinayagar Temples</p>
            </Link>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-amber-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                யாத்திரை திட்டமிடுங்கள்
              </h2>
              <p className="text-gray-700 mb-6">
                இந்த புனித கோவில் தொகுப்புகளை தரிசிப்பது மிகவும் புண்ணியமானது.
                ஒவ்வொரு தொகுப்பும் ஒரு குறிப்பிட்ட வரிசையில் தரிசிக்கப்பட வேண்டும்
                என்ற பாரம்பரியம் உள்ளது.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  கோவில் நேரங்கள் மற்றும் திருவிழாக்கள் தகவல்கள்
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  போக்குவரத்து மற்றும் தங்குமிட வழிகாட்டி
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  புராண பின்னணி மற்றும் வரலாறு
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🛕</div>
              <p className="text-3xl font-bold text-orange-600">{templeGroupDetails.reduce((acc, g) => acc + g.totalCount, 0)}+</p>
              <p className="text-gray-600">புனித கோவில்கள்</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
