import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isMobile = window.innerWidth <= 768;

        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        if (isMobile) {
          timeoutId = setTimeout(() => {
            setIsVisible(entry.isIntersecting);
          }, 60);
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
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (currentElement) {
        observer.unobserve(currentElement);
      }

      observer.disconnect();
    };
  }, []);

  return { elementRef, isVisible };
};
