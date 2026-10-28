import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-alt)]">
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-orange-700">
              About TempleDetails
            </span>
            <h1 className="section-title mt-4 text-4xl md:text-6xl font-black text-amber-950">
              Our Sacred Heritage Portal
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base leading-7 text-gray-600">
              TempleDetails organizes Tamil Nadu’s temple culture into a searchable digital guide for devotees, travelers, researchers, and families.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="card p-8">
              <h2 className="card-title text-2xl mb-4 text-amber-950">Our Mission</h2>
              <p className="text-gray-600 leading-7">
                We collect district-by-district temple identities, people, deities, traditions, festival calendars, and sacred geography in one friendly place.
              </p>
            </article>

            <article className="card p-8">
              <h2 className="card-title text-2xl mb-4 text-amber-950">What We Cover</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Temple deities and categories</li>
                <li>• District and state travel context</li>
                <li>• Festival, pooja, and timing information</li>
                <li>• Heritage and article pages</li>
              </ul>
            </article>
          </div>

          <section className="mt-8 card p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
              <div>
                <h2 className="card-title text-2xl mb-4 text-amber-950">Why We Built This</h2>
                <p className="text-gray-600 leading-7">
                  We believe sacred geography should feel simple to discover. Our design keeps structure, helpful navigation, and meaningful content accessible across browsers, phones, tablets, and desktops.
                </p>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-orange-600 to-amber-700 p-7 text-white shadow-lg">
                <div className="text-4xl font-black">ॐ</div>
                <div className="mt-4 text-sm font-bold uppercase tracking-[0.2em]">Guided Discovery</div>
                <div className="mt-3 text-sm leading-6 text-orange-50">
                  Search temples by deity, district, state, or location.
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/search" className="btn-primary inline-flex items-center">
                Start Exploring
              </Link>
              <Link href="/contact" className="btn-outline inline-flex items-center">
                Contact Our Team
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
