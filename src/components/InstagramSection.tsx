import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function InstagramSection() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12"
        >
          <div>
            <span
              className="font-body font-semibold text-xs uppercase tracking-widest block mb-3"
              style={{ color: '#E96F18' }}
            >
              Síguenos
            </span>
            <h2
              className="font-heading font-black text-foreground"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1 }}
            >
              @yevalo__
            </h2>
          </div>

          <motion.a
            href="https://www.instagram.com/yevalo__"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-heading font-black text-sm uppercase tracking-wider text-white flex-shrink-0"
            style={{ background: '#E96F18' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Instagram className="w-4 h-4" />
            Ver en Instagram
          </motion.a>
        </motion.div>

        {/* Elfsight Instagram Feed widget */}
        <div
          className="elfsight-app-345caca4-4e41-4916-8b1b-5299ce0e4644"
          data-elfsight-app-lazy
        />

      </div>
    </section>
  )
}
