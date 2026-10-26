type Props = {
  items: string[]
  reverse?: boolean
  className?: string
  outline?: boolean
}

export default function Marquee({ items, reverse, className = '', outline }: Props) {
  const row = [...items, ...items]
  return (
    <div className={`marquee overflow-hidden whitespace-nowrap ${className}`} aria-hidden>
      <div className={`marquee-track ${reverse ? 'rev' : ''}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={i} className="flex items-center">
                <span className={`px-6 font-display uppercase ${outline && i % 2 ? 'stroke-current' : ''}`}>{t}</span>
                <span className="text-hot">✱</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
