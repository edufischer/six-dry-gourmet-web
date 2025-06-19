import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40"
          style={{
            background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
            boxShadow: '0 4px 15px rgba(181, 109, 87, 0.3)'
          }}
        >
          <ChevronUp className="w-6 h-6 text-zinc-950" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
