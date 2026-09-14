"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  questionTamil: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I find temples in my area?",
    questionTamil: "என் பகுதியில் உள்ள கோவில்களை எவ்வாறு கண்டறிவது?",
    answer: "முகப்பு பக்கத்தில் உள்ள தேடல் பட்டியில் உங்கள் இடம் அல்லது மாவட்டத்தை தேடலாம். மேலும் மாவட்டம் வாரியாக கோவில்களை பார்க்க Footer-ல் உள்ள மாவட்ட இணைப்புகளை பயன்படுத்தலாம்.",
  },
  {
    question: "What is 108 Divya Desam?",
    questionTamil: "108 திவ்ய தேசம் என்றால் என்ன?",
    answer: "108 திவ்ய தேசங்கள் என்பது 12 ஆழ்வார்களால் நாலாயிர திவ்ய பிரபந்தத்தில் பாடப்பெற்ற புனித விஷ்ணு கோவில்கள் ஆகும். இவற்றில் 105 இந்தியாவில் உள்ளன, ஒன்று நேபாளில் உள்ளது, இரண்டு வைகுண்டத்தில் உள்ளன என்று நம்பப்படுகிறது.",
  },
  {
    question: "What are Paadal Petra Sthalams?",
    questionTamil: "பாடல் பெற்ற ஸ்தலங்கள் என்றால் என்ன?",
    answer: "275 பாடல் பெற்ற ஸ்தலங்கள் என்பது தேவாரம் மற்றும் திருவாசகத்தில் நாயன்மார்களால் பாடப்பெற்ற சிவன் கோவில்கள் ஆகும். இவை தமிழ் சைவ மரபின் மிக முக்கியமான புனித தலங்கள்.",
  },
  {
    question: "What are Arupadai Veedu?",
    questionTamil: "ஆறுபடை வீடுகள் என்றால் என்ன?",
    answer: "ஆறுபடை வீடுகள் என்பது முருகப் பெருமானின் ஆறு புனித தலங்கள் ஆகும். இவை திருப்பரங்குன்றம், திருச்செந்தூர், சுவாமிமலை, திருத்தணி, பழமுதிர்சோலை மற்றும் பழனி.",
  },
  {
    question: "What are Pancha Bhoota Sthalams?",
    questionTamil: "பஞ்ச பூத ஸ்தலங்கள் என்றால் என்ன?",
    answer: "பஞ்ச பூத ஸ்தலங்கள் என்பது ஐந்து மூலகங்களை (நிலம், நீர், நெருப்பு, காற்று, ஆகாயம்) குறிக்கும் ஐந்து சிவன் கோவில்கள் ஆகும். இவை காஞ்சிபுரம், திருவானைக்காவல், திருவண்ணாமலை, ஸ்ரீகாளஹஸ்தி மற்றும் சிதம்பரம்.",
  },
  {
    question: "What are Navagraha temples?",
    questionTamil: "நவகிரக கோவில்கள் என்றால் என்ன?",
    answer: "நவகிரக கோவில்கள் என்பது ஒன்பது கிரகங்களுக்கு (சூரியன், சந்திரன், செவ்வாய், புதன், குரு, சுக்கிரன், சனி, ராகு, கேது) அர்ப்பணிக்கப்பட்ட ஒன்பது கோவில்கள் ஆகும். இவை தஞ்சாவூர் மற்றும் நாகப்பட்டினம் பகுதிகளில் அமைந்துள்ளன.",
  },
  {
    question: "How can I contribute temple information?",
    questionTamil: "கோவில் தகவல்களை எவ்வாறு பங்களிக்கலாம்?",
    answer: "புதிய கோவில் தகவல்கள் அல்லது திருத்தங்களை சமர்ப்பிக்க தொடர்பு பக்கத்தை பயன்படுத்தலாம். எங்கள் குழு தகவல்களை சரிபார்த்து இணையதளத்தில் சேர்க்கும்.",
  },
  {
    question: "Are the temple timings accurate?",
    questionTamil: "கோவில் நேரங்கள் துல்லியமானவையா?",
    answer: "நாங்கள் கோவில் நேரங்களை சரியாக வைத்திருக்க முயற்சிக்கிறோம், ஆனால் திருவிழா நாட்கள் மற்றும் சிறப்பு நிகழ்வுகளின் போது நேரங்கள் மாறலாம். முக்கியமான தரிசனத்திற்கு முன் கோவில் நிர்வாகத்துடன் உறுதிப்படுத்துமாறு பரிந்துரைக்கிறோம்.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            அடிக்கடி கேட்கப்படும் கேள்விகள்
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            கோவில்கள் மற்றும் எங்கள் இணையதளம் பற்றிய பொதுவான கேள்விகளுக்கான பதில்கள்
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-orange-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-amber-50 transition"
              >
                <div>
                  <p className="font-semibold text-amber-900">{faq.questionTamil}</p>
                  <p className="text-sm text-gray-500">{faq.question}</p>
                </div>
                <span className={`text-2xl text-orange-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-4 border-t border-orange-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-amber-900 mb-3">
            உங்கள் கேள்விக்கு பதில் கிடைக்கவில்லையா?
          </h2>
          <p className="text-gray-600 mb-6">
            எங்களை தொடர்பு கொள்ளுங்கள், நாங்கள் உதவ தயாராக இருக்கிறோம்
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 transition"
          >
            தொடர்பு கொள்க
          </Link>
        </div>
      </section>
    </div>
  );
}
