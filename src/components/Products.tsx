
import { useState } from 'react';
import { useScrollAnimation, use3DHover } from '../hooks/useScrollAnimations';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const titleRef = useScrollAnimation({ animationClass: 'animate-fade-in' });
  
  const products = [
    {
      title: 'Dry Aged',
      description: 'Cortes maturados a seco, intensamente saborosos e macios.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2070&auto=format&fit=crop',
      details: 'Processo de maturação de 21 a 45 dias em câmaras controladas'
    },
    {
      title: 'Reserva',
      description: 'Cortes nobres selecionados para os paladares mais exigentes.',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=2070&auto=format&fit=crop',
      details: 'Seleção premium dos melhores cortes do rebanho'
    },
    {
      title: 'Wagyu',
      description: 'Carne de gado japonês com marmoreio excepcional.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop',
      details: 'Importação direta do Japão com certificação de origem'
    },
    {
      title: 'GrassFed',
      description: 'Novilhos criados a pasto no Pampa Gaúcho, 100% naturais.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop',
      details: 'Criação extensiva em pastagens naturais do Rio Grande do Sul'
    }
  ];

  const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
    const cardRef = useScrollAnimation({ 
      animationClass: 'animate-fade-in', 
      delay: index * 200 
    });
    const hoverRef = use3DHover();
    const isSelected = selectedProduct === index;

    return (
      <div 
        ref={(el) => {
          if (el) {
            cardRef.current = el;
            hoverRef.current = el;
          }
        }}
        className={`group cursor-pointer opacity-0 transition-all duration-700 ${isSelected ? 'md:col-span-2 md:row-span-2' : ''}`}
        onClick={() => setSelectedProduct(isSelected ? null : index)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={`relative overflow-hidden rounded-lg bg-zinc-900 border transition-all duration-700 shadow-lg shadow-zinc-950/50 ${isSelected ? 'h-96' : 'h-64'}`} 
             style={{ borderColor: 'rgba(181, 109, 87, 0.2)' }}>
          
          <div 
            className={`bg-cover bg-center transition-all duration-700 group-hover:scale-110 ${isSelected ? 'h-full' : 'h-full'}`}
            style={{ 
              backgroundImage: `url('${product.image}')`,
              transform: 'translateZ(0)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
          
          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#B56D57]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${isSelected ? 'p-8' : ''}`}>
            <h3 className={`font-bold text-white mb-2 transition-all duration-300 ${isSelected ? 'text-2xl' : 'text-xl'}`}>
              {product.title}
            </h3>
            
            <p className={`text-zinc-300 mb-4 transition-all duration-300 ${isSelected ? 'text-base' : 'text-sm'}`}>
              {product.description}
            </p>
            
            {isSelected && (
              <p className="text-zinc-400 text-sm mb-4 opacity-0 animate-fade-in">
                {product.details}
              </p>
            )}
            
            <button 
              className={`text-zinc-950 font-semibold px-4 py-2 rounded transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 ${isSelected ? 'px-6 py-3' : ''}`}
              style={{ 
                background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`,
                boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)'
              }}
            >
              {isSelected ? 'Ver cardápio completo' : 'Ver cortes'}
            </button>
          </div>

          {/* Selection Indicator */}
          {isSelected && (
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full animate-pulse" 
                 style={{ backgroundColor: '#B56D57' }} />
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="loja" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#B56D57] rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#E1B8A5] rotate-45 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white mb-4 opacity-0">
            Nossas <span style={{ background: `linear-gradient(45deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Linhas</span>
          </h2>
          <p className="text-xl text-zinc-300">
            Descubra a excelência em cada corte
          </p>
        </div>

        <div className={`grid gap-8 transition-all duration-700 ${selectedProduct !== null ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {selectedProduct !== null && (
          <div className="text-center mt-8">
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              ← Voltar para visualização completa
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
