import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {
  line1?: string
  line2?: string
  accentWord?: string
  bgColor?: string
  textColor?: string
  accentColor?: string
  align?: 'left' | 'right' | 'center'
  photos?: string[]
  photoDuration?: number
}

export default function DisplaySection({
  line1,
  line2,
  accentWord,
  bgColor,
  textColor = '#fff',
  accentColor,
  align = 'left',
  photos,
  photoDuration = 22,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['3%', '-3%'])

  const alignClass =
    align === 'right' ? 'items-end text-right' :
    align === 'center' ? 'items-center text-center' :
    'items-start text-left'

  if (photos && photos.length > 0) {
    const sectionBg = bgColor ?? 'transparent'
    const isStickers = !!bgColor

    return (
      <section
        ref={ref}
        className="relative overflow-hidden"
        style={{ backgroundColor: sectionBg, paddingTop: isStickers ? '8px' : 0, paddingBottom: isStickers ? '8px' : 0 }}
      >
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          }}
        >
          <motion.div style={{ y }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isStickers ? '0px' : '6px',
                width: 'max-content',
                animation: `scrollRight ${photoDuration}s linear infinite`,
              }}
            >
              {photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{
                    height: isStickers ? '260px' : '40vh',
                    width: isStickers ? '260px' : 'auto',
                    display: 'block',
                    objectFit: isStickers ? 'contain' : 'cover',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: bgColor, minHeight: '44vh', display: 'flex', alignItems: 'center' }}
    >
      <motion.div
        style={{ y }}
        className={`w-full px-6 md:px-12 lg:px-20 py-16 flex flex-col ${alignClass}`}
      >
        <div className="reveal-overflow">
          <motion.div
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="display-text font-heading"
            style={{ color: textColor }}
          >
            {line1}
          </motion.div>
        </div>
        <div className="reveal-overflow">
          <motion.div
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="display-text font-heading"
            style={{ color: accentWord ? textColor : (accentColor ?? textColor) }}
          >
            {accentWord ? (
              <>
                {line2?.replace(accentWord, '')}{' '}
                <span style={{ color: accentColor ?? textColor }}>{accentWord}</span>
              </>
            ) : line2}
          </motion.div>
        </div>
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px',
        }}
      />
    </section>
  )
}
