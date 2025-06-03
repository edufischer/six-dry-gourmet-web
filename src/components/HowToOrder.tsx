
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como <span className="text-amber-400">Pedir</span>
          </h2>
          <p className="text-xl text-gray-300">
            Processo simples e rápido para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 border-2 border-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleWhatsApp}
            className="bg-amber-600 hover:bg-amber-500 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Fazer Pedido
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
