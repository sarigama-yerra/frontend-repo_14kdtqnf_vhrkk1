import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Cog, Filter, Layout, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Layers,
    title: 'Ingest everything',
    desc: 'Pull in spreadsheets, databases, APIs, and files without manual mapping.'
  },
  {
    icon: Filter,
    title: 'Normalize automatically',
    desc: 'Our model harmonizes schemas and resolves duplicates in minutes.'
  },
  {
    icon: Layout,
    title: 'Visualize relationships',
    desc: 'See cross-team connections emerge in real time with graph-first views.'
  },
  {
    icon: Cog,
    title: 'Automate workflows',
    desc: 'Trigger updates, alerts, and approvals when your source of truth changes.'
  },
]

function Journey() {
  return (
    <section id="journey" className="relative isolate bg-slate-950 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(244,63,94,0.15),transparent)]" />
      <div className="container relative mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-semibold text-white md:text-5xl"
        >
          The journey from complexity to simplicity
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-white">
                  {React.createElement(s.icon, { size: 22 })}
                </div>
                <div className="text-sm text-slate-300/80">Step {i + 1}</div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300/80">{s.desc}</p>

              <motion.div
                className="mt-6 h-1 w-0 bg-gradient-to-r from-rose-400 to-rose-500"
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Micro-interaction grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-white">
              <Sparkles size={18} />
              <span className="text-sm text-slate-300/80">Live preview</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">The Organizer</h3>
            <p className="mt-2 text-slate-300/80">
              Drag cards to cluster ideas. Watch them snap into a clear structure as our model learns your intent.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="h-16 rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold text-white">Rules that feel natural</h3>
            <p className="mt-2 text-slate-300/80">
              Create soft constraints that guide teams instead of blocking them. Everything stays organized by design.
            </p>
            <div className="mt-6 flex items-center gap-2 text-slate-300/80">
              <div className="h-2 w-2 rounded-full bg-rose-400" />
              Context-aware suggestions
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-300/80">
              <div className="h-2 w-2 rounded-full bg-rose-400" />
              Auto-linking across systems
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-300/80">
              <div className="h-2 w-2 rounded-full bg-rose-400" />
              Audit-ready by default
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold text-white">Security, without the friction</h3>
            <p className="mt-2 text-slate-300/80">
              SSO, SCIM, and role-based access are built-in. It’s the safe, scalable way to centralize truth.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['SOC 2', 'HIPAA', 'GDPR', 'ISO 27001'].map((tag) => (
                <div key={tag} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-center text-slate-200">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Journey
