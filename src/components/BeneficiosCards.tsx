import { motion } from 'framer-motion'
import { AnimatedFeatureCard } from './ui/feature-card-1'

// Product/lifestyle photos — work well at card thumbnail size
import imgProductClear from '../../fotos pag/Mouth Guard Dental Clear Gel Gum Shield Night Teeth Grinding - With Case  _ eBay.jpg'
import imgSleepingMouthguard from '../../fotos pag/Tips for Sleeping With a Mouth Guard.jpg'
import imgWomanSmiling from '../../fotos pag/Mouthguards_ Their Uses, Advantages, and Types.jpg'

const cards = [
  {
    index: '01',
    tag: 'PROTECCIÓN',
    title: 'Silicona médica que cuida tu esmalte mientras duermes.',
    imageSrc: imgProductClear,
    color: 'orange' as const,
  },
  {
    index: '02',
    tag: 'COMODIDAD',
    title: 'Tan suave que olvidarás que lo llevas puesto.',
    imageSrc: imgSleepingMouthguard,
    color: 'teal' as const,
  },
  {
    index: '03',
    tag: 'AHORRO',
    title: 'Misma calidad que el dentista, sin la factura.',
    imageSrc: imgWomanSmiling,
    color: 'blue' as const,
  },
]

export default function BeneficiosCards() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="font-body font-semibold text-xs uppercase tracking-widest"
            style={{ color: '#E96F18' }}
          >
            Por qué Yevalo
          </span>
          <h2
            className="font-heading font-black text-foreground mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Tres razones que lo cambian todo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, i) => (
            <motion.div
              key={card.index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-sm"
            >
              <AnimatedFeatureCard
                index={card.index}
                tag={card.tag}
                title={card.title}
                imageSrc={card.imageSrc}
                color={card.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
