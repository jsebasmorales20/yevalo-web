import { Shield, Smile, Wallet, Sunrise } from 'lucide-react'
import { Features } from './ui/features'

// Lifestyle photos — show the before/after emotional journey
import imgDentalModel from '../../fotos pag/descargar (3).jpg'
import imgSleepingMouthguard from '../../fotos pag/Tips for Sleeping With a Mouth Guard.jpg'
import imgWomanSmiling from '../../fotos pag/Mouthguards_ Their Uses, Advantages, and Types.jpg'
import imgMorningSmile from '../../fotos pag/Start Your Morning with a Smile.jpg'

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'Protección clínica desde la primera noche',
    description:
      'Silicona médica certificada que absorbe el impacto del bruxismo y evita el desgaste del esmalte. El mismo material que usan los odontólogos, a una fracción del precio.',
    image: imgDentalModel,
  },
  {
    id: 2,
    icon: Smile,
    title: 'Tan suave que olvidarás que lo llevas',
    description:
      'Diseño tipo gummy — flexible, ligero, sin presión en encías ni dientes. El 90 % de nuestros usuarios olvida que lo tiene puesto desde la primera semana.',
    image: imgSleepingMouthguard,
  },
  {
    id: 3,
    icon: Wallet,
    title: 'Ahorra hasta $1.000.000 vs el dentista',
    description:
      'Las placas dentales cuestan entre $300.000 y $1.500.000 en consultorio. Yevalo te protege desde $54.900 — sin citas, sin esperas y con envío a todo Colombia y México.',
    image: imgWomanSmiling,
  },
  {
    id: 4,
    icon: Sunrise,
    title: 'Amanecer sin dolor desde la semana 1',
    description:
      'La mayoría de usuarios reporta menos dolor de mandíbula y mejor calidad de sueño en los primeros 7 días. Tu cuerpo agradecerá el cambio desde la primera noche.',
    image: imgMorningSmile,
  },
]

export default function FeaturesSection() {
  return (
    <Features
      heading="Lo que hace especial a Yevalo"
      subheading="Beneficios reales. Desde la primera noche."
      features={features}
      progressGradientLight="bg-gradient-to-r from-orange-400 to-orange-500"
      progressGradientDark="bg-gradient-to-r from-orange-300 to-orange-400"
    />
  )
}
