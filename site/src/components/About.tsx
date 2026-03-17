export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 space-y-6 rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-soft md:p-10"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Sobre a agência
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            Muito além de um site bonito.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-slate-300">
          A Agência Sant Anna é especializada em criar sites estratégicos para negócios que
          desejam crescer no digital. Unimos design moderno, tecnologia de ponta e foco em
          conversão para construir experiências que realmente geram resultados.
        </p>
      </div>

      <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-4">
          <p className="text-xs font-medium text-emerald-300">Estratégia</p>
          <p className="mt-2 text-sm leading-relaxed">
            Cada projeto é planejado com base no objetivo do seu negócio, público-alvo e jornada
            de compra.
          </p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-4">
          <p className="text-xs font-medium text-emerald-300">Performance</p>
          <p className="mt-2 text-sm leading-relaxed">
            Sites rápidos, otimizados e preparados para campanhas de tráfego pago e SEO básico.
          </p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-4">
          <p className="text-xs font-medium text-emerald-300">Parceria</p>
          <p className="mt-2 text-sm leading-relaxed">
            Atendimento próximo, comunicação clara e suporte pós-entrega para você não ficar na
            mão.
          </p>
        </div>
      </div>
    </section>
  )
}

