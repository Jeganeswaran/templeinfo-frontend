export type TempleListing = {
  id: number;
  name: string;
  deity: string;
  district: string;
  state: string;
  location: string;
  image: string;
  description: string;
  openingHours: string;
};

export const sampleTemples: TempleListing[] = [
  {
    id: 1,
    name: "Kapaleeshwarar Temple",
    deity: "Shiva",
    district: "Chennai",
    state: "Tamil Nadu",
    location: "Mylapore, Chennai",
    openingHours: "6:00 AM - 12:30 PM / 4:00 PM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    description: "A historic coastal Shiva temple known for its sculptural beauty and vibrant festivals.",
  },
  {
    id: 2,
    name: "Meenakshi Amman Temple",
    deity: "Shakti",
    district: "Madurai",
    state: "Tamil Nadu",
    location: "Madurai",
    openingHours: "5:00 AM - 12:30 PM / 4:00 PM - 9:30 PM",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "A richly layered temple complex dedicated to Goddess Meenakshi and Lord Sundareshwarar.",
  },
  {
    id: 3,
    name: "Ramanathaswamy Temple",
    deity: "Shiva",
    district: "Ramanathapuram",
    state: "Tamil Nadu",
    location: "Rameswaram",
    openingHours: "5:00 AM - 1:00 PM / 3:00 PM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description: "One of the holiest pilgrimage sites in South India with sacred coral baths and grand gopurams.",
  },
  {
    id: 4,
    name: "Murugan Temple, Tiruchendur",
    deity: "Murugan",
    district: "Thoothukudi",
    state: "Tamil Nadu",
    location: "Tiruchendur",
    openingHours: "5:00 AM - 1:00 PM / 3:00 PM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1539705404915-9628a92c3e1b?auto=format&fit=crop&w=1200&q=80",
    description: "A seafront Murugan temple famous for the sacred coastal pilgrimage tradition.",
  },
];
