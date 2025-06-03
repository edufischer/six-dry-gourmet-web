
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
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Onde <span className="text-amber-400">Estamos</span>
          </h2>
          <p className="text-xl text-gray-300">
            Visite nossas instalações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-black/50 rounded-lg border border-amber-600/20 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{location.type}</h3>
                  <p className="text-amber-400">{location.city}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-300">{location.address}</p>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-amber-400 mr-2" />
                  <p className="text-gray-300">{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-12 h-64 bg-gray-800 rounded-lg border border-amber-600/20 flex items-center justify-center">
          <p className="text-gray-400 text-center">
            Mapa interativo<br />
            <span className="text-sm">Visualize nossas localizações</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
