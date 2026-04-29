import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import yevaloLogo from '../../imagenes yevalo/Yevalo_N_png.png'

const navLinks = ['Inicio', 'Productos', 'Testimonios', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-4 left-4 right-4 lg:left-8 lg:right-8 z-50 rounded-full transition-all duration-300 ${
        scrolled ? 'liquid-glass shadow-lg' : ''
      }`}
    >
      <div className="flex items-center justify-between px-4 lg:px-8 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center select-none">
          <img src={yevaloLogo} alt="Yevalo" style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block' }} />
        </a>

        {/* Nav links — desktop */}
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-body font-medium tracking-wide px-3 py-1.5 rounded-full transition-colors"
              style={{ color: 'hsl(215 40% 8% / 0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'hsl(215 40% 8%)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'hsl(215 40% 8% / 0.6)')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA — desktop */}
        <button className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 font-body font-semibold text-xs tracking-wider uppercase transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'hsl(215 40% 8%)', color: 'white' }}
        >
          QUIERO DORMIR MEJOR
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: 'hsl(215 40% 8% / 0.6)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
            className="md:hidden px-4 pb-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-body font-medium py-2 px-4 rounded-full transition-colors"
                style={{ color: 'hsl(215 40% 8% / 0.6)' }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 font-body font-semibold text-xs tracking-wider uppercase mt-1"
              style={{ backgroundColor: 'hsl(215 40% 8%)', color: 'white' }}
            >
              QUIERO DORMIR MEJOR
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
