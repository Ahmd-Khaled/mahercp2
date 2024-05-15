import About from "@/Components/About/about/About"
import Service from "@/Components/About/service/Service"
import BarLine from "@/Components/Home/barLine/BarLine"
import PageHead from "@/Components/utils/PageHead/PageHead"

export default function AboutPage() {
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "",
    },
    {
      id: "02",
      link: "/",
      titleAr: "من نحن",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="من نحن" links={linksList} />
      <About />
      <BarLine />
      <Service />
    </main>
  )
}
