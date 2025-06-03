
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
    <section id="loja" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossas <span className="text-amber-400">Linhas</span>
          </h2>
          <p className="text-xl text-gray-300">
            Descubra a excelência em cada corte
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gray-800 border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <button className="bg-amber-600 hover:bg-amber-500 text-black font-semibold px-4 py-2 rounded transition-colors duration-300">
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
