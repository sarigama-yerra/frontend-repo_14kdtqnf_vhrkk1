import React from 'react'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Visualization from './components/Visualization'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="snap-y snap-mandatory">
        <Hero />
        <Journey />
        <Visualization />
        <CTA />
        <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-slate-400">
          © {new Date().getFullYear()} ClarityOS — All rights reserved
        </footer>
      </main>
    </div>
  )
}

export default App
