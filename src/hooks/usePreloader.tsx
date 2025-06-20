import { useState, useEffect } from 'react';

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      // Lista de todas as imagens e vídeos
      const mediaUrls = [
        '/images/banner.png',
        '/images/logo_six.png',
        '/images/tabua_carne.png',
        '/images/foto_dry_aged.png',
        '/images/foto_reserva.png',
        '/images/foto_wagyu.png',
        '/images/foto_manejo.png',
        '/videos/loja.mp4',
        '/videos/industria.mp4',
        '/videos/industria_2.mp4',
      ];

      try {
        // Carrega todos os componentes da pasta components
        const componentModules = import.meta.glob('/src/components/*.tsx');
        const componentPaths = Object.keys(componentModules);

        console.log('Componentes encontrados:', componentPaths);
        console.log('Total de componentes:', componentPaths.length);
        console.log('Total de mídia:', mediaUrls.length);

        let loadedCount = 0;
        const totalAssets = mediaUrls.length + componentPaths.length;

        console.log('Total de assets:', totalAssets);

        // Função para atualizar progresso
        const updateProgress = (type, name) => {
          loadedCount++;
          const currentProgress = (loadedCount / totalAssets) * 90;
          console.log(`Carregado [${type}]: ${name} - Progresso: ${Math.round(currentProgress)}% (${loadedCount}/${totalAssets})`);
          setProgress(currentProgress);
        };

        // Carregar imagens e vídeos
        const mediaPromises = mediaUrls.map((url) => {
          return new Promise((resolve) => {
            if (url.endsWith('.mp4')) {
              // Para vídeos
              const video = document.createElement('video');
              video.oncanplaythrough = () => {
                updateProgress('VIDEO', url);
                resolve(video);
              };
              video.onerror = () => {
                console.warn(`Erro ao carregar vídeo: ${url}`);
                updateProgress('VIDEO_ERROR', url);
                resolve(null);
              };
              video.onloadedmetadata = () => {
                updateProgress('VIDEO', url);
                resolve(video);
              };
              video.src = url;
              video.preload = 'metadata';
              video.muted = true; // Necessário para alguns navegadores
            } else {
              // Para imagens
              const img = new Image();
              img.onload = () => {
                updateProgress('IMAGE', url);
                resolve(img);
              };
              img.onerror = () => {
                console.warn(`Erro ao carregar imagem: ${url}`);
                updateProgress('IMAGE_ERROR', url);
                resolve(null);
              };
              img.src = url;
            }
          });
        });

        // Carregar componentes dinamicamente
        const componentPromises = componentPaths.map(async (path) => {
          try {
            console.log(`Carregando componente: ${path}`);
            await componentModules[path]();
            updateProgress('COMPONENT', path.split('/').pop());
          } catch (error) {
            console.warn(`Erro ao carregar componente ${path}:`, error);
            updateProgress('COMPONENT_ERROR', path.split('/').pop());
          }
        });

        // Carrega tudo em paralelo
        console.log('Iniciando carregamento de todos os assets...');
        await Promise.all([...mediaPromises, ...componentPromises]);

        console.log('Todos os assets carregados! Finalizando preloader...');

        // Finaliza o carregamento
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }, 500);

      } catch (error) {
        console.error('Erro geral ao carregar assets:', error);
        // Mesmo com erro, remove o loading após um tempo
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }, 2000);
      }
    };

    loadAssets();
  }, []);

  return { isLoading, progress };
};