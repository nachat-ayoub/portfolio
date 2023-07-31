import React, { useState, useEffect, useRef } from 'react';
import { isTouchDevice } from '..';

console.log((isTouchDevice() ? 'Mobile ' : 'Pc ') + 'Device');

const useHover = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const [isHovered, setHovered] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    console.log('isHovered: ', isHovered);
  }, [isHovered]);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (!isTouchDevice()) {
        setHovered(true);
      }
    };

    const handleMouseLeave = () => {
      if (!isTouchDevice()) {
        setHovered(false);
      }
    };

    const handleTouchStart = () => {
      if (isTouchDevice()) {
        setHovered(true);
      }
    };

    const handleBlur = () => {
      if (isTouchDevice()) {
        setHovered(false);
      }
    };

    const element = elementRef.current;

    if (element) {
      if (isTouchDevice()) {
        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('blur', handleBlur, true);
      } else {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      }
    }

    return () => {
      if (element) {
        if (isTouchDevice()) {
          element.removeEventListener('touchstart', handleTouchStart);
          element.removeEventListener('blur', handleBlur, true);
        } else {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        }
      }
    };
  }, []);

  return [elementRef, isHovered];
};

export default useHover;
