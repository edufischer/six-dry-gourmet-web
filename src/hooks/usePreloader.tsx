
import { useState, useEffect } from 'react';

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      // Lista de todas as imagens do site
      const imageUrls = [
        '/images',
        '/videos',
      ];

      let loadedCount = 0;
      const totalImages = imageUrls.length;

      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setProgress((loadedCount / totalImages) * 90); // 90% para imagens
            resolve(img);
          };
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(imagePromises);

        // Aguarda um pouco mais para garantir que as animações estão prontas
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }, 1000);
      } catch (error) {
        console.log('Erro ao carregar imagens:', error);
        // Mesmo com erro, remove o loading após um tempo
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    loadImages();
  }, []);

  return { isLoading, progress };
};
