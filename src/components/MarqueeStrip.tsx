const items = [
  'Protege tu descanso',
  'Bruxismo',
  'Silicona Premium',
  'Sin Dolor',
  'Descansa Mejor',
  'Yevalo',
  'Alivio Inmediato',
  'Hecho en Colombia',
]

type Props = {
  variant?: 'light' | 'dark'
}

export default function MarqueeStrip({ variant = 'light' }: Props) {
  const isDark = variant === 'dark'
  const repeated = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-5"
      style={{
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'hsl(215 40% 8% / 0.08)'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'hsl(215 40% 8% / 0.08)'}`,
        backgroundColor: isDark ? 'hsl(215 40% 8%)' : 'transparent',
      }}
    >
      <div className="marquee-track select-none">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="font-heading font-black text-sm uppercase tracking-widest whitespace-nowrap px-6"
              style={{ color: isDark ? 'rgba(255,255,255,0.85)' : 'hsl(215 40% 8% / 0.55)' }}
            >
              {item}
            </span>
            <span
              className="font-black text-base"
              style={{ color: '#E96F18' }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
