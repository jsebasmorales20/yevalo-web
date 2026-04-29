import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = ['Términos y Condiciones', 'Política de Privacidad', 'Contacto']

export default function CtaFooter() {
  return (
    <section className="bg-background pt-24 pb-0 text-center relative overflow-hidden">
      {/* Central blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '280px',
          borderRadius: '9999px',
          background: 'radial-gradient(ellipse, rgba(233,111,24,1) 0%, transparent 70%)',
          opacity: 0.07,
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-body font-semibold uppercase mb-5"
          style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#E96F18' }}
        >
          Descubre cómo mejorar tu descanso
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-foreground max-w-4xl mx-auto"
          style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', lineHeight: 0.90 }}
        >
          Protege tu mandíbula mientras duermes
          <br />
          <span style={{ color: '#11A4A6' }}>Alivio rápido y descanso profundo con Yevalo</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body font-light text-base mx-auto mt-5 mb-10"
          style={{ color: 'hsl(215 40% 8% / 0.50)', maxWidth: '380px' }}
        >
          El protector bucal de silicona Yevalo es la solución perfecta para dormir sin dolor y despertar renovado.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex gap-3 flex-wrap justify-center"
        >
          <button
            className="rounded-full px-8 py-4 font-body font-semibold text-sm tracking-wider uppercase flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'hsl(215 40% 8%)', color: 'white' }}
          >
            QUIERO DORMIR MEJOR
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="liquid-glass-strong rounded-full px-8 py-4 font-body font-semibold text-sm tracking-wider uppercase text-foreground transition-all hover:shadow-md">
            VER MÁS BENEFICIOS
          </button>
        </motion.div>
      </div>

      {/* Footer bar */}
      <footer
        className="mt-20 py-7 flex flex-col sm:flex-row justify-between items-center px-8 lg:px-16 gap-4"
        style={{ borderTop: '1px solid hsl(215 40% 8% / 0.08)' }}
      >
        <p className="font-body text-xs tracking-wide" style={{ color: 'hsl(215 40% 8% / 0.28)' }}>
          © 2026 Yevalo. Todos los derechos reservados.
        </p>
        <nav className="flex items-center gap-3">
          {footerLinks.map((link, i) => (
            <span key={link} className="flex items-center gap-3">
              {i > 0 && (
                <span style={{ color: 'hsl(215 40% 8% / 0.15)' }}>·</span>
              )}
              <a
                href="#"
                className="font-body text-xs tracking-wide transition-colors"
                style={{ color: 'hsl(215 40% 8% / 0.28)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'hsl(215 40% 8% / 0.60)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'hsl(215 40% 8% / 0.28)')}
              >
                {link}
              </a>
            </span>
          ))}
        </nav>
      </footer>
    </section>
  )
}
