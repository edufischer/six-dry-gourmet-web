
import { Award, Leaf, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Indústria Inspecionada',
      description: 'Primeira empresa no Brasil com registro para produção de Dry Aged bovino'
    },
    {
      icon: Leaf,
      title: 'Produção Sustentável',
      description: 'Processo sustentável respeitando o meio ambiente'
    },
    {
      icon: Star,
      title: 'Carnes Premium',
      description: 'Seleção rigorosa dos melhores cortes e qualidade superior'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background with organic shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#B56D57] to-[#E1B8A5] rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-[#A4513E] to-[#B56D57] rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Sobre a <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Six Dry Aged</span>
          </h2>

          <div className="w-32 h-1 mx-auto mb-8 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>

          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
            A Six Dry Aged é pioneira no Brasil na produção de carnes Dry Aged com selo de inspeção oficial.
            Produzimos com excelência, respeitando o tempo e o sabor da carne. Atuamos como boutique e indústria,
            com sede em Porto Alegre e planta em Lajeado/RS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="text-center p-8 lg:p-10 bg-gradient-to-br from-zinc-950/60 to-zinc-900/40 backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full"
                style={{
                  borderColor: 'rgba(181, 109, 87, 0.2)',
                  borderRadius: '32px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>

                {/* Floating icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                      boxShadow: '0 8px 32px rgba(181, 109, 87, 0.4)'
                    }}>
                    <feature.icon className="w-10 h-10 text-zinc-950" />
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-dashed opacity-20 animate-spin"
                    style={{ borderColor: '#B56D57', animationDuration: '8s' }}></div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#E1B8A5] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
