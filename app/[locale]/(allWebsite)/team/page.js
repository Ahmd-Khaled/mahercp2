import PageTeam from "@/Components/utils/pageTeam/PageTeam"
import Team from "@/Components/team/team/Team"

export default function TeamPage() {
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
      titleAr: "فريق العمل",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageTeam pageTitle="فريق العمل" links={linksList} />
      <Team />
    </main>
  )
}
