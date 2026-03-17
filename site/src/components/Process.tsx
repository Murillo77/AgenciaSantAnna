import { FadeIn } from './FadeIn'

const STEPS = [
  {
    step: '1',
    title: 'Contato',
    description: 'Você nos conta o que precisa. Alinhamos expectativas, prazo e investimento.',
  },
  {
    step: '2',
    title: 'Planejamento',
    description: 'Definimos estrutura, textos e visual do site. Tudo aprovado antes de desenvolver.',
  },
  {
    step: '3',
    title: 'Desenvolvimento',
    description: 'Criamos o site com tecnologia moderna, responsivo e otimizado para resultados.',
  },
  {
    step: '4',
    title: 'Entrega',
    description: 'Seu site no ar, com suporte para ajustes e orientação para você administrar.',
  },
]

export function Process() {
  return (
    <section id="processo" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            Processo simples e transparente
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Do primeiro contato à publicação do site, você acompanha cada etapa com clareza.
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        <div
          className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent md:left-1/2 md:-translate-x-px"
          aria-hidden
        />
        <ul className="space-y-10 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-14 md:space-y-0">
          {STEPS.map((item, i) => (
            <FadeIn key={item.step} delay={i < 2 ? (i as 0 | 1) : (i as 0 | 1)}>
              <li
                className={`relative flex gap-5 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-emerald-500/50 bg-slate-950 text-lg font-bold text-emerald-400">
                  {item.step}
                </div>
                <div className={i % 2 === 1 ? 'md:text-right' : ''}>
                  <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
