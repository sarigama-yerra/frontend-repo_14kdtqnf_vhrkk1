import React from 'react'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(244,63,94,0.15),transparent)]" />
      <div className="container relative mx-auto px-6 md:px-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur md:p-12">
          <h3 className="text-center text-3xl font-semibold text-white md:text-4xl">
            Bring clarity to your enterprise data
          </h3>
          <p className="mt-3 text-center text-slate-300/80">
            We’ll tailor a private walkthrough for your stack and show you how fast your organization can get in sync.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thanks! We\'ll reach out shortly.')
            }}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
          >
            <input
              required
              type="email"
              placeholder="Work email"
              className="h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50"
            />
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              type="submit"
              className="h-12 rounded-xl bg-white px-6 font-medium text-slate-900 shadow-lg shadow-rose-500/10 hover:shadow-rose-500/20"
            >
              Request demo
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
