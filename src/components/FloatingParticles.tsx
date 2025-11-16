import { useParallax } from '@/hooks/use-parallax';

export const FloatingParticles = () => {
  const parallaxSlow = useParallax(0.1);
  const parallaxMedium = useParallax(0.2);
  const parallaxFast = useParallax(0.3);

  const particles = [
    { size: 4, left: '10%', top: '20%', delay: 0, speed: parallaxSlow },
    { size: 3, left: '85%', top: '15%', delay: 2, speed: parallaxMedium },
    { size: 5, left: '70%', top: '40%', delay: 1, speed: parallaxFast },
    { size: 4, left: '20%', top: '60%', delay: 3, speed: parallaxSlow },
    { size: 3, left: '90%', top: '70%', delay: 1.5, speed: parallaxMedium },
    { size: 6, left: '15%', top: '80%', delay: 0.5, speed: parallaxFast },
    { size: 4, left: '60%', top: '25%', delay: 2.5, speed: parallaxSlow },
    { size: 3, left: '35%', top: '45%', delay: 1.2, speed: parallaxMedium },
    { size: 5, left: '80%', top: '55%', delay: 0.8, speed: parallaxFast },
    { size: 4, left: '45%', top: '75%', delay: 2.2, speed: parallaxSlow },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-gold/30 blur-sm animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            transform: `translateY(${-particle.speed}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
};

