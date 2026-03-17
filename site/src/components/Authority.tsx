import { FadeIn } from './FadeIn'

const STATS = [
  { value: '+50', label: 'Projetos entregues' },
  { value: '100%', label: 'Sites responsivos' },
  { value: 'Foco', label: 'Em conversão' },
]

export function Authority() {
  return (
    <section id="autoridade" className="scroll-mt-24">
      <div className="rounded-3xl border border-white/5 bg-slate-900/50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Nossa experiência
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
              Sites desenvolvidos para gerar resultados reais
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              Acreditamos que um site não é apenas vitrine: é ferramenta de vendas, credibilidade e
              crescimento. Por isso cada projeto é pensado com estratégia, design profissional e
              foco em trazer clientes para o seu negócio.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <dt className="text-3xl font-bold text-emerald-400 sm:text-4xl">{stat.value}</dt>
                  <dd className="text-sm font-medium text-slate-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
