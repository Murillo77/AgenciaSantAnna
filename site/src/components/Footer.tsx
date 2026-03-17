export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="font-medium text-slate-200">Agência Sant Anna</p>
          <p className="text-[11px] text-slate-500">
            Sites profissionais, rápidos e prontos para vender todos os dias.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Agência Sant Anna. Todos os direitos reservados.
          </p>
          <div className="flex gap-3 text-[11px] text-slate-400">
            <a href="#" className="transition hover:text-emerald-300">
              Instagram
            </a>
            <a href="#" className="transition hover:text-emerald-300">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-emerald-300">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

