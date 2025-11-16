import { useParallax } from '@/hooks/use-parallax';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({ children, speed = 0.3, className = '' }: ParallaxSectionProps) => {
  const offset = useParallax(speed);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export const ParallaxLayer = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
}: ParallaxLayerProps) => {
  const offset = useParallax(speed);
  const transformValue = direction === 'up' ? -offset : offset;

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${transformValue}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

