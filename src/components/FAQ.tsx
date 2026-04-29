import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items = [
  {
    id: '1',
    title: '¿Funciona de verdad desde la primera noche?',
    content:
      'Sí. La silicona médica crea una barrera entre tu mandíbula superior e inferior que reduce inmediatamente la presión del bruxismo. La mayoría de nuestros usuarios reporta menos tensión al despertar desde la primera semana. Los resultados completos llegan entre 2 y 4 semanas de uso constante.',
  },
  {
    id: '2',
    title: '¿Se siente incómodo o raro en la boca?',
    content:
      'Al principio notarás que está ahí — es normal. La silicona tipo gummy de Yevalo es blanda y flexible, no rígida como las placas de acrílico del dentista. El 90% de nuestros usuarios deja de notarlo entre 3 y 7 noches. Si tienes molestias persistentes después de 2 semanas, te hacemos el cambio sin preguntas.',
  },
  {
    id: '3',
    title: '¿Lo voy a escupir mientras duermo?',
    content:
      'Es una duda muy común. El diseño anatómico de Yevalo se apoya en las superficies naturales de tus dientes — no necesita adhesivo ni un ajuste perfecto. La mayoría de escupidas ocurren las primeras 2-3 noches mientras tu boca se acostumbra. Después de eso, permanece en su lugar toda la noche.',
  },
  {
    id: '4',
    title: '¿Es igual al del dentista?',
    content:
      'El material es el mismo — silicona médica certificada. La diferencia es el proceso: la placa del odontólogo se fabrica con un molde personalizado de tu boca y puede costar entre $300.000 y $1.500.000. Yevalo usa un diseño universal que funciona para la gran mayoría de personas a una fracción de ese precio.',
  },
  {
    id: '5',
    title: '¿Cuánto dura el protector?',
    content:
      'Con uso diario y cuidado básico (enjuague con agua fría, guardarlo en su estuche), Yevalo dura entre 6 y 12 meses. Si lo desgastas más rápido porque tu bruxismo es intenso, eso es señal de que está haciendo su trabajo — protegiendo tu esmalte en vez de tu mandíbula.',
  },
  {
    id: '6',
    title: '¿Cómo lo cuido y lo limpio?',
    content:
      'Después de cada uso enjuágalo con agua fría (nunca caliente — deforma la silicona). Una vez a la semana puedes limpiarlo con cepillo suave y jabón neutro. Guárdalo en el estuche que viene incluido para que no acumule bacterias. No lo pongas en el lavavajillas ni lo dejes al sol.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span
            className="font-body font-semibold text-xs uppercase tracking-widest block mb-4"
            style={{ color: '#E96F18' }}
          >
            Preguntas frecuentes
          </span>
          <h2
            className="font-heading font-black text-foreground max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 0.95 }}
          >
            Por qué elegir<br />Yevalo
          </h2>
        </motion.div>

        {/* Accordion — estilo editorial grande */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" defaultValue="1" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="last:border-b border-foreground/10"
              >
                <AccordionTrigger
                  className={[
                    'text-left pl-0 md:pl-10 py-7',
                    'overflow-hidden hover:no-underline cursor-pointer',
                    '-space-y-5 data-[state=open]:space-y-0',
                    'text-foreground/20 data-[state=open]:text-foreground',
                    'transition-colors duration-300',
                    '[&>svg]:hidden',
                  ].join(' ')}
                >
                  <div className="flex flex-1 items-center gap-5 md:gap-8">
                    <span
                      className="font-mono text-xs font-semibold flex-shrink-0 tabular-nums"
                      style={{ color: '#E96F18' }}
                    >
                      {item.id}
                    </span>
                    <h3 className="font-heading font-black uppercase text-2xl md:text-4xl lg:text-5xl leading-none tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-0 md:pl-10 pb-8">
                  <p
                    className="font-body font-light text-base leading-relaxed max-w-2xl"
                    style={{ color: 'hsl(215 40% 8% / 0.62)' }}
                  >
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  )
}
