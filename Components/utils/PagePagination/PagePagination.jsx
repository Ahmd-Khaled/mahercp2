import { arrayRange } from "@/functions/arrayRange";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const PagePagination = ({ paginationHandler, total, perPage }) => {
  const numOfPages = Math.ceil(total / perPage);
  let pages = arrayRange(1, numOfPages, 1);
  // console.log("pages:", pages);

  return (
    <div className={styles.pagePagination}>
      <div className={styles.container}>
        {/* <div className={styles.selectNumPerPage}>
          <span className={styles.text}>مشاهدة 9</span>
          <IoIosArrowDown className={styles.dropIcon} />
        </div> */}
        <div className={styles.pages}>
          <button className={styles.next}>
            <MdArrowForwardIos className={styles.nextIcon} />
          </button>
          {pages?.map((item, index) => (
            <button
              key={index}
              onClick={() => paginationHandler(+item)}
              className={styles.numActive}
            >
              {item}
            </button>
          ))}
          <button className={styles.prev}>
            <MdArrowBackIosNew className={styles.prevIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagePagination;
