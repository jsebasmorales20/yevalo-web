import { motion } from 'framer-motion'

import imgColocar    from '../../fotos pag/Tips for Sleeping With a Mouth Guard.jpg'
import imgProducto   from '../../fotos pag/Mouth Guard Dental Clear Gel Gum Shield Night Teeth Grinding - With Case  _ eBay.jpg'
import imgDespertar  from '../../fotos pag/Start Your Morning with a Smile.jpg'

const steps = [
  {
    number: '01',
    tag: 'Antes de dormir',
    title: 'Lo colocas en segundos',
    text: 'Sin moldear, sin citas. Simplemente ponlo antes de cerrar los ojos — la silicona suave se adapta a tu mordida desde el primer uso.',
    image: imgColocar,
    accent: '#E96F18',
  },
  {
    number: '02',
    tag: 'Durante la noche',
    title: 'Protege mientras sueñas',
    text: 'La capa de silicona médica absorbe la presión del bruxismo sin que sientas nada. Sin ruidos, sin molestias, sin despertar a medianoche.',
    image: imgProducto,
    accent: '#11A4A6',
  },
  {
    number: '03',
    tag: 'En la mañana',
    title: 'Despiertas sin dolor',
    text: 'Sin mandíbula apretada. Sin dolor de cabeza. Sin empezar el día de mal humor. Solo tú, descansado y listo para lo que sea.',
    image: imgDespertar,
    accent: '#E96F18',
  },
]

export default function ComoFunciona() {
  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-24"
        >
          <span
            className="font-body font-semibold text-xs uppercase tracking-widest block mb-4"
            style={{ color: '#E96F18' }}
          >
            Así funciona
          </span>
          <h2
            className="font-heading font-black text-foreground max-w-xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 0.95 }}
          >
            Tres pasos.<br />Una sola noche.
          </h2>
        </motion.div>

        {/* Steps — alternating layout */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Step number badge */}
                  <div
                    className="absolute top-5 left-5 font-heading font-black text-white rounded-full w-12 h-12 flex items-center justify-center text-sm shadow-lg"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <span
                  className="font-body font-semibold text-xs uppercase tracking-widest block mb-4"
                  style={{ color: step.accent }}
                >
                  {step.tag}
                </span>
                <h3
                  className="font-heading font-black text-foreground mb-5"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 0.95 }}
                >
                  {step.title}
                </h3>
                {/* Accent line */}
                <div className="w-10 mb-6" style={{ height: '2px', backgroundColor: step.accent }} />
                <p
                  className="font-body font-light text-base leading-relaxed"
                  style={{ color: 'hsl(215 40% 8% / 0.58)', maxWidth: '420px' }}
                >
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
