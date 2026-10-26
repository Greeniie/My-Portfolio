import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { education, jobs } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 24 })

  return (
    <section
      id="experience"
      className="light-ctx bg-ink px-5 py-24 text-paper md:px-10 md:py-40 dark:border-y-[3px] dark:border-paper/25"
    >
      <Reveal>
        <p className="font-mono text-sm uppercase text-acid">( Experience )</p>
        <h2 className="mt-2 font-display text-[clamp(3rem,12vw,11rem)] uppercase leading-[0.85] tracking-tighter">
          The <span className="text-acid">timeline</span>
        </h2>
      </Reveal>

      <div ref={ref} className="relative mt-16 md:mt-24">
        <div className="absolute bottom-0 left-[11px] top-0 w-[3px] bg-paper/20 md:left-[19px]" />
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-0 left-[11px] top-0 w-[3px] origin-top bg-acid md:left-[19px]"
        />

        <ul className="space-y-16 md:space-y-24">
          {jobs.map((j) => (
            <li key={j.company + j.period} className="relative pl-12 md:pl-20">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="absolute left-0 top-2 block h-6 w-6 rounded-full border-[3px] border-acid bg-ink md:h-10 md:w-10"
              />
              <Reveal delay={0.05}>
                <p className="font-mono text-sm uppercase text-acid">{j.period}</p>
                <h3 className="mt-2 font-display text-4xl uppercase leading-none md:text-7xl">{j.company}</h3>
                <p className="mt-2 text-lg font-bold md:text-2xl">{j.role}</p>
                <ul className="mt-5 max-w-2xl space-y-2 text-paper/80 md:text-lg">
                  {j.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="text-hot">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}

          <li className="relative pl-12 md:pl-20">
            <span className="absolute left-0 top-2 block h-6 w-6 rotate-45 border-[3px] border-acid bg-acid md:h-10 md:w-10" />
            <Reveal delay={0.05}>
              <p className="font-mono text-sm uppercase text-acid">{education.period}</p>
              <h3 className="mt-2 font-display text-3xl uppercase leading-none md:text-5xl">{education.school}</h3>
              <p className="mt-2 text-lg font-bold md:text-2xl">{education.degree}</p>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  )
}
