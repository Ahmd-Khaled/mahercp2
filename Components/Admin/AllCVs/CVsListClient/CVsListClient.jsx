"use client";
import { useEffect, useState } from "react";
import CVsCard from "../CVsCard/CVsCard";
import styles from "./styles.module.scss";

const CVsListClient = ({ allCVsData }) => {
  return (
    <ul className={styles.cvsList}>
      {allCVsData !== null
        ? allCVsData.data.map((item, index) => <CVsCard key={index} data={item} />)
        : <p>Loading ...</p>}
    </ul>
  );
};

export default CVsListClient;
