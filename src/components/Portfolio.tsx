import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PortfolioItem } from '../types';
import { portfolioItems } from '../data/portfolio';
import AudioPlayer from './AudioPlayer';

type Category = 'all' | PortfolioItem['category'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Work' },
    { value: 'sound-design', label: 'Sound Design' },
    { value: 'music', label: 'Music' },
    { value: 'editing', label: 'Editing' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
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
            className="text-4xl md:text-5xl font-display font-semibold mb-4 text-muted-white"
          >
            Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 mb-12 text-lg"
          >
            Explore our work across sound design, music composition, and audio editing
          </motion.p>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-lg font-semibold uppercase tracking-[0.16em] text-xs transition-all ${
                  selectedCategory === category.value
                    ? 'bg-blood-red text-white glow-red'
                    : 'bg-gray-900 text-gray-400 hover:text-muted-white border border-gray-800'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card-glass border border-gray-800/80 rounded-lg p-6 hover:border-blood-red transition-all duration-300 group"
                >
                  <h3 className="text-xl font-display font-semibold mb-2 text-muted-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>

                  {/* Media */}
                  {item.audioUrl && (
                    <AudioPlayer src={item.audioUrl} title={item.title} />
                  )}

                  {item.videoUrl && (
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <iframe
                        src={item.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* Tools */}
                  {item.tools && item.tools.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
