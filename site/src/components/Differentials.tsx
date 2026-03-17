import { FadeIn } from './FadeIn'

const DIFFERENTIALS = [
  {
    title: 'Design profissional',
    description: 'Layouts modernos e exclusivos que transmitem credibilidade e alinham à sua marca.',
  },
  {
    title: '100% responsivo',
    description: 'Seu site perfeito em celular, tablet e desktop, sem perder qualidade nem velocidade.',
  },
  {
    title: 'Foco em conversão',
    description: 'Estrutura pensada para gerar contatos, agendamentos e vendas, não só visitas.',
  },
  {
    title: 'Entrega rápida',
    description: 'Processo organizado e prazos claros, para você colocar o site no ar no tempo combinado.',
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Diferenciais
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            Por que escolher a Agência Sant Anna
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Cada projeto é tratado com cuidado para entregar não só um site, mas uma base sólida
            para o crescimento do seu negócio.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {DIFFERENTIALS.map((item, i) => (
          <FadeIn key={item.title} delay={i < 2 ? (i as 0 | 1) : (i as 0 | 1)}>
            <article className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-900/60 p-5 transition-all duration-300 hover:border-emerald-500/25 hover:bg-slate-900/80">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 transition group-hover:bg-emerald-500/25">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
