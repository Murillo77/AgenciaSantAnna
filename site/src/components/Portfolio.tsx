import { FadeIn } from './FadeIn'

type Project = {
  name: string
  segment: string
  description: string
  imagePlaceholder: 'julio' | 'perola'
}

const PROJECTS: Project[] = [
  {
    name: 'Júlio',
    segment: 'Projeto real',
    description:
      'Site profissional desenvolvido para destacar serviços e gerar contatos qualificados.',
    imagePlaceholder: 'julio',
  },
  {
    name: 'Pérola',
    segment: 'Projeto real',
    description:
      'Presença digital moderna e responsiva, com foco em conversão e experiência do usuário.',
    imagePlaceholder: 'perola',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Portfólio
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            Projetos que geram resultados
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Conheça alguns dos sites que criamos para nossos clientes.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.name} delay={i === 0 ? 0 : 1}>
            <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <div
                  className={`absolute inset-0 transition duration-500 group-hover:scale-105 ${
                    project.imagePlaceholder === 'julio'
                      ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-950'
                      : 'bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950'
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl border border-white/10 bg-black/30 px-6 py-3 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-white/90">{project.name}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="space-y-2 p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-slate-50">{project.name}</h3>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    {project.segment}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
