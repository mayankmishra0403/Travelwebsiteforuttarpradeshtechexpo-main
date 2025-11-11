# 🕉️ Uttar Pradesh Tourism Website

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Ek dynamic, colorful, aur professional travel and tourism website Uttar Pradesh, India ke liye, jo "Incredible India" theme se inspired hai.

## ✨ Features

- 🎨 **Vibrant Design** - Saffron, blue, green, white color palette inspired by Indian flag
- 🏛️ **Rich Content** - 20+ cities with detailed information
- 🗺️ **Regional Navigation** - 4 regions: Purvanchal, Central & Western UP, Bundelkhand, Himalayan Foothill
- 📸 **Stunning Gallery** - High-quality images of monuments, food, and culture
- 🍛 **Famous Dishes** - Local cuisine showcase for each city
- 🏨 **Staying Places** - Hotels, ashrams, and dharamshalas information
- 💎 **Hidden Gems** - Off-beat destinations and experiences
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **Fast Loading** - Optimized images and lazy loading
- 🎭 **Smooth Animations** - Motion/React (Framer Motion) for beautiful transitions
- 🔍 **SEO Optimized** - Meta tags, semantic HTML, and proper structure

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd uttar-pradesh-tourism

# 2. Install dependencies
npm install
# or
yarn install

# 3. Run development server
npm run dev
# or
yarn dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

## 📁 Project Structure

```
uttar-pradesh-tourism/
│
├── public/
│   └── content/                 # ← Place your local images here
│       ├── agra/
│       ├── lucknow/
│       ├── mathura-vrindavan/
│       └── ... (other cities)
│
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Site footer
│   │   ├── PageTransition.tsx   # Page transition animations
│   │   └── ui/                  # Shadcn UI components
│   │
│   ├── pages/
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── ExplorePage.tsx      # Explore by regions
│   │   ├── RegionPage.tsx       # Individual region page
│   │   ├── CityDetailPage.tsx   # City detail page
│   │   ├── GalleryPage.tsx      # Photo gallery
│   │   ├── PlanPage.tsx         # Plan your visit
│   │   └── ContactPage.tsx      # Contact information
│   │
│   ├── data/
│   │   └── cities-data.ts       # All cities data
│   │
│   ├── config/
│   │   └── image-mappings.ts    # Local image path mappings
│   │
│   ├── utils/
│   │   └── content-loader.ts    # Image loading utilities
│   │
│   ├── styles/
│   │   └── globals.css          # Global styles & Tailwind
│   │
│   └── App.tsx                  # Main app component
│
├── SETUP_INSTRUCTIONS.md        # Detailed setup guide
└── README.md                    # This file
```

## 📸 Using Local Images

Website currently uses Unsplash images by default. To use your own local images:

### Step 1: Place Content Folder

Copy your `content` folder to `public/content/`:

```
public/
└── content/
    ├── agra/
    │   ├── dishes/
    │   ├── hidden gems/
    │   ├── historical places/
    │   ├── places to visit/
    │   └── staying places/
    ├── lucknow/
    ├── mathura-vrindavan/
    └── ... (other cities)
```

### Step 2: Enable Local Images

Open `/data/cities-data.ts` and uncomment:

```typescript
import { localImageMappings } from '../config/image-mappings';
```

Then replace Unsplash URLs with:

```typescript
heroImage: localImageMappings.agra.hero,
```

### Step 3: Done! 🎉

All images will automatically load from your local content folder.

**📖 For detailed instructions, see [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)**

## 🎨 Design System

### Color Palette

Based on Indian flag colors and traditional aesthetics:

- **Saffron** (`#FF9933`) - Energy, courage, sacrifice
- **Blue** (`#0047AB`) - Depth, serenity, sky & ocean
- **Green** (`#138808`) - Growth, prosperity, nature
- **White** (`#FFFFFF`) - Peace, purity, light

### Typography

- **Display**: Large hero text with traditional feel
- **Body**: Clean, readable modern sans-serif
- **Accent**: Devanagari-inspired decorative elements

