
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

        // Tempo mínimo de loading baseado no dispositivo
        const minLoadingTime = isSlowConnection ? 3000 : isMobile ? 2500 : 2000;
        const startTime = Date.now();

        let loadedCount = 0;
        const totalCritical = config.priorityImages.length + (isMobile ? 0 : config.criticalVideos.length);

        const updateProgress = (type: string, name: string) => {
          loadedCount++;
          const currentProgress = Math.min((loadedCount / totalCritical) * 85, 85); // Máximo 85% para assets críticos
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

        // Garantir tempo mínimo de loading
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        if (remainingTime > 0) {
          console.log(`⏳ Aguardando ${remainingTime}ms para experiência suave...`);
          
          // Animação suave do progresso durante a espera
          const steps = Math.ceil(remainingTime / 50);
          const progressIncrement = (100 - progress) / steps;
          
          for (let i = 0; i < steps; i++) {
            await new Promise(resolve => setTimeout(resolve, 50));
            setProgress(prev => Math.min(prev + progressIncrement, 100));
          }
        }

        console.log('🚀 Assets críticos carregados! Removendo loader...');

        // Finalizar loading
        setProgress(100);
        await new Promise(resolve => setTimeout(resolve, 200));
        setIsLoading(false);
        
        // Iniciar carregamento lazy em background após um delay
        setTimeout(() => {
          if (!isSlowConnection) {
            loadLazyAssets(config);
          }
        }, 1500);

      } catch (error) {
        console.error('❌ Erro no carregamento inteligente:', error);
        // Remover loader mesmo com erro, mas com delay mínimo
        setTimeout(() => {
          setProgress(100);
          setIsLoading(false);
        }, isSlowConnection ? 2000 : 1500);
      }
    };

    const loadLazyAssets = (config: PreloadConfig) => {
      console.log('📦 Iniciando carregamento lazy em background...');
      
      // Carregar imagens lazy com delay escalonado
      config.lazyImages.forEach((url, index) => {
        setTimeout(() => {
          const img = new Image();
          img.onload = () => console.log(`🖼️ Lazy loaded: ${url}`);
          img.src = url;
        }, index * 200);
      });

      // Pré-carregar metadados dos vídeos (não no mobile com conexão lenta)
      if (!isMobile || !isSlowConnection) {
        config.deferredVideos.forEach((url, index) => {
          setTimeout(() => {
            const video = document.createElement('video');
            video.onloadedmetadata = () => console.log(`🎥 Video metadata cached: ${url}`);
            video.src = url;
            video.preload = 'metadata';
            video.muted = true;
          }, 1000 + (index * 300));
        });
      }
    };

    loadCriticalAssets();
  }, [isMobile, isSlowConnection]);

  return { isLoading, progress };
};
