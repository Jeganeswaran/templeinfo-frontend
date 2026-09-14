export interface TempleGroupDetail {
  id: string;
  name: string;
  nameTamil: string;
  description: string;
  descriptionTamil: string;
  significance: string;
  significanceTamil: string;
  emoji: string;
  gradient: string;
  borderColor: string;
  titleColor: string;
  bgColor: string;
  templeIds: string[];
  totalCount: number;
  category: "vishnu" | "shiva" | "murugan" | "shakti" | "planetary";
}

export const templeGroupDetails: TempleGroupDetail[] = [
  {
    id: "108-divya-desam",
    name: "108 Divya Desam",
    nameTamil: "108 திவ்ய தேசங்கள்",
    description: "The 108 Divya Desams are the holiest Vishnu temples praised by the 12 Alwars in the Nalayira Divya Prabandham. 105 temples are in India, one in Nepal, and two are believed to be outside the earthly realm.",
    descriptionTamil: "108 திவ்ய தேசங்கள் என்பது 12 ஆழ்வார்களால் நாலாயிர திவ்ய பிரபந்தத்தில் பாடப்பெற்ற புனித விஷ்ணு கோவில்கள் ஆகும். 105 கோவில்கள் இந்தியாவில் உள்ளன, ஒன்று நேபாளில், இரண்டு பூமிக்கு அப்பாற்பட்ட இடங்களில் உள்ளன என்று நம்பப்படுகிறது.",
    significance: "These temples represent the manifestations of Lord Vishnu and visiting all 108 is considered one of the holiest pilgrimages for Vaishnavites.",
    significanceTamil: "இந்த கோவில்கள் விஷ்ணுவின் வெளிப்பாடுகளைக் குறிக்கின்றன, மேலும் அனைத்து 108 கோவில்களையும் தரிசிப்பது வைஷ்ணவர்களுக்கு மிகவும் புனிதமான யாத்திரைகளில் ஒன்றாகக் கருதப்படுகிறது.",
    emoji: "🪷",
    gradient: "from-orange-50 to-amber-50",
    borderColor: "border-amber-200",
    titleColor: "text-amber-900",
    bgColor: "bg-amber-50",
    templeIds: ["srirangam", "tirupati", "varadharaja-perumal", "parthasarathy"],
    totalCount: 108,
    category: "vishnu",
  },
  {
    id: "275-paadal-petra-sthalam",
    name: "275 Paadal Petra Sthalam",
    nameTamil: "275 பாடல் பெற்ற ஸ்தலங்கள்",
    description: "The 275 Paadal Petra Sthalams are Shiva temples that were praised in the verses of Thevaram and Thiruvasagam by the Nayanmars. These are the most revered Shiva temples in Tamil Nadu.",
    descriptionTamil: "275 பாடல் பெற்ற ஸ்தலங்கள் என்பது நாயன்மார்களால் தேவாரம் மற்றும் திருவாசகத்தில் பாடப்பெற்ற சிவன் கோவில்கள் ஆகும். இவை தமிழ்நாட்டின் மிகவும் போற்றப்படும் சிவத்தலங்கள்.",
    significance: "Visiting these temples and reciting the Thevaram hymns is considered highly meritorious and bestows the blessings of Lord Shiva.",
    significanceTamil: "இந்த கோவில்களை தரிசித்து தேவாரம் பாடுவது மிகவும் புண்ணியமானது என்றும் சிவபெருமானின் அருளை வழங்கும் என்றும் கருதப்படுகிறது.",
    emoji: "🕉️",
    gradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    titleColor: "text-indigo-900",
    bgColor: "bg-blue-50",
    templeIds: ["meenakshi-amman", "annamalaiyar", "brihadeeswarar", "chidambaram-nataraja", "rameshwaram"],
    totalCount: 275,
    category: "shiva",
  },
  {
    id: "arupadai-veedu",
    name: "Arupadai Veedu",
    nameTamil: "ஆறுபடை வீடுகள்",
    description: "The six abodes of Lord Murugan, representing His six divine battlefields where He vanquished evil forces. Each temple has a unique significance and story.",
    descriptionTamil: "முருகப் பெருமானின் ஆறு போர்க்கள படை வீடுகள், தீய சக்திகளை அழித்த ஆறு புனித இடங்களைக் குறிக்கின்றன. ஒவ்வொரு கோவிலுக்கும் தனித்துவமான முக்கியத்துவம் மற்றும் வரலாறு உள்ளது.",
    significance: "Pilgrimage to all six temples is called Arupadai Veedu Yatra and is considered complete only when visited in the traditional order.",
    significanceTamil: "ஆறு கோவில்களுக்கும் யாத்திரை செய்வது ஆறுபடை வீடு யாத்திரை என்று அழைக்கப்படுகிறது, பாரம்பரிய வரிசையில் தரிசித்தால் மட்டுமே முழுமையானதாகக் கருதப்படுகிறது.",
    emoji: "🔱",
    gradient: "from-red-50 to-orange-50",
    borderColor: "border-red-200",
    titleColor: "text-red-900",
    bgColor: "bg-red-50",
    templeIds: ["thiruparankundram", "tiruchendur", "swamimalai", "thiruthani", "pazhamudircholai", "palani"],
    totalCount: 6,
    category: "murugan",
  },
  {
    id: "pancha-bootha-sthalam",
    name: "Pancha Bhoota Sthalam",
    nameTamil: "பஞ்ச பூத ஸ்தலங்கள்",
    description: "The five Shiva temples representing the five elements of nature - Earth, Water, Fire, Air, and Space. Each temple's Shiva lingam embodies one of these elements.",
    descriptionTamil: "இயற்கையின் ஐந்து மூலகங்களான நிலம், நீர், நெருப்பு, காற்று மற்றும் ஆகாயத்தைக் குறிக்கும் ஐந்து சிவன் கோவில்கள். ஒவ்வொரு கோவிலின் சிவலிங்கமும் இந்த மூலகங்களில் ஒன்றை உள்ளடக்கியது.",
    significance: "Visiting all five temples purifies the devotee's five elements within the body, leading to spiritual liberation.",
    significanceTamil: "ஐந்து கோவில்களையும் தரிசிப்பது பக்தரின் உடலில் உள்ள ஐந்து மூலகங்களையும் தூய்மைப்படுத்தி, ஆன்மீக விடுதலைக்கு வழிவகுக்கும்.",
    emoji: "🔥",
    gradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    titleColor: "text-green-900",
    bgColor: "bg-green-50",
    templeIds: ["ekambareswarar", "jambukeswarar", "annamalaiyar", "kalahasteeswara", "chidambaram-nataraja"],
    totalCount: 5,
    category: "shiva",
  },
  {
    id: "navagraha-temples",
    name: "Navagraha Temples",
    nameTamil: "நவகிரக கோவில்கள்",
    description: "Nine temples dedicated to the nine celestial bodies (Navagrahas) in Hindu astrology. Each temple helps mitigate the negative effects of the respective planetary position.",
    descriptionTamil: "இந்து ஜோதிடத்தில் ஒன்பது விண்மீன்களுக்கு (நவக்கிரகங்கள்) அர்ப்பணிக்கப்பட்ட ஒன்பது கோவில்கள். ஒவ்வொரு கோவிலும் அந்தந்த கிரக நிலையின் எதிர்மறை விளைவுகளைக் குறைக்க உதவுகிறது.",
    significance: "Pilgrimage to all nine temples is believed to neutralize planetary afflictions and bring prosperity and good fortune.",
    significanceTamil: "ஒன்பது கோவில்களுக்கும் யாத்திரை செய்வது கிரக தோஷங்களை நடுநிலைப்படுத்தி செழிப்பும் நல்ல அதிர்ஷ்டமும் கொண்டு வரும் என்று நம்பப்படுகிறது.",
    emoji: "☀️",
    gradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    titleColor: "text-purple-900",
    bgColor: "bg-purple-50",
    templeIds: ["suryanar-kovil", "thingalur", "vaitheeswaran-kovil", "thiruvenkadu", "alangudi", "kanjanur", "thirunallar", "thirunageswaram", "keezhaperumpallam"],
    totalCount: 9,
    category: "planetary",
  },
];

