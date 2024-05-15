import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import ServiceDetail from "@/Components/poster/serviceDetails/ServiceDetail"
import MotionProjects from "@/Components/poster/projects-of-motion/MotionProjects"

export default function Poster() {
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
      titleAr: "تصميم بوسترات اعلانيه",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="خدماتنا" links={linksList} />
      <ServiceDetail />
      <BarLine />
      <MotionProjects />
    </main>
  )
}
