import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Moon,
  ShieldCheck,
  Smile,
  CalendarOff,
  TrendingUp,
  Award,
  Users,
  Star,
  ThumbsUp,
  ArrowRight,
  Zap,
  CheckCircle,
  Sparkles,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const benefits = [
    {
      icon: <Moon className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#11A4A6]" />,
      title: "Alivio Mandibular",
      description: "Reduce la tensión y el dolor en tu mandíbula desde la primera noche. Amanece sin ese malestar que afecta todo tu día.",
      position: "left",
    },
    {
      icon: <Smile className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#11A4A6]" />,
      title: "Sueño Profundo",
      description: "El 90% de nuestros usuarios nota mejora en la calidad del sueño durante la primera semana. Despierta renovado cada mañana.",
      position: "left",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#11A4A6]" />,
      title: "Fácil de Usar",
      description: "Colócalo antes de dormir. Sin citas, sin moldes dentales, sin complicaciones. En menos de 30 segundos ya estás protegido.",
      position: "left",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#11A4A6]" />,
      title: "Silicona Médica",
      description: "Fabricado con silicona grado médico, suave y flexible. Certificado para uso nocturno continuo sin irritar encías ni dientes.",
      position: "right",
    },
    {
      icon: <CalendarOff className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#11A4A6]" />,
      title: "Sin Citas Dentales",
      description: "Olvídate de esperas y costos exorbitantes. El dentista cotiza hasta $1.500.000. Yevalo te protege desde $54.900.",
      position: "right",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#11A4A6]" />,
      title: "Resultados Reales",
      description: "Más de 1,000 colombianos ya duermen mejor con Yevalo. No son promesas, son resultados verificados por nuestros clientes.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Users />, value: 1000, label: "Clientes Felices", suffix: "+" },
    { icon: <ThumbsUp />, value: 90, label: "Nivel de Satisfacción", suffix: "%" },
    { icon: <Award />, value: 98, label: "Recomiendan Yevalo", suffix: "%" },
    { icon: <Star />, value: 4, label: "Calificación Promedio", suffix: "/5" },
  ]

  return (
    <section
      id="por-que-yevalo"
      ref={sectionRef}
      className="w-full py-24 px-4 overflow-hidden relative"
      style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%), hsl(0 0% 97%))' }}
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ y: y1, rotate: rotate1, backgroundColor: 'rgba(233,111,24,0.06)' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ y: y2, rotate: rotate2, backgroundColor: 'rgba(17,164,166,0.06)' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(233,111,24,0.3)' }}
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(17,164,166,0.3)' }}
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="font-body font-semibold mb-2 flex items-center gap-2 uppercase tracking-widest text-xs"
            style={{ color: '#E96F18' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            Por qué Yevalo
          </motion.span>
          <h2
            className="font-heading font-black text-foreground mb-4 text-center"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Protección real. Precio justo. Desde hoy.
          </h2>
          <motion.div
            className="h-1 rounded-full"
            style={{ backgroundColor: '#E96F18' }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="font-body font-light text-center max-w-2xl mx-auto mb-16"
          style={{ color: 'hsl(215 40% 8% / 0.58)', lineHeight: 1.72 }}
          variants={itemVariants}
        >
          Yevalo es la alternativa inteligente a la placa dental del dentista. Misma protección, silicona médica certificada, sin citas ni esperas — y a una fracción del costo.
        </motion.p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left benefits */}
          <div className="space-y-16">
            {benefits
              .filter((b) => b.position === "left")
              .map((b, i) => (
                <BenefitItem
                  key={`left-${i}`}
                  icon={b.icon}
                  secondaryIcon={b.secondaryIcon}
                  title={b.title}
                  description={b.description}
                  variants={itemVariants}
                  delay={i * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=400&h=560&fit=crop"
                  alt="Persona durmiendo bien con Yevalo"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 flex items-end justify-center p-4"
                  style={{ background: 'linear-gradient(to top, rgba(13,26,45,0.55), transparent)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.div
                    className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm font-body font-semibold text-foreground cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    Duerme mejor hoy <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Teal border frame */}
              <motion.div
                className="absolute inset-0 rounded-2xl -m-3 z-[-1]"
                style={{ border: '3px solid rgba(17,164,166,0.35)' }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              {/* Floating dots */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full pointer-events-none"
                style={{ backgroundColor: 'rgba(233,111,24,0.10)', y: y1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full pointer-events-none"
                style={{ backgroundColor: 'rgba(17,164,166,0.12)', y: y2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              />
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full pointer-events-none"
                style={{ backgroundColor: '#E96F18' }}
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Right benefits */}
          <div className="space-y-16">
            {benefits
              .filter((b) => b.position === "right")
              .map((b, i) => (
                <BenefitItem
                  key={`right-${i}`}
                  icon={b.icon}
                  secondaryIcon={b.secondaryIcon}
                  title={b.title}
                  description={b.description}
                  variants={itemVariants}
                  delay={i * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <StatCounter
              key={i}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={i * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          className="mt-20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: 'hsl(215 40% 8%)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="font-heading font-black text-white text-2xl mb-2">
              ¿Listo para dormir sin dolor?
            </h3>
            <p className="font-body font-light text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Únete a más de 1,000 colombianos que ya protegen su descanso con Yevalo.
            </p>
          </div>
          <motion.button
            className="rounded-full px-7 py-3.5 font-body font-semibold text-sm tracking-wider uppercase flex items-center gap-2 flex-shrink-0"
            style={{ backgroundColor: '#E96F18', color: 'white' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QUIERO DORMIR MEJOR <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface BenefitItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function BenefitItem({ icon, secondaryIcon, title, description, variants, delay, direction }: BenefitItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="p-3 rounded-lg transition-colors duration-300 relative flex-shrink-0"
          style={{ color: '#E96F18', backgroundColor: 'rgba(233,111,24,0.10)' }}
          whileHover={{
            backgroundColor: 'rgba(233,111,24,0.18)',
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="font-heading font-bold text-lg text-foreground transition-colors duration-300 group-hover:text-[#E96F18]">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="font-body font-light text-sm leading-relaxed pl-12"
        style={{ color: 'hsl(215 40% 8% / 0.62)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="p-6 rounded-xl flex flex-col items-center text-center group"
      style={{ backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)' }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.9)', transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
        style={{ backgroundColor: 'rgba(233,111,24,0.08)', color: '#E96F18' }}
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="font-heading font-black text-3xl text-foreground flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="font-body font-light text-sm mt-1" style={{ color: 'hsl(215 40% 8% / 0.55)' }}>
        {label}
      </p>
      <motion.div
        className="h-0.5 mt-3 rounded-full"
        style={{ width: 40, backgroundColor: '#E96F18' }}
        whileHover={{ width: 64 }}
      />
    </motion.div>
  )
}
