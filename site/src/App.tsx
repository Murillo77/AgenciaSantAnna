import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Authority } from './components/Authority'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Differentials } from './components/Differentials'
import { Process } from './components/Process'
import { CtaSection } from './components/CtaSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-1/2 aspect-[1108/632] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-200/40 via-sky-100/30 to-transparent opacity-70" />
        </div>

        <Header />

        <main className="mx-auto max-w-6xl flex flex-col gap-24 px-4 pb-28 pt-24 md:px-6 md:pt-28 lg:gap-32 lg:px-8 lg:pt-32">
          <Hero />
          <Authority />
          <Portfolio />
          <Services />
          <Differentials />
          <Process />
          <CtaSection />
          <Contact />
        </main>

        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  )
}
