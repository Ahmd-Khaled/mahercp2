import MotionProjects from "@/Components/Art/projects-of-motion/MotionProjects"
import ServiceDetail from "@/Components/Art/serviceDetails/ServiceDetail"
import BoxService from "@/Components/Art/servicesBoxs/BoxService"
import BarLine from "@/Components/Home/barLine/BarLine"

import PageHead from "@/Components/utils/PageHead/PageHead"

export default function Art() {
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
      titleAr: "خدمات التصوير واالنتاج الفني",
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
    </main>
  )
}
