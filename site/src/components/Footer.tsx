export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="font-semibold text-slate-900">Agência Sant Anna</p>
          <p className="text-xs text-slate-500">
            Criação de sites profissionais que trazem clientes.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Agência Sant Anna. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="transition hover:text-emerald-600">
              Instagram
            </a>
            <a href="#" className="transition hover:text-emerald-600">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-emerald-600">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
