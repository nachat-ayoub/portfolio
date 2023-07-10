import { useState, useEffect } from 'react';

export function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => {
      setIsHovered(true);
    };

    const handleTouchEnd = () => {
      setIsHovered(false);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return { isHovered, evets: {} };
}
