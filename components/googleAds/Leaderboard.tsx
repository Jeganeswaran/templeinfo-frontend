export default function Leaderboard() {
    return (
        <section className="py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Google Ads - Leaderboard (728x90)</span>
                    </div>
                    <div className="mt-2 bg-gray-200 h-[90px] rounded-lg flex items-center justify-center text-gray-500 text-xs">
                        Advertisement Placeholder
                    </div>
                </div>
            </div>
        </section>

    );
}
