import Image from "next/image";
import { FaSearch, FaMapMarkerAlt, FaLandmark, FaArrowRight, FaOm } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative pt-20 h-[750px]">

            <Image
                src="https://images.unsplash.com/photo-1605649487212-47bdab064df7"
                alt="திருக்கோவில் படத்தைச் சார்ந்த பின்னணி"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h1 className="text-white text-5xl md:text-7xl font-bold">
                        தமிழ்நாட்டின் ஆன்மீக பாரம்பரியம்
                    </h1>

                    <p className="mt-6 text-white/90 text-lg">
                        ஆயிரக்கணக்கான திருக்கோவில்களின் முழுமையான தகவல்கள்
                    </p>

                    <div className="mt-10 bg-white rounded-2xl p-3 max-w-3xl mx-auto flex">
                        <input className="flex-1 px-5 py-4 outline-none"
                            placeholder="கோவில் பெயர், மாவட்டம், கடவுள்..." />
                        <button className="bg-orange-600 text-white px-8 rounded-xl">
                            தேடுக
                        </button>
                    </div>

                </div>
            </div>
        </section>

    );
}