import { WHATSAPP_URL } from '../lib/constants'

const NAV_ITEMS = [
  { label: 'Início', href: '#hero' },
  { label: 'Prova de valor', href: '#prova-valor' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white">
            SA
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              Agência Sant Anna
            </span>
            <span className="text-xs text-slate-500">Criação de sites</span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-emerald-600/40 bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100 md:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
