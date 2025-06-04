
import Card3D from './Card3D';
import GlitchText from './GlitchText';

const Products = () => {
  const products = [
    {
      title: 'Dry Aged',
      description: 'Cortes maturados a seco, intensamente saborosos e macios.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Reserva',
      description: 'Cortes nobres selecionados para os paladares mais exigentes.',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Wagyu',
      description: 'Carne de gado japonês com marmoreio excepcional.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'GrassFed',
      description: 'Novilhos criados a pasto no Pampa Gaúcho, 100% naturais.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="loja" className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#B56D57] to-[#A4513E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-[#E1B8A5] to-[#B56D57] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <GlitchText 
              text="Nossas "
              className="inline"
            />
            <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <GlitchText 
                text="Linhas"
                className="inline"
              />
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Descubra a excelência em cada corte, onde tradição e inovação se encontram
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card3D key={index} className="h-full group" intensity={8}>
              <div className="relative overflow-hidden bg-zinc-900/80 backdrop-blur-sm border transition-all duration-500 shadow-2xl h-full" 
                   style={{ 
                     borderColor: 'rgba(181, 109, 87, 0.2)',
                     borderRadius: '24px',
                     background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(39, 39, 42, 0.8))'
                   }}>
                <div 
                  className="h-72 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  style={{ 
                    backgroundImage: `url('${product.image}')`,
                    borderRadius: '24px 24px 0 0',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" style={{ borderRadius: '24px' }} />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    <GlitchText text={product.title} />
                  </h3>
                  <p className="text-zinc-300 text-sm mb-6 leading-relaxed opacity-90">{product.description}</p>
                  <button 
                    className="text-zinc-950 font-semibold px-6 py-3 transition-all duration-500 shadow-xl hover:scale-105 hover:shadow-2xl w-full transform group-hover:translate-y-[-4px]"
                    style={{ 
                      background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
                    }}
                  >
                    Ver cortes
                  </button>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
