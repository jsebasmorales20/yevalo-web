import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import DisplaySection from './components/DisplaySection'
import FeaturesSection from './components/FeaturesSection'
import InstagramSection from './components/InstagramSection'
import GlobeSection from './components/GlobeSection'
import Testimonios from './components/Testimonios'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CtaFooter from './components/CtaFooter'

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

      <FeaturesSection />

      <InstagramSection />

      <GlobeSection />

      <Testimonios />

      <MarqueeStrip variant="dark" />

      <Pricing />
      <FAQ />
      <CtaFooter />
    </div>
  )
}
