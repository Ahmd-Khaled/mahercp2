import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { BsDash } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { FaBookOpenReader, FaReadme } from "react-icons/fa6";
import { AiOutlineRead } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { BsPen } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";
import { FaHandcuffs } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiBigDiamondRing, GiDoorRingHandle } from "react-icons/gi";

const CVsCard = ({data}) => {
  const gradeList = ["", "حسن", "جيد", "ممتاز"];
  // console.log("---------------------speaking----------: ", data?.language[0]?.speaking);

  return (
    <li className={styles.cvsCardItem}>
      <div className={styles.container}>
        <Link href={`/cvs/${data?.user_id}`} className={styles.image}>
          <Image
            src="/images/avatar2.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className={styles.img}
          />
        </Link>
        <div className={styles.personInfo}>
          <Link href={`/cvs/${data?.user_id}`}>
            <h1 className={styles.name}>{`${data?.first_name} ${data?.father_name} ${data?.family_name}`}</h1>
          </Link>
          <a href={`tel:${data?.mobile_no}`} className={styles.contact}>
            <LuPhoneCall className={styles.iconCall} />
            <span className={styles.txt}>{data?.mobile_no}</span>
          </a>
          <a href={`mailTo:${data?.email}`} className={styles.contact}>
            <GoMail className={styles.iconMail} />
            <span className={styles.txt}>{data?.email}</span>
          </a>
          <a href="mailTo:ahmd.khaldd@gmail.com" className={styles.contact}>
            <IoLocationOutline className={styles.iconLocation} />
            <span className={styles.txt}>مصر - {data?.city}</span>
            {/* <span className={styles.txt}>{data?.country} - {data?.city} </span> */}
          </a>
        </div>
        <div className={styles.jobInfo}>
          {/* <h3 className={styles.title}>{data?.applied_position}</h3> */}
          <h3 className={styles.title}>برمجة تطبيقات</h3>
          <p className={styles.minSalary}>
            <FaDollarSign className={styles.jobInfoIcon} />
            <span>{data?.min_salary}</span>
            <span>ريال</span>
          </p>
          <p className={styles.suitableTime}>
            <BsClockHistory className={styles.jobInfoIcon} />
            <span>{data?.suitable_work_time_from}</span>
            <BsDash />
            <span>{data?.suitable_work_time_to}</span>
          </p>
          <div className={styles.startDate}>
            <MdOutlineDateRange className={styles.jobInfoIcon} />
            <span className={styles.txt}>{data?.prefered_start_work}</span>
          </div>
          <p className={data?.work_outside_your_city === 1 ? styles.workOutside : styles.workOutsideFalse}>
            {data?.work_outside_your_city === 1 ? (
              <FaRegCheckCircle className={styles.icon} />
            ) : (
              <AiOutlineCloseCircle className={styles.icon} />
            )}
            <span className={styles.txt}>العمل خارج المدينة</span>
          </p>
        </div>
        <div className={styles.educationInfo}>
          <h3 className={styles.title}>التحصيل العلمي</h3>
          <p className={styles.eduItem}>
            <FaUniversity className={styles.eduIcon} />
            <span className={styles.txt}>{data?.education?.phase}</span>
          </p>
          <p className={styles.eduItem}>
            <span className={styles.txt}>{data?.education?.specialize}</span>
          </p>
          <p className={styles.eduItem}>
            <span className={styles.txt}>{data?.education?.grade}</span>
          </p>
          <p className={styles.eduItem}>
            <span className={styles.txt}>{data?.education?.duration_study_from?.split("-")[0]}</span>
            <BsDash />
            <span className={styles.txt}>{data?.education?.duration_study_to?.split("-")[0]}</span>
          </p>
        </div>
        <div className={styles.languageInfo}>
          <h3 className={styles.title}>اللغات</h3>
          <p className={styles.eduItem}>
            <MdLanguage className={styles.eduIcon} />
            <span className={styles.txt}>العربية</span>
          </p>
          <div className={styles.eduItem}>
            <p className={styles.level}>
              <RiSpeakLine className={styles.levelIcon} />
              {data?.language[0]?.speaking ? <span className={styles.levelTxt}>{data?.language[0]?.speaking}</span> :null}
              {/* <span className={styles.levelTxt}>{gradeList[+data?.language[0]?.speaking]}</span> */}
            </p>
            <BsDash />
            <p className={styles.level}>
              <AiOutlineRead className={styles.levelIcon} />
              {data?.language[0]?.reading ? <span className={styles.levelTxt}>{data?.language[0]?.reading}</span> :null}
              {/* <span className={styles.levelTxt}>{gradeList[+data?.language[0]?.reading]}</span> */}
            </p>
            <BsDash />
            <p className={styles.level}>
              <BsPen className={styles.levelIcon} />
              {data?.language[0]?.writing ? <span className={styles.levelTxt}>{data?.language[0]?.writing}</span> :null}
              {/* <span className={styles.levelTxt}>{gradeList[+data?.language[0]?.writing]}</span> */}
            </p>
          </div>
          <p className={styles.eduItem}>
            <MdLanguage className={styles.eduIcon} />
            <span className={styles.txt}>الإنجليزية</span>
          </p>
          <div className={styles.eduItem}>
            <p className={styles.level}>
              <RiSpeakLine className={styles.levelIcon} />
              {data?.language[1]?.speaking ? <span className={styles.levelTxt}>{data?.language[1]?.speaking}</span> :null}
              {/* <span className={styles.levelTxt}>{gradeList[+data?.language[1]?.speaking]}</span> */}
            </p>
            <BsDash />
            <p className={styles.level}>
              <AiOutlineRead className={styles.levelIcon} />
              {data?.language[1]?.reading ? <span className={styles.levelTxt}>{data?.language[1]?.reading}</span> :null}
              {/* <span className={styles.levelTxt}>{gradeList[+data?.language[1]?.reading]}</span> */}
            </p>
            <BsDash />
            <p className={styles.level}>
              <BsPen className={styles.levelIcon} />
              {data?.language[1]?.writing ? <span className={styles.levelTxt}>{data?.language[1]?.writing}</span> :null}
              {/* <span className={styles.levelTxt}>{gradeList[+data?.language[1]?.writing]}</span> */}
            </p>
          </div>
        </div>
        <div className={styles.otherInfo}>
          <h3 className={styles.title}>معلومات أخرى</h3>
          <p className={styles.otherInfoItem}>
            <FaCarSide className={styles.icon} />
            <span className={styles.itTxt}>السيارة</span>
            <BsDash />
            <span className={data?.car_type === null ? styles.itValFalse : styles.itVal}>{data?.car_type === null ? "لا" : "نعم"}</span>
          </p>
          <p className={styles.otherInfoItem}>
            <FaHandcuffs className={styles.icon} />
            <span className={styles.itTxt}>أحكام قضائية</span>
            <BsDash />
            <span className={data?.have_convicted === 0 ? styles.itValFalse : styles.itVal}>{data?.have_convicted === 0 ? "لا" : "نعم"}</span>
          </p>
          <p className={styles.otherInfoItem}>
            <GiBigDiamondRing className={styles.icon} />
            <span className={styles.itTxt}>الحالة الإجتماعية</span>
            <BsDash />
            {data?.marital_status !== null ? <span className={ styles.itVal}>{data?.marital_status === 0 ? "أعزب" : "متزوج"}</span> : null}
          </p>
        </div>
        <Link href={`/cvs/${data?.user_id}`} className={styles.externalLink}>
            <FaExternalLinkAlt className={styles.icon} />
        </Link>
      </div>
    </li>
  );
};

export default CVsCard;
