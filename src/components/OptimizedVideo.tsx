
import { useState, useRef, useEffect } from 'react';
import { useDeviceOptimization } from '../hooks/useDeviceOptimization';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
}

const OptimizedVideo = ({ 
  src, 
  className = "", 
  autoPlay = true, 
  muted = true, 
  loop = true, 
  playsInline = true,
  poster 
}: OptimizedVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile, isSlowConnection } = useDeviceOptimization();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current && !isLoaded) {
      // No mobile com conexão lenta, não carregar automaticamente
      if (isMobile && isSlowConnection) {
        console.log(`⏸️ Vídeo pausado para conexão lenta: ${src}`);
        return;
      }

      console.log(`🎥 Carregando vídeo sob demanda: ${src}`);
      videoRef.current.src = src;
      videoRef.current.load();
      setIsLoaded(true);
    }
  }, [isInView, src, isMobile, isSlowConnection, isLoaded]);

  // Placeholder para conexão lenta
  if (isMobile && isSlowConnection && !isLoaded) {
    return (
      <div 
        className={`${className} bg-zinc-800 flex items-center justify-center`}
        style={{ aspectRatio: '16/9' }}
      >
        <div className="text-zinc-400 text-center p-4">
          <div className="text-sm mb-2">Vídeo disponível</div>
          <button 
            onClick={() => setIsLoaded(true)}
            className="px-4 py-2 bg-gradient-to-r from-[#B56D57] to-[#A4513E] text-white rounded text-sm"
          >
            Carregar Vídeo
          </button>
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay && isLoaded}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster}
      onLoadedData={() => console.log(`✅ Vídeo carregado: ${src}`)}
    />
  );
};

export default OptimizedVideo;
