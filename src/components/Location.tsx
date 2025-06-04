
import { MapPin, Clock } from 'lucide-react';

const Location = () => {
  const locations = [
    {
      type: 'Loja Boutique',
      city: 'Porto Alegre/RS',
      address: 'Rua dos Andradas, 1234 - Centro',
      hours: 'Seg-Sex: 9h às 18h | Sáb: 9h às 14h'
    },
    {
      type: 'Indústria',
      city: 'Lajeado/RS',
      address: 'Distrito Industrial, 5678',
      hours: 'Seg-Sex: 8h às 17h'
    }
  ];

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Flowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900"></div>
      
      {/* Organic decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#B56D57] to-[#A4513E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-bl from-[#E1B8A5] to-[#B56D57] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Onde <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Estamos</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Visite nossas instalações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/60 backdrop-blur-sm border p-10 transition-all duration-500 hover:scale-105 shadow-2xl h-full" 
                   style={{ 
                     borderColor: 'rgba(181, 109, 87, 0.2)',
                     borderRadius: '32px',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                   }}>
                
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" 
                       style={{ 
                         background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                         boxShadow: '0 8px 32px rgba(181, 109, 87, 0.4)'
                       }}>
                    <MapPin className="w-8 h-8 text-zinc-950" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#E1B8A5] transition-colors duration-300">
                      {location.type}
                    </h3>
                    <p className="text-lg" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {location.city}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-zinc-300 text-lg">{location.address}</p>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-3" style={{ color: '#B56D57' }} />
                    <p className="text-zinc-300">{location.hours}</p>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#B56D57] opacity-30 rounded-tr-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced map placeholder */}
        <div className="mt-16 relative group">
          <div className="h-80 bg-gradient-to-br from-zinc-800/60 to-zinc-900/80 backdrop-blur-sm border flex items-center justify-center transition-all duration-500 group-hover:scale-[1.02] shadow-2xl" 
               style={{ 
                 borderColor: 'rgba(181, 109, 87, 0.2)',
                 borderRadius: '32px',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
               }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl" 
                   style={{ 
                     background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                     boxShadow: '0 8px 32px rgba(181, 109, 87, 0.4)'
                   }}>
                <MapPin className="w-8 h-8 text-zinc-950" />
              </div>
              <p className="text-zinc-400 text-xl mb-2">Mapa interativo</p>
              <p className="text-sm" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Visualize nossas localizações
              </p>
            </div>
          </div>
          
          {/* Floating accent elements */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-[#B56D57] opacity-60 rounded-tl-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[#B56D57] opacity-60 rounded-br-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Location;
