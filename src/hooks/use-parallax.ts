import { useEffect, useState } from 'react';

/**
 * Hook para criar efeito parallax baseado no scroll
 * @param speed - Velocidade do parallax (0-1, onde 1 é mais rápido)
 */
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

/**
 * Hook para detectar se um elemento está visível na viewport
 */
export const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return { isInView, ref: setRef };
};

/**
 * Hook para animação de scroll suave
 */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializa
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};

