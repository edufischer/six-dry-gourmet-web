
import { useState, useEffect } from 'react';
import { useDeviceOptimization } from './useDeviceOptimization';

interface PreloadConfig {
  priorityImages: string[];
  lazyImages: string[];
  criticalVideos: string[];
  deferredVideos: string[];
}

export const useSmartPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isMobile, isSlowConnection } = useDeviceOptimization();

  useEffect(() => {
    const loadCriticalAssets = async () => {
      // Configuração baseada no dispositivo
      const config: PreloadConfig = {
        priorityImages: [
          '/images/logo_six.png',
          '/images/banner.png' // Apenas hero essencial
        ],
        lazyImages: [
          '/images/tabua_carne.png',
          '/images/foto_dry_aged.png',
          '/images/foto_reserva.png',
          '/images/foto_wagyu.png',
          '/images/foto_manejo.png'
        ],
        criticalVideos: [], // Nenhum vídeo crítico no mobile
        deferredVideos: [
          '/videos/loja.mp4',
          '/videos/industria.mp4',
          '/videos/industria_2.mp4'
        ]
      };

      try {
        console.log('Iniciando carregamento inteligente...');
        console.log('Mobile:', isMobile, 'Conexão lenta:', isSlowConnection);

        let loadedCount = 0;
        const totalCritical = config.priorityImages.length + (isMobile ? 0 : config.criticalVideos.length);

        const updateProgress = (type: string, name: string) => {
          loadedCount++;
          const currentProgress = (loadedCount / totalCritical) * 100;
          console.log(`✅ Carregado [${type}]: ${name} - ${Math.round(currentProgress)}%`);
          setProgress(currentProgress);
        };

        // Carregar apenas imagens prioritárias
        const priorityPromises = config.priorityImages.map((url) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              updateProgress('PRIORITY_IMAGE', url);
              resolve(img);
            };
            img.onerror = () => {
              console.warn(`❌ Erro ao carregar imagem crítica: ${url}`);
              updateProgress('PRIORITY_ERROR', url);
              resolve(null);
            };
            img.src = url;
          });
        });

        // No mobile ou conexão lenta, pular vídeos críticos
        const videoPromises = (isMobile || isSlowConnection) ? [] : 
          config.criticalVideos.map((url) => {
            return new Promise((resolve) => {
              const video = document.createElement('video');
              video.oncanplaythrough = () => {
                updateProgress('CRITICAL_VIDEO', url);
                resolve(video);
              };
              video.onerror = () => {
                console.warn(`❌ Erro ao carregar vídeo crítico: ${url}`);
                updateProgress('CRITICAL_ERROR', url);
                resolve(null);
              };
              video.src = url;
              video.preload = 'metadata';
              video.muted = true;
            });
          });

        // Carregar assets críticos
        await Promise.all([...priorityPromises, ...videoPromises]);

        console.log('🚀 Assets críticos carregados! Removendo loader...');

        // Finalizar loading rapidamente
        setTimeout(() => {
          setProgress(100);
          setIsLoading(false);
          
          // Iniciar carregamento lazy em background
          if (!isSlowConnection) {
            setTimeout(() => loadLazyAssets(config), 1000);
          }
        }, 300);

      } catch (error) {
        console.error('❌ Erro no carregamento inteligente:', error);
        // Remover loader mesmo com erro
        setTimeout(() => {
          setProgress(100);
          setIsLoading(false);
        }, 1000);
      }
    };

    const loadLazyAssets = (config: PreloadConfig) => {
      console.log('📦 Iniciando carregamento lazy em background...');
      
      // Carregar imagens lazy
      config.lazyImages.forEach((url) => {
        const img = new Image();
        img.onload = () => console.log(`🖼️ Lazy loaded: ${url}`);
        img.src = url;
      });

      // Carregar vídeos apenas quando necessário (não no mobile com conexão lenta)
      if (!isMobile || !isSlowConnection) {
        config.deferredVideos.forEach((url) => {
          const video = document.createElement('video');
          video.oncanplaythrough = () => console.log(`🎥 Video cached: ${url}`);
          video.src = url;
          video.preload = 'none'; // Só carrega quando requisitado
          video.muted = true;
        });
      }
    };

    loadCriticalAssets();
  }, [isMobile, isSlowConnection]);

  return { isLoading, progress };
};
