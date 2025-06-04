
const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/lovable-uploads/143f93ed-535f-4078-a489-b1f36e3f1289.png')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/40 to-zinc-950/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png" 
            alt="Six Dry Aged Logo" 
            className="mx-auto max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Onde o sabor encontra a{' '}
          <span style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>perfeição</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
          Primeira indústria de Dry Aged certificada do Brasil
        </p>
        
        <button 
          className="text-zinc-950 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:opacity-90 shadow-lg"
          style={{ 
            background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`,
            boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)'
          }}
        >
          Conheça a Linha Dry Aged
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#B56D57' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ background: `linear-gradient(to bottom, #B56D57, #E1B8A5)` }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
