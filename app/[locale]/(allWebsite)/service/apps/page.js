import ServiceDetail from "@/Components/apps/serviceDetails/ServiceDetail"
import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import MotionProjects from "@/Components/apps/projects-of-motion/MotionProjects"
import BoxService from "@/Components/apps/servicesBoxs/BoxService"

export default function Apps() {
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
      titleAr: "تطبيقات ومواقع",
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
