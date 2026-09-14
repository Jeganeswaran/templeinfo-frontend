"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            தொடர்புக்கு
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            உங்கள் கேள்விகள், பரிந்துரைகள் அல்லது கருத்துகளை எங்களுடன் பகிர்ந்து கொள்ளுங்கள்
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-amber-50 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-bold text-amber-900 mb-6">தொடர்பு விவரங்கள்</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">முகவரி</h3>
                    <p className="text-gray-600 text-sm">Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">மின்னஞ்சல்</h3>
                    <p className="text-gray-600 text-sm">info@templeinfo.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">தொலைபேசி</h3>
                    <p className="text-gray-600 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-orange-100">
              <h3 className="font-bold text-amber-900 mb-4">வேலை நேரம்</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">திங்கள் - வெள்ளி</span>
                  <span className="text-gray-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">சனி</span>
                  <span className="text-gray-800">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ஞாயிறு</span>
                  <span className="text-gray-800">விடுமுறை</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <h2 className="text-xl font-bold text-amber-900 mb-6">செய்தி அனுப்புக</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">நன்றி!</h3>
                  <p className="text-gray-600">
                    உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது. விரைவில் பதில் அளிப்போம்.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-orange-600 hover:underline"
                  >
                    மற்றொரு செய்தி அனுப்பு
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        பெயர் *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                        placeholder="உங்கள் பெயர்"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        மின்னஞ்சல் *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      பொருள் *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    >
                      <option value="">தேர்ந்தெடுக்கவும்</option>
                      <option value="general">பொது விசாரணை</option>
                      <option value="temple-info">கோவில் தகவல் திருத்தம்</option>
                      <option value="new-temple">புதிய கோவில் சேர்க்க</option>
                      <option value="feedback">கருத்து / பரிந்துரை</option>
                      <option value="partnership">கூட்டாண்மை</option>
                      <option value="other">மற்றவை</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      செய்தி *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                      placeholder="உங்கள் செய்தியை இங்கே எழுதுங்கள்..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 transition"
                  >
                    செய்தி அனுப்பு
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
