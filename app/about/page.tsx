import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-alt)]">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <span className="badge">About TempleDetails</span>
          <h1 className="section-title mt-4 text-4xl md:text-6xl">About Our Temple Heritage Portal</h1>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="card p-8">
              <h2 className="card-title text-2xl mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-7">
                TempleDetails brings Tamil Nadu’s sacred temple culture together in one accessible directory,
                making it easier for devotees, travelers, researchers, and pilgrims to discover heritage,
                poojas, festivals, districts, and temple stories.
              </p>
            </div>
            <div className="card p-8">
              <h2 className="card-title text-2xl mb-4">What We Cover</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Temple deities and categories</li>
                <li>• District, district and state travel context</li>
                <li>• Festival and timing information</li>
                <li>• Heritage and article pages</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 card p-8">
            <h2 className="card-title text-2xl mb-4">Why We Built This</h2>
            <p className="text-gray-600 leading-7">
              Our goal is to preserve and present the living experience of Tamil temples through simple,
              responsive design and useful discovery tools for all audiences.
            </p>
            <div className="mt-6">
              <Link href="/search" className="btn-primary inline-flex items-center">
                Start Exploring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
