import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import DisplaySection from './components/DisplaySection'

const FeaturesSection  = lazy(() => import('./components/FeaturesSection'))
const InstagramSection = lazy(() => import('./components/InstagramSection'))
const GlobeSection     = lazy(() => import('./components/GlobeSection'))
const Testimonios      = lazy(() => import('./components/Testimonios'))
const Pricing          = lazy(() => import('./components/Pricing'))
const FAQ              = lazy(() => import('./components/FAQ'))
const CtaFooter        = lazy(() => import('./components/CtaFooter'))

const SectionFallback  = () => <div className="w-full py-24" />

// Orange DisplaySection — brand stickers Yevalo
import stickerMalasVibras    from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (5).jpeg'
import stickerNokia          from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (10).jpeg'
import stickerFortuneCookie  from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (7).jpeg'
import stickerLimones        from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (12).jpeg'
import stickerSancocho       from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (6).jpeg'
import stickerCarteraDice    from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.12 PM (1).jpeg'
import stickerGastaSabiamente from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (9).jpeg'
import stickerMiTia          from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (8).jpeg'
import stickerDelivery       from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.12 PM (4).jpeg'
import stickerCasaFamosos    from '../imagenes yevalo/WhatsApp Image 2026-04-23 at 1.18.13 PM (11).jpeg'

const orangePhotos = [
  stickerMalasVibras, stickerNokia, stickerFortuneCookie, stickerLimones,
  stickerSancocho, stickerCarteraDice, stickerGastaSabiamente, stickerMiTia,
  stickerDelivery, stickerCasaFamosos,
  stickerMalasVibras, stickerNokia, stickerFortuneCookie, stickerLimones,
  stickerSancocho, stickerCarteraDice, stickerGastaSabiamente, stickerMiTia,
  stickerDelivery, stickerCasaFamosos,
]

export default function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />

      <MarqueeStrip variant="light" />

      <DisplaySection
        bgColor="#1e1e1e"
        photos={orangePhotos}
        photoDuration={36}
      />

      <Suspense fallback={<SectionFallback />}><FeaturesSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><InstagramSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><GlobeSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><Testimonios /></Suspense>

      <MarqueeStrip variant="dark" />

      <Suspense fallback={<SectionFallback />}><Pricing /></Suspense>
      <Suspense fallback={<SectionFallback />}><FAQ /></Suspense>
      <Suspense fallback={<SectionFallback />}><CtaFooter /></Suspense>
    </div>
  )
}
