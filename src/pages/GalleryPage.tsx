import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { X, Images } from 'lucide-react';
import { getAllCities } from '../data/cities-data';

const generateGalleryImages = () => {
  const cities = getAllCities();
  const images: Array<{ src: string; title: string; category: string }> = [];

  cities.forEach(city => {
    // Add places to visit
    city.placesToVisit.slice(0, 2).forEach(place => {
      images.push({
        src: place.image,
        title: `${place.name}, ${city.name}`,
        category: 'Monuments',
      });
    });

    // Add historical places
    city.historicalPlaces.slice(0, 1).forEach(place => {
      images.push({
        src: place.image,
        title: `${place.name}, ${city.name}`,
        category: 'Culture',
      });
    });

    // Add hidden gems
    city.hiddenGems.slice(0, 1).forEach(place => {
      images.push({
        src: place.image,
        title: `${place.name}, ${city.name}`,
        category: 'Nature',
      });
    });

    // Add food
    city.famousDishes.slice(0, 2).forEach(dish => {
      images.push({
        src: dish.image,
        title: `${dish.name}, ${city.name}`,
        category: 'Cuisine',
      });
    });
  });

  return images;
};

const dynamicGalleryImages = generateGalleryImages();

const originalGalleryImages = [
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Taj Mahal',
    category: 'Monuments',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Varanasi Ghats',
    category: 'Spiritual',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Festival Celebrations',
    category: 'Culture',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Street Food',
    category: 'Cuisine',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Traditional Dance',
    category: 'Culture',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Palace Architecture',
    category: 'Monuments',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Wildlife',
    category: 'Nature',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Handicrafts',
    category: 'Culture',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Traditional Sweets',
    category: 'Cuisine',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Temple Architecture',
    category: 'Spiritual',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Heritage Buildings',
    category: 'Monuments',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000',
    title: 'Mountain Landscapes',
    category: 'Nature',
  },
];

const galleryImages = [...dynamicGalleryImages, ...originalGalleryImages];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Monuments', 'Culture', 'Cuisine', 'Nature', 'Spiritual'];

  const filteredImages =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6"
            >
              <Images className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl text-gray-900 mb-4"
              style={{ fontFamily: 'Agarthi, serif' }}
            >
              Gallery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Immerse yourself in the visual splendor of Uttar Pradesh
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${filter}-${index}`}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl mb-1">{image.title}</h3>
                    <p className="text-sm text-orange-300">{image.category}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </motion.button>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-5xl max-h-[90vh]"
              >
                <ImageWithFallback
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-[90vh] object-contain"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center mt-4"
                >
                  <h3 className="text-2xl text-white mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-orange-400">
                    {filteredImages[selectedImage].category}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
