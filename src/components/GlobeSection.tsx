import { motion } from 'framer-motion'
import { Globe } from './ui/cobe-globe'
import { Package, Clock, MapPin } from 'lucide-react'

const markers = [
  { id: "bogota",   location: [4.711,   -74.0721] as [number, number], label: "Bogotá" },
  { id: "medellin", location: [6.2442,  -75.5812] as [number, number], label: "Medellín" },
  { id: "cali",     location: [3.4516,  -76.5320] as [number, number], label: "Cali" },
  { id: "baq",      location: [10.9685, -74.7813] as [number, number], label: "Barranquilla" },
  { id: "cdmx",     location: [19.4326, -99.1332] as [number, number], label: "Ciudad de México" },
]

const arcs = [
  { id: "bog-med", from: [4.711, -74.0721]  as [number, number], to: [6.2442, -75.5812] as [number, number] },
  { id: "bog-cal", from: [4.711, -74.0721]  as [number, number], to: [3.4516, -76.5320] as [number, number] },
  { id: "bog-baq", from: [4.711, -74.0721]  as [number, number], to: [10.9685,-74.7813] as [number, number] },
  { id: "bog-cdmx",from: [4.711, -74.0721]  as [number, number], to: [19.4326,-99.1332] as [number, number] },
]

const features = [
  { icon: <Package className="w-5 h-5" />, title: "Envío gratis",        desc: "A todo Colombia sin costo adicional." },
  { icon: <Clock   className="w-5 h-5" />, title: "24–48 horas",         desc: "Llega a tu puerta en tiempo récord." },
  { icon: <MapPin  className="w-5 h-5" />, title: "Cobertura nacional",  desc: "Bogotá, Medellín, Cali, Barranquilla y más." },
]

export default function GlobeSection() {
  return (
    <section className="bg-card py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="font-body font-semibold text-xs uppercase tracking-widest block mb-4"
              style={{ color: '#E96F18' }}
            >
              Envíos
            </span>
            <h2
              className="font-heading font-black text-foreground mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1 }}
            >
              Llegamos a donde<br />
              <span style={{ color: '#E96F18' }}>tú estás.</span>
            </h2>
            <p className="font-body font-light text-base leading-relaxed mb-10"
              style={{ color: 'hsl(215 40% 8% / 0.58)' }}>
              Enviamos a todo Colombia con despacho inmediato. Pago contra entrega disponible — ningún riesgo para ti.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ background: '#E96F18', color: '#fff' }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">{f.title}</p>
                    <p className="font-body text-sm mt-0.5" style={{ color: 'hsl(215 40% 8% / 0.55)' }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <Globe
              markers={markers}
              arcs={arcs}
              className="w-full max-w-sm"
              markerColor={[0.914, 0.435, 0.094]}
              baseColor={[0.95, 0.95, 0.95]}
              arcColor={[0.067, 0.643, 0.651]}
              glowColor={[0.98, 0.92, 0.88]}
              dark={0}
              mapBrightness={8}
              markerSize={0.04}
              speed={0.004}
              theta={0.25}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
