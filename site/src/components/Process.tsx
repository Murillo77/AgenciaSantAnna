import { FadeIn } from './FadeIn'

const STEPS = [
  { step: '1', title: 'Você entra em contato', description: 'Nos conte o que você precisa.' },
  { step: '2', title: 'Entendemos seu negócio', description: 'Alinhamos expectativas e objetivos.' },
  { step: '3', title: 'Criamos seu site', description: 'Desenvolvimento com qualidade e prazo.' },
  { step: '4', title: 'Entregamos pronto', description: 'Seu site no ar, com suporte.' },
]

export function Process() {
  return (
    <section id="processo" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Processo simples e transparente
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Do primeiro contato à entrega, você acompanha cada etapa com clareza.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((item, i) => (
          <FadeIn key={item.step} delay={i < 2 ? (i as 0 | 1) : (i as 0 | 1)}>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-50 text-lg font-bold text-emerald-600">
                {item.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
