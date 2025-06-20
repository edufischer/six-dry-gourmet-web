
import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isSlowConnection: boolean;
  supportsWebP: boolean;
  screenWidth: number;
}

export const useDeviceOptimization = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isSlowConnection: false,
    supportsWebP: false,
    screenWidth: 0
  });

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth <= 768 || 
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Detectar conexão lenta
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const isSlowConnection = connection ? 
        (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g' || connection.downlink < 1.5) : 
        false;

      // Detectar suporte WebP
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const supportsWebP = canvas.toDataURL('image/webp').indexOf('webp') > -1;

      setDeviceInfo({
        isMobile,
        isSlowConnection,
        supportsWebP,
        screenWidth: window.innerWidth
      });
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return deviceInfo;
};
