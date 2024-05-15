import ServiceDetail from "@/Components/marketing/serviceDetails/ServiceDetail"
import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import BoxService from "@/Components/marketing/servicesBoxs/BoxService"

export default function Marketing() {
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
      titleAr: "خدمات التسويق اإللكتروني",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="خدماتنا" links={linksList} />
      <ServiceDetail />
      <BarLine />
      <BoxService />
    </main>
  )
}
