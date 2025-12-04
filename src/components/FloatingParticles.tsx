import { useParallax } from '@/hooks/use-parallax';

const PARTICLE_CONFIG = [
  { size: 4, left: '10%', top: '20%', delay: 0, speedFactor: 'slow' },
  { size: 3, left: '85%', top: '15%', delay: 2, speedFactor: 'medium' },
  { size: 5, left: '70%', top: '40%', delay: 1, speedFactor: 'fast' },
  { size: 4, left: '20%', top: '60%', delay: 3, speedFactor: 'slow' },
  { size: 3, left: '90%', top: '70%', delay: 1.5, speedFactor: 'medium' },
  { size: 6, left: '15%', top: '80%', delay: 0.5, speedFactor: 'fast' },
  { size: 4, left: '60%', top: '25%', delay: 2.5, speedFactor: 'slow' },
  { size: 3, left: '35%', top: '45%', delay: 1.2, speedFactor: 'medium' },
  { size: 5, left: '80%', top: '55%', delay: 0.8, speedFactor: 'fast' },
  { size: 4, left: '45%', top: '75%', delay: 2.2, speedFactor: 'slow' },
] as const;

export const FloatingParticles = () => {
  const parallaxSlow = useParallax(0.1);
  const parallaxMedium = useParallax(0.2);
  const parallaxFast = useParallax(0.3);

  const getSpeed = (factor: 'slow' | 'medium' | 'fast') => {
    switch (factor) {
      case 'slow': return parallaxSlow;
      case 'medium': return parallaxMedium;
      case 'fast': return parallaxFast;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {PARTICLE_CONFIG.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-gold/50 blur-sm animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            transform: `translateY(${-getSpeed(particle.speedFactor)}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
};

