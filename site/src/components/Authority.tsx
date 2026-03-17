import { FadeIn } from './FadeIn'

export function Authority() {
  return (
    <section id="prova-valor" className="scroll-mt-24">
      <FadeIn>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/50 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Sites feitos para negócios reais crescerem
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Já ajudamos empresas a terem presença online profissional e mais credibilidade com
              seus clientes.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
