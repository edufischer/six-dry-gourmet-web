
import { useEffect, useRef } from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimations';

const Hero = () => {
  const titleRef = useScrollAnimation({ animationClass: 'animate-fade-in', delay: 300 });
  const subtitleRef = useScrollAnimation({ animationClass: 'animate-fade-in', delay: 600 });
  const buttonRef = useScrollAnimation({ animationClass: 'animate-fade-in', delay: 900 });
  const backgroundRef = useParallax(0.3);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.1;
      logo.style.transform = `translateY(${rate}px) scale(${1 - scrolled * 0.0005})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    document.getElementById('loja')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-75"
        style={{
          backgroundImage: `url('/lovable-uploads/143f93ed-535f-4078-a489-b1f36e3f1289.png')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/40 to-zinc-950/60" />
      
      {/* Geometric Animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#B56D57] rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#E1B8A5] rotate-45 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-0 w-32 h-32 border border-[#A4513E] animate-bounce" style={{ animationDuration: '6s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with Float Animation */}
        <div ref={logoRef} className="mb-8">
          <img 
            src="/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png" 
            alt="Six Dry Aged Logo" 
            className="mx-auto max-w-xs md:max-w-sm lg:max-w-md h-auto transition-all duration-300 hover:scale-105"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(181, 109, 87, 0.3))',
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0"
        >
          Onde o sabor encontra a{' '}
          <span 
            className="bg-clip-text text-transparent animate-pulse"
            style={{ background: `linear-gradient(45deg, #B56D57, #E1B8A5, #A4513E, #B56D57)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite' }}
          >
            perfeição
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto opacity-0"
        >
          Primeira indústria de Dry Aged certificada do Brasil
        </p>
        
        <button 
          ref={buttonRef}
          onClick={handleCTAClick}
          className="text-zinc-950 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl opacity-0 relative overflow-hidden group"
          style={{ 
            background: `linear-gradient(45deg, #B56D57, #E1B8A5, #A4513E)`,
            boxShadow: '0 10px 30px rgba(181, 109, 87, 0.4)'
          }}
        >
          <span className="relative z-10">Conheça a Linha Dry Aged</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center animate-bounce" style={{ borderColor: '#B56D57' }}>
            <div className="w-1 h-3 rounded-full mt-2" style={{ background: `linear-gradient(to bottom, #B56D57, #E1B8A5)`, animation: 'scroll-indicator 2s ease-in-out infinite' }} />
          </div>
          <div className="absolute -inset-4 border border-[#B56D57] rounded-full animate-ping opacity-30" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scroll-indicator {
          0% { opacity: 0; transform: translateY(-10px); }
          50% { opacity: 1; transform: translateY(0px); }
          100% { opacity: 0; transform: translateY(10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
