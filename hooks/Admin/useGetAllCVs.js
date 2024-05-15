import { getData } from "@/functions/getData";

const useGetAllCVs = async (filterKey, page) => {
 
  const allCVs = await getData(
    `https://mahercp.net/dashboard/api/cv?page=${page}${filterKey}`,
    "no-store"
  );

  // useEffect(() => {

  //   const run = async () => {
  //     await getData(
  //       `https://mahercp.net/dashboard/api/cv?page=${page}${filterKey}`,
  //       "no-store"
  //     );
  //   };
  //   run();

  // }, [filterKey])

  // console.log("allCVs res: ", allCVs);

  let allCVsData = [];

  if (allCVs) {
    if (allCVs.data) {
      allCVsData = allCVs.data;
    }
  }
  return [allCVsData];
};

export default useGetAllCVs;
