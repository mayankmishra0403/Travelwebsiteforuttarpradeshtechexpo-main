// src/data/UPData.ts
// Expanded Uttar Pradesh dataset for Darshan360 (cities, temples, dishes, stays, hiddenGems).
export type Temple = {
  id: string;
  name: string;
  image: string;
  description: string;
  aartiSlots: string[];
  vipAvailable: boolean;
  crowdLevel: "Low" | "Moderate" | "High";
  coords?: [number, number];
  recommendedDurationMins?: number;
};

export type HiddenGem = {
  id: string;
  name: string;
  cityId: string;
  image: string;
  short: string;
};

export type Stay = {
  id: string;
  name: string;
  cityId: string;
  image?: string;
  priceFrom?: number;
};

export type Dish = {
  id: string;
  name: string;
  cityId?: string;
  image?: string;
  short?: string;
};

export type City = {
  id: string;
  name: string;
  region?: string;
  tagline?: string;
  heroImage?: string;
  coords?: [number, number];
  temples: Temple[];
  hiddenGems?: HiddenGem[];
  stays?: Stay[];
  famousDishes?: Dish[];
  tags?: string[]; // e.g., ["spiritual","heritage"]
};

/**
 * NOTE:
 *  - Image paths assume public/content/<cityId>/<file>
 *  - If your images are in a different folder, change the strings accordingly.
 */
