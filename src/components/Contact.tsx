import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaYoutube, FaInstagram } from 'react-icons/fa';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-sheen overflow-hidden">
      {/* Animated blurred backgrounds */}
      <motion.div
        className="absolute -top-20 right-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(193,23,23,0.22),rgba(193,23,23,0)_70%)] blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-20 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.12),rgba(139,0,0,0)_70%)] blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
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
            className="text-4xl md:text-5xl font-display font-semibold mb-4 text-muted-white"
          >
            Let's Create Something Powerful
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 mb-12 text-lg"
          >
            Ready to bring your project to life? Get in touch and let's discuss how we can help.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6 card-glass border border-gray-800/80 rounded-xl p-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-muted-white focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-muted-white focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-muted-white focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/40 transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="sound-design">Sound Design</option>
                  <option value="audio-editing">Audio Editing</option>
                  <option value="music-composition">Music Composition</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-muted-white focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/40 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blood-red hover:bg-dark-red text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed glow-red"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-sm"
                >
                  Thank you! Your message has been sent. We'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm"
                >
                  Something went wrong. Please try again or contact us directly.
                </motion.p>
              )}
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8 card-glass border border-gray-800/80 rounded-xl p-6"
            >
              <div>
                <h3 className="text-xl font-display font-semibold mb-4 text-muted-white">Get in Touch</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to help bring your vision to life.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaEnvelope className="text-blood-red" size={20} />
                  <a
                    href="mailto:contact@soundofheart.com"
                    className="text-muted-white hover:text-blood-red transition-colors"
                  >
                    contact@soundofheart.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-display font-semibold mb-4 text-muted-white">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blood-red hover:border-blood-red transition-all"
                  >
                    <FaYoutube size={20} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blood-red hover:border-blood-red transition-all"
                  >
                    <FaInstagram size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
