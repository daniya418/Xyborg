import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { testimonials } from '../data/testimonials';

export default function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="trust" className="py-24 px-4 bg-[#0c0c12]">
      <div className="max-w-6xl mx-auto">
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
            className="text-4xl md:text-5xl font-display font-semibold mb-16 text-center text-muted-white"
          >
            Trusted by Creators
          </motion.h2>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="card-glass border border-gray-800/80 rounded-lg p-6"
              >
                <p className="text-gray-400 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-muted-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Worked With Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-display font-semibold mb-8 text-muted-white">Worked With</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <span className="text-lg">Independent Films</span>
              <span className="text-blood-red">•</span>
              <span className="text-lg">Game Studios</span>
              <span className="text-blood-red">•</span>
              <span className="text-lg">Brand Agencies</span>
              <span className="text-blood-red">•</span>
              <span className="text-lg">Content Creators</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