export const CITIES: City[] = [
  {
    id: "ayodhya",
    name: "Ayodhya",
    region: "Awadh",
    tagline: "Land of Lord Rama",
    heroImage: "/content/ayodhya/ayodhya-hero.jpg",
    coords: [26.8036, 82.1940],
    tags: ["spiritual", "heritage"],
    temples: [
      {
        id: "ram_mandir",
        name: "Ram Mandir",
        image: "/content/ayodhya/ram_mandir.jpg",
        description: "Grand new temple and the heart of Ayodhya's revival.",
        aartiSlots: ["05:30 AM", "07:00 AM", "12:00 PM", "06:00 PM"],
        vipAvailable: true,
        crowdLevel: "High",
        coords: [26.8040, 82.1945],
        recommendedDurationMins: 60,
      },
      {
        id: "hanuman_garhi",
        name: "Hanuman Garhi",
        image: "/content/ayodhya/hanuman_garhi.jpg",
        description: "Ancient fort-like temple dedicated to Lord Hanuman.",
        aartiSlots: ["06:00 AM", "07:30 AM", "06:30 PM"],
        vipAvailable: false,
        crowdLevel: "Moderate",
        coords: [26.8020, 82.1955],
        recommendedDurationMins: 30,
      },
    ],
    hiddenGems: [
      {
        id: "ayodhya-ghat",
        name: "Saryu Ghats",
        cityId: "ayodhya",
        image: "/content/ayodhya/saryu_ghat.jpg",
        short: "Peaceful river ghats for sunrise walks & aarti.",
      },
      {
        id: "ram-laddu",
        name: "Ram Laddu Spot",
        cityId: "ayodhya",
        image: "/content/ayodhya/ram_laddu.jpg",
        short: "Local sweet shop famous for 'Ram laddu' & prasad.",
      },
    ],
    stays: [
      { id: "ayodhya-hotel-1", name: "Heritage Guest House", cityId: "ayodhya", priceFrom: 1499, image: "/content/ayodhya/stay1.jpg" },
      { id: "ayodhya-hotel-2", name: "Saryu Riverside Stay", cityId: "ayodhya", priceFrom: 2199, image: "/content/ayodhya/stay2.jpg" },
    ],
    famousDishes: [
      { id: "kalakand-ayodhya", name: "Kalakand", cityId: "ayodhya", image: "/content/ayodhya/kalakand.jpg", short: "Milky sweet" },
    ],
  },

  {
    id: "varanasi",
    name: "Varanasi",
    region: "Kashi",
    tagline: "Ganga Ghats & Eternal Vibes",
    heroImage: "/content/varanasi/varanasi-hero.jpg",
    coords: [25.3176, 82.9739],
    tags: ["spiritual", "ghats"],
    temples: [
      {
        id: "kashi_vishwanath",
        name: "Kashi Vishwanath",
        image: "/content/varanasi/kashi_vishwanath.jpg",
        description: "One of the twelve Jyotirlingas and a major pilgrimage site.",
        aartiSlots: ["05:00 AM", "09:00 AM", "06:00 PM", "08:00 PM"],
        vipAvailable: true,
        crowdLevel: "High",
        coords: [25.3100, 82.9730],
        recommendedDurationMins: 45,
      },
      {
        id: "assighat",
        name: "Assi Ghat",
        image: "/content/varanasi/assi_ghat.jpg",
        description: "Popular ghat with evening aarti and boat rides.",
        aartiSlots: ["06:00 PM"],
        vipAvailable: false,
        crowdLevel: "Moderate",
        coords: [25.2920, 82.9733],
        recommendedDurationMins: 30,
      },
    ],
    hiddenGems: [
      {
        id: "launlata",
        name: "Launlata (Quiet lane)",
        cityId: "varanasi",
        image: "/content/varanasi/launlata.jpg",
        short: "Hidden lane with old houses and a small shrine.",
      },
      {
        id: "boat-ghat",
        name: "Munshi Ghat boat launch",
        cityId: "varanasi",
        image: "/content/varanasi/munshi_ghat.jpg",
        short: "Less crowded launch for sunrise boat rides.",
      },
    ],
    stays: [
      { id: "varanasi-hotel-1", name: "Ghatview Hotel", cityId: "varanasi", priceFrom: 2599, image: "/content/varanasi/stay1.jpg" },
    ],
    famousDishes: [
      { id: "banarasi-paan", name: "Banarasi Paan", cityId: "varanasi", image: "/content/varanasi/banarasi_paan.jpg" },
      { id: "chaat-varanasi", name: "Aloo Tikki / Chaat", cityId: "varanasi", image: "/content/varanasi/chaat.jpg" },
    ],
  },

  {
    id: "mathura",
    name: "Mathura - Vrindavan",
    region: "Braj",
    tagline: "Krishna Leela & Bhakti",
    heroImage: "/content/mathura/mathura-hero.jpg",
    coords: [27.4924, 77.6737],
    tags: ["devotional", "braj"],
    temples: [
      {
        id: "krishna_temple",
        name: "Shri Krishna Janmabhoomi",
        image: "/content/mathura/janmabhoomi.jpg",
        description: "Birthplace of Lord Krishna and a major pilgrimage spot.",
        aartiSlots: ["04:30 AM", "10:30 AM", "07:00 PM"],
        vipAvailable: true,
        crowdLevel: "High",
        coords: [27.4924, 77.6737],
        recommendedDurationMins: 50,
      },
      {
        id: "banke_bihari",
        name: "Banke Bihari Temple",
        image: "/content/mathura/banke_bihari.jpg",
        description: "Famous Vrindavan temple with devotional atmosphere.",
        aartiSlots: ["06:00 AM", "12:00 PM", "07:00 PM"],
        vipAvailable: false,
        crowdLevel: "High",
        coords: [27.5640, 77.6880],
        recommendedDurationMins: 45,
      },
    ],
    hiddenGems: [
      {
        id: "rang-bhoomi",
        name: "Quiet Braj Courtyard",
        cityId: "mathura",
        image: "/content/mathura/hidden1.jpg",
        short: "Small courtyard with local music evenings.",
      },
    ],
    stays: [
      { id: "mathura-hotel-1", name: "Braj Heritage Stay", cityId: "mathura", priceFrom: 1799, image: "/content/mathura/stay1.jpg" },
    ],
    famousDishes: [
      { id: "pedha-mathura", name: "Mathura Pedha", cityId: "mathura", image: "/content/mathura/pedha.jpg" },
    ],
  },

  {
    id: "lucknow",
    name: "Lucknow",
    region: "Central UP",
    tagline: "Nawabi Culture & Kebabs",
    heroImage: "/content/lucknow/lucknow-hero.jpg",
    coords: [26.8467, 80.9462],
    tags: ["culture", "food"],
    temples: [
      {
        id: "imambara_shrine",
        name: "Bara Imambara & Nearby Shrines",
        image: "/content/lucknow/imambara.jpg",
        description: "Historic center of Lucknow's Nawabi past.",
        aartiSlots: ["11:00 AM", "07:00 PM"],
        vipAvailable: false,
        crowdLevel: "Low",
        coords: [26.8510, 80.9470],
        recommendedDurationMins: 40,
      },
    ],
    hiddenGems: [
      {
        id: "chowk-kebab",
        name: "Chowk Kebab Stall",
        cityId: "lucknow",
        image: "/content/lucknow/chowk_kebab.jpg",
        short: "Old-city kebab joint — underrated classic.",
      },
    ],
    stays: [{ id: "lucknow-hotel-1", name: "Nawabi Residency", cityId: "lucknow", priceFrom: 1999, image: "/content/lucknow/stay1.jpg" }],
    famousDishes: [
      { id: "galouti-kebab", name: "Galouti Kebab", cityId: "lucknow", image: "/content/lucknow/galouti.jpg" },
      { id: "kebabs", name: "Tunday Kababi", cityId: "lucknow", image: "/content/lucknow/tunday.jpg" },
    ],
  },

  {
    id: "chitrakoot",
    name: "Chitrakoot",
    region: "Bundelkhand",
    tagline: "Mythic Hills & Waterfalls",
    heroImage: "/content/chitrakoot/chitrakoot-hero.jpg",
    coords: [25.1886, 80.8957],
    tags: ["mythic", "nature"],
    temples: [
      {
        id: "ramghat",
        name: "Ram Ghat & Temples",
        image: "/content/chitrakoot/ramghat.jpg",
        description: "Sacred ghats and temples linked to Ramayana lore.",
        aartiSlots: ["06:00 AM", "07:00 PM"],
        vipAvailable: false,
        crowdLevel: "Moderate",
        coords: [25.1886, 80.8957],
        recommendedDurationMins: 60,
      },
    ],
    hiddenGems: [
      {
        id: "kund",
        name: "Kamadgiri Forest Walk",
        cityId: "chitrakoot",
        image: "/content/chitrakoot/forest.jpg",
        short: "Quiet woodland groves and viewpoints.",
      },
    ],
    stays: [
      { id: "chitrakoot-hotel-1", name: "Riverside Dharmshala", cityId: "chitrakoot", priceFrom: 999, image: "/content/chitrakoot/stay1.jpg" },
    ],
    famousDishes: [{ id: "chitrakoot-litti", name: "Litti Chokha", cityId: "chitrakoot", image: "/content/chitrakoot/litti.jpg" }],
  },

  {
    id: "gorakhpur",
    name: "Gorakhpur",
    region: "Purvanchal",
    tagline: "Pilgrimage & Heritage",
    heroImage: "/content/gorakhpur/gorakhpur-hero.jpg",
    coords: [26.7606, 83.3732],
    tags: ["pilgrimage"],
    temples: [
      {
        id: "gorakhnath",
        name: "Gorakhnath Temple",
        image: "/content/gorakhpur/gorakhnath.jpg",
        description: "Major yogi shrine attracting devotees from across the region.",
        aartiSlots: ["05:00 AM", "06:30 PM"],
        vipAvailable: true,
        crowdLevel: "Moderate",
        coords: [26.7606, 83.3732],
        recommendedDurationMins: 40,
      },
    ],
    hiddenGems: [
      {
        id: "rail-museum",
        name: "Rail Museum (local)",
        cityId: "gorakhpur",
        image: "/content/gorakhpur/rail_museum.jpg",
        short: "Small museum with vintage carriages, rarely visited by tourists.",
      },
    ],
    stays: [{ id: "gorakhpur-hotel-1", name: "Pilgrim Inn", cityId: "gorakhpur", priceFrom: 799, image: "/content/gorakhpur/stay1.jpg" }],
    famousDishes: [{ id: "thaggu-laddu", name: "Thaggu ke Laddu", cityId: "gorakhpur", image: "/content/gorakhpur/laddu.jpg" }],
  },

  {
    id: "mirzapur",
    name: "Mirzapur",
    region: "Purvanchal",
    tagline: "Waterfalls, Crafts & Litti",
    heroImage: "/content/mirzapur/mirzapur-hero.jpg",
    coords: [25.1440, 82.5678],
    tags: ["nature", "crafts"],
    temples: [
      {
        id: "lacjhna-temple",
        name: "Local Temple",
        image: "/content/mirzapur/temple1.jpg",
        description: "Small shrine with local festivities.",
        aartiSlots: ["06:00 AM", "06:00 PM"],
        vipAvailable: false,
        crowdLevel: "Low",
        coords: [25.1440, 82.5678],
        recommendedDurationMins: 30,
      },
    ],
    hiddenGems: [
      {
        id: "lakshmi-falls",
        name: "Lakhaniya Falls",
        cityId: "mirzapur",
        image: "/content/mirzapur/lakhaniya_falls.jpg",
        short: "Scenic waterfall — great for a quiet picnic.",
      },
    ],
    stays: [{ id: "mirzapur-hotel-1", name: "Hillview Resort", cityId: "mirzapur", priceFrom: 1299, image: "/content/mirzapur/stay1.jpg" }],
    famousDishes: [{ id: "malpua-mirzapur", name: "Malpua", cityId: "mirzapur", image: "/content/mirzapur/malpua.jpg" }],
  },

  // Bundelkhand cluster (Represented as city cluster entries too)
  {
    id: "bundelkhand",
    name: "Bundelkhand (Circuit)",
    region: "Bundelkhand",
    tagline: "Forts, Temples & Drylands",
    heroImage: "/content/bundelkhand/bundelkhand-hero.jpg",
    coords: [25.0, 79.0],
    tags: ["heritage"],
    temples: [
      {
        id: "orchha-ramraj",
        name: "Orchha Temples (cluster)",
        image: "/content/bundelkhand/orchha.jpg",
        description: "Group of temples and forts near Betwa river.",
        aartiSlots: ["07:00 AM", "06:00 PM"],
        vipAvailable: false,
        crowdLevel: "Moderate",
        coords: [25.2630, 78.6696],
        recommendedDurationMins: 120,
      },
    ],
    hiddenGems: [
      {
        id: "jat-heritage-site",
        name: "Quiet Fort Ruins",
        cityId: "bundelkhand",
        image: "/content/bundelkhand/ruins.jpg",
        short: "Offbeat fortress ruins to explore at sunset.",
      },
    ],
    stays: [{ id: "bundelkhand-hotel-1", name: "Heritage Fort Stay", cityId: "bundelkhand", priceFrom: 2499, image: "/content/bundelkhand/stay1.jpg" }],
    famousDishes: [{ id: "bundelkhand-ka-khichdi", name: "Local Khichdi", cityId: "bundelkhand", image: "/content/bundelkhand/dish1.jpg" }],
  },
];

export default CITIES;
