import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { profile, stats } from '../data'
import Reveal from './Reveal'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const v = useMotionValue(0)
  const rounded = useTransform(v, (n) => Math.round(n))

  useEffect(() => {
    if (!inView) return
    const c = animate(v, to, { duration: 1.6, ease: 'easeOut' })
    return () => c.stop()
  }, [inView, to, v])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="font-mono text-sm uppercase">( About )</p>
          <h2 className="mt-2 font-display text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.88] tracking-tighter">
            Who's <span className="stroke-text">behind</span> the code
          </h2>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="text-xl leading-snug md:text-3xl">{profile.about}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="brut-sm h-full p-5">
                  <div className="font-display text-5xl leading-none md:text-6xl">
                    {s.to !== undefined ? <Counter to={s.to} suffix={s.suffix} /> : s.text}
                  </div>
                  <p className="mt-3 font-mono text-xs uppercase">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
