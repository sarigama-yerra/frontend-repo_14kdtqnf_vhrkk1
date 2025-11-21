import React from 'react'
import { motion } from 'framer-motion'

// Unique data organization visualization
// Nodes flow from scattered to aligned as you scroll into view
function Visualization() {
  const nodes = Array.from({ length: 18 }).map((_, i) => ({ id: i }))

  return (
    <section className="relative bg-slate-950 py-28">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-semibold text-white md:text-5xl"
        >
          Watch complexity resolve into structure
        </motion.h2>

        <div className="mt-14 overflow-hidden">
          <div className="relative mx-auto max-w-5xl">
            {/* Scatter layer */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none absolute inset-0"
            >
              <div className="relative h-[420px]">
                {nodes.map((n, i) => (
                  <motion.div
                    key={`scatter-${n.id}`}
                    className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/80 shadow-[0_0_20px_rgba(244,63,94,0.5)]"
                    style={{ left: `${(i * 53) % 100}%`, top: `${(i * 97) % 100}%` }}
                    animate={{ x: [0, (i % 2 === 0 ? 10 : -10)], y: [0, (i % 3 === 0 ? 8 : -8)] }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Align layer */}
            <div className="relative h-[420px] rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur">
              <div className="grid h-full grid-cols-3 gap-6 md:grid-cols-6">
                {nodes.map((n, i) => (
                  <motion.div
                    key={`align-${n.id}`}
                    initial={{ scale: 0.6, opacity: 0.4 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.02 }}
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5"
                  >
                    <motion.div
                      className="h-2 w-2 rounded-full bg-rose-400"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.03 }}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visualization
