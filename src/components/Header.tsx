
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedTooltip from './AnimatedTooltip';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Dry Aged', href: '#dry-aged' },
    { name: 'GrassFed', href: '#grassfed' },
    { name: 'Loja', href: '#loja' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5551989482390', '_blank');
  };

  const smoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b" 
      style={{ borderColor: '#B56D57' }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer" 
            style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            onClick={() => smoothScroll('#inicio')}
          >
            Six Dry Aged
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(item.href);
                }}
                className="text-zinc-300 transition-all duration-300 hover:text-[#B56D57] relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B56D57] to-[#E1B8A5] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <AnimatedTooltip content="Faça seu pedido via WhatsApp" position="bottom">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="hidden md:block text-zinc-950 font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:opacity-90"
              style={{ 
                background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`,
                boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)'
              }}
            >
              Peça Agora
            </motion.button>
          </AnimatedTooltip>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: 0 }}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t overflow-hidden" 
              style={{ borderColor: '#B56D57' }}
            >
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    href={item.href}
                    className="text-zinc-300 transition-colors duration-300 hover:text-[#B56D57]"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll(item.href);
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
                  onClick={handleWhatsApp}
                  className="text-zinc-950 font-semibold px-6 py-2 rounded-lg transition-all duration-300 w-fit shadow-lg"
                  style={{ 
                    background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`,
                    boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)'
                  }}
                >
                  Peça Agora
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
