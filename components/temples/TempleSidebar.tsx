import { Temple } from "@/data/types";

interface TempleSidebarProps {
  temple: Temple;
}

export default function TempleSidebar({ temple }: TempleSidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-amber-50 rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-amber-900 mb-4">விரைவு தகவல்</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">முதன்மை தெய்வம்</p>
            <p className="font-semibold text-gray-800">{temple.deityTamil}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">இடம்</p>
            <p className="font-semibold text-gray-800">{temple.locationTamil}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">மாவட்டம்</p>
            <p className="font-semibold text-gray-800 capitalize">{temple.district}</p>
          </div>
          {temple.element && (
            <div>
              <p className="text-sm text-gray-500">தத்துவம்</p>
              <p className="font-semibold text-gray-800">
                {temple.element.emoji} {temple.element.name}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
        <h3 className="font-bold text-amber-900 mb-4">எப்படி செல்வது</h3>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              ✈️
            </div>
            <div>
              <p className="font-semibold text-gray-800">விமான நிலையம்</p>
              <p className="text-gray-600">அருகிலுள்ள விமான நிலையத்திலிருந்து</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              🚂
            </div>
            <div>
              <p className="font-semibold text-gray-800">இரயில் நிலையம்</p>
              <p className="text-gray-600">{temple.location} இரயில் நிலையம்</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              🚌
            </div>
            <div>
              <p className="font-semibold text-gray-800">பேருந்து</p>
              <p className="text-gray-600">அனைத்து முக்கிய நகரங்களிலிருந்தும் பேருந்து வசதி</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
