import { Deity } from "@/types/temple-search.types";

export const DEITIES: Deity[] = [
  { emoji: "🕉️", name: "சிவன்" },
  { emoji: "🪷", name: "பெருமாள்" },
  { emoji: "🔱", name: "முருகன்" },
  { emoji: "🌺", name: "அம்மன்" },
  { emoji: "🐘", name: "விநாயகர்" },
];

export const CATEGORIES = [
  "108 Divya Desam",
  "275 Paadal Petra Sthalam",
  "Arupadai Veedu",
  "Pancha Bhoota Sthalam",
  "Navagraha Temples",
];

export const STATES = [
  { value: "tamilnadu", label: "Tamil Nadu" },
  { value: "kerala", label: "Kerala" },
  { value: "karnataka", label: "Karnataka" },
  { value: "andhra", label: "Andhra Pradesh" },
];

export const CITIES = [
  { value: "chennai", label: "Chennai" },
  { value: "madurai", label: "Madurai" },
  { value: "trichy", label: "Trichy" },
  { value: "thanjavur", label: "Thanjavur" },
  { value: "kanchipuram", label: "Kanchipuram" },
];

export const ERAS = [
  { value: "chola", label: "Chola Period" },
  { value: "pandya", label: "Pandya Period" },
  { value: "pallava", label: "Pallava Period" },
  { value: "vijayanagara", label: "Vijayanagara Period" },
  { value: "nayak", label: "Nayak Period" },
];

export const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "nearest", label: "Nearest" },
  { value: "recent", label: "Recently Added" },
] as const;