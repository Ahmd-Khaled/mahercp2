"use client";
import PagePagination from "@/Components/utils/PagePagination/PagePagination";
import styles from "./styles.module.scss";
// import CVsList from "./CVsList/CVsList";
import FilterCVs from "./FilterCVs/FilterCVs";
import useGetAllCVs from "@/hooks/Admin/useGetAllCVs";
import { useEffect, useState } from "react";
import { getDataClient } from "@/functions/getData";
import useSWR from "swr";
import { cloneElement } from "react";
import CVsListClient from "./CVsListClient/CVsListClient";

const AllCvs = ({ children }) => {
  const [page, setPage] = useState(1);
  const [filterKey, setFilterKey] = useState("");
  const [allCVsData, setAllCVsData] = useState(null);

  console.log("filterKey: ", filterKey);

  const filterHandler = (key) => {
    console.log("key: ", key);
    setFilterKey(key);
  };

  const paginationHandler = (val) => {
    setPage(val);
    // setInput({ ...input, [page]: +val });
  };

  useEffect(() => {
    const fetchCvsData = async () => {
      try {
        const response = await fetch(
          `https://mahercp.net/dashboard/api/cv?page=${page}${filterKey}`
        );
        const data = await response.json();
        console.log("data: ", data);
        console.log("page: ", page);
        console.log("filterKey: ", filterKey);
        setAllCVsData(data);
      } catch (error) {
        console.error("Failed to fetch CV data:", error);
      }
    };

    fetchCvsData();
  }, [page, filterKey]);

  return (
    <section className={styles.allCvs}>
      <div className={`${styles.container} secContainer`}>
        <FilterCVs filterHandler={filterHandler} page={page} />
        {/* <CVsListClient allCVsData={allCVsData} /> */}
        {filterKey.length > 1 || page > 1 ? (
          <CVsListClient allCVsData={allCVsData} />
        ) : (
          children
        )}
        <PagePagination
          paginationHandler={paginationHandler}
          total={allCVsData?.total}
          perPage={allCVsData?.per_page}
        />
      </div>
    </section>
  );
};

export default AllCvs;

// {cloneElement(children, {filterKey:filterKey, page:page},)}

// const [input, setInput] = useState({
//   page: 1,
//   search: "",
//   country: "",
//   applied_position: "",
// });

// const inputHandler = (e) => {
//   const fieldInput = e.target.name;
//   const fieldValue = e.target.value;

//   setInput({ ...input, [fieldInput]: fieldValue });
// };

// console.log("inputHandler: ", input)

// ---------------------------------------------------------------------------------------------------------

//   const getData =  () => {
//     getDataClient(`https://mahercp.net/dashboard/api/cv?page=${page}${filterKey}`);
//  }
//   const data =  getData();

//   console.log("data:--", data)

// let allCVsData = [];

// useEffect(() => {
//   const run = async () => {
//     await getDataClient(`https://mahercp.net/dashboard/api/cv?page=${page}${filterKey}`);
//   }

//   const allCVs = run();

//   if (allCVs) {
//     if (allCVs.data) {
//       allCVsData = allCVs.data;
//     }
//   }
// }, [page, filterKey]);

// let fetcher;

// useEffect(() => {
//    fetcher = async () => {
//     const response = await fetch(`https://mahercp.net/dashboard/api/cv?page=${page}${filterKey}`);
//     const data = await response.json();
//     return data;
//   }

// }, [])
// const { data, error, isLoading } = useSWR('cvs', fetcher);

// console.log("SWR - data: ", data)
