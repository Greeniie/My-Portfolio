import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { profile, socials } from '../data'
import Reveal from './Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'brut-sm w-full bg-paper px-4 py-3 font-sans text-lg outline-none transition-shadow focus:shadow-[6px_6px_0_var(--ink)]'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="light-ctx bg-acid px-5 py-24 md:px-10 md:py-40">
      <Reveal>
        <p className="font-mono text-sm uppercase">( Contact )</p>
        <h2 className="mt-2 font-display text-[clamp(3rem,13vw,12rem)] uppercase leading-[0.85] tracking-tighter">
          Got a project?
          <br />
          Let's <span className="stroke-text">talk.</span>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block border-b-[3px] border-ink font-mono text-base font-bold md:text-xl"
        >
          {profile.email}
        </a>
      </Reveal>

      <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <label className="block">
              <span className="mb-2 block font-mono text-sm uppercase">Your name</span>
              <input required name="name" autoComplete="name" className={field} placeholder="Ada Lovelace" />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-sm uppercase">Email</span>
              <input required type="email" name="email" autoComplete="email" className={field} placeholder="ada@example.com" />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-sm uppercase">What do you need built?</span>
              <textarea required name="message" rows={5} className={field} placeholder="Tell me about the project, timeline and budget." />
            </label>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileTap={{ x: 6, y: 6 }}
              className="brut bg-ink px-8 py-4 font-mono text-base font-bold uppercase text-acid transition-transform hover:-translate-x-1 hover:-translate-y-1 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message →'}
            </motion.button>

            <div role="status" aria-live="polite" className="font-mono text-sm uppercase">
              {status === 'sent' && <span className="brut-sm inline-block bg-paper px-3 py-1">Sent. I'll reply soon ✓</span>}
              {status === 'error' && (
                <span className="brut-sm inline-block bg-hot px-3 py-1">Something went wrong. Try again or email me.</span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="border-t-[3px] border-ink">
            {socials.map((s) => (
              <li key={s.label} className="border-b-[3px] border-ink">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between px-1 py-4 font-display text-3xl uppercase transition-all hover:bg-ink hover:px-4 hover:text-acid md:text-4xl"
                >
                  {s.label}
                  <span className="transition-transform duration-300 group-hover:rotate-45">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
