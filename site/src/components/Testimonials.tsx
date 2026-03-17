type Testimonial = {
  name: string
  role: string
  content: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana Souza',
    role: 'Clínica Vida Plena',
    content:
      'Depois da criação do novo site, nossos agendamentos online dobraram. O layout transmite confiança e facilita muito para o paciente.',
  },
  {
    name: 'Rafael Lima',
    role: 'Sant Anna Advocacia',
    content:
      'Precisávamos de um site sério, moderno e objetivo. A equipe entendeu nossa necessidade e hoje recebemos contatos qualificados todos os dias.',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-24 space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Depoimentos
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            Clientes que confiam no nosso trabalho.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-slate-300">
          Alguns relatos de clientes que tiveram sua presença digital elevada com nossos projetos.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-3xl border border-white/5 bg-slate-900/70 p-5"
          >
            <p className="text-sm leading-relaxed text-slate-300">“{testimonial.content}”</p>
            <figcaption className="mt-4 flex items-center justify-between gap-2 text-xs">
              <div>
                <p className="font-semibold text-slate-50">{testimonial.name}</p>
                <p className="text-slate-400">{testimonial.role}</p>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300">
                Depoimento fictício
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