### Components

Built with **Shadcn UI** components:
- Cards, Buttons, Dialogs
- Navigation Menu, Tabs
- Carousel, Gallery
- Forms, Inputs
- And more...

## 🗺️ Regions & Cities

### Purvanchal (Eastern UP)
- Varanasi, Ayodhya, Prayagraj, Gorakhpur, Mirzapur, Azamgarh, Ballia, Deoria, Ghazipur

### Central & Western UP
- Lucknow, Agra, Mathura-Vrindavan, Kanpur, Meerut, Bareilly, Moradabad, Aligarh, Saharanpur

### Bundelkhand
- Chitrakoot, Jhansi, Lalitpur, Mahoba, Banda

### Himalayan Foothill Region
- Fatehpur Sikri, Bijnor, Muzaffarnagar, Hathras, Rampur

## 🛠️ Technology Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing

### Styling
- **Tailwind CSS 4.0** - Utility-first CSS
- **Shadcn UI** - Component library
- **Motion/React** - Animations (Framer Motion)

### Icons & Assets
- **Lucide React** - Beautiful icons
- **Unsplash** - High-quality stock images (default)
- **Local Images** - Support for custom images

### Build Tools
- **Vite** - Fast build tool
- **PostCSS** - CSS processing

## 📱 Pages Overview

### 1. Home Page (`/`)
Landing page with hero banner, highlights, and featured destinations

### 2. Explore Page (`/explore`)
Browse all cities by 4 regions with beautiful cards

### 3. Region Page (`/region?name=...`)
Detailed view of a specific region with all its cities

### 4. City Detail Page (`/city?id=...`)
Complete information about a city:
- Places to Visit
- Historical Places
- Hidden Gems
- Famous Dishes
- Staying Places

### 5. Gallery Page (`/gallery`)
Photo gallery showcasing beauty of UP

### 6. Plan Your Visit (`/plan`)
Travel planning resources:
- Best time to visit
- How to reach
- Travel routes
- Tips & guides

### 7. Contact Page (`/contact`)
Contact form and information

## ⚡ Performance Optimizations

- ✅ Lazy loading images with `ImageWithFallback` component
- ✅ Route-based code splitting
- ✅ Optimized bundle size
- ✅ Scroll restoration disabled for better UX
- ✅ Smooth page transitions
- ✅ Responsive images
- ✅ Compressed assets

## 🔧 Configuration

### Adding New Cities

1. Open `/data/cities-data.ts`
2. Add your city data:

```typescript
{
  id: 'new-city',
  name: 'New City',
  region: REGIONS.PURVANCHAL,
  tagline: 'Tagline here',
  description: 'Description here',
  heroImage: 'image-url-or-path',
  placesToVisit: [...],
  historicalPlaces: [...],
  hiddenGems: [...],
  famousDishes: [...],
  stayingPlaces: [...]
}
```

3. Add local images in `/config/image-mappings.ts`

### Customizing Theme

Edit `/styles/globals.css` for:
- Color variables
- Typography
- Spacing
- Border radius
- Shadows

## 🐛 Troubleshooting

### Images not loading?
- Check browser console for 404 errors
- Verify folder names match exactly (case-sensitive)
- Ensure content folder is in `public/content/`

### Routing issues?
- Verify React Router setup in `App.tsx`
- Check catch-all route is at the end
- Clear browser cache

### Build errors?
- Delete `node_modules` and reinstall
- Clear build cache: `rm -rf .next`
- Check TypeScript errors: `npm run type-check`

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Create production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Incredible India** - Inspiration for design theme
- **Unsplash** - Default image provider
- **Shadcn UI** - Component library
- **Tailwind CSS** - Styling framework
- **React Community** - Amazing ecosystem

## 📞 Support

For issues and questions:
- Check [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
- Open an issue on GitHub
- Check browser console for errors

---

<div align="center">

**Made with ❤️ for Uttar Pradesh Tourism**

*Atithi Devo Bhava* - Guest is God

</div>
