
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
    <section id="contato" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Onde <span className="text-yellow-500">Estamos</span>
          </h2>
          <p className="text-xl text-zinc-300">
            Visite nossas instalações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-zinc-950/60 rounded-lg border border-yellow-600/20 p-8 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-yellow-600/20">
                  <MapPin className="w-6 h-6 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{location.type}</h3>
                  <p className="text-yellow-500">{location.city}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-zinc-300">{location.address}</p>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                  <p className="text-zinc-300">{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-12 h-64 bg-zinc-800 rounded-lg border border-yellow-600/20 flex items-center justify-center">
          <p className="text-zinc-400 text-center">
            Mapa interativo<br />
            <span className="text-sm text-yellow-500">Visualize nossas localizações</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
