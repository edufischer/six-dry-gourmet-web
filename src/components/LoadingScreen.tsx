
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => setIsVisible(false), 500);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-zinc-950 flex items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 opacity-0 animate-fade-in">
          <img 
            src="/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png" 
            alt="Six Dry Aged Logo" 
            className="mx-auto max-w-xs h-auto"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`
              }}
            />
          </div>
          <div className="flex justify-between text-sm text-zinc-400 mt-2">
            <span>Carregando...</span>
            <span>{Math.floor(progress)}%</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-lg font-semibold" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Preparando a experiência Six Dry Aged
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: '#B56D57',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#B56D57] rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#E1B8A5] rotate-12 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#A4513E] rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
