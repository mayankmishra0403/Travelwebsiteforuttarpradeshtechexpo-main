// src/data/travel-packages.ts
// Auto-generated sample holiday packages wired to the CITIES in UPData.

export type HolidayPackage = {
  id: string;
  name: string;
  cityId: string;
  temples?: string[]; // temple ids
  durationNights: number;
  budgetPerPerson: number;
  dateOffsetDays?: number;
  pax?: number;
  image?: string;
  description?: string;
  tags?: string[];
};

export const holidayPackages: HolidayPackage[] = [
  {
    id: "ayodhya_ram_mandir_basic",
    name: "Ayodhya Ram Mandir Darshan",
    cityId: "ayodhya",
    temples: ["ram_mandir", "hanuman_garhi"],
    durationNights: 2,
    budgetPerPerson: 6499,
    dateOffsetDays: 7,
    pax: 2,
    image: "/content/ayodhya/ayodhya-package.jpg",
    description: "2N Ayodhya • VIP/General darshan options, local guide & prasad included.",
    tags: ["spiritual", "pilgrimage"],
  },
  {
    id: "varanasi_spiritual_escape",
    name: "Varanasi Spiritual Escape",
    cityId: "varanasi",
    temples: ["kashi_vishwanath", "assighat"],
    durationNights: 2,
    budgetPerPerson: 5999,
    dateOffsetDays: 10,
    pax: 2,
    image: "/content/varanasi/varanasi-package.jpg",
    description: "Ghats • Evening aarti • Sarnath half-day • Boat ride.",
    tags: ["spiritual", "ghats"],
  },
  {
    id: "braj_krishna_trail",
    name: "Braj Krishna Trail (Mathura-Vrindavan)",
    cityId: "mathura",
    temples: ["krishna_temple", "banke_bihari"],
    durationNights: 2,
    budgetPerPerson: 5499,
    dateOffsetDays: 12,
    pax: 2,
    image: "/content/mathura/mathura-package.jpg",
    description: "Janmabhoomi, Banke Bihari & holy spots across Braj.",
    tags: ["devotional", "family"],
  },
  {
    id: "chitrakoot_mythic_hills",
    name: "Chitrakoot Pilgrim Weekend",
    cityId: "chitrakoot",
    durationNights: 2,
    budgetPerPerson: 3999,
    dateOffsetDays: 9,
    pax: 2,
    image: "/content/chitrakoot/chitrakoot-package.jpg",
    description: "Ram Ghat, waterfall visit & guided mythic walk.",
    tags: ["mythic", "nature"],
  },
  {
    id: "bundelkhand_heritage",
    name: "Bundelkhand Heritage Circuit",
    cityId: "bundelkhand",
    durationNights: 3,
    budgetPerPerson: 7999,
    dateOffsetDays: 14,
    pax: 2,
    image: "/content/bundelkhand/bundelkhand-package.jpg",
    description: "Orchha, fort ruins & heritage stay experience.",
    tags: ["heritage", "forts"],
  },
  {
    id: "gorakhpur_quick",
    name: "Purvanchal Pilgrim Quick Trip",
    cityId: "gorakhpur",
    durationNights: 1,
    budgetPerPerson: 2499,
    dateOffsetDays: 5,
    pax: 2,
    image: "/content/gorakhpur/gorakhpur-package.jpg",
    description: "Gorakhnath shrine visit & local specialties.",
    tags: ["pilgrimage", "food"],
  },
];

export default holidayPackages;
