
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const AnimatedTooltip = ({ children, content, position = 'top' }: AnimatedTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPosition = () => {
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', x: '-50%', mb: 2 };
      case 'bottom':
        return { top: '100%', left: '50%', x: '-50%', mt: 2 };
      case 'left':
        return { right: '100%', top: '50%', y: '-50%', mr: 2 };
      case 'right':
        return { left: '100%', top: '50%', y: '-50%', ml: 2 };
      default:
        return { bottom: '100%', left: '50%', x: '-50%', mb: 2 };
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 px-3 py-2 text-sm text-white bg-zinc-800 rounded-lg border whitespace-nowrap"
            style={{ 
              borderColor: 'rgba(181, 109, 87, 0.3)',
              ...getPosition()
            }}
          >
            {content}
            <div 
              className="absolute w-2 h-2 bg-zinc-800 border transform rotate-45"
              style={{
                borderColor: 'rgba(181, 109, 87, 0.3)',
                ...(position === 'top' && { top: '100%', left: '50%', marginLeft: '-4px', borderTop: 'none', borderLeft: 'none' }),
                ...(position === 'bottom' && { bottom: '100%', left: '50%', marginLeft: '-4px', borderBottom: 'none', borderRight: 'none' }),
                ...(position === 'left' && { left: '100%', top: '50%', marginTop: '-4px', borderLeft: 'none', borderBottom: 'none' }),
                ...(position === 'right' && { right: '100%', top: '50%', marginTop: '-4px', borderRight: 'none', borderTop: 'none' }),
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTooltip;
