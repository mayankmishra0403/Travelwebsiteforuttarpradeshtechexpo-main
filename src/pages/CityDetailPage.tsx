import { motion } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, MapPin, Utensils, Hotel, Landmark, Eye } from 'lucide-react';
import { getCityById } from '../data/cities-data';

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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export function CityDetailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const cityId = searchParams.get('id') || '';
  
  const city = getCityById(cityId);

  if (!city) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 mb-4">City Not Found</h1>
          <button
            onClick={() => navigate('/explore')}
            className="px-6 py-3 bg-orange-600 text-white rounded-full"
          >
            Back to Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={city.heroImage}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onClick={() => navigate(`/region?name=${encodeURIComponent(city.region)}`)}
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-white hover:text-orange-400 transition-colors z-10 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to {city.region}</span>
        </motion.button>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-white max-w-4xl px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
            >
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm">{city.region}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-5xl md:text-7xl mb-4"
            >
              {city.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-xl md:text-2xl text-orange-300 mb-4"
            >
              {city.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-lg text-white/90 max-w-2xl mx-auto"
            >
              {city.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="places" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 h-auto">
              <TabsTrigger value="places" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Landmark className="w-5 h-5" />
                <span className="text-xs md:text-sm">Places to Visit</span>
              </TabsTrigger>
              <TabsTrigger value="historical" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Landmark className="w-5 h-5" />
                <span className="text-xs md:text-sm">Historical</span>
              </TabsTrigger>
              <TabsTrigger value="gems" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Eye className="w-5 h-5" />
                <span className="text-xs md:text-sm">Hidden Gems</span>
              </TabsTrigger>
              <TabsTrigger value="food" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Utensils className="w-5 h-5" />
                <span className="text-xs md:text-sm">Food</span>
              </TabsTrigger>
              <TabsTrigger value="stay" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Hotel className="w-5 h-5" />
                <span className="text-xs md:text-sm">Stay</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="places">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {city.placesToVisit.map((place, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -4 }}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg text-gray-900 mb-2">{place.name}</h3>
                        <p className="text-sm text-gray-600">{place.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="historical">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {city.historicalPlaces.map((place, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -4 }}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg text-gray-900 mb-2">{place.name}</h3>
                        <p className="text-sm text-gray-600">{place.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="gems">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {city.hiddenGems.map((place, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -4 }}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg text-gray-900 mb-2">{place.name}</h3>
                        <p className="text-sm text-gray-600">{place.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="food">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {city.famousDishes.map((dish, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -4 }}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg text-gray-900 mb-2">{dish.name}</h3>
                        <p className="text-sm text-gray-600">{dish.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="stay">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {city.stayingPlaces.map((stay, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -4 }}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={stay.image}
                          alt={stay.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg text-gray-900">{stay.name}</h3>
                          <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                            {stay.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{stay.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
