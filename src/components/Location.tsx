
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
            Onde <span style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Estamos</span>
          </h2>
          <p className="text-xl text-zinc-300">
            Visite nossas instalações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-zinc-950/60 rounded-lg border p-8 backdrop-blur-sm transition-all duration-300" style={{ borderColor: 'rgba(181, 109, 87, 0.2)' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg" style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)' }}>
                  <MapPin className="w-6 h-6 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{location.type}</h3>
                  <p style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{location.city}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-zinc-300">{location.address}</p>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" style={{ color: '#B56D57' }} />
                  <p className="text-zinc-300">{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-12 h-64 bg-zinc-800 rounded-lg border flex items-center justify-center" style={{ borderColor: 'rgba(181, 109, 87, 0.2)' }}>
          <p className="text-zinc-400 text-center">
            Mapa interativo<br />
            <span className="text-sm" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Visualize nossas localizações</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
