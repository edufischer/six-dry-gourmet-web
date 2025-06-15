
const Industry = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#B56D57] to-[#A4513E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-[#E1B8A5] to-[#B56D57] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            A Indústria em{" "}
            <span style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Lajeado
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ background: `linear-gradient(to right, #B56D57, #E1B8A5, #A4513E)` }}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Somos a primeira empresa do Brasil com registro para produção de Dry Aged bovino em Serviço de Inspeção Oficial.
            </p>
            
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Montamos uma planta industrial com o que há de melhor em tecnologia e equipamentos, atendendo todas exigências sanitárias e levando assim nossas carnes ao mais alto padrão internacional.
            </p>
          </div>

          {/* Industry image placeholder */}
          <div className="relative mt-16">
            <div 
              className="aspect-[16/9] bg-zinc-900/60 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-400 text-lg font-medium transition-all duration-300 hover:border-[#B56D57] hover:bg-zinc-900/80"
              style={{ borderRadius: '24px' }}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B56D57] to-[#A4513E] flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-xl">Planta Industrial</p>
                <p className="text-sm text-zinc-500 mt-2">Lajeado - RS</p>
              </div>
            </div>
            
            {/* Decorative border */}
            <div className="absolute -inset-1 rounded-3xl opacity-20 blur-sm" 
                 style={{ background: `linear-gradient(135deg, #B56D57, #E1B8A5, #A4513E)` }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
