import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4 section-sheen">
      <div className="max-w-4xl mx-auto">
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
              Sound of Heart was born from a simple belief: <span className="text-blood-red">sound is emotion made audible</span>. Every project we touch is infused with passion, precision, and an unwavering commitment to quality.
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
