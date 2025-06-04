
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowEffect?: boolean;
}

const Card3D = ({ 
  children, 
  className = '', 
  intensity = 15,
  glowEffect = true 
}: Card3DProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * intensity;
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * intensity;
    
    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative cursor-pointer ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
        z: isHovered ? 50 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div 
        className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
          glowEffect && isHovered ? 'shadow-2xl' : 'shadow-lg'
        }`}
        style={{
          boxShadow: glowEffect && isHovered 
            ? '0 25px 50px rgba(181, 109, 87, 0.4), 0 0 30px rgba(181, 109, 87, 0.2)' 
            : undefined,
          transform: 'translateZ(0)',
        }}
      >
        {children}
        
        {/* Shine effect */}
        <div 
          className={`absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(
              ${135 + rotateY}deg, 
              transparent 30%, 
              rgba(255, 255, 255, 0.2) 50%, 
              transparent 70%
            )`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Card3D;
