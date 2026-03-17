import { FadeIn } from './FadeIn'
import { WHATSAPP_URL } from '../lib/constants'

export function CtaSection() {
  return (
    <section id="cta" className="scroll-mt-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50/50 py-16 md:py-20">
          <div className="relative mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pronto para ter um site profissional e atrair mais clientes?
            </h2>
            <p className="mt-4 text-slate-600">
              Solicite um orçamento sem compromisso. Respondemos em até 1 dia útil.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 hover:shadow-emerald-600/30"
              >
                Solicitar orçamento agora
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-base font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
