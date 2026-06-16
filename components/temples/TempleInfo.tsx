import { Temple } from "@/data/types";

interface TempleInfoProps {
  temple: Temple;
}

export default function TempleInfo({ temple }: TempleInfoProps) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 mb-6">
        <h2 className="text-xl font-bold text-amber-900 mb-4">கோவில் பற்றி</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {temple.descriptionTamil}
        </p>
        <p className="text-gray-600">{temple.description}</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 mb-6">
        <h2 className="text-xl font-bold text-amber-900 mb-4">வரலாறு</h2>
        <p className="text-gray-700 leading-relaxed">
          இந்த கோவில் தமிழ்நாட்டின் மிகப் புகழ்பெற்ற ஆன்மீக தலங்களில் ஒன்றாகும்.
          ஆயிரக்கணக்கான ஆண்டுகள் பழமையான இந்த கோவில் சோழர், பாண்டியர் மற்றும்
          பல்லவர் காலங்களில் விரிவாக்கப்பட்டது. நாயன்மார்கள் மற்றும் ஆழ்வார்களால்
          பாடப்பெற்ற இந்த புனித தலம் ஆன்மீக சுற்றுலாவின் முக்கிய இடமாக விளங்குகிறது.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
        <h2 className="text-xl font-bold text-amber-900 mb-4">தரிசன நேரங்கள்</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-50 rounded-xl p-4">
            <h3 className="font-semibold text-amber-800 mb-2">காலை</h3>
            <p className="text-gray-700">6:00 AM - 12:00 PM</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4">
            <h3 className="font-semibold text-amber-800 mb-2">மாலை</h3>
            <p className="text-gray-700">4:00 PM - 9:00 PM</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          * திருவிழா நாட்களில் நேரங்கள் மாறுபடலாம்
        </p>
      </div>
    </div>
  );
}
