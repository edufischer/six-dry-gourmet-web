
import { Award, Leaf, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Indústria Inspecionada',
      description: 'Primeira indústria de Dry Aged com selo oficial do Brasil'
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
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Sobre a <span className="bg-gradient-to-r from-amber-600 via-rose-400 to-orange-300 bg-clip-text text-transparent">Six Dry Aged</span>
          </h2>
          
          <p className="text-lg text-zinc-300 leading-relaxed">
            A Six Dry Aged é pioneira no Brasil na produção de carnes Dry Aged com selo de inspeção oficial. 
            Produzimos com excelência, respeitando o tempo e o sabor da carne. Atuamos como boutique e indústria, 
            com sede em Porto Alegre e planta em Lajeado/RS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 bg-zinc-950/60 rounded-lg border border-amber-600/20 hover:border-rose-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 via-rose-400 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-600/20">
                <feature.icon className="w-8 h-8 text-zinc-950" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
