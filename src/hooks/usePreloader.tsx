
import { useState, useEffect } from 'react';

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      // Todas as imagens do site
      const imageUrls = [
        // Logos e uploads
        '/lovable-uploads/143f93ed-535f-4078-a489-b1f36e3f1289.png',
        '/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png',
        '/lovable-uploads/banner.png',
        
        // Imagens dos produtos/seções
        '/images/foto_dry_aged.png',
        '/images/foto_manejo.png',
        '/images/foto_reserva.png',
        '/images/foto_wagyu.png',
      ];

      // Todos os vídeos do site
      const videoUrls = [
        '/videos/industria.mp4',
        '/videos/loja.mp4'
      ];

      // Componentes críticos para pré-carregar
      const componentPromises = [
        import('../components/Header'),
        import('../components/Hero'),
        import('../components/About'),
        import('../components/Products'),
        import('../components/Shop'),
        import('../components/Industry'),
        import('../components/Sustainability'),
        import('../components/HowToOrder'),
        import('../components/Location'),
        import('../components/Partners'),
        import('../components/Footer'),
        import('../components/AnimatedBackground'),
        import('../components/ScrollProgress'),
        import('../components/BackToTop'),
        import('../components/RevealAnimation'),
      ];

      const totalAssets = imageUrls.length + videoUrls.length + componentPromises.length;
      let loadedCount = 0;

      const updateProgress = () => {
        loadedCount++;
        const currentProgress = (loadedCount / totalAssets) * 100;
        setProgress(Math.min(currentProgress, 95)); // Máximo 95% até todos carregarem
      };

      // Carregamento de imagens
      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            updateProgress();
            resolve(img);
          };
          img.onerror = () => {
            console.log(`Erro ao carregar imagem: ${url}`);
            updateProgress(); // Continua mesmo com erro
            resolve(null);
          };
          img.src = url;
        });
      });

      // Carregamento de vídeos
      const videoPromises = videoUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const video = document.createElement('video');
          video.src = url;
          video.preload = 'auto';
          video.oncanplaythrough = () => {
            updateProgress();
            resolve(video);
          };
          video.onerror = () => {
            console.log(`Erro ao carregar vídeo: ${url}`);
            updateProgress(); // Continua mesmo com erro
            resolve(null);
          };
          // Timeout para vídeos que demoram muito
          setTimeout(() => {
            updateProgress();
            resolve(null);
          }, 5000);
        });
      });

      // Carregamento de componentes
      const componentLoadPromises = componentPromises.map((componentPromise) => {
        return componentPromise.then(() => {
          updateProgress();
        }).catch((error) => {
          console.log('Erro ao carregar componente:', error);
          updateProgress(); // Continua mesmo com erro
        });
      });

      try {
        // Aguarda todos os assets carregarem
        await Promise.all([
          ...imagePromises, 
          ...videoPromises, 
          ...componentLoadPromises
        ]);

        // Garante que chegue a 100% após todos os assets
        setProgress(100);

        // Pequena pausa para suavizar a transição
        setTimeout(() => {
          setIsLoading(false);
        }, 800);

      } catch (error) {
        console.log('Erro geral ao carregar assets:', error);
        
        // Em caso de erro, ainda completa o loading após um tempo
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    loadAssets();
  }, []);

  return { isLoading, progress };
};
