
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

          <div className="relative mt-16">
            <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-zinc-700 shadow-2xl">
              <video
                src="/videos/industria.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
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
