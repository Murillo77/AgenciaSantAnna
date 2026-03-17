import { FadeIn } from './FadeIn'

const PROJECTS = [
  {
    name: 'Barbearia do Júlio',
    description:
      'Site institucional para atrair novos clientes e aumentar a presença online.',
    imagePlaceholder: 'julio',
  },
  {
    name: 'Pérola Beauty Home',
    description:
      'Site profissional para apresentar serviços e gerar mais agendamentos.',
    imagePlaceholder: 'perola',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Portfólio
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Projetos que geram resultados
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Conheça alguns dos sites que criamos para nossos clientes.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.name} delay={i === 0 ? 0 : 1}>
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <div
                  className={`absolute inset-0 transition duration-500 group-hover:scale-105 ${
                    project.imagePlaceholder === 'julio'
                      ? 'bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100'
                      : 'bg-gradient-to-br from-slate-200 via-slate-100 to-sky-100'
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl border border-slate-200/80 bg-white/90 px-6 py-3 shadow-sm backdrop-blur-sm">
                    <span className="text-sm font-semibold text-slate-800">{project.name}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
