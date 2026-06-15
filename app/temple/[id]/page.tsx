"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { templeService } from "@/services";
import { Temple } from "@/data/types";
import { TempleCard } from "@/components/temples";

export default function TempleDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [temple, setTemple] = useState<Temple | null>(null);
  const [relatedTemples, setRelatedTemples] = useState<Temple[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTemple() {
      setLoading(true);
      const templeData = await templeService.getById(id);
      if (templeData) {
        setTemple(templeData);
        const related = await templeService.getRelated(id, 4);
        setRelatedTemples(related);
      }
      setLoading(false);
    }
    loadTemple();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!temple) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-6xl mb-4">🛕</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">கோவில் கிடைக்கவில்லை</h1>
          <p className="text-gray-600 mb-6">நீங்கள் தேடும் கோவில் கிடைக்கவில்லை</p>
          <Link href="/" className="text-orange-600 hover:underline">
            ← முகப்புக்கு திரும்பு
          </Link>
        </div>
      </div>
    );
  }

  const deityCategory = templeService.getDeityById(temple.category || "");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px]">
        <Image
          src={temple.image}
          alt={temple.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">முகப்பு</Link>
              <span>/</span>
              {deityCategory && (
                <>
                  <Link href={`/${temple.category}-temples`} className="hover:text-white">
                    {deityCategory.nameTamil}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-white">{temple.nameTamil}</span>
            </nav>

            {temple.element && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full mb-4">
                {temple.element.emoji} {temple.element.name} Element
              </span>
            )}

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {temple.nameTamil}
            </h1>
            <p className="text-xl text-white/90 mb-4">{temple.name}</p>

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{temple.locationTamil}, {temple.location}</span>
              </div>
              <span>•</span>
              <span>{temple.deityTamil}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 mb-6">
              <h2 className="text-xl font-bold text-amber-900 mb-4">கோவில் பற்றி</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {temple.descriptionTamil}
              </p>
              <p className="text-gray-600">
                {temple.description}
              </p>
            </div>

            {/* History Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 mb-6">
              <h2 className="text-xl font-bold text-amber-900 mb-4">வரலாறு</h2>
              <p className="text-gray-700 leading-relaxed">
                இந்த கோவில் தமிழ்நாட்டின் மிகப் புகழ்பெற்ற ஆன்மீக தலங்களில் ஒன்றாகும்.
                ஆயிரக்கணக்கான ஆண்டுகள் பழமையான இந்த கோவில் சோழர், பாண்டியர் மற்றும்
                பல்லவர் காலங்களில் விரிவாக்கப்பட்டது. நாயன்மார்கள் மற்றும் ஆழ்வார்களால்
                பாடப்பெற்ற இந்த புனித தலம் ஆன்மீக சுற்றுலாவின் முக்கிய இடமாக விளங்குகிறது.
              </p>
            </div>

            {/* Timings Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">தரிசன நேரங்கள்</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-xl p-4">
                  <h3 className="font-semibold text-amber-800 mb-2">காலை</h3>
                  <p className="text-gray-700">6:00 AM - 12:00 PM</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4">
                  <h3 className="font-semibold text-amber-800 mb-2">மாலை</h3>
                  <p className="text-gray-700">4:00 PM - 9:00 PM</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * திருவிழா நாட்களில் நேரங்கள் மாறுபடலாம்
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info */}
            <div className="bg-amber-50 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-4">விரைவு தகவல்</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">முதன்மை தெய்வம்</p>
                  <p className="font-semibold text-gray-800">{temple.deityTamil}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">இடம்</p>
                  <p className="font-semibold text-gray-800">{temple.locationTamil}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">மாவட்டம்</p>
                  <p className="font-semibold text-gray-800 capitalize">{temple.district}</p>
                </div>
                {temple.element && (
                  <div>
                    <p className="text-sm text-gray-500">தத்துவம்</p>
                    <p className="font-semibold text-gray-800">{temple.element.emoji} {temple.element.name}</p>
                  </div>
                )}
              </div>
            </div>

            {/* How to Reach */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
              <h3 className="font-bold text-amber-900 mb-4">எப்படி செல்வது</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    ✈️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">விமான நிலையம்</p>
                    <p className="text-gray-600">அருகிலுள்ள விமான நிலையத்திலிருந்து</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    🚂
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">இரயில் நிலையம்</p>
                    <p className="text-gray-600">{temple.location} இரயில் நிலையம்</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    🚌
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">பேருந்து</p>
                    <p className="text-gray-600">அனைத்து முக்கிய நகரங்களிலிருந்தும் பேருந்து வசதி</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Temples */}
      {relatedTemples.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-8">தொடர்புடைய கோவில்கள்</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTemples.map((relatedTemple) => (
                <TempleCard key={relatedTemple.id} temple={relatedTemple} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
