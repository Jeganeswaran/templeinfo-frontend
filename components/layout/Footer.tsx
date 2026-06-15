import Link from "next/link";
import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-300 border-t border-amber-500/20">
      {/* Newsletter */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-3">
              திருவிழா அறிவிப்புகளை பெறுங்கள்
            </h3>

            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              முக்கிய கோவில் திருவிழாக்கள், ஆன்மீக கட்டுரைகள் மற்றும்
              புதிய கோவில் தகவல்களை உங்கள் மின்னஞ்சலில் பெறுங்கள்.
            </p>

            <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="உங்கள் மின்னஞ்சல் முகவரி"
                className="flex-1 px-5 py-3 rounded-xl text-gray-900 outline-none"
              />

              <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                TempleInfo
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                தமிழ்நாட்டின் கோவில் தகவல் களஞ்சியம்
              </p>
            </Link>

            <p className="text-sm leading-7 text-gray-400">
              தமிழ்நாட்டின் முக்கிய சிவன், விஷ்ணு, முருகன், அம்மன் மற்றும்
              பிற தலங்களின் வரலாறு, நேரங்கள், திருவிழாக்கள் மற்றும்
              வழிபாட்டு தகவல்களை வழங்கும் இணையதளம்.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-400" />
                Tamil Nadu, India
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400" />
                info@templeinfo.in
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-400" />
                +91 XXXXX XXXXX
              </div>
            </div>
          </div>

          {/* Temple Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              தெய்வ வகைகள்
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/shiva-temples" className="hover:text-amber-400">
                  சிவன் கோவில்கள்
                </Link>
              </li>

              <li>
                <Link href="/vishnu-temples" className="hover:text-amber-400">
                  விஷ்ணு கோவில்கள்
                </Link>
              </li>

              <li>
                <Link href="/murugan-temples" className="hover:text-amber-400">
                  முருகன் கோவில்கள்
                </Link>
              </li>

              <li>
                <Link href="/amman-temples" className="hover:text-amber-400">
                  அம்மன் கோவில்கள்
                </Link>
              </li>

              <li>
                <Link href="/vinayagar-temples" className="hover:text-amber-400">
                  விநாயகர் கோவில்கள்
                </Link>
              </li>
            </ul>
          </div>

          {/* Temple Groups */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              சிறப்பு தலங்கள்
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/108-divya-desam" className="hover:text-amber-400">
                  108 திவ்ய தேசங்கள்
                </Link>
              </li>

              <li>
                <Link href="/navagraha-temples" className="hover:text-amber-400">
                  நவகிரக கோவில்கள்
                </Link>
              </li>

              <li>
                <Link href="/arupadai-veedu" className="hover:text-amber-400">
                  ஆறுபடை வீடுகள்
                </Link>
              </li>

              <li>
                <Link href="/pancha-bootha-sthalam" className="hover:text-amber-400">
                  பஞ்ச பூத ஸ்தலங்கள்
                </Link>
              </li>

              <li>
                <Link href="/paadal-petra-sthalam" className="hover:text-amber-400">
                  பாடல் பெற்ற ஸ்தலங்கள்
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Districts */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              முக்கிய மாவட்டங்கள்
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/district/chennai" className="hover:text-amber-400">
                  சென்னை
                </Link>
              </li>

              <li>
                <Link href="/district/kanchipuram" className="hover:text-amber-400">
                  காஞ்சிபுரம்
                </Link>
              </li>

              <li>
                <Link href="/district/madurai" className="hover:text-amber-400">
                  மதுரை
                </Link>
              </li>

              <li>
                <Link href="/district/trichy" className="hover:text-amber-400">
                  திருச்சி
                </Link>
              </li>

              <li>
                <Link href="/district/thanjavur" className="hover:text-amber-400">
                  தஞ்சாவூர்
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              விரைவு இணைப்புகள்
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-amber-400">
                  எங்களை பற்றி
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-amber-400">
                  கோவில் கட்டுரைகள்
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-amber-400">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-amber-400">
                  தொடர்புக்கு
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 TempleInfo. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
              >
                <FaYoutube />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}