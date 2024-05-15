"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { TbFilterSearch } from "react-icons/tb";
import PureSelect from "@/Components/utils/PureSelect/PureSelect";
import { getData } from "@/functions/getData";

const requiredJobList = [
  {
    id: "01",
    optionTitleAr: "مندوب ميداني",
    optionTitleEn: "",
    value: 1,
  },
  {
    id: "02",
    optionTitleAr: "تسويق الكتروني",
    optionTitleEn: "",
    value: 2,
  },
  {
    id: "03",
    optionTitleAr: "قانون موارد بشرية",
    optionTitleEn: "",
    value: 3,
  },
  {
    id: "04",
    optionTitleAr: "مشرف ميداني",
    optionTitleEn: "",
    value: 4,
  },
  {
    id: "05",
    optionTitleAr: "برمجة تطبيقات",
    optionTitleEn: "",
    value: 5,
  },
];

const countriesList = [
  {
    id: "01",
    optionTitleAr: "المملكة العربية السعودية",
    optionTitleEn: "KSA",
    value: 1,
  },
  {
    id: "02",
    optionTitleAr: "الإمارات العربية المتحدة",
    optionTitleEn: "UAE",
    value: 2,
  },
  {
    id: "03",
    optionTitleAr: "جمهورية مصر العربية",
    optionTitleEn: "Egypt",
    value: 3,
  },
  {
    id: "03",
    optionTitleAr: "دولة أخرى",
    optionTitleEn: "other Country",
    value: 0,
  },
];

const FilterCVs = ({ filterHandler, inputHandler, page }) => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [applied_position, setApplied_position] = useState("");

  const changePositionHandler = (e) => {
    setApplied_position(`&applied_position=${e.target.value}`);
  };

  const changeCountryHandler = (e) => {
    setCountry(`&country=${e.target.value}`);
  };

  const changeSearchHandler = (e) => {
    setSearch(`&search=${e.target.value}`);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // getData(
    //   `https://mahercp.net/dashboard/api/cv?page=${page}${search+country+applied_position}`,
    //   "no-store"
    // );
    filterHandler(search+country+applied_position);
  };
  


  return (
    <form onSubmit={onSubmitHandler} className={styles.filterCVs}>
      <button className={styles.filterBtn}>
        <TbFilterSearch />
      </button>
      <div className={styles.searchBox}>
        <input
          name="search"
          type="search"
          onChange={changeSearchHandler}
          placeholder="البحث عن الإسم - الجوال - الإيميل"
          // onChange={inputHandler}
          // ref={searchRef}
        />
      </div>
      <PureSelect
        customStyles={{ width: "200px" }}
        optionsList={requiredJobList}
        defaultOption="إختر الوظيفة المطلوبة"
        name="applied_position"
        onChange={changePositionHandler}
        // onChange={inputHandler}
        // errorMsg={applied_positionError}
        // onBlur={onBlurApplied_position}
        // selectRef={applied_positionRef}
      />
      <PureSelect
        customStyles={{ width: "200px" }}
        optionsList={countriesList}
        defaultOption="إختر الدولة"
        name="country"
        onChange={changeCountryHandler}
        // onChange={inputHandler}
        // errorMsg={countryError}
        // onBlur={onBlurCountry}
        // selectRef={countryRef}
      />
    </form>
  );
};

export default FilterCVs;


// ---------------------------------------------------------------
  // const searchRef = useRef("");
  // const countryRef = useRef("");
  // const applied_positionRef = useRef("");

  // console.log("searchRef: ", searchRef.current);


  // filterHandler(
  //   `&search=${searchRef.current.value}&country=${countryRef.current.value}&applied_position=${applied_positionRef.current.value}`
  // );
  // console.log("Key: ", search + country + applied_position);
  // console.log("Rendered!!!");

// const searchInpRef = useRef("");
// const countryInpRef = useRef("");
// const positionInpRef = useRef("");
// filterHandler(
//   `&search=${searchInpRef.current}&country=${countryInpRef.current}&applied_position=${positionInpRef.current}`
// );
// await getData(`https://mahercp.net/dashboard/api/cv?page=${1}${search+country+applied_position}`, 'no-store');
