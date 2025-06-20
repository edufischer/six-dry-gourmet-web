
import { useState, useRef, useEffect, useCallback } from 'react';
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
  const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isMobile, isSlowConnection } = useDeviceOptimization();

  // Função para limpar timeouts
  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Configurar observer com threshold mais agressivo
  useEffect(() => {
    const threshold = isMobile ? 0.2 : 0.1;
    const rootMargin = isMobile ? '150px' : '200px';

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          console.log(`👁️ Vídeo entrou na viewport: ${src}`);
          setIsInView(true);
          
          // Adicionar um pequeno delay para evitar carregamento muito rápido
          clearTimeouts();
          timeoutRef.current = setTimeout(() => {
            if (entry.isIntersecting) {
              loadVideo();
            }
          }, 100);
        }
      },
      { 
        threshold, 
        rootMargin 
      }
    );

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeouts();
    };
  }, [src, isInView]);

  const loadVideo = useCallback(() => {
    if (loadingState !== 'idle' || !videoRef.current) return;

    // No mobile com conexão lenta, não carregar automaticamente
    if (isMobile && isSlowConnection) {
      console.log(`⏸️ Vídeo pausado para conexão lenta: ${src}`);
      return;
    }

    console.log(`🎥 Iniciando carregamento do vídeo: ${src}`);
    setLoadingState('loading');

    const video = videoRef.current;
    video.src = src;

    const handleLoadedData = () => {
      console.log(`✅ Vídeo carregado com sucesso: ${src}`);
      setIsLoaded(true);
      setLoadingState('loaded');
    };

    const handleError = () => {
      console.error(`❌ Erro ao carregar vídeo: ${src}`);
      setLoadingState('error');
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    video.load();

    // Cleanup listeners
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [src, isMobile, isSlowConnection, loadingState]);

  // Placeholder para conexão lenta ou erro
  if ((isMobile && isSlowConnection && !isLoaded) || loadingState === 'error') {
    return (
      <div 
        className={`${className} bg-zinc-800 flex items-center justify-center`}
        style={{ aspectRatio: '16/9' }}
      >
        <div className="text-zinc-400 text-center p-4">
          {loadingState === 'error' ? (
            <div>
              <div className="text-sm mb-2">Erro ao carregar vídeo</div>
              <button 
                onClick={() => {
                  setLoadingState('idle');
                  setIsLoaded(false);
                  loadVideo();
                }}
                className="px-4 py-2 bg-gradient-to-r from-[#B56D57] to-[#A4513E] text-white rounded text-sm hover:opacity-90"
              >
                Tentar Novamente
              </button>
            </div>
          ) : (
            <div>
              <div className="text-sm mb-2">Vídeo disponível</div>
              <button 
                onClick={() => {
                  setIsLoaded(true);
                  loadVideo();
                }}
                className="px-4 py-2 bg-gradient-to-r from-[#B56D57] to-[#A4513E] text-white rounded text-sm hover:opacity-90"
              >
                Carregar Vídeo
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Placeholder de loading
  if (loadingState === 'loading') {
    return (
      <div 
        className={`${className} bg-zinc-800 flex items-center justify-center`}
        style={{ aspectRatio: '16/9' }}
      >
        <div className="text-zinc-400 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-transparent border-t-[#B56D57] rounded-full mx-auto mb-2"></div>
          <div className="text-sm">Carregando vídeo...</div>
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay && isLoaded && loadingState === 'loaded'}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster}
      style={{ opacity: loadingState === 'loaded' ? 1 : 0 }}
    />
  );
};

export default OptimizedVideo;
