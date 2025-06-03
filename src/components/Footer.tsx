
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5551989482390', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/sixdryaged', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@sixdryaged.com.br', '_blank');
  };

  return (
    <footer className="bg-black border-t border-amber-600/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Six Dry Aged</h3>
            <p className="text-gray-400 mb-4">
              Primeira indústria de Dry Aged certificada do Brasil. 
              Excelência em cada corte, tradição em cada sabor.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <span className="text-gray-300">(51) 98948-2390</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <span className="text-gray-300">contato@sixdryaged.com.br</span>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4 mb-6">
              <button
                onClick={handleInstagram}
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-black" />
              </button>
            </div>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
              Política de Privacidade
            </a>
          </div>
        </div>

        <div className="border-t border-amber-600/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Six Dry Aged. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      >
        <Phone className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
