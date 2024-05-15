import PageHead from "@/Components/utils/PageHead/PageHead"
import Contact from "@/Components/contact/Contact"

export default function ContactPage() {
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
      titleAr: "اتصل بنا",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="اتصل بنا" links={linksList} />
      <Contact />
    </main>
  )
}
