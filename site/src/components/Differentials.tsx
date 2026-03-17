import { FadeIn } from './FadeIn'

const ITEMS = [
  'Design moderno e profissional',
  'Funciona perfeitamente no celular',
  'Carregamento rápido',
  'Foco em trazer clientes',
  'Suporte após entrega',
]

export function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Diferenciais
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Por que escolher a Agência Sant Anna
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Cada projeto é tratado com cuidado para entregar um site que realmente traz resultados.
          </p>
        </FadeIn>
      </div>

      <FadeIn>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-slate-800">{item}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  )
}
