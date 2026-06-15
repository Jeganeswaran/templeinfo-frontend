export default function TempleGroups() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <div className="text-center mb-14">
                    <span className="text-orange-600 uppercase tracking-widest text-sm">
                        Sacred Temple Collections
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
                        திருத்தல தொகுப்புகள்
                    </h2>

                    <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>

                </div>

                {/* GRID (MIN 5 CARDS ALWAYS) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

                    {/* 1 */}
                    <a href="temple-category-details.html"
                        className="group bg-gradient-to-br from-orange-50 to-amber-50 border border-amber-100 rounded-3xl p-6 hover:shadow-xl transition">

                        <div className="text-4xl">🪷</div>
                        <h3 className="mt-4 font-bold text-lg text-amber-900">108 Divya Desam</h3>
                        <p className="text-sm text-gray-600 mt-2">Vishnu sacred temples</p>

                    </a>

                    {/* 2 */}
                    <a href="temple-category-details.html"
                        className="group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 hover:shadow-xl transition">

                        <div className="text-4xl">🕉️</div>
                        <h3 className="mt-4 font-bold text-lg text-indigo-900">275 Paadal Petra Sthalam</h3>
                        <p className="text-sm text-gray-600 mt-2">Shiva praised temples</p>

                    </a>

                    {/* 3 */}
                    <a href="temple-category-details.html"
                        className="group bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-3xl p-6 hover:shadow-xl transition">

                        <div className="text-4xl">🔱</div>
                        <h3 className="mt-4 font-bold text-lg text-red-900">Arupadai Veedu</h3>
                        <p className="text-sm text-gray-600 mt-2">Murugan six abodes</p>

                    </a>

                    {/* 4 */}
                    <a href="temple-category-details.html"
                        className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-6 hover:shadow-xl transition">

                        <div className="text-4xl">🔥</div>
                        <h3 className="mt-4 font-bold text-lg text-green-900">Pancha Bhoota Sthalam</h3>
                        <p className="text-sm text-gray-600 mt-2">Five elemental temples</p>

                    </a>

                    {/* 5 */}
                    <a href="temple-category-details.html"
                        className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-6 hover:shadow-xl transition">

                        <div className="text-4xl">☀️</div>
                        <h3 className="mt-4 font-bold text-lg text-purple-900">Navagraha Temples</h3>
                        <p className="text-sm text-gray-600 mt-2">Planetary remedy temples</p>

                    </a>

                </div>

                {/* VIEW ALL (IMPORTANT FOR SCALABILITY) */}
                <div className="text-center mt-12">

                    <a href="temple-categories.html"
                        className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">

                        View All Temple Groups →

                    </a>

                    <p className="text-sm text-gray-500 mt-2">
                        More spiritual temple collections available
                    </p>

                </div>

            </div>

        </section>

    );
}
