
import { MousePointer, ShoppingCart, Calculator, MessageSquare } from 'lucide-react';

const HowToOrder = () => {
  const steps = [
    {
      icon: MousePointer,
      title: 'Acesse o catálogo Goomer',
      description: 'De preferência, utilizar o navegador do celular, pois o pedido será finalizado posteriormente via WhatsApp.'
    },
    {
      icon: ShoppingCart,
      title: 'Selecione a quantidade de cortes',
      description: 'Por unidade. O preço é apenas uma aproximação, pois as peças variam de tamanho.'
    },
    {
      icon: Calculator,
      title: 'Veja a estimativa de preço total',
      description: 'Você será redirecionado para concluir o pedido via WhatsApp diretamente conosco.'
    },
    {
      icon: MessageSquare,
      title: 'Concluindo o pedido, confirme via WhatsApp',
      description: 'Qualquer dúvida, entre em contato conosco pelo número (51) 989482390.'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5551989482390', '_blank');
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fluid gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>

      {/* Organic floating elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-gradient-to-r from-[#B56D57] to-[#E1B8A5] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-l from-[#A4513E] to-[#B56D57] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            4 passos para reservar o seu{" "}
            <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              churrasco completo
            </span>
            {" "}na Six Dry Aged
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto italic">
            "Eleve seu paladar com a qualidade incomparável da Six Dry Aged."
          </p>
        </div>

        {/* Steps with flowing connection */}
        <div className="relative mb-16">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B56D57] to-transparent opacity-30 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-8">
                  {/* Main icon container */}
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                      boxShadow: '0 10px 40px rgba(181, 109, 87, 0.4)'
                    }}>
                    <step.icon className="w-12 h-12 text-zinc-950" />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-zinc-900 border-2 rounded-full flex items-center justify-center z-20 shadow-lg"
                    style={{ borderColor: '#B56D57' }}>
                    <span className="font-bold text-sm" style={{ color: '#B56D57' }}>{index + 1}</span>
                  </div>

                  {/* Animated rings */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-dashed opacity-20 animate-spin"
                    style={{ borderColor: '#B56D57', animationDuration: '8s' }}></div>
                  <div className="absolute inset-2 w-20 h-20 mx-auto rounded-full border opacity-10 animate-ping"
                    style={{ borderColor: '#E1B8A5', animationDuration: '3s' }}></div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-[#E1B8A5] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.open('https://six-dry-aged.goomer.app/', '_blank')}
            className="text-zinc-950 font-bold px-12 py-5 text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl hover:-translate-y-2"
            style={{
              background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(181, 109, 87, 0.3)'
            }}
          >
            Fazer Pedido
          </button>

        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
