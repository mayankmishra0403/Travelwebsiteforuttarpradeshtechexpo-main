import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Camera, Calendar, Phone } from 'lucide-react';
import { Card } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { CITIES } from '../data/UPData';
import { useEffect } from 'react';

const heroImage = 'https://images.unsplash.com/photo-1665849863716-b527b5e9ed62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWolMjBNYWhhbCUyMHN1bnNldHxlbnwxfHx8fDE3NjI4MzQyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const highlights = [
  {
    icon: MapPin,
    title: 'Explore Regions',
    description: 'Discover four diverse regions with unique heritage',
    link: '/explore',
  },
  {
    icon: Camera,
    title: 'Photo Gallery',
    description: 'Visual journey through our stunning landscapes',
    link: '/gallery',
  },
  {
    icon: Calendar,
    title: 'Plan Your Visit',
    description: 'Complete travel guides and route suggestions',
    link: '/plan',
  },
  {
    icon: Phone,
    title: 'Contact Us',
    description: 'Get in touch for personalized assistance',
    link: '/contact',
  },
];

const featuredCities = CITIES.slice(0, 4);
const featuredDestinations = featuredCities.map(city => ({
  id: city.id,
  name: city.name,
  location: city.region,
  description: city.tagline,
  image: city.heroImage,
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function HomePage() {
  const navigate = useNavigate();

  // Force scroll to top on component mount
  useEffect(() => {
    // Multiple methods to ensure scroll reset works across all browsers
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also set scroll restoration to manual
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50 opacity-50 z-0" />
        
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback
            src={heroImage}
            alt="Uttar Pradesh Tourism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-6">
                <span className="text-white text-sm tracking-wider">INCREDIBLE INDIA</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl text-white mb-6"
            >
              Experience the Spirit of
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Uttar Pradesh
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Where ancient heritage meets vibrant culture, and every corner tells a story
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/explore')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-2xl hover:shadow-orange-500/50"
              >
                Explore Destinations
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/plan')}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 hover:bg-white/30 transition-all"
              >
                Plan Your Trip
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to explore the incredible state of Uttar Pradesh
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              >
                <Card 
                  className="p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:border-orange-500 border-2 border-transparent"
                  onClick={() => navigate(item.link)}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most iconic landmarks and sacred sites
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                onClick={() => navigate(`/city?id=${destination.id}`)}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h3 className="text-2xl mb-1">{destination.name}</h3>
                      <p className="text-sm text-orange-300 mb-2">{destination.location}</p>
                      <p className="text-sm opacity-90">{destination.description}</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              onClick={() => navigate('/explore')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-2xl hover:shadow-orange-500/50"
            >
              View All Regions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}