
import { motion } from 'framer-motion';
import ParallaxSection from './ParallaxSection';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#loja');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>

      {/* Background Image with Parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/143f93ed-535f-4078-a489-b1f36e3f1289.png')`,
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />
      </ParallaxSection>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#B56D57] to-[#A4513E] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-[#E1B8A5] to-[#B56D57] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#B56D57] rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo with floating animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
          className="mb-12"
        >
          <div className="relative">
            <img
              src="/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png"
              alt="Six Dry Aged Logo"
              className="mx-auto max-w-xs md:max-w-md lg:max-w-lg h-auto filter drop-shadow-2xl"
            />
            {/* Glow effect around logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B56D57] to-[#E1B8A5] opacity-20 blur-2xl rounded-full scale-110"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Onde o sabor encontra a{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            perfeição
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Primeira empresa no Brasil com registro para produção de Dry Aged bovino
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 15px 40px rgba(181, 109, 87, 0.4)',
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProducts}
          className="text-zinc-950 font-bold px-10 py-5 text-lg transition-all duration-500 shadow-2xl backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
          }}
        >
          Conheça a Linha Dry Aged
        </motion.button>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div
            className="w-6 h-12 border-2 rounded-full flex justify-center backdrop-blur-sm"
            style={{
              borderColor: '#B56D57',
              background: 'rgba(181, 109, 87, 0.1)'
            }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              className="w-1.5 h-4 rounded-full mt-2"
              style={{ background: `linear-gradient(to bottom, #B56D57, #E1B8A5)` }}
            />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 w-6 h-12 border-2 rounded-full opacity-50 animate-pulse"
            style={{ borderColor: '#B56D57', filter: 'blur(4px)' }}></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
