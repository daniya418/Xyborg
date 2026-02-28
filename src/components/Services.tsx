import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data/services';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative min-h-screen flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c12] overflow-hidden">
      {/* Animated blurred backgrounds */}
      <motion.div
        className="absolute -top-10 -right-20 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(193,23,23,0.2),rgba(193,23,23,0)_70%)] blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -left-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.15),rgba(139,0,0,0)_70%)] blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative w-full max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-semibold mb-16 text-center text-muted-white"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="card-glass border border-gray-800/80 rounded-lg p-8 hover:border-blood-red transition-all duration-300 relative group"
            >
              {/* Red accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blood-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-muted-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
