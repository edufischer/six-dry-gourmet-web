
import { useState, useEffect } from 'react';

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      // Lista de todas as imagens do site
      const imageUrls = [
        '/lovable-uploads/143f93ed-535f-4078-a489-b1f36e3f1289.png',
        '/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png',
        'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop'
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
