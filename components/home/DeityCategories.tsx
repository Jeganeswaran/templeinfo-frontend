import Link from "next/link";

export default function DeityCategories() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Deity Categories
          </span>
          <h2 className="text-4xl font-bold mt-3 text-amber-950">
            கடவுள் வகைகள்
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
        </div>
        <div className="flex gap-3">

          {/* ITEM 1 */}
          <div className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6">

            <Link href="/temple-search?deity=shiva"
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center">

              <div className="text-3xl">🕉️</div>
              <div className="mt-2 font-semibold text-sm text-gray-700 group-hover:text-orange-600">
                சிவன்
              </div>

            </Link>

          </div>

          {/* ITEM 2 */}
          <div className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6">

            <Link href="/temple-search?deity=vishnu"
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center">

              <div className="text-3xl">🪷</div>
              <div className="mt-2 font-semibold text-sm text-gray-700 group-hover:text-orange-600">
                பெருமாள்
              </div>

            </Link>

          </div>

          {/* ITEM 3  */}
          <div className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6">

            <Link href="/temple-search?deity=murugan"
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center">

              <div className="text-3xl">🔱</div>
              <div className="mt-2 font-semibold text-sm text-gray-700 group-hover:text-orange-600">
                முருகன்
              </div>

            </Link>

          </div>

          {/* ITEM 4  */}
          <div className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6">

            <Link href="/temple-search?deity=amman"
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center">

              <div className="text-3xl">🌺</div>
              <div className="mt-2 font-semibold text-sm text-gray-700 group-hover:text-orange-600">
                அம்மன்
              </div>

            </Link>

          </div>

          {/* ITEM 5  */}
          <div className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6">

            <Link href="/temple-search?deity=vinayagar"
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center">

              <div className="text-3xl">🐘</div>
              <div className="mt-2 font-semibold text-sm text-gray-700 group-hover:text-orange-600">
                விநாயகர்
              </div>

            </Link>

          </div>

          {/* ITEM 6  */}
          <div className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6">

            <Link href="/temple-search?deity=navagraha"
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center">

              <div className="text-3xl">☀️</div>
              <div className="mt-2 font-semibold text-sm text-gray-700 group-hover:text-orange-600">
                நவக்கிரகம்
              </div>

            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}
