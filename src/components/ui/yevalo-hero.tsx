"use client"

import type React from "react"
import { useRef } from "react"
import {
  Moon,
  ShieldCheck,
  Star,
  Smile,
  TrendingUp,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

import imgCenter from "../../../fotos pag/Start Your Morning with a Smile.jpg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const benefits = [
  {
    icon: <Moon className="w-5 h-5" />,
    badge: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-[#11A4A6]" />,
    title: "Duerme sin dolor",
    description: "Sin tensión mandibular desde la primera noche de uso.",
    side: "left",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    badge: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-[#11A4A6]" />,
    title: "Silicona médica",
    description: "El mismo material certificado que usa tu dentista.",
    side: "left",
  },
  {
    icon: <Star className="w-5 h-5" />,
    badge: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-[#E96F18]" />,
    title: "Resultados reales",
    description: "+1.000 usuarios duermen mejor cada noche.",
    side: "left",
  },
  {
    icon: <Smile className="w-5 h-5" />,
    badge: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-[#E96F18]" />,
    title: "Fácil de usar",
    description: "Se adapta en segundos, sin moldes ni citas.",
    side: "right",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    badge: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-[#11A4A6]" />,
    title: "90 % de alivio",
    description: "En la primera semana de uso constante.",
    side: "right",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    badge: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-[#E96F18]" />,
    title: "Sin cita previa",
    description: "Llega a tu puerta en 24–48 horas.",
    side: "right",
  },
]

const stats = [
  { value: 1000, suffix: "+", label: "Usuarios activos" },
  { value: 90, suffix: "%", label: "Sienten alivio" },
  { value: 98, suffix: "%", label: "Satisfacción" },
  { value: 4, suffix: "/5 ★", label: "Valoración media" },
]

interface BenefitItemProps {
  icon: React.ReactNode
  badge?: React.ReactNode
  title: string
  description: string
  direction: "left" | "right"
  delay: number
}

function BenefitItem({ icon, badge, title, description, direction, delay }: BenefitItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={itemVariants}
      transition={{ delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-2"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#E96F18] bg-[#E96F18]/10 p-2.5 rounded-lg transition-colors duration-300 group-hover:bg-[#E96F18]/20 relative flex-shrink-0"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {badge}
        </motion.div>
        <h3 className="font-heading font-bold text-base text-foreground group-hover:text-[#E96F18] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <p className="font-body text-sm text-foreground/60 leading-relaxed pl-11">
        {description}
      </p>
    </motion.div>
  )
}

interface StatCounterProps {
  value: number
  suffix: string
  label: string
  delay: number
}

function StatCounter({ value, suffix, label, delay }: StatCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 60, damping: 15 })
  const display = useTransform(spring, (v) => Math.floor(v))

  if (isInView) spring.set(value)

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="font-heading font-black text-3xl md:text-4xl text-foreground flex items-baseline gap-0.5">
        <motion.span>{display}</motion.span>
        <span className="text-[#E96F18]">{suffix}</span>
      </div>
      <p className="font-body text-xs text-foreground/50 mt-1 uppercase tracking-wider">{label}</p>
    </motion.div>
  )
}

export function YevaloHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.05 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])

  const leftBenefits = benefits.filter((b) => b.side === "left")
  const rightBenefits = benefits.filter((b) => b.side === "right")

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background pt-28 pb-20 px-4"
    >
      {/* Parallax blobs */}
      <motion.div
        className="absolute top-10 left-8 w-72 h-72 rounded-full bg-[#E96F18]/8 blur-3xl pointer-events-none"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-10 right-8 w-96 h-96 rounded-full bg-[#11A4A6]/8 blur-3xl pointer-events-none"
        style={{ y: y2 }}
      />

      {/* Floating dots */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-[#E96F18]/30 pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-[#11A4A6]/30 pointer-events-none"
        animate={{ y: [0, 18, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="font-body font-semibold text-xs uppercase tracking-widest block mb-4"
            style={{ color: '#E96F18' }}
          >
            Protector bucal nocturno · Silicona médica
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-black text-foreground leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
          >
            Despierta sin dolor.<br />
            <span style={{ color: '#E96F18' }}>Duerme como</span> mereces.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-foreground/60 max-w-xl mx-auto mb-8"
          >
            Yevalo protege tu mandíbula mientras duermes. Silicona médica blanda,
            diseño universal, precio justo. Sin citas, sin esperas.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
            <motion.a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-heading font-black text-sm uppercase tracking-wider text-white"
              style={{ background: '#E96F18' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Quiero dormir mejor <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-heading font-black text-sm uppercase tracking-wider border-2 text-foreground"
              style={{ borderColor: 'hsl(215 40% 8% / 0.15)' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Cómo funciona
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3-col grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left benefits */}
          <div className="space-y-10">
            {leftBenefits.map((b, i) => (
              <BenefitItem
                key={b.title}
                icon={b.icon}
                badge={b.badge}
                title={b.title}
                description={b.description}
                direction="left"
                delay={i * 0.15}
              />
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              {/* Border accent */}
              <motion.div
                className="absolute inset-0 rounded-2xl -m-3 z-[-1]"
                style={{ border: '3px solid #11A4A6', borderRadius: '1.25rem' }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={imgCenter}
                  alt="Mujer despertando feliz con Yevalo"
                  className="w-full aspect-[3/4] object-cover object-top"
                  fetchPriority="high"
                  decoding="async"
                />
                {/* Gradient overlay with badge */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5"
                  style={{ background: 'linear-gradient(to top, rgba(20,20,20,0.7) 0%, transparent 55%)' }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-heading font-black uppercase tracking-wider w-fit"
                    style={{ background: '#E96F18' }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Sin tensión mandibular
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating accent dots */}
              <motion.div
                className="absolute -top-5 -right-8 w-14 h-14 rounded-full bg-[#E96F18]/12"
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#11A4A6]/15"
                style={{ y: y2 }}
              />
            </motion.div>
          </div>

          {/* Right benefits */}
          <div className="space-y-10">
            {rightBenefits.map((b, i) => (
              <BenefitItem
                key={b.title}
                icon={b.icon}
                badge={b.badge}
                title={b.title}
                description={b.description}
                direction="right"
                delay={i * 0.15}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-10"
          style={{ borderColor: 'hsl(215 40% 8% / 0.1)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
