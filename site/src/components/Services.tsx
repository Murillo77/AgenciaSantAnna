import { FadeIn } from './FadeIn'

const SERVICES = [
  {
    title: 'Criação de sites',
    description:
      'Sites institucionais e corporativos com design exclusivo, rápido e fácil de atualizar. Seu negócio com presença profissional na internet.',
    icon: IconSite,
  },
  {
    title: 'Landing pages',
    description:
      'Páginas de alta conversão para campanhas, lançamentos e ofertas. Estrutura pensada para transformar visitantes em leads e clientes.',
    icon: IconLanding,
  },
  {
    title: 'SEO básico',
    description:
      'Seu site configurado para ser encontrado no Google. Estrutura técnica e conteúdo alinhados às boas práticas de busca.',
    icon: IconSeo,
  },
  {
    title: 'Sites para negócios locais',
    description:
      'Presença digital para clínicas, escritórios, lojas e prestadores de serviço. Destaque no Google e mais contatos qualificados.',
    icon: IconLocal,
  },
]

function IconSite() {
  return (
    <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  )
}

function IconLanding() {
  return (
    <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  )
}

function IconSeo() {
  return (
    <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  )
}

function IconLocal() {
  return (
    <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24">
      <div className="mb-12 md:mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            O que fazemos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            Serviços pensados para o seu resultado
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Do primeiro contato à entrega, cuidamos de cada etapa para que seu site seja rápido,
            bonito e pronto para gerar clientes.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.title} delay={i < 2 ? (i as 0 | 1) : (i as 0 | 1)}>
            <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/15" />
              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                  <service.icon />
                </div>
                <div className="min-w-0 flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-slate-50">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
