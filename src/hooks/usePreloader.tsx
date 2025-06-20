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

      // Carrega automaticamente todos os componentes da pasta ui (Vite)
      // Se não estiver usando Vite, use a lista manual comentada abaixo
      const uiModules = import.meta.glob('../components/ui/*');
      const uiComponentPaths = Object.keys(uiModules);

      // Lista manual (descomente se não estiver usando Vite)
      // const uiComponents = [
      //   'Button',
      //   'Card',
      //   'Modal',
      //   // ... outros componentes
      // ];

      let loadedCount = 0;
      const totalAssets = mediaUrls.length + uiComponentPaths.length;

      // Função para atualizar progresso
      const updateProgress = () => {
        loadedCount++;
        setProgress((loadedCount / totalAssets) * 90);
      };

      // Carregar imagens e vídeos
      const mediaPromises = mediaUrls.map((url) => {
        return new Promise((resolve, reject) => {
          if (url.endsWith('.mp4')) {
            // Para vídeos
            const video = document.createElement('video');
            video.onloadeddata = () => {
              updateProgress();
              resolve(video);
            };
            video.onerror = reject;
            video.src = url;
            video.preload = 'metadata';
          } else {
            // Para imagens
            const img = new Image();
            img.onload = () => {
              updateProgress();
              resolve(img);
            };
            img.onerror = reject;
            img.src = url;
          }
        });
      });

      // Carregar componentes UI dinamicamente
      const componentPromises = uiComponentPaths.map(async (path) => {
        try {
          await uiModules[path]();
          updateProgress();
        } catch (error) {
          console.warn(`Erro ao carregar componente ${path}:`, error);
          updateProgress(); // Continua mesmo com erro
        }
      });

      // Se estiver usando lista manual, descomente:
      // const componentPromises = uiComponents.map(async (componentName) => {
      //   try {
      //     await import(`../components/ui/${componentName}`);
      //     updateProgress();
      //   } catch (error) {
      //     console.warn(`Erro ao carregar componente ${componentName}:`, error);
      //     updateProgress();
      //   }
      // });

      try {
        // Carrega tudo em paralelo
        await Promise.all([...mediaPromises, ...componentPromises]);

        // Aguarda um pouco mais para garantir que tudo está pronto
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }, 1000);
      } catch (error) {
        console.log('Erro ao carregar assets:', error);
        // Mesmo com erro, remove o loading após um tempo
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    loadAssets();
  }, []);

  return { isLoading, progress };
};