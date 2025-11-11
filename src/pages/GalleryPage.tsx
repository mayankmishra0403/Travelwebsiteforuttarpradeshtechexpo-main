import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';
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
    src: 'https://images.unsplash.com/photo-1665849863716-b527b5e9ed62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWolMjBNYWhhbCUyMHN1bnNldHxlbnwxfHx8fDE3NjI4MzQyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Taj Mahal',
    category: 'Monuments',
  },
  {
    src: 'https://images.unsplash.com/photo-1671512226229-e05294dd1970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGdoYXRzJTIwZXZlbmluZ3xlbnwxfHx8fDE3NjI4MzQyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Varanasi Ghats',
    category: 'Spiritual',
  },
  {
    src: 'https://images.unsplash.com/photo-1590906424086-3dbc808fd54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmZXN0aXZhbCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2Mjc1NTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Festival Celebrations',
    category: 'Culture',
  },
  {
    src: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc2MjgzNDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Street Food',
    category: 'Cuisine',
  },
  {
    src: 'https://images.unsplash.com/photo-1575906983143-e15387ed5971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGN1bHR1cmFsJTIwZGFuY2V8ZW58MXx8fHwxNzYyODM0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Traditional Dance',
    category: 'Culture',
  },
  {
    src: 'https://images.unsplash.com/photo-1646303489374-a8a4cebece64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBwYWxhY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyODM0MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Palace Architecture',
    category: 'Monuments',
  },
  {
    src: 'https://images.unsplash.com/photo-1589657429197-ecba47e3acd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHdpbGRsaWZlJTIwbmF0dXJlfGVufDF8fHx8MTc2MjgzNDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Wildlife',
    category: 'Nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1717917196987-ec7f77ce69b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2MjgzNDI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Handicrafts',
    category: 'Culture',
  },
  {
    src: 'https://images.unsplash.com/photo-1617622163466-d1d56ec8b127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0c3xlbnwxfHx8fDE3NjI4MzQyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Traditional Sweets',
    category: 'Cuisine',
  },
  {
    src: 'https://images.unsplash.com/photo-1704788564069-d54cab4169aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNzgxNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Temple Architecture',
    category: 'Spiritual',
  },
  {
    src: 'https://images.unsplash.com/photo-1642503408722-37456a4d763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoZXJpdGFnZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjgzNDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Heritage Buildings',
    category: 'Monuments',
  },
  {
    src: 'https://images.unsplash.com/photo-1601821139366-eb14f3628e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjI4MzQyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl text-gray-900 mb-4"
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
