import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-alt)]">
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <span className="badge">Contact</span>
              <h1 className="section-title mt-4 text-4xl md:text-6xl">Let’s Connect</h1>
              <p className="mt-6 text-gray-600 leading-7">
                Share temple updates, event information, corrections, suggestions, or partnership interest with our editorial team.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center"><FaEnvelope className="text-[var(--color-primary)]" /></span>
                  <span className="text-gray-700">info@templedetails.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center"><FaPhoneAlt className="text-[var(--color-primary)]" /></span>
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center"><FaMapMarkerAlt className="text-[var(--color-primary)]" /></span>
                  <span className="text-gray-700">Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="card-title text-2xl mb-6">Send a Message</h2>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
