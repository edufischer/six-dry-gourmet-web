import { Award, Leaf, Star } from 'lucide-react';
import { useScrollAnimation, use3DHover } from '../hooks/useScrollAnimations';

const About = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ animationClass: 'animate-fade-in' });
  const descriptionRef = useScrollAnimation<HTMLParagraphElement>({ animationClass: 'animate-fade-in', delay: 200 });

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

  const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const cardRef = useScrollAnimation<HTMLDivElement>({ 
      animationClass: 'animate-fade-in', 
      delay: 400 + (index * 200) 
    });
    const hoverRef = use3DHover<HTMLDivElement>();

    return (
      <div 
        ref={(el) => {
          if (el) {
            cardRef.current = el;
            hoverRef.current = el;
          }
        }}
        className="text-center p-8 bg-zinc-950/60 rounded-lg border transition-all duration-500 backdrop-blur-sm opacity-0 group cursor-pointer"
        style={{ 
          borderColor: 'rgba(181, 109, 87, 0.2)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-500 group-hover:shadow-2xl" 
             style={{ 
               background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, 
               boxShadow: '0 4px 6px rgba(181, 109, 87, 0.2)',
               transform: 'translateZ(20px)'
             }}>
          <feature.icon className="w-8 h-8 text-zinc-950 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-[#E1B8A5]" style={{ transform: 'translateZ(10px)' }}>
          {feature.title}
        </h3>
        <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" style={{ transform: 'translateZ(5px)' }}>
          {feature.description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ 
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(181, 109, 87, 0.1) 50px, rgba(181, 109, 87, 0.1) 51px)` 
             }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white mb-8 opacity-0">
            Sobre a <span style={{ background: `linear-gradient(45deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Six Dry Aged</span>
          </h2>
          
          <p ref={descriptionRef} className="text-lg text-zinc-300 leading-relaxed opacity-0">
            A Six Dry Aged é pioneira no Brasil na produção de carnes Dry Aged com selo de inspeção oficial. 
            Produzimos com excelência, respeitando o tempo e o sabor da carne. Atuamos como boutique e indústria, 
            com sede em Porto Alegre e planta em Lajeado/RS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
