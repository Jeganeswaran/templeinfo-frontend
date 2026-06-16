interface NewsletterCTAProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: "card" | "inline";
  className?: string;
}

export default function NewsletterCTA({
  title = "Stay Updated",
  description = "புதிய கட்டுரைகள், கோவில் தகவல்கள் மற்றும் பயண வழிகாட்டிகளை உங்கள் மின்னஞ்சலில் பெறுங்கள்",
  placeholder = "உங்கள் மின்னஞ்சல்",
  buttonText = "Subscribe",
  variant = "card",
  className = "",
}: NewsletterCTAProps) {
  if (variant === "inline") {
    return (
      <div className={`bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white ${className}`}>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/90 text-sm mb-4">{description}</p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="w-full bg-white text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-50 transition">
            {buttonText}
          </button>
        </div>
        <p className="text-white/70 text-xs mt-3">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center ${className}`}>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/90 mb-6 max-w-md mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder={placeholder}
          className="flex-1 px-4 py-3 rounded-xl text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50"
        />
        <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
