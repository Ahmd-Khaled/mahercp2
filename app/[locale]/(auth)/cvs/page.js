import AllCvs from '@/Components/Admin/AllCVs/AllCvs'
import CVsList from '@/Components/Admin/AllCVs/CVsList/CVsList';
import PageHead from '@/Components/utils/PageHead/PageHead'
import useGetAllCVs from '@/hooks/Admin/useGetAllCVs';

export default async function AllCVsPage() {
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "",
    },
    {
      id: "02",
      link: "/cvs",
      titleAr: "طلبات التوظيف",
      titleEn: "",
    },
  ];

  const [allCVsData] = await useGetAllCVs('', 1);

  return (
    <>
      <PageHead pageTitle="جميع طلبات التوظيف" links={linksList} />
      <AllCvs>
        <CVsList allCVsData={allCVsData} />
      </AllCvs>
    </>
  )
}
