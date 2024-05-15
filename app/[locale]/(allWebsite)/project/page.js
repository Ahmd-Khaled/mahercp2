import Title from "@/Components/Projects/title/Title"
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
      titleAr: "أعمالنا",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="أعمالنا" links={linksList} />
      <Title />
    </main>
  )
}
