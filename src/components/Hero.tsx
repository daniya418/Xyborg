import { motion } from 'framer-motion';
import { FaPlay, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Ambient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0d14] to-black"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(193,23,23,0.35),rgba(193,23,23,0)_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-120px] right-[-80px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(229,229,229,0.12),rgba(229,229,229,0)_60%)]"
        aria-hidden="true"
      />
      
      {/* Subtle animated noise */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-semibold mb-6 tracking-tight leading-[0.9]"
        >
          <span className="block text-muted-white">Sound of</span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-blood-red glow-red-strong"
            style={{ textShadow: '0 0 40px rgba(139, 0, 0, 0.5)' }}
          >
            Heart
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 font-light tracking-wide"
        >
          Where sound meets soul
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-blood-red hover:bg-dark-red text-white font-semibold rounded-lg transition-colors flex items-center gap-2 glow-red uppercase tracking-[0.12em] text-sm"
          >
            <FaPlay size={16} />
            Listen to Our Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-blood-red text-blood-red hover:bg-blood-red hover:text-white font-semibold rounded-lg transition-all flex items-center gap-2 uppercase tracking-[0.12em] text-sm"
          >
            <FaEnvelope size={16} />
            Contact Studio
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blood-red rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
