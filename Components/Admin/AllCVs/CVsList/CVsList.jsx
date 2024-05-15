import CVsCard from "../CVsCard/CVsCard";
import styles from "./styles.module.scss";

const CVsList = ({allCVsData}) => {
  // console.log("___filterKey: ", filterKey);
  // const [allCVsData] = await useGetAllCVs('', 1);
  

  return (
    <ul className={styles.cvsList}>
      {allCVsData?.map((item, index) => (
        <CVsCard key={index} data={item} />
      ))}
    </ul>
  );
};

export default CVsList;
