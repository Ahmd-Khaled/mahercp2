/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
const projects = [
  {
    image: "/images/project1.png",
    title: "متجر نص | Half",
    subtitle: "موقع الكتروني",
    link: "https://noo9.net/",
  },
  {
    image: "/images/project2.png",
    title: "D2020  موقع",
    subtitle: "موقع الكتروني",
    link: "http://d2020.net/",
  },
  {
    image: "/images/project3.png",
    title: "تطبيق sasty",
    subtitle: " تطبيق اندرويد و ios ",
    link: "https://apps.apple.com/sa/app/mokolo-store/id1639348915?l=ar",
  },
  {
    image: "/images/project4.PNG",
    title: "نموذج لشرطة منطقة مكة",
    subtitle: "موقع الكتروني",
    link: "",
  },
  {
    image: "/images/project5.png",
    title: "العربي للنشر والتوزيع",
    subtitle: "موقع الكتروني",
    link: "https://alarabipublishing.com.eg/",
  },
  {
    image: "/images/project6.png",
    title: "بي ستيم",
    subtitle: "موقع الكتروني",
    link: "https://be-steam.com/",
  },
  {
    image: "/images/project7.png",
    title: "TIA",
    subtitle: "موقع الكتروني",
    link: "https://tiawikiride.com/web-app",
  },
  {
    image: "/images/project8.png",
    title: "متجر نص | Half",
    subtitle: " تطبيق اندرويد و ios ",
    link: "https://play.google.com/store/apps/details?id=com.yosefmoq.half",
  },
  {
    image: "/images/project9.PNG",
    title: "تطبيق سيارتك",
    subtitle: "موقع الكتروني",
    link: "",
  },
  {
    image: "/images/project10.PNG",
    title: "تطبيق مطبخي",
    subtitle: "موقع الكتروني",
    link: "",
  },
  {
    image: "/images/project11.PNG",
    title: "تطوير تطبيق بقالة",
    subtitle: "موقع الكتروني",

    link: "",
  },
  {
    image: "/images/project12.png",
    title: "BE-STEAM Parent",
    subtitle: "موقع الكتروني",
    link: "https://play.google.com/store/apps/details?id=com.besteam.parentapp",
  },
  {
    image: "/images/project13.PNG",
    title: "تطبيق الاتحاد السعودي للجودو",
    subtitle: " تطبيق اندرويد و ios ",
    link: "https://apps.apple.com/sa/app/%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D9%84%D9%84%D8%AC%D9%88%D8%AF%D9%88/id1540464201?l=ar",
  },
  {
    image: "/images/project14.PNG",
    title: "تطبيق مياه تالا",
    subtitle: " تطبيق اندرويد و ios ",
    link: "",
  },
  {
    image: "/images/project15.PNG",
    title: "موقع الاتحاد السعودي للملاكمة",
    subtitle: "موقع الكتروني",
    link: "https://apps.apple.com/sa/app/%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D9%84%D9%84%D8%AC%D9%88%D8%AF%D9%88/id1540464201?l=ar",
  },
  {
    image: "/images/project16.PNG",
    title: "تطبيق دليل 2020",
    subtitle: " تطبيق اندرويد و ios ",
    link: "https://apps.apple.com/sa/app/%D8%AF%D9%84%D9%8A%D9%84-2020/id1628257046?l=ar",
  },
  {
    image: "/images/project17.PNG",
    title: " موقع M11",
    subtitle: "موقع الكتروني",
    link: "https://m11.tv/",
  },
  {
    image: "/images/project18.PNG",
    title: "منيو ومتجر حلبي ",
    subtitle: "موقع الكتروني",
    link: "https://alrawaq.net/",
  },
  {
    image: "/images/project19.png",
    title: "tarboush",
    subtitle: "موقع الكتروني",
    link: "https://play.google.com/store/apps/details?id=com.tarboush",
  },
  {
    image: "/images/project20.png",
    title: "حج وعمرة البدل",
    subtitle: "موقع الكتروني",

    link: "https://play.google.com/store/apps/details?id=com.greencodet.badal_umrah_and_hajj_user",
  },
  {
    image: "/images/project21.png",
    title: "Nafud",
    subtitle: "موقع الكتروني",
    link: "https://apps.apple.com/us/app/nafud/id1548203737",
  },
  {
    image: "/images/project22.png",
    title: "Fast son!c",
    subtitle: "موقع الكتروني",
    link: "https://apps.apple.com/us/app/fast-son-c/id1611183041",
  },
  {
    image: "/images/project23.png",
    title: "Pwell",
    subtitle: "موقع الكتروني",
    link: "https://apps.apple.com/us/app/pwell/id1495054131",
  },
  {
    image: "/images/project24.png",
    title: "Ilya Tours",
    subtitle: "موقع الكتروني",
    link: "https://play.google.com/store/apps/details?id=com.greencodet.ilya_tours",
  },
  {
    image: "/images/project25.png",
    title: "Ryalto",
    subtitle: "موقع الكتروني",
    link: "https://play.google.com/store/apps/details?id=com.ryaltoapp.rightnurse&hl=ar&gl=US",
  },
  {
    image: "/images/project26.jpg",
    title: "سيتم الرفع قريبا",
    subtitle: "الموقع قيد التطوير",
    link: "",
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
                    <Link target="_blank" href={item.link}>
                      {item.title}
                    </Link>
                  </h3>
                  <ul>
                    <li className="color84  dark:text-white">
                      {item.subtitle}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.br_line}></div>
    </div>
  )
}

export default MotionProjects
