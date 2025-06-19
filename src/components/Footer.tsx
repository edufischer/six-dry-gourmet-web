
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
    <footer className="bg-zinc-950 border-t" style={{ borderColor: 'rgba(181, 109, 87, 0.2)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Six Dry Aged</h3>
            <p className="text-zinc-400 mb-4">
              Primeira empresa no Brasil com registro para produção de Dry Aged bovino.
              Excelência em cada corte, tradição em cada sabor.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" style={{ color: '#B56D57' }} />
                <span className="text-zinc-300">(51) 98948-2390</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" style={{ color: '#B56D57' }} />
                <span className="text-zinc-300">contato@sixdryaged.com.br</span>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4 mb-6">
              <button
                onClick={handleInstagram}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                  boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)'
                }}
              >
                <Instagram className="w-5 h-5 text-zinc-950" />
              </button>
            </div>
            <a href="#" className="text-zinc-400 transition-colors duration-300 text-sm hover:text-[#B56D57]">
              Política de Privacidade
            </a>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'rgba(181, 109, 87, 0.2)' }}>
          <p className="text-zinc-400">
            © 2025 Six Dry Aged. Todos os direitos reservados.
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
