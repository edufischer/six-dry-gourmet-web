
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  progress: number;
}

const LoadingScreen = ({ isLoading, progress }: LoadingScreenProps) => {
  const getLoadingMessage = (progress: number) => {
    if (progress < 30) return 'Carregando imagens...';
    if (progress < 60) return 'Carregando vídeos...';
    if (progress < 90) return 'Preparando componentes...';
    if (progress < 100) return 'Finalizando...';
    return 'Pronto!';
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-[#B56D57] via-zinc-950 to-[#A4513E]" />
          </div>

          <div className="relative z-10 text-center px-4">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png" 
                alt="Six Dry Aged Logo" 
                className="mx-auto max-w-xs h-auto"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Preparando a melhor experiência
            </motion.h2>

            {/* Dynamic Loading Message */}
            <motion.p
              key={getLoadingMessage(progress)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-400 text-lg mb-8"
            >
              {getLoadingMessage(progress)}
            </motion.p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-4">
              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full rounded-full relative"
                  style={{ 
                    background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                </motion.div>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-zinc-400 text-sm"
                >
                  {Math.round(progress)}% carregado
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-zinc-500 text-xs"
                >
                  {progress === 100 ? 'Concluído!' : 'Aguarde...'}
                </motion.p>
              </div>
            </div>

            {/* Loading Animation */}
            <motion.div
              animate={{ rotate: progress < 100 ? 360 : 0 }}
              transition={{ 
                duration: 2, 
                repeat: progress < 100 ? Infinity : 0, 
                ease: "linear" 
              }}
              className="w-8 h-8 mx-auto border-2 border-transparent border-t-[#B56D57] rounded-full"
            />
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(progress < 100 ? 20 : 5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                  opacity: 0
                }}
                animate={{
                  y: -100,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: progress < 100 ? Infinity : 0,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: progress < 100 ? '#B56D57' : '#E1B8A5' }}
              />
            ))}
          </div>

          {/* Success indicator when complete */}
          {progress === 100 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)` }}>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-6 h-6 text-zinc-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
