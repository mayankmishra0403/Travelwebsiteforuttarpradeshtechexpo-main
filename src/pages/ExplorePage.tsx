import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, ArrowRight } from 'lucide-react';
import { CITIES } from '../data/UPData';

const statsData = [
  { number: '75', label: 'Districts' },
  { number: '4', label: 'Regions' },
  { number: '30M+', label: 'Annual Visitors' },
];

const regions = [
  {
    id: 'purvanchal',
    name: 'Purvanchal',
    tagline: 'The spiritual heartland of India, home to Varanasi, Prayagraj, and Ayodhya',
    image: 'https://images.unsplash.com/photo-1671512226229-e05294dd1970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGdoYXRzJTIwZXZlbmluZ3xlbnwxfHx8fDE3NjI4MzQyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: ['Ganga Aarti', 'Sacred Temples', 'Kashi Vishwanath'],
    stats: [
      { value: '16', label: 'Cities' },
      { value: '25+', label: 'Sites' },
      { value: '10M+', label: 'Visitors' },
    ],
  },
  {
    id: 'hills',
    name: 'Himalayan Foothill Region',
    tagline: 'Gateway to the Himalayas and spiritual valleys. Home to Dudhwa National Park',
    image: 'https://images.unsplash.com/photo-1601821139366-eb14f3628e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjI4MzQyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: ['Dudhwa National Park', 'Himalayan Foothills'],
    stats: [
      { value: '8', label: 'Cities' },
      { value: '15+', label: 'Sites' },
      { value: '5M+', label: 'Visitors' },
    ],
  },
  {
    id: 'bundelkhand',
    name: 'Bundelkhand',
    tagline: 'A region steeped in valor and history, featuring magnificent forts, UNESCO...',
    image: 'https://images.unsplash.com/photo-1642503408722-37456a4d763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoZXJpdGFnZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjgzNDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: ['Khajuraho Temples', 'Jhansi Fort'],
    stats: [
      { value: '5', label: 'Cities' },
      { value: '12+', label: 'Sites' },
      { value: '3M+', label: 'Visitors' },
    ],
  },
  {
    id: 'central',
    name: 'Central & Western UP',
    tagline: 'Where Mughal grandeur meets devotional traditions. Home to the Taj...',
    image: 'https://images.unsplash.com/photo-1665849863716-b527b5e9ed62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWolMjBNYWhhbCUyMHN1bnNldHxlbnwxfHx8fDE3NjI4MzQyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: ['Taj Mahal', 'Nawabi Lucknow'],
    stats: [
      { value: '20+', label: 'Cities' },
      { value: '40+', label: 'Sites' },
      { value: '15M+', label: 'Visitors' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
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

export function ExplorePage() {
  const navigate = useNavigate();

  // Update stats dynamically based on actual data
  const updatedRegions = regions.map(region => {
    const cities = CITIES.filter(c => (c.region || '').toLowerCase() === region.name.toLowerCase());
    const totalPlaces = cities.reduce((acc: number, city: any) => acc + (city.placesToVisit?.length || 0) + (city.historicalPlaces?.length || 0), 0);
    const totalVisitors = cities.length > 0 ? `${cities.length * 2}M+` : region.stats[2].value;

    return {
      ...region,
      stats: [
        { value: `${cities.length}`, label: 'Cities' },
        { value: `${totalPlaces}+`, label: 'Sites' },
        { value: totalVisitors, label: 'Visitors' },
      ],
    };
  });

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642503408722-37456a4d763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoZXJpdGFnZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjgzNDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Heritage Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm tracking-wide">Discover Diverse Regions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl mb-6"
              style={{ color: '#FF9933' }}
            >
              Explore by Region
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12"
            >
              Each region of Uttar Pradesh offers a unique tapestry of culture, history, and experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-12 md:gap-20"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl text-white mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-blue-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {updatedRegions.map((region, index) => (
              <motion.div
                key={region.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="group cursor-pointer"
                onClick={() => navigate(`/region?name=${encodeURIComponent(region.name)}`)}
              >
                <Card className="overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2 line-clamp-2 min-h-[40px]">
                      {region.tagline}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {region.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-gray-100">
                      {region.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl text-gray-900 mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 group/btn">
                      <span className="text-sm">Click to explore</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="fixed bottom-8 right-8 z-20"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
          >
            <span className="text-2xl">🕉</span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
