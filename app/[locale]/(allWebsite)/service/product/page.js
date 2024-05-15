import ServiceDetail from "@/Components/motion/serviceDetails/ServiceDetail"
import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import BoxService from "@/Components/motion/servicesBoxs/BoxService"
import MotionProjects from "@/Components/motion/projects-of-motion/MotionProjects"
import Pricing from "@/Components/motion/pricing/Pricing"

export default function Product() {
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية/",
      titleEn: "",
    },
    {
      id: "02",
      link: "/",
      titleAr: "موشن جرافيك",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="خدماتنا" links={linksList} />
      <ServiceDetail />
      <BarLine />
      <BoxService />
      <MotionProjects />
      <BarLine />
      <Pricing />
    </main>
  )
}
