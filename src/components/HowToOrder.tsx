
import { ShoppingCart, MessageSquare, Truck, CheckCircle } from 'lucide-react';

const HowToOrder = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Acesse o cardápio',
      description: 'Navegue por nossa seleção de carnes premium'
    },
    {
      icon: CheckCircle,
      title: 'Selecione os produtos',
      description: 'Escolha os cortes e quantidades desejadas'
    },
    {
      icon: MessageSquare,
      title: 'Finalize pelo WhatsApp',
      description: 'Complete seu pedido através do nosso WhatsApp'
    },
    {
      icon: Truck,
      title: 'Receba em casa',
      description: 'Entregamos com qualidade e segurança'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5551989482390', '_blank');
  };

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como <span className="text-yellow-500">Pedir</span>
          </h2>
          <p className="text-xl text-zinc-300">
            Processo simples e rápido para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-yellow-600/20">
                  <step.icon className="w-10 h-10 text-zinc-950" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-zinc-900 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-yellow-500 font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-zinc-950 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-600/20"
          >
            Fazer Pedido
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
