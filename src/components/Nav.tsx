import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 md:px-10">
      <a href="#top" className="brut-sm light-ctx bg-acid px-3 py-1 font-display text-xl leading-none">
        TJ<span className="text-hot">.</span>
      </a>

      <nav className="brut-sm hidden gap-1 bg-paper p-1 md:flex" aria-label="Primary">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-4 py-1.5 font-mono text-sm uppercase transition-colors hover:bg-ink hover:text-paper"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          className="brut-sm bg-paper px-4 py-1.5 font-mono text-sm uppercase md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="light-ctx fixed inset-0 -z-10 flex flex-col justify-center gap-2 bg-acid px-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 + i * 0.07 } }}
                className="font-display text-5xl uppercase"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
