# 📸 Local Content Setup Instructions

यह गाइड आपको बताती है कि कैसे अपने local content folder को project में integrate करें ताकि सभी photos automatically configure हो जाएं।

## 🎯 Quick Setup (3 Steps)

### Step 1: Content Folder की Location

आपके `content` folder को project में यहाँ रखें:

```
your-project/
├── public/
│   └── content/          ← यहाँ अपना content folder रखें
│       ├── agra/
│       ├── lucknow/
│       ├── mathura-vrindavan/
│       ├── chitrakoot/
│       ├── images of purvanchal/
│       ├── images of up food/
│       └── ... (सभी folders)
├── src/
├── App.tsx
└── ... (बाकी files)
```

### Step 2: Content Folder को Copy करें

1. अपना download किया हुआ `content` folder open करें
2. पूरा folder copy करें (सभी subfolders के साथ)
3. Project के `public` folder में paste करें

**Final Structure:**
```
public/
└── content/
    ├── agra/
    │   ├── dishes/
    │   │   ├── petha.1.jpg
    │   │   ├── petha.2.jpg
    │   │   ├── bedai-and-jalebi.jpg
    │   │   └── ...
    │   ├── hidden gems/
    │   ├── historical places/
    │   ├── places to visit/
    │   └── staying places/
    ├── lucknow/
    │   ├── famous dishes/
    │   ├── places to visit/
    │   ├── hidden gems/
    │   ├── historical places/
    │   └── stay/
    ├── mathura-vrindavan/
    │   ├── dishess/
    │   ├── hidden gems/
    │   └── ashram/
    ├── chitrakoot/
    ├── fatepur sikri/
    ├── images of purvanchal/
    │   ├── ayodhya/
    │   ├── Varanasi/
    │   ├── Prayagraj/
    │   ├── Gorakhpur/
    │   ├── Mirzapur/
    │   ├── Azamgarh/
    │   ├── Ballia/
    │   └── Deoria/
    └── images of up food/
        ├── aligarh/
        ├── Bareilly/
        ├── bijnor/
        ├── ghazipur/
        ├── hathras/
        ├── jhansi/
        ├── meerut/
        ├── moradabad/
        ├── muzzafarnagar/
        ├── rampur/
        └── saharanpur/
```

### Step 3: Configuration Enable करें

Project में पहले से ही configuration file बनी हुई है। आपको बस यह करना है:

1. `/data/cities-data.ts` file open करें
2. Top पर यह line uncomment करें:
   ```typescript
   import { localImageMappings } from '../config/image-mappings';
   ```

3. हर city के data में local images enable करें:
   ```typescript
   // Before (Unsplash images):
   heroImage: 'https://images.unsplash.com/...'

   // After (Local images):
   heroImage: localImageMappings.agra.hero,
   dishes: localImageMappings.agra.dishes,
   gallery: localImageMappings.agra.placesToVisit,
   ```

---

## 📁 Detailed Folder Structure

### Required Folder Names (EXACT spelling chahiye):

#### Main Cities:
- `agra/` - Agra ki sab photos
- `lucknow/` - Lucknow ki sab photos
- `mathura-vrindavan/` - Mathura-Vrindavan ki photos
- `chitrakoot/` - Chitrakoot ki photos
- `fatepur sikri/` - Fatehpur Sikri ki photos

#### Purvanchal Cities:
- `images of purvanchal/ayodhya/`
- `images of purvanchal/Varanasi/`
- `images of purvanchal/Prayagraj/`
- `images of purvanchal/Gorakhpur/`
- `images of purvanchal/Mirzapur/`
- `images of purvanchal/Azamgarh/`
- `images of purvanchal/Ballia/`
- `images of purvanchal/Deoria/`

#### Food Cities:
- `images of up food/aligarh/`
- `images of up food/Bareilly/`
- `images of up food/bijnor/`
- `images of up food/ghazipur/`
- `images of up food/hathras/`
- `images of up food/jhansi/`
- `images of up food/meerut/`
- `images of up food/moradabad/`
- `images of up food/muzzafarnagar/`
- `images of up food/rampur/`
- `images of up food/saharanpur/`

### Subfolder Names (har city के अंदर):

**Common Subfolders:**
- `dishes/` - Food items ki photos
- `places to visit/` - Tourist spots ki photos
- `hidden gems/` - Off-beat locations ki photos
- `historical places/` - Historical monuments ki photos
- `stay/` ya `staying places/` - Hotels/Ashrams ki photos

**Special Subfolders:**
- Lucknow: `famous dishes/` - Famous dishes
- Mathura-Vrindavan: `dishess/` - Dishes (note: extra 's')
- Mathura-Vrindavan: `ashram/` - Ashram photos

---

## 🔧 Advanced Configuration

### Custom City Images Add करना

अगर आप किसी नई city की images add करना चाहते हैं:

1. `/config/image-mappings.ts` file open करें

2. नया city mapping add करें:
   ```typescript
   export const yourCityImages = {
     hero: img('your-city-folder', 'subfolder', 'hero-image.jpg'),
     dishes: [
       img('your-city-folder', 'dishes', 'dish1.jpg'),
       img('your-city-folder', 'dishes', 'dish2.jpg'),
     ],
     placesToVisit: [
       img('your-city-folder', 'places to visit', 'place1.jpg'),
     ],
   };
   ```

