import { motion } from 'framer-motion'
import { projects, type Project } from '../data'
import Reveal from './Reveal'

const accent = { acid: 'bg-acid', hot: 'bg-hot', sky: 'bg-sky' } as const

function Row({ p, i }: { p: Project; i: number }) {
  const content = (
    <>
      <span
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 ${accent[p.accent]}`}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-sm md:text-base">0{i + 1}</span>
          <span className="text-right font-mono text-xs uppercase md:text-sm">
            {p.kind} / {p.status}
          </span>
        </div>

        <h3 className="mt-4 font-display text-[clamp(2.25rem,8vw,7rem)] uppercase leading-[0.9] tracking-tight transition-transform duration-500 group-hover:translate-x-3">
          {p.title}
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="max-w-xl text-base md:text-lg">{p.blurb}</p>
            {p.items && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.items.map((it) => (
                  <li key={it} className="border-2 border-ink px-2.5 py-1 font-mono text-xs uppercase">
                    {it}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {p.stack.map((s) => (
              <span key={s} className="brut-sm bg-paper px-2.5 py-1 font-mono text-xs uppercase">
                {s}
              </span>
            ))}
            <span className="ml-2 inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-paper font-display text-2xl transition-transform duration-300 group-hover:rotate-45">
              {p.href ? '↗' : '✱'}
            </span>
          </div>
        </div>
        {p.href ? (
          <p className="mt-3 font-mono text-xs uppercase opacity-70">Visit live site →</p>
        ) : (
          <p className="mt-3 font-mono text-xs uppercase opacity-70">Private app, case study on request</p>
        )}
      </div>
    </>
  )

  const cls = 'proj group relative block overflow-hidden border-t-[3px] border-ink px-5 py-8 md:px-10 md:py-12'

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {p.href ? (
        <a href={p.href} target="_blank" rel="noreferrer" className={cls} data-hover>
          {content}
        </a>
      ) : (
        <div className={cls} data-hover>
          {content}
        </div>
      )}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative pt-12 md:pt-20">
      <div className="px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-sm uppercase">( Selected work )</p>
          <h2 className="mt-2 font-display text-[clamp(3rem,12vw,11rem)] uppercase leading-[0.85] tracking-tighter">
            Things I've <span className="stroke-text">built</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 md:mt-20">
        {projects.map((p, i) => (
          <Row key={p.title} p={p} i={i} />
        ))}
        <div className="border-t-[3px] border-ink" />
      </div>
    </section>
  )
}
