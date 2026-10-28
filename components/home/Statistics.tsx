
export default function Statistics() {
  return (
    <section className="mt-1 relative z-20 lg:-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden md:grid-cols-4">
          <div className="p-5 text-center border-b border-orange-100 md:border-b-0 md:border-r">
            <div className="text-3xl font-black text-orange-600 sm:text-4xl">5000+</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-600">கோவில்கள்</div>
          </div>

          <div className="p-5 text-center border-b border-orange-100 md:border-b-0 md:border-r">
            <div className="text-3xl font-black text-orange-600 sm:text-4xl">38</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-600">மாவட்டங்கள்</div>
          </div>

          <div className="p-5 text-center border-b border-orange-100 md:border-b-0 md:border-r">
            <div className="text-3xl font-black text-orange-600 sm:text-4xl">1000+</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-600">திருவிழாக்கள்</div>
          </div>

          <div className="p-5 text-center">
            <div className="text-3xl font-black text-orange-600 sm:text-4xl">24/7</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-600">தகவல் சேவை</div>
          </div>
        </div>
      </div>
    </section>
  );
}
