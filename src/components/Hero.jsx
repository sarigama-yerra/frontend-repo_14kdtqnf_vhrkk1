import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen snap-start overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient to ensure text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(244,63,94,0.25)]" />
              <span className="text-sm text-slate-200/80">Enterprise data, beautifully organized</span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              From chaos to clarity.
              <span className="block bg-gradient-to-r from-rose-300 to-rose-500 bg-clip-text text-transparent">
                A new way to see your data.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-200/80 md:text-xl">
              Meet the B2B platform that turns complex, siloed information into a living, intuitive system your whole team can trust.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#journey"
                className="rounded-xl bg-white px-5 py-3 text-slate-900 shadow-lg shadow-rose-500/10 transition hover:shadow-rose-500/20"
              >
                Take the tour
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#cta"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10"
              >
                Book a demo
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-slate-200/70">
              <div className="text-xs tracking-widest">SCROLL</div>
              <div className="mt-2 h-10 w-[2px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-3 w-full bg-white/70"
                  animate={{ y: [0, 24, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
