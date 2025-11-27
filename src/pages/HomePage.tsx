import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Camera, Calendar, Phone, ChevronDown } from 'lucide-react';
import { Card } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { getAllCities } from '../data/cities-data';
import { useEffect, useRef } from 'react';
import { FloatingElements } from '../components/FloatingElements';

const heroImage = 'https://images.unsplash.com/photo-1665849863716-b527b5e9ed62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWolMjBNYWhhbCUyMHN1bnNldHxlbnwxfHx8fDE3NjI4MzQyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const highlights = [
  {
    icon: MapPin,
    title: 'Explore Regions',
    description: 'Discover four diverse regions with unique heritage',
    link: '/explore',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Camera,
    title: 'Photo Gallery',
    description: 'Visual journey through our stunning landscapes',
    link: '/gallery',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Calendar,
    title: 'Plan Your Visit',
    description: 'Complete travel guides and route suggestions',
    link: '/plan',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Phone,
    title: 'Contact Us',
    description: 'Get in touch for personalized assistance',
    link: '/contact',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const featuredCities = getAllCities().slice(0, 4);
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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Force scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center justify-center">
        <FloatingElements />

        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback
            src={heroImage}
            alt="Uttar Pradesh Tourism"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block px-6 py-2 glass rounded-full mb-6">
                <span className="text-white text-sm tracking-[0.2em] uppercase font-medium">Incredible India</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experience the Spirit of
              <br />
              <span className="gradient-text inline-block mt-2">
                Uttar Pradesh
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light"
            >
              Where ancient heritage meets vibrant culture, and every corner tells a timeless story
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/explore')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all"
              >
                Explore Destinations
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/plan')}
                className="px-8 py-4 glass text-white rounded-full text-lg font-semibold border border-white/30 hover:border-white/50 transition-all"
              >
                Plan Your Trip
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-white/70"
            >
              <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
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
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                className="h-full"
              >
                <Card
                  className="h-full p-8 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer group border-none shadow-lg rounded-2xl overflow-hidden relative card-3d"
                  onClick={() => navigate(item.link)}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />

                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most iconic landmarks and sacred sites that define our heritage
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                onClick={() => navigate(`/city?id=${destination.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="inline-block px-3 py-1 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-3">
                      {destination.location}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {destination.name}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {destination.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              onClick={() => navigate('/explore')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all animate-pulse-glow"
            >
              View All Regions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