export const navagrahaInfo = [
  { planet: "Surya", planetTamil: "சூரியன்", temple: "Suryanar Kovil", color: "bg-orange-500" },
  { planet: "Chandra", planetTamil: "சந்திரன்", temple: "Thingalur", color: "bg-gray-200" },
  { planet: "Angaraka", planetTamil: "செவ்வாய்", temple: "Vaitheeswaran Kovil", color: "bg-red-500" },
  { planet: "Budha", planetTamil: "புதன்", temple: "Thiruvenkadu", color: "bg-green-500" },
  { planet: "Guru", planetTamil: "குரு", temple: "Alangudi", color: "bg-yellow-500" },
  { planet: "Shukra", planetTamil: "சுக்கிரன்", temple: "Kanjanur", color: "bg-white" },
  { planet: "Shani", planetTamil: "சனி", temple: "Thirunallar", color: "bg-blue-900" },
  { planet: "Rahu", planetTamil: "ராகு", temple: "Thirunageswaram", color: "bg-gray-700" },
  { planet: "Ketu", planetTamil: "கேது", temple: "Keezhaperumpallam", color: "bg-gray-500" },
];

export const panchaBhootaElements = [
  { element: "Earth", elementTamil: "நிலம் (பிருதிவி)", temple: "Ekambareswarar, Kanchipuram", emoji: "🌍", color: "text-green-700" },
  { element: "Water", elementTamil: "நீர் (அப்பு)", temple: "Jambukeswarar, Thiruvanaikaval", emoji: "💧", color: "text-blue-700" },
  { element: "Fire", elementTamil: "நெருப்பு (அக்னி)", temple: "Annamalaiyar, Thiruvannamalai", emoji: "🔥", color: "text-red-700" },
  { element: "Air", elementTamil: "காற்று (வாயு)", temple: "Srikalahasti", emoji: "💨", color: "text-cyan-700" },
  { element: "Space", elementTamil: "ஆகாயம்", temple: "Chidambaram Nataraja", emoji: "✨", color: "text-purple-700" },
];

export const arupadaiVeeduOrder = [
  { order: 1, name: "Thiruparankundram", nameTamil: "திருப்பரங்குன்றம்", significance: "Where Murugan married Devasena" },
  { order: 2, name: "Tiruchendur", nameTamil: "திருச்செந்தூர்", significance: "By the sea, where Murugan battled Surapadman" },
  { order: 3, name: "Swamimalai", nameTamil: "சுவாமிமலை", significance: "Where Murugan taught Pranava to Shiva" },
  { order: 4, name: "Thiruthani", nameTamil: "திருத்தணி", significance: "Where Murugan married Valli" },
  { order: 5, name: "Pazhamudircholai", nameTamil: "பழமுதிர்சோலை", significance: "Amidst nature on Alagar hills" },
  { order: 6, name: "Palani", nameTamil: "பழனி", significance: "Where Murugan stands as a renunciant" },
];
