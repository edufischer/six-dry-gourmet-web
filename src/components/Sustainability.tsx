
import { Leaf, Heart, MapPin } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Origem e <span style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sustentabilidade</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)' }}>
                  <Leaf className="w-6 h-6 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Manejo Natural</h3>
                  <p className="text-zinc-300">Criação com respeito ao meio ambiente e práticas sustentáveis no campo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)' }}>
                  <Heart className="w-6 h-6 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Bem-estar Animal</h3>
                  <p className="text-zinc-300">Alimentação sem ração industrial, priorizando o bem-estar dos animais.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)' }}>
                  <MapPin className="w-6 h-6 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Rastreabilidade</h3>
                  <p className="text-zinc-300">Selo de procedência garantindo a origem e qualidade de cada produto.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="h-96 rounded-lg bg-cover bg-center border"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop')`,
                borderColor: 'rgba(181, 109, 87, 0.2)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
