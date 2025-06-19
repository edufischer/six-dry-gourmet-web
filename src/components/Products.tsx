
import Card3D from './Card3D';

const Products = () => {
  return (
    <section id="produtos" className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#B56D57] to-[#A4513E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-[#E1B8A5] to-[#B56D57] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Diversas linhas de{" "}
            <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              steaks especiais
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <Card3D className="h-full group" intensity={8}>
            <div className="relative overflow-hidden bg-zinc-900/80 backdrop-blur-sm border transition-all duration-500 shadow-2xl h-full"
              style={{
                borderColor: 'rgba(181, 109, 87, 0.2)',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(39, 39, 42, 0.8))'
              }}>
              <div
                className="h-72 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                style={{
                  backgroundImage: `url('/images/foto_reserva.png')`,
                  borderRadius: '24px 24px 0 0',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" style={{ borderRadius: '24px' }} />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  Linha Reserva
                </h3>
                <p className="text-zinc-300 text-sm mb-6 leading-relaxed opacity-90">
                  Cortes nobres selecionados para os paladares mais exigentes.
                </p>
                <button
                  onClick={() => window.open('https://six-dry-aged.goomer.app/menu?retry=true#674287', '_blank')}
                  className="text-zinc-950 font-semibold px-6 py-3 transition-all duration-500 shadow-xl hover:scale-105 hover:shadow-2xl w-full transform group-hover:translate-y-[-4px]"
                  style={{
                    background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
                  }}
                >
                  Ver produtos
                </button>


              </div>
            </div>
          </Card3D>

          <Card3D className="h-full group" intensity={8}>
            <div className="relative overflow-hidden bg-zinc-900/80 backdrop-blur-sm border transition-all duration-500 shadow-2xl h-full"
              style={{
                borderColor: 'rgba(181, 109, 87, 0.2)',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(39, 39, 42, 0.8))'
              }}>
              <div
                className="h-72 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                style={{
                  backgroundImage: `url('/images/foto_dry_aged.png')`,
                  borderRadius: '24px 24px 0 0',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" style={{ borderRadius: '24px' }} />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  Linha Dry Aged
                </h3>
                <p className="text-zinc-300 text-sm mb-6 leading-relaxed opacity-90">
                  Cortes maturados a seco, intensamente saborosos e macios.
                </p>
                <button
                  onClick={() => window.open('https://six-dry-aged.goomer.app/menu?retry=true#674302', '_blank')}
                  className="text-zinc-950 font-semibold px-6 py-3 transition-all duration-500 shadow-xl hover:scale-105 hover:shadow-2xl w-full transform group-hover:translate-y-[-4px]"
                  style={{
                    background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
                  }}
                >
                  Ver produtos
                </button>
              </div>
            </div>
          </Card3D>

          <Card3D className="h-full group" intensity={8}>
            <div className="relative overflow-hidden bg-zinc-900/80 backdrop-blur-sm border transition-all duration-500 shadow-2xl h-full"
              style={{
                borderColor: 'rgba(181, 109, 87, 0.2)',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(39, 39, 42, 0.8))'
              }}>
              <div
                className="h-72 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                style={{
                  backgroundImage: `url('/images/foto_wagyu.png')`,
                  borderRadius: '24px 24px 0 0',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" style={{ borderRadius: '24px' }} />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  Linha Wagyu
                </h3>
                <p className="text-zinc-300 text-sm mb-6 leading-relaxed opacity-90">
                  Carne de gado japonês com marmoreio excepcional.
                </p>
                <button
                  onClick={() => window.open('https://six-dry-aged.goomer.app/menu?retry=true#674303', '_blank')}
                  className="text-zinc-950 font-semibold px-6 py-3 transition-all duration-500 shadow-xl hover:scale-105 hover:shadow-2xl w-full transform group-hover:translate-y-[-4px]"
                  style={{
                    background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
                  }}
                >
                  Ver produtos
                </button>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default Products;
