/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
const projects = [
  {
    image: "/images/motion1.jpg",
    title: "اعلان تطبيق 2020",
    link: "https://www.youtube.com/watch?v=YL8ir86yyOs",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/motion2.jpg",
    title: "اعلان منتجات رمضان",
    link: "https://www.youtube.com/watch?v=iYFABXiv5bU",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/motion3.jpg",
    title: "اعلان متجر نص",
    link: "https://www.youtube.com/watch?v=VttKqczs4m8",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/motion4.jpg",
    title: "اعلان MBN",
    link: "https://www.youtube.com/watch?v=XtYkhjTSgDk",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/motion5.jpg",
    title: "اعلان التجار متجر نص",
    link: "https://www.youtube.com/watch?v=VGyQWBR8fvU",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/motion6.jpg",
    title: "اعلان بيت الاستثمار",
    link: "https://www.youtube.com/watch?v=58QJVC08Nzw",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/motion7.jpg",
    title: "اعلان التاجر الدليل",
    link: "https://www.youtube.com/watch?v=fE2j7T7ddlU",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },

  {
    image: "/images/غلاف موشن جرافيك/اماطة.png",
    title: "اعلان إماطه",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/غلاف موشن جرافيك/مركز حمد لضايفة الاطفال.png",
    title: "اعلان مركز حمد لضيافة الاطفال",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/غلاف موشن جرافيك/الجامعة السعودية الالكترونية.png",
    title: "اعلان الجامعة السعودية الالكترونية",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
  {
    image: "/images/غلاف موشن جرافيك/اثار.png",
    title: "اعلان اثار",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "تطبيقات",
  },
]

const MotionProjects = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>موشن جرافيك</span>
          <h2 className="dark:text-white">أعمالنا</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.services_box}>
                <div className={styles.project_image}>
                  <Image
                    src={item.image}
                    className={styles.img}
                    width={0}
                    height={0}
                    alt=""
                    sizes="100vw"
                  />
                </div>

                <div
                  className={`${styles.project_content} color89 dark:bg-card`}
                >
                  <h3 className="dark:text-white">
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <ul>
                    <li
                      className={`${styles.line} color84 dark:opacity-70 dark:text-white`}
                    >
                      {item.subtitle1}
                    </li>
                    <li className="dark:text-white dark:opacity-70 color84">
                      {item.subtitle2}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MotionProjects
