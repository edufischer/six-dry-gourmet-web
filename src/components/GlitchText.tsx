
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

const GlitchText = ({ text, className = '', trigger = false }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsGlitching(true);
      const timer = setTimeout(() => setIsGlitching(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 3 seconds
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 300);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={isGlitching ? {
          x: [0, -2, 2, -1, 1, 0],
          y: [0, 1, -1, 2, -2, 0],
          skew: [0, 2, -2, 1, -1, 0],
        } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      
      {/* Glitch layers */}
      <span 
        className={`absolute top-0 left-0 z-0 transition-all duration-150 ${
          isGlitching ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          color: '#ff0000',
          transform: isGlitching ? 'translate(-2px, 1px)' : 'translate(0, 0)',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.2)'
        }}
      >
        {text}
      </span>
      
      <span 
        className={`absolute top-0 left-0 z-0 transition-all duration-150 ${
          isGlitching ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          color: '#00ffff',
          transform: isGlitching ? 'translate(2px, -1px)' : 'translate(0, 0)',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.2)'
        }}
      >
        {text}
      </span>
      
      <span 
        className={`absolute top-0 left-0 z-0 transition-all duration-100 ${
          isGlitching ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          color: '#00ff00',
          transform: isGlitching ? 'translate(1px, 2px)' : 'translate(0, 0)',
          mixBlendMode: 'screen',
          filter: 'blur(0.5px)'
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;
