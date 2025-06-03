
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
    <section id="loja" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossas <span className="bg-gradient-to-r from-amber-600 via-rose-400 to-orange-300 bg-clip-text text-transparent">Linhas</span>
          </h2>
          <p className="text-xl text-zinc-300">
            Descubra a excelência em cada corte
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-zinc-900 border border-amber-600/20 hover:border-rose-400/40 transition-all duration-300 shadow-lg shadow-zinc-950/50">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-zinc-300 text-sm mb-4">{product.description}</p>
                  <button className="bg-gradient-to-r from-amber-600 via-rose-400 to-orange-300 hover:from-amber-700 hover:via-rose-500 hover:to-orange-400 text-zinc-950 font-semibold px-4 py-2 rounded transition-all duration-300 shadow-lg shadow-amber-600/20">
                    Ver cortes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
