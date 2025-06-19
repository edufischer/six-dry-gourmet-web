
import { Handshake } from 'lucide-react';

const Partners = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#B56D57] to-[#E1B8A5] rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-[#A4513E] to-[#B56D57] rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto shadow-2xl mb-8"
              style={{
                background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                boxShadow: '0 8px 32px rgba(181, 109, 87, 0.4)'
              }}>
              <Handshake className="w-16 h-16 text-zinc-950" />
            </div>

            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-dashed opacity-20 animate-spin"
              style={{ borderColor: '#B56D57', animationDuration: '12s' }}></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Aumente o nível de qualidade no seu{" "}
            <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              catálogo de produtos
            </span>
            . Seja parceiro SIX!
          </h2>

          <div className="w-32 h-1 mx-auto mb-8 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-12">
            <span style={{ color: '#E1B8A5' }}>Carnes excepcionais</span> para os paladares mais exigentes
          </p>

          <button
            className="text-zinc-950 font-bold px-12 py-5 text-lg transition-all duration-500 shadow-xl hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            style={{
              background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
            }}
            onClick={() => window.open('https://wa.me/5551989482390', '_blank')}
          >
            Quero Revender Produtos SIX
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
