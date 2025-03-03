import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay for mobile
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          setTimeout(() => {
            setIsVisible(entry.isIntersecting);
          }, 100);
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin: window.innerWidth <= 768 ? '0px' : '50px',
        threshold: window.innerWidth <= 768 ? 0.1 : 0.2,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
}; 