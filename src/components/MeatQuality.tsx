
import { Award, Leaf } from 'lucide-react';

const MeatQuality = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#B56D57] to-[#E1B8A5] rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-l from-[#A4513E] to-[#B56D57] rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              CARNES DA SIX
            </span>
          </h2>
          <div className="w-32 h-1 mx-auto mb-8 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="text-center p-12 bg-gradient-to-br from-zinc-950/60 to-zinc-900/40 backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full" 
                 style={{ 
                   borderColor: 'rgba(181, 109, 87, 0.2)',
                   borderRadius: '32px',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                 }}>
              
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" 
                     style={{ 
                       background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                       boxShadow: '0 8px 32px rgba(181, 109, 87, 0.4)'
                     }}>
                  <Award className="w-12 h-12 text-zinc-950" />
                </div>
                
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-dashed opacity-20 animate-spin" 
                     style={{ borderColor: '#B56D57', animationDuration: '8s' }}></div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#E1B8A5] transition-colors duration-300">
                100% DE NOVILHOS
              </h3>
            </div>
          </div>

          <div className="group relative">
            <div className="text-center p-12 bg-gradient-to-br from-zinc-950/60 to-zinc-900/40 backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full" 
                 style={{ 
                   borderColor: 'rgba(181, 109, 87, 0.2)',
                   borderRadius: '32px',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                 }}>
              
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" 
                     style={{ 
                       background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`,
                       boxShadow: '0 8px 32px rgba(181, 109, 87, 0.4)'
                     }}>
                  <Leaf className="w-12 h-12 text-zinc-950" />
                </div>
                
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-dashed opacity-20 animate-spin" 
                     style={{ borderColor: '#B56D57', animationDuration: '8s' }}></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#E1B8A5] transition-colors duration-300 leading-tight">
                ALIMENTAÇÃO A PASTO DO PAMPA GAÚCHO
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeatQuality;