3. Export में add करें:
   ```typescript
   export const localImageMappings = {
     agra: agraImages,
     lucknow: lucknowImages,
     yourCity: yourCityImages, // ← यहाँ add करें
   };
   ```

### Image Path Helper Functions

Project में ready-made helper functions हैं:

```typescript
import { getContentImage, getContentImages } from '../utils/content-loader';

// Single image
const image = getContentImage('agra', 'dishes', 'petha.1.jpg');
// Returns: '/content/agra/dishes/petha.1.jpg'

// Multiple images
const images = getContentImages('lucknow', 'famous dishes', [
  'Tunday Kababii.jpg',
  'Galouti Kebab.jpg'
]);
// Returns array of paths
```

---

## ✅ Verification Checklist

Setup complete करने के बाद यह check करें:

- [ ] `public/content/` folder exist करता है
- [ ] सभी city folders अपने exact names के साथ हैं
- [ ] हर city में required subfolders हैं
- [ ] Images proper file extensions (.jpg, .png, .webp, etc.) के साथ हैं
- [ ] `/config/image-mappings.ts` में सभी paths correct हैं
- [ ] `/data/cities-data.ts` में local images enabled हैं
- [ ] Browser console में कोई 404 errors नहीं आ रहे

---

## 🐛 Common Issues & Solutions

### Issue 1: Images load नहीं हो रही हैं

**Solution:**
1. Browser DevTools खोलें (F12)
2. Network tab में check करें कि कौन सी images 404 दे रही हैं
3. File names और folder names exact match check करें (case-sensitive!)
4. Special characters (❤️, #, spaces) वाले folder names rename करें:
   - `Sultanpur.❤️ #sultanpur/` → `sultanpur/`

### Issue 2: Subfolders की images नहीं दिख रही हैं

**Solution:**
1. Subfolder names exact match होने चाहिए:
   - ✅ `places to visit/`
   - ❌ `places_to_visit/` या `Places To Visit/`
2. Forward slashes (`/`) use करें, backslashes (`\`) नहीं

### Issue 3: Kuch images दिख रही हैं, कुछ नहीं

**Solution:**
1. `/config/image-mappings.ts` में उस city का mapping check करें
2. File extensions match check करें (.jpg vs .jpeg vs .png)
3. Image file names में typos check करें

### Issue 4: Folder structure different है

**Solution:**
आपका folder structure अलग है तो `/utils/content-loader.ts` में `CONTENT_FOLDERS` object update करें:

```typescript
export const CONTENT_FOLDERS = {
  agra: {
    root: 'your-custom-path/agra',  // ← यहाँ अपना path डालें
    subfolders: ['dishes', 'places to visit', ...]
  },
  // ... बाकी cities
};
```

---

## 📝 File Structure Reference

Complete file structure reference:

```
your-project/
│
├── public/
│   └── content/                          ← Main content folder
│       ├── agra/
│       │   ├── dishes/
│       │   │   ├── *.jpg
│       │   │   └── *.png
│       │   ├── hidden gems/
│       │   ├── historical places/
│       │   ├── places to visit/
│       │   └── staying places/
│       │
│       ├── lucknow/
│       │   ├── famous dishes/
│       │   ├── places to visit/
│       │   ├── hidden gems/
│       │   ├── historical places/
│       │   └── stay/
│       │
│       ├── mathura-vrindavan/
│       │   ├── dishess/
│       │   ├── hidden gems/
│       │   └── ashram/
│       │
│       └── ... (all other folders)
│
├── src/
│   ├── config/
│   │   └── image-mappings.ts            ← City-wise image paths
│   │
│   ├── utils/
│   │   └── content-loader.ts            ← Helper functions
│   │
│   └── data/
│       └── cities-data.ts               ← Main city data (enable local images here)
│
└── SETUP_INSTRUCTIONS.md                ← Ye file!
```

---

## 🚀 Performance Tips

1. **Image Optimization:**
   - Large images को optimize करें (compress करें)
   - Recommended: 1920x1080 max resolution
   - Format: WebP > JPEG > PNG

2. **Lazy Loading:**
   Project में already `ImageWithFallback` component है jo lazy loading support करता है

3. **Caching:**
   Browser automatically cache karega local images ko

---

## 💡 Pro Tips

1. **Backup:** Setup से पहले original content folder का backup रखें
2. **Git:** Content folder को `.gitignore` में add करें अगर बहुत बड़ा है
3. **Testing:** Development mode में test करें पहले, फिर production build बनाएं
4. **Documentation:** Custom changes का record रखें

---

## 📞 Need Help?

अगर setup में कोई problem आए तो:

1. `/config/image-mappings.ts` के comments check करें
2. `/utils/content-loader.ts` में helper functions देखें
3. Browser DevTools में Network tab check करें
4. Console में errors check करें

---

## ✨ Summary

**In Short:**
1. ✅ Content folder को `public/content/` में copy करो
2. ✅ `/data/cities-data.ts` में local images enable करो
3. ✅ Browser में check करो - सब automatically configure ho jayega!

Happy Coding! 🎉
