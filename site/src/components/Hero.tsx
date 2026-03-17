import { FadeIn } from './FadeIn'

const whatsappUrl =
  'https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20criação%20de%20site.'

export function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-[85vh] content-center gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center"
    >
      <div className="space-y-10">
        <FadeIn delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-300">
            Agência especializada em criação de sites
          </span>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Criamos sites que{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                geram clientes
              </span>{' '}
              para o seu negócio
            </h1>
          </FadeIn>
          <FadeIn delay={2}>
            <p className="max-w-lg text-balance text-base leading-relaxed text-slate-400 sm:text-lg">
              Desenvolvemos presença digital estratégica: sites rápidos, modernos e focados em
              converter visitantes em clientes.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={3}>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-300 hover:shadow-emerald-500/30"
            >
              Solicitar orçamento
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-7 py-3.5 text-sm font-medium text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={2} className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-transparent blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>seusite.com.br</span>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-300">
              Site profissional
            </span>
          </div>
          <div className="space-y-4 p-5">
            <div className="space-y-2">
              <div className="h-3 w-24 rounded bg-slate-800" />
              <div className="h-8 w-48 rounded bg-slate-800" />
              <div className="h-3 w-full max-w-[280px] rounded bg-slate-800/80" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-slate-800/80 p-3">
                  <div className="mb-2 h-8 w-12 rounded bg-emerald-500/30" />
                  <div className="h-2 w-16 rounded bg-slate-700" />
                  <div className="mt-1 h-2 w-12 rounded bg-slate-700/80" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
              <span className="text-xs font-medium text-emerald-200">Mais clientes pelo site</span>
              <span className="text-lg font-bold text-emerald-300">+resultados</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
