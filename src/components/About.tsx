import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-sheen overflow-hidden">
      {/* Animated blurred backgrounds */}
      <motion.div
        className="absolute top-20 left-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(193,23,23,0.25),rgba(193,23,23,0)_70%)] blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(229,229,229,0.08),rgba(229,229,229,0)_70%)] blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-semibold mb-8 text-muted-white"
          >
            About the Studio
          </motion.h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Xyborg was born from a simple belief: <span className="text-blood-red">sound is emotion made audible</span>. Every project we touch is infused with passion, precision, and an unwavering commitment to quality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We specialize in creating audio experiences that don't just accompany visuals—they elevate them. Whether it's a film score that makes hearts race, sound design that transports audiences to another world, or audio editing that brings clarity to every word, we approach each project with the same dedication.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our philosophy is built on three pillars: <span className="text-muted-white font-medium">emotion</span>, <span className="text-muted-white font-medium">detail</span>, and <span className="text-muted-white font-medium">professionalism</span>. We listen deeply, work meticulously, and deliver consistently. Because when sound connects with the heart, magic happens.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
