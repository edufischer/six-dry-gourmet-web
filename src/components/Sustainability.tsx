
import { Leaf, Heart, MapPin } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Organic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900"></div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-[#B56D57] to-[#A4513E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-[#E1B8A5] to-[#B56D57] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
              Origem e <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sustentabilidade</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: Leaf,
                  title: 'Manejo Natural',
                  description: 'Criação com respeito ao meio ambiente e práticas sustentáveis no campo.'
                },
                {
                  icon: Heart,
                  title: 'Bem-estar Animal',
                  description: 'Alimentação sem ração industrial, priorizando o bem-estar dos animais.'
                },
                {
                  icon: MapPin,
                  title: 'Rastreabilidade',
                  description: 'Selo de procedência garantindo a origem e qualidade de cada produto.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                        boxShadow: '0 8px 32px rgba(181, 109, 87, 0.4)'
                      }}>
                      <item.icon className="w-8 h-8 text-zinc-950" />
                    </div>

                    {/* Ripple effect */}
                    <div className="absolute inset-0 w-16 h-16 rounded-full border-2 opacity-30 animate-ping"
                      style={{ borderColor: '#B56D57', animationDuration: '3s' }}></div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#E1B8A5] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative overflow-hidden group">
              <div
                className="h-[500px] bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/images/foto_manejo.png')`,
                  borderRadius: '32px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                }}
              />

              {/* Organic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"
                style={{ borderRadius: '32px' }}></div>

              {/* Floating frame */}
              <div className="absolute inset-4 border-2 border-[#B56D57] opacity-30 transition-all duration-500 group-hover:opacity-60"
                style={{ borderRadius: '28px' }}></div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-[#B56D57] opacity-60"
              style={{ borderRadius: '0 8px 0 0' }}></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-[#B56D57] opacity-60"
              style={{ borderRadius: '0 0 0 8px' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
