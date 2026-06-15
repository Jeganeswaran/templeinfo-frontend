import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            எங்களை பற்றி
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            தமிழ்நாட்டின் மிகப்பெரிய கோவில் தகவல் களஞ்சியம்
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">எங்கள் நோக்கம்</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TempleInfo.in என்பது தமிழ்நாட்டின் கோவில்கள் பற்றிய முழுமையான தகவல்களை
            வழங்கும் ஒரு இணையதளம். நாங்கள் கோவில்களின் வரலாறு, கட்டிடக்கலை,
            திருவிழாக்கள், தரிசன நேரங்கள் மற்றும் பயண வழிகாட்டிகளை வழங்குகிறோம்.
          </p>
          <p className="text-gray-700 leading-relaxed">
            எங்கள் நோக்கம் தமிழ் கலாச்சாரம் மற்றும் ஆன்மீகத்தை உலகம் முழுவதும்
            பரப்புவதும், பக்தர்களுக்கு தங்கள் யாத்திரைகளை திட்டமிட உதவுவதும் ஆகும்.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">நாங்கள் வழங்குவது</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-2xl p-6">
              <div className="text-3xl mb-3">🛕</div>
              <h3 className="font-bold text-amber-900 mb-2">கோவில் தகவல்கள்</h3>
              <p className="text-gray-600 text-sm">
                ஆயிரக்கணக்கான கோவில்களின் முழுமையான தகவல்கள், புகைப்படங்கள் மற்றும் வரலாறு
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-amber-900 mb-2">ஆன்மீக கட்டுரைகள்</h3>
              <p className="text-gray-600 text-sm">
                கோவில் வரலாறு, புராணங்கள், திருவிழாக்கள் பற்றிய ஆழமான கட்டுரைகள்
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="font-bold text-amber-900 mb-2">பயண வழிகாட்டி</h3>
              <p className="text-gray-600 text-sm">
                யாத்திரை திட்டமிடல், போக்குவரத்து, தங்குமிடம் பற்றிய தகவல்கள்
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-amber-900 mb-2">திருவிழா நாட்காட்டி</h3>
              <p className="text-gray-600 text-sm">
                முக்கிய கோவில் திருவிழாக்கள் மற்றும் சிறப்பு நாட்கள் பற்றிய தகவல்கள்
              </p>
            </div>
          </div>
        </div>

        {/* Temple Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">கோவில் வகைகள்</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-orange-100">
              <span className="text-2xl">🕉️</span>
              <div>
                <p className="font-semibold text-gray-800">சிவன் கோவில்கள்</p>
                <p className="text-sm text-gray-500">275 பாடல் பெற்ற ஸ்தலங்கள், பஞ்ச பூத ஸ்தலங்கள்</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-orange-100">
              <span className="text-2xl">🪷</span>
              <div>
                <p className="font-semibold text-gray-800">விஷ்ணு கோவில்கள்</p>
                <p className="text-sm text-gray-500">108 திவ்ய தேசங்கள், பெருமாள் கோவில்கள்</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-orange-100">
              <span className="text-2xl">🔱</span>
              <div>
                <p className="font-semibold text-gray-800">முருகன் கோவில்கள்</p>
                <p className="text-sm text-gray-500">ஆறுபடை வீடுகள், முருகன் தலங்கள்</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-orange-100">
              <span className="text-2xl">🌺</span>
              <div>
                <p className="font-semibold text-gray-800">அம்மன் கோவில்கள்</p>
                <p className="text-sm text-gray-500">சக்தி பீடங்கள், மாரியம்மன் கோவில்கள்</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">தொடர்புக்கு</h2>
          <p className="mb-6 text-white/90">
            ஏதேனும் கேள்விகள் அல்லது பரிந்துரைகள் இருந்தால் எங்களை தொடர்பு கொள்ளுங்கள்
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-xl hover:bg-orange-50 transition"
          >
            தொடர்பு கொள்க
          </Link>
        </div>
      </section>
    </div>
  );
}
