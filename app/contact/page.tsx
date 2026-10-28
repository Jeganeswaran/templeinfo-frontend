import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-alt)]">
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <section>
              <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-orange-700">
                Contact
              </span>
              <h1 className="section-title mt-4 text-4xl md:text-6xl font-black text-amber-950">
                Let’s Connect
              </h1>
              <p className="mt-6 text-gray-600 leading-7">
                Share temple updates, event information, corrections, suggestions, or partnership interest with our editorial team.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
                    <FaEnvelope className="text-[var(--color-primary)]" />
                  </span>
                  <span className="text-gray-700">info@templedetails.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
                    <FaPhoneAlt className="text-[var(--color-primary)]" />
                  </span>
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[var(--color-primary)]" />
                  </span>
                  <span className="text-gray-700">Tamil Nadu, India</span>
                </div>
              </div>

              <div className="mt-8 rounded-[2rem] border border-orange-100 bg-white p-6">
                <h2 className="text-xl font-black text-amber-950">Editorial Hours</h2>
                <p className="mt-2 text-sm text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>
            </section>

            <section className="card p-8 rounded-[2rem]">
              <h2 className="card-title text-2xl mb-6 text-amber-950">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input className="input" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input className="input" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea className="input min-h-[140px]" placeholder="How can we help?" />
                </div>
                <button className="btn-primary w-full">Submit</button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
