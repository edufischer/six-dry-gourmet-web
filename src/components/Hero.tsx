
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div 
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/lovable-uploads/143f93ed-535f-4078-a489-b1f36e3f1289.png')`
          }}
        />
      </ParallaxSection>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/40 to-zinc-950/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/6a6e66c6-fccf-4535-87e8-8c2f373d38a0.png" 
            alt="Six Dry Aged Logo" 
            className="mx-auto max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Onde o sabor encontra a{' '}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            perfeição
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto"
        >
          Primeira indústria de Dry Aged certificada do Brasil
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(181, 109, 87, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProducts}
          className="text-zinc-950 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg"
          style={{ 
            background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`,
            boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)'
          }}
        >
          Conheça a Linha Dry Aged
        </motion.button>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex justify-center" 
          style={{ borderColor: '#B56D57' }}
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 rounded-full mt-2" 
            style={{ background: `linear-gradient(to bottom, #B56D57, #E1B8A5)` }} 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
