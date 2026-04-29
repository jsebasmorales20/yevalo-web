import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Row 1 — happy result photos (waking up fresh, smiling, sleeping well)
import imgWakingUp from '../../fotos pag/descargar.jpg'
import imgMorningSmile from '../../fotos pag/Start Your Morning with a Smile.jpg'
import imgWomanSmiling from '../../fotos pag/Mouthguards_ Their Uses, Advantages, and Types.jpg'
import imgSleepingWarm from '../../fotos pag/Berosely.jpg'

// Row 2 — product/solution photos
import imgProductClear from '../../fotos pag/Mouth Guard Dental Clear Gel Gum Shield Night Teeth Grinding - With Case  _ eBay.jpg'
import imgDentalModel from '../../fotos pag/descargar (3).jpg'
import imgSleepingMouthguard from '../../fotos pag/Tips for Sleeping With a Mouth Guard.jpg'
import imgJawPain from '../../fotos pag/descargar (2).jpg'

const rows = [
  {
    eyebrow: 'La alternativa inteligente',
    eyebrowColor: '#E96F18',
    title: 'El dentista te cotizó $400.000 o más. Yevalo te protege desde $54.900.',
    text: 'La mayoría de nuestros clientes llegaron aquí después de recibir cotizaciones de $300.000 a $1.500.000 por una placa dental. Yevalo cumple la misma función — silicona médica suave, sin citas, sin esperas y sin gastar una fortuna.',
    button: 'Quiero proteger mis dientes',
    photos: [imgWakingUp, imgMorningSmile, imgWomanSmiling, imgSleepingWarm, imgWakingUp, imgMorningSmile, imgWomanSmiling, imgSleepingWarm],
    duration: 28,
    reversed: false,
  },
  {
    eyebrow: 'Sin molestias, en serio',
    eyebrowColor: '#11A4A6',
    title: 'Tan suave que olvidarás que lo llevas puesto',
    text: 'Sabemos lo que piensas: «¿Y si se siente raro?» La silicona tipo gummy de Yevalo es flexible, ligera y no presiona encías ni dientes. El 90% de nuestros usuarios olvida que lo tiene puesto desde la primera semana.',
    button: 'Ver más beneficios',
    photos: [imgJawPain, imgProductClear, imgDentalModel, imgSleepingMouthguard, imgJawPain, imgProductClear, imgDentalModel, imgSleepingMouthguard],
    duration: 32,
    reversed: true,
  },
]

function PhotoStrip({ photos, duration }: { photos: string[]; duration: number }) {
  return (
    <div
      className="flex-1 w-full liquid-glass rounded-3xl overflow-hidden"
      style={{ aspectRatio: '4/3', position: 'relative' }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: 'max-content',
          animation: `scrollRight ${duration}s linear infinite`,
        }}
      >
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'cover',
              display: 'block',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function FeaturesAlternadas() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-1 py-1 mb-6">
            <span
              className="rounded-full px-3 py-1 text-xs font-body font-semibold text-white"
              style={{ backgroundColor: '#E96F18' }}
            >
              Lo que nos diferencia
            </span>
          </div>
          <h2
            className="font-heading font-black text-foreground"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Protección real. Precio justo. Desde hoy.
          </h2>
        </motion.div>

        {/* Rows */}
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={`flex flex-col ${row.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16 mb-20 last:mb-0`}
          >
            {/* Content */}
            <div className="flex-1 w-full">
              <p
                className="font-body font-semibold uppercase mb-3"
                style={{ fontSize: '0.62rem', letterSpacing: '0.28em', color: row.eyebrowColor }}
              >
                {row.eyebrow}
              </p>
              <h3
                className="font-heading font-black text-foreground mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 0.94 }}
              >
                {row.title}
              </h3>
              <div className="w-10 mb-5" style={{ height: '2px', backgroundColor: row.eyebrowColor }} />
              <p
                className="font-body font-light text-sm md:text-base mb-6"
                style={{ color: 'hsl(215 40% 8% / 0.58)', lineHeight: 1.72 }}
              >
                {row.text}
              </p>
              <button className="liquid-glass-strong rounded-full px-5 py-2.5 font-body font-semibold text-xs tracking-wider uppercase text-foreground inline-flex items-center gap-2 transition-all hover:shadow-md">
                {row.button}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Photo strip */}
            <PhotoStrip photos={row.photos} duration={row.duration} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
