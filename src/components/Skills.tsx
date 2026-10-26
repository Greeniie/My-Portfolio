import { motion } from 'framer-motion'
import { skillGroups } from '../data'
import Marquee from './Marquee'
import Reveal from './Reveal'

const bgs = ['bg-acid', 'bg-sky', 'bg-hot', 'bg-acid'] as const

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-sm uppercase">( Toolbox )</p>
          <h2 className="mt-2 font-display text-[clamp(3rem,12vw,11rem)] uppercase leading-[0.85] tracking-tighter">
            Skills <span className="stroke-text">&amp;</span> stack
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1}>
              <div className={`brut light-ctx h-full p-6 ${bgs[gi % bgs.length]}`}>
                <h3 className="font-display text-3xl uppercase">{g.title}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <motion.li
                      key={s}
                      whileHover={{ rotate: -3, scale: 1.08, y: -3 }}
                      className="brut-sm bg-paper px-3 py-1.5 font-mono text-sm uppercase"
                      data-hover
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="light-ctx mt-20 -rotate-1 border-y-[3px] border-ink bg-acid py-4 text-4xl md:text-6xl">
        <Marquee items={['Pixel perfect', 'Responsive', 'SEO', 'Performant', 'Component driven', 'Agile']} />
      </div>
      <div className="light-ctx mt-2 rotate-1 border-y-[3px] border-ink bg-hot py-4 text-4xl md:text-6xl">
        <Marquee reverse items={['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux', 'Vite']} />
      </div>
    </section>
  )
}
