
const Shop = () => {
  return (
    <section id="loja" className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#B56D57] to-[#A4513E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-bl from-[#E1B8A5] to-[#B56D57] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            A Loja em{" "}
            <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Porto Alegre
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              A SIX nasceu a partir de uma paixão em comum dos sócios: desfrutar de momentos especiais reunindo os amigos em volta do fogo em um grande assado. Gostamos de nos definir como um açougue tradicional com conceitos contemporâneos.
            </p>

            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Oferecemos não só tudo o que há de melhor para seu churrasco, mas também uma linha prática completa para o dia a dia, como acessórios, bebidas, complementos e muito mais!
            </p>

            <div className="pt-8">
              <button
                className="text-zinc-950 font-semibold px-8 py-4 text-lg transition-all duration-500 shadow-xl hover:scale-105 hover:shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
                }}
                onClick={() => window.open('https://g.co/kgs/RuLz1cd', '_blank')}
              >
                Ver endereço da loja
              </button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-3xl border border-zinc-700 shadow-2xl">
              <video
                src="/videos/loja.mov"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Decorative border */}
            <div className="absolute -inset-1 rounded-3xl opacity-20 blur-sm"
              style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)` }}>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Shop;
