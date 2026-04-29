import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { GlowCard } from './ui/spotlight-card'

interface Plan {
  name: string
  basePrice: number | null
  period: string
  badge?: string
  description: string
  features: string[]
  button: string
  highlighted: boolean
}

const plans: Plan[] = [
  {
    name: 'Plan Básico',
    basePrice: 54900,
    period: '/mes',
    description: 'Ideal para quienes desean probar el protector bucal de forma mensual.',
    features: [
      'Incluye 1 protector bucal de silicona',
      'Envío gratis',
      'Pago contra entrega',
    ],
    button: 'Suscríbete ahora',
    highlighted: false,
  },
  {
    name: 'Plan Anual',
    basePrice: 592920,
    period: '/año',
    badge: 'Recomendado',
    description: 'Plan completo para un año de descanso sin interrupciones, con más ahorro.',
    features: [
      '12 protectores bucales (uno por mes)',
      'Envío gratis',
      'Pago contra entrega',
      '10% de descuento adicional',
    ],
    button: 'Suscríbete ahora',
    highlighted: true,
  },
  {
    name: 'Plan Familiar',
    basePrice: null,
    period: '/año',
    description: 'Para familias que desean disfrutar de un descanso mejorado con varios protectores bucales.',
    features: [
      '24 protectores bucales (dos por mes)',
      'Envío gratis',
      'Pago contra entrega',
      'Acceso a atención personalizada',
    ],
    button: 'Consultar ahora',
    highlighted: false,
  },
]

const DISCOUNT = 0.15

function displayPrice(plan: Plan, isAnnual: boolean): string {
  if (plan.basePrice === null) return 'Consultar'
  const price = isAnnual ? Math.round(plan.basePrice * (1 - DISCOUNT)) : plan.basePrice
  return `$${price.toLocaleString('es-CO')}`
}

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }
const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-1 py-1 mb-6">
            <span
              className="rounded-full px-3 py-1 text-xs font-body font-semibold text-white"
              style={{ backgroundColor: '#E96F18' }}
            >
              Elige el plan perfecto para ti
            </span>
          </div>
          <h2
            className="font-heading font-black text-foreground mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Planes de Suscripción
          </h2>
          <p className="font-body font-light text-base md:text-lg" style={{ color: 'hsl(215 40% 8% / 0.58)' }}>
            Elige el plan que más te convenga y empieza a dormir mejor.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-14">
          <div className="liquid-glass rounded-full p-1 inline-flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-body font-medium transition-all ${
                !isAnnual
                  ? 'text-white'
                  : ''
              }`}
              style={!isAnnual ? { backgroundColor: 'hsl(215 40% 8%)' } : { color: 'hsl(215 40% 8% / 0.5)' }}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-body font-medium transition-all flex items-center gap-1.5 ${
                isAnnual ? 'text-white' : ''
              }`}
              style={isAnnual ? { backgroundColor: 'hsl(215 40% 8%)' } : { color: 'hsl(215 40% 8% / 0.5)' }}
            >
              Anual
              <span
                className="text-white font-semibold rounded-full px-1.5 py-0.5"
                style={{ backgroundColor: '#E96F18', fontSize: '0.6rem' }}
              >
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {plans.map((plan, i) => (
            <motion.div key={i} variants={staggerItem}>
              <GlowCard
                customSize
                glowColor={plan.highlighted ? 'orange' : 'blue'}
                className="p-8 flex flex-col w-full h-full"
                style={plan.highlighted ? {
                  boxShadow: '0 0 0 2px rgba(233,111,24,0.25), 0 20px 40px rgba(0,0,0,0.08)',
                } as React.CSSProperties : undefined}
              >
                {plan.badge && (
                  <div className="mb-3">
                    <span
                      className="text-xs font-body font-semibold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: '#E96F18' }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{plan.name}</h3>

                <div className="flex items-baseline gap-1 mt-4">
                  <span
                    className="font-heading font-black text-foreground"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    {displayPrice(plan, isAnnual)}
                  </span>
                </div>
                <span className="font-body font-light text-sm mb-4" style={{ color: 'hsl(215 40% 8% / 0.45)' }}>
                  {plan.period}
                </span>

                <p className="font-body font-light text-sm mb-6 leading-relaxed" style={{ color: 'hsl(215 40% 8% / 0.55)' }}>
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#11A4A6' }} />
                      <span className="font-body text-sm" style={{ color: 'hsl(215 40% 8% / 0.65)' }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-full py-3 font-body font-semibold text-sm tracking-wide transition-opacity hover:opacity-80 ${
                    plan.highlighted ? 'text-white' : 'liquid-glass-strong text-foreground'
                  }`}
                  style={plan.highlighted ? { backgroundColor: 'hsl(215 40% 8%)' } : {}}
                >
                  {plan.button}
                </button>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
