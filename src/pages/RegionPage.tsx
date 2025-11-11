import { motion } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, MapPin, ArrowRight } from 'lucide-react';
import { getCitiesByRegion } from '../data/cities-data';

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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function RegionPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const regionName = searchParams.get('name') || '';
  
  const cities = getCitiesByRegion(regionName);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/explore')}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Regions</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl text-gray-900 mb-4"
            >
              {regionName}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore the incredible cities and destinations in this region
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {cities.map((city) => (
              <motion.div
                key={city.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="group cursor-pointer"
                onClick={() => navigate(`/city?id=${city.id}`)}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={city.heroImage}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-orange-300">{city.region}</span>
                      </div>
                      <h3 className="text-2xl mb-2">{city.name}</h3>
                      <p className="text-sm opacity-90">{city.tagline}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {city.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-t border-gray-100 pt-4">
                      <div className="text-center">
                        <div className="text-lg text-orange-600">{city.placesToVisit.length}</div>
                        <div className="text-xs text-gray-500">Places</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg text-orange-600">{city.famousDishes.length}</div>
                        <div className="text-xs text-gray-500">Dishes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg text-orange-600">{city.hiddenGems.length}</div>
                        <div className="text-xs text-gray-500">Gems</div>
                      </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-orange-600 transition-colors duration-300 group/btn">
                      <span className="text-sm">Explore {city.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
