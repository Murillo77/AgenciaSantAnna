import { FadeIn } from './FadeIn'

const whatsappUrl =
  'https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20criação%20de%20site.'

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Contato
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            Fale conosco
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Envie sua mensagem ou fale diretamente pelo WhatsApp. Retornamos em até 1 dia útil.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-10 md:grid-cols-[1fr,auto] md:items-start">
        <FadeIn delay={0}>
          <form className="space-y-5 rounded-2xl border border-white/5 bg-slate-900/60 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-slate-200">
                  Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Seu nome"
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-slate-50 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="seu@email.com"
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-slate-50 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Conte sobre seu projeto..."
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-400 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto sm:px-8"
            >
              Enviar mensagem
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 md:min-w-[260px]">
            <p className="text-sm font-semibold text-emerald-200">Atendimento via WhatsApp</p>
            <p className="mt-2 text-sm text-slate-300">
              Resposta rápida para dúvidas e orçamentos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-500 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Abrir WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
