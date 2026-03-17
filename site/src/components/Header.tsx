const NAV_ITEMS = [
  { label: 'Início', href: '#hero' },
  { label: 'Autoridade', href: '#autoridade' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

const whatsappUrl =
  'https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20criação%20de%20site.'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-slate-950">
            SA
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold tracking-wide text-slate-50">
              Agência Sant Anna
            </span>
            <span className="text-xs text-slate-500">Criação de sites</span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20 md:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
