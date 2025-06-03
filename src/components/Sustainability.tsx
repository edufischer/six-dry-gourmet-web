
import { Leaf, Heart, MapPin } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Origem e <span className="text-amber-400">Sustentabilidade</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Manejo Natural</h3>
                  <p className="text-gray-300">Criação com respeito ao meio ambiente e práticas sustentáveis no campo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Bem-estar Animal</h3>
                  <p className="text-gray-300">Alimentação sem ração industrial, priorizando o bem-estar dos animais.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Rastreabilidade</h3>
                  <p className="text-gray-300">Selo de procedência garantindo a origem e qualidade de cada produto.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="h-96 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
