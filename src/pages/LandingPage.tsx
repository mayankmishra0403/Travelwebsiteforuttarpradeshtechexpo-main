import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import logo from 'figma:asset/87e949815092e3406893b62c4c4bcb47dd69c256.png';
import { ArrowRight } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="India Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-purple-900/70 to-blue-900/80" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex justify-center"
          >
            <motion.img 
              src={logo} 
              alt="Darshan360" 
              className="h-24 sm:h-32 md:h-40 w-auto drop-shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-xl">
              <span className="text-white tracking-[0.3em] uppercase text-sm">Incredible India</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          >
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Uttar Pradesh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the soul of India where timeless heritage,
            <br className="hidden sm:block" />
            vibrant culture, and spiritual wisdom converge
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/home')}
              className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/explore')}
              className="px-10 py-5 bg-white/10 backdrop-blur-lg text-white rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all text-lg shadow-xl"
            >
              Explore Regions
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 flex justify-center gap-8 text-white/60"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">🕉</div>
              <p className="text-xs uppercase tracking-wider">Spiritual</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">🏛</div>
              <p className="text-xs uppercase tracking-wider">Heritage</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">🎭</div>
              <p className="text-xs uppercase tracking-wider">Culture</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.9 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">🌿</div>
              <p className="text-xs uppercase tracking-wider">Nature</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
