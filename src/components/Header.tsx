
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-600/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-amber-400">
            Six Dry Aged
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleWhatsApp}
            className="hidden md:block bg-amber-600 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Peça Agora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-amber-600/20">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleWhatsApp}
                className="bg-amber-600 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-300 w-fit"
              >
                Peça Agora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
