import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="light-ctx flex flex-wrap items-center justify-between gap-4 bg-ink px-5 py-8 font-mono text-sm uppercase text-paper md:px-10">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="text-acid">Built with React · TypeScript · Framer Motion</span>
      <a href="#top" className="bg-acid px-3 py-1 text-ink" style={{ border: '2px solid #f1eee4', boxShadow: '4px 4px 0 #f1eee4' }}>
        Back to top ↑
      </a>
    </footer>
  )
}
