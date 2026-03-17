import { FadeIn } from './FadeIn'

const whatsappUrl =
  'https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20criação%20de%20site.'

export function CtaSection() {
  return (
    <section id="cta" className="scroll-mt-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 py-16 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
          <div className="relative mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
              Pronto para ter um site profissional?
            </h2>
            <p className="mt-4 text-slate-400">
              Solicite um orçamento sem compromisso. Respondemos em até 1 dia útil.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-300 hover:shadow-emerald-500/30"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
