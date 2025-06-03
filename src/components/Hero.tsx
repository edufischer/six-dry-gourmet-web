
const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
      
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
          <span className="text-amber-400">perfeição</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Primeira indústria de Dry Aged certificada do Brasil
        </p>
        
        <button className="bg-amber-600 hover:bg-amber-500 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
          Conheça a Linha Dry Aged
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
