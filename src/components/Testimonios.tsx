import { motion } from 'framer-motion'

// Pexels free-use photos — Latin/Colombian people aged 25-40
const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop`

const testimonials = [
  {
    quote: 'Llevaba meses despertándome con dolor de mandíbula y dolores de cabeza. Desde que uso Yevalo, eso desapareció por completo. ¡Me siento como nueva!',
    name: 'Laura G.',
    role: 'Profesora · Bogotá',
    accentColor: '#E96F18',
    photo: PEXELS(8783819),
    stars: 5,
  },
  {
    quote: 'Al principio dudé, porque los precios del dentista me parecían inalcanzables. Yevalo me dio la misma protección por muchísimo menos. Totalmente recomendado.',
    name: 'Ana P.',
    role: 'Estilista · Medellín',
    accentColor: '#11A4A6',
    photo: PEXELS(16044275),
    stars: 5,
  },
  {
    quote: 'Trabajo bajo mucho estrés y el bruxismo me afectaba demasiado. Después de una semana con Yevalo ya noté la diferencia. Ahora duermo mucho mejor.',
    name: 'Luis T.',
    role: 'Ingeniero · Cali',
    accentColor: '#E96F18',
    photo: PEXELS(9822534),
    stars: 5,
  },
  {
    quote: 'Un producto sencillo que realmente funciona. Lo compré con algo de escepticismo, pero después de un mes no puedo imaginarme dormir sin él.',
    name: 'Sebastián R.',
    role: 'Diseñador · Barranquilla',
    accentColor: '#11A4A6',
    photo: PEXELS(9611078),
    stars: 5,
  },
  {
    quote: 'Mi pareja fue quien me lo recomendó. Llevaba semanas quejándome del dolor. Compré Yevalo y en los primeros días ya sentí el alivio. Vale cada peso.',
    name: 'Camila V.',
    role: 'Contadora · Manizales',
    accentColor: '#E96F18',
    photo: PEXELS(4616688),
    stars: 5,
  },
]

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" fill="#E96F18" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonios() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-1 py-1 mb-6">
            <span
              className="rounded-full px-3 py-1 text-xs font-body font-semibold text-white"
              style={{ backgroundColor: '#E96F18' }}
            >
              Lo que dicen nuestros clientes
            </span>
          </div>
          <h2
            className="font-heading font-black text-foreground"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Testimonios Reales
          </h2>
          <p className="font-body font-light text-sm mt-3" style={{ color: 'hsl(215 40% 8% / 0.45)' }}>
            Más de 1,000 colombianos ya duermen mejor con Yevalo
          </p>
        </motion.div>

        {/* Grid — 3 cols en desktop, 2 en tablet, 1 en móvil */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="liquid-glass rounded-2xl p-7 flex flex-col"
              style={{
                // 5to testimonio ocupa 2 columnas en sm para centrar en la última fila
                ...(i === 4 ? { gridColumn: 'span 1' } : {}),
              }}
            >
              <Stars count={t.stars} />

              <p
                className="font-body font-light text-sm italic flex-1 mb-6"
                style={{ color: 'hsl(215 40% 8% / 0.72)', lineHeight: 1.76 }}
              >
                "{t.quote}"
              </p>

              {/* Avatar + info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  style={{
                    border: `2px solid ${t.accentColor}40`,
                    boxShadow: `0 0 0 3px ${t.accentColor}18`,
                  }}
                  loading="lazy"
                />
                <div>
                  <p className="font-heading font-bold text-sm text-foreground leading-tight">{t.name}</p>
                  <p className="font-body font-light text-xs mt-0.5" style={{ color: 'hsl(215 40% 8% / 0.38)' }}>
                    {t.role}
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.accentColor }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
