import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data'
import Marquee from './Marquee'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  const [g, setG] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setG((n) => (n + 1) % profile.greetings.length), 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28">
      <div className="px-5 md:px-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase">
          <span className="brut-sm light-ctx inline-flex h-9 items-center overflow-hidden bg-ink px-3 text-acid" style={{ background: '#0b0b0b', color: '#c8ff2e' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={g}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {profile.greetings[g]} 👋
              </motion.span>
            </AnimatePresence>
          </span>
          <span>I'm {profile.name}</span>
          <span className="hidden md:inline">/ {profile.location}</span>
        </div>
      </div>

      <motion.div style={{ y: titleY }} className="relative px-3 md:px-8">
        <h1 className="font-display text-[clamp(4.5rem,23vw,26rem)] uppercase leading-[0.82] tracking-tighter">
          <span className="sr-only">{profile.short}</span>
          <span aria-hidden className="flex overflow-hidden pb-[0.06em]">
            {profile.short.split('').map((c, i) => (
              <motion.span
                key={i}
                className={i % 2 ? 'stroke-text' : ''}
                initial={{ y: '110%', rotate: 8 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          style={{ rotate: badgeRotate }}
          className="light-ctx absolute -top-4 right-4 hidden h-36 w-36 items-center justify-center rounded-full border-[3px] border-ink bg-acid md:flex lg:right-16 lg:h-44 lg:w-44"
          aria-hidden
        >
          <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0">
            <defs>
              <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="700" letterSpacing="2.2" fill="#0b0b0b">
              <textPath href="#circ">AVAILABLE FOR WORK • AVAILABLE FOR WORK • </textPath>
            </text>
          </svg>
          <span className="font-display text-4xl">↗</span>
        </motion.div>
      </motion.div>

      <div className="grid gap-6 px-5 pb-10 md:grid-cols-[1.4fr_1fr] md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="max-w-2xl text-xl leading-snug md:text-3xl"
        >
          {profile.role}. {profile.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-start gap-4 md:justify-end"
        >
          <a
            href="#work"
            className="brut light-ctx bg-acid px-6 py-3 font-mono text-sm font-bold uppercase transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            See my work ↓
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="brut bg-paper px-6 py-3 font-mono text-sm font-bold uppercase transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Résumé
          </a>
        </motion.div>
      </div>

      <Marquee
        className="border-y-[3px] border-ink bg-ink py-3 text-3xl text-paper md:text-5xl"
        items={['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux', 'REST APIs']}
        outline
      />
    </section>
  )
}
