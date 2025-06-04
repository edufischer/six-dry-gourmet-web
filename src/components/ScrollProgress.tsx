
import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800/50 z-50">
      <div 
        className="h-full transition-all duration-300 ease-out"
        style={{ 
          width: `${progress}%`,
          background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`
        }}
      />
    </div>
  );
};

export default ScrollProgress;
