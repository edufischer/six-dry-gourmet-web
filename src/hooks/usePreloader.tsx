import { useState, useEffect } from 'react';

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      const imageUrls = [
        '/lovable-uploads/143f93ed-535f-4078-a489-b1f36e3f1289.png',
        '/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png',
        '/images/foto_dry_aged.png',
        '/images/foto_manejo.png',
        '/images/foto_reserva.png',
        '/images/foto_wagyu.png',
      ];

      const videoUrls = [
        '/videos/industria.mp4',
        '/videos/loja.mp4'
      ];

      const totalAssets = imageUrls.length + videoUrls.length;
      let loadedCount = 0;

      const updateProgress = () => {
        loadedCount++;
        setProgress((loadedCount / totalAssets) * 100);
      };

      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            updateProgress();
            resolve(img);
          };
          img.onerror = reject;
          img.src = url;
        });
      });

      const videoPromises = videoUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const video = document.createElement('video');
          video.src = url;
          video.preload = 'auto';
          video.oncanplaythrough = () => {
            updateProgress();
            resolve(video);
          };
          video.onerror = reject;
        });
      });

      try {
        await Promise.all([...imagePromises, ...videoPromises]);

        setTimeout(() => {
          setIsLoading(false);
        }, 500); // pequena pausa para suavizar
      } catch (error) {
        console.log('Erro ao carregar ativos:', error);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    loadAssets();
  }, []);

  return { isLoading, progress };
};
