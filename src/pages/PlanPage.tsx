import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Calendar, MapPin, Hotel, Train, Plane, Car, Sun, Cloud, Snowflake } from 'lucide-react';

const travelInfo = [
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    items: [
      'October to March: Pleasant weather for sightseeing',
      'July to September: Monsoon season, lush greenery',
      'April to June: Summer, ideal for hill stations',
    ],
  },
  {
    icon: Train,
    title: 'Getting Around',
    items: [
      'Extensive railway network connecting major cities',
      'Well-connected bus services (state & private)',
      'Metro services in Lucknow, Kanpur, and Noida',
      'Car rentals and taxi services available',
    ],
  },
  {
    icon: Hotel,
    title: 'Accommodation',
    items: [
      'Luxury heritage hotels and palaces',
      'Budget-friendly guesthouses and hostels',
      'Mid-range hotels in all major cities',
      'Eco-resorts near wildlife sanctuaries',
    ],
  },
];

const popularRoutes = [
  {
    name: 'Golden Triangle Extension',
    duration: '5-7 Days',
    route: 'Delhi → Agra → Fatehpur Sikri → Varanasi',
    highlights: 'Taj Mahal, Ghats, Ancient temples',
  },
  {
    name: 'Spiritual Circuit',
    duration: '4-6 Days',
    route: 'Varanasi → Ayodhya → Prayagraj → Chitrakoot',
    highlights: 'Sacred sites, river ceremonies, pilgrimage',
  },
  {
    name: 'Heritage Trail',
    duration: '6-8 Days',
    route: 'Lucknow → Jhansi → Orchha → Agra',
    highlights: 'Nawabi culture, forts, monuments',
  },
  {
    name: 'Wildlife & Nature',
    duration: '3-5 Days',
    route: 'Dudhwa → Pilibhit → Corbett National Park',
    highlights: 'Tiger reserves, bird watching, nature',
  },
];

const seasonalTips = [
  {
    icon: Sun,
    season: 'Winter',
    months: 'Oct - Mar',
    temp: '10-25°C',
    description: 'Perfect for all activities',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cloud,
    season: 'Monsoon',
    months: 'Jul - Sep',
    temp: '25-35°C',
    description: 'Lush landscapes, fewer crowds',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Snowflake,
    season: 'Summer',
    months: 'Apr - Jun',
    temp: '30-45°C',
    description: 'Visit hill stations',
    color: 'from-orange-500 to-red-500',
  },
];

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

export function PlanPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Plan Your Visit
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to know for an unforgettable journey through Uttar Pradesh
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {travelInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-xl text-gray-900">{info.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Seasonal Guide
            </h2>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {seasonalTips.map((season, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Card
                    className={`p-6 bg-gradient-to-br ${season.color} text-white border-0 hover:shadow-2xl transition-all duration-500`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <season.icon className="w-12 h-12 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl mb-2">{season.season}</h3>
                    <p className="text-sm opacity-90 mb-1">{season.months}</p>
                    <p className="mb-3">{season.temp}</p>
                    <p className="text-sm opacity-90">{season.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Popular Travel Routes
            </h2>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {popularRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="p-6 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl text-gray-900">{route.name}</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                        {route.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <p className="text-sm">{route.route}</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="text-orange-600">Highlights:</span> {route.highlights}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              How to Reach
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <Plane className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl text-gray-900 mb-2">By Air</h3>
                <p className="text-sm text-gray-600">
                  Major airports in Lucknow, Varanasi, Prayagraj, and Agra
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <Train className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl text-gray-900 mb-2">By Train</h3>
                <p className="text-sm text-gray-600">
                  Well-connected railway network across all major cities
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <Car className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl text-gray-900 mb-2">By Road</h3>
                <p className="text-sm text-gray-600">
                  Excellent highway network and bus services
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
