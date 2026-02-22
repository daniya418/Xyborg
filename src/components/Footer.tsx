import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Sound of Heart. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
