import { FadeIn } from './FadeIn'
import { WHATSAPP_URL } from '../lib/constants'

export function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-[85vh] content-center gap-14 md:grid-cols-[1.2fr_1fr] md:items-center"
    >
      <div className="space-y-10">
        <div className="space-y-8">
          <FadeIn delay={0}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Criamos sites que{' '}
              <span className="text-emerald-600">trazem clientes</span>{' '}
              para o seu negócio
            </h1>
          </FadeIn>
          <FadeIn delay={1}>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-slate-600">
              Tenha um site profissional, rápido e pensado para gerar resultados reais — mesmo
              que você ainda não tenha presença online.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={2}>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 hover:shadow-emerald-600/30"
            >
              Quero um site profissional
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
            >
              Falar no WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={1} className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-100/80 via-sky-50/60 to-transparent blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>seusite.com.br</span>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
              Site profissional
            </span>
          </div>
          <div className="space-y-4 p-5">
            <div className="space-y-2">
              <div className="h-3 w-24 rounded bg-slate-200" />
              <div className="h-8 w-48 rounded bg-slate-200" />
              <div className="h-3 w-full max-w-[280px] rounded bg-slate-100" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-slate-50 p-3">
                  <div className="mb-2 h-8 w-12 rounded bg-emerald-200" />
                  <div className="h-2 w-16 rounded bg-slate-200" />
                  <div className="mt-1 h-2 w-12 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/80 p-3">
              <span className="text-xs font-medium text-emerald-800">Mais clientes pelo site</span>
              <span className="text-lg font-bold text-emerald-600">+resultados</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
