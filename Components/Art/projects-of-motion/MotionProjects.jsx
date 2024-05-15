/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
const projects = [
  {
    image: "/images/art1.jpg",
    title: "مثال اعلان فندق",
    link: "https://www.youtube.com/watch?v=vXWF9F4AWv0",
    subtitle1: "اعلان فندق",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art2.jpg",
    title: "صمم اعلانك",
    link: "https://www.youtube.com/watch?v=2Iw2Lmp3C2c",
    subtitle1: "امثلة مختلفة ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art3.jpg",
    title: "صمم بوستر",
    link: "https://www.youtube.com/watch?v=b_PxieiZkLU",
    subtitle1: "بوسترات للميديا",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art4.jpg",
    title: "اعلان متجر بوست",
    link: "https://www.youtube.com/shorts/Mlo3zC7El_g",
    subtitle1: "بوسترات للميديا",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art5.jpg",
    title: "اعلان المذاق المغربي",
    link: "https://www.youtube.com/watch?v=HRVtFk0QZZU",
    subtitle1: "اعلان تشويقي",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "",
    title: "اعلان منتجات رمضان متجر نص",
    link: "https://www.youtube.com/watch?v=FbllP3JHLU8",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art6.jpg",
    title: "مستشفى سليمان فقيه",
    link: "https://www.youtube.com/watch?v=FbllP3JHLU8",
    subtitle1: "تصميم مقدمة للشعار ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art7.jpg",
    title: "اعلان العماري للذهب",
    link: "https://www.youtube.com/watch?v=m2Agqk-KdXU",
    subtitle1: "اعلان بسيط بطلب العميل ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art8.jpg",
    title: "اعلان لقناة فضائية",
    link: "https://www.youtube.com/watch?v=RdAYeshXCLg",
    subtitle1: " برومو تشويقي للبرامج ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art9.jpg",
    title: "كليب ما نوفيه",
    link: "https://www.youtube.com/watch?v=qxBbafuvwco",
    subtitle1: " من اعمالنا الحصرية ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art10.jpg",
    title: "برنامج لقناة فضائية",
    link: "https://www.youtube.com/watch?v=ELpjDRjxVc8&t=3s",
    subtitle1: " برنامج أفضل معلم سياحي ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art11.jpg",
    title: "بطاقة تهنئة",
    link: "https://www.youtube.com/watch?v=5sqqkB7vW_c",
    subtitle1: " مثال لبطائق التهنئة ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/art12.jpg",
    title: "كيف تكون قدوة",
    link: "https://www.youtube.com/watch?v=8AlTrJv2BQ4",
    subtitle1: " اعلان ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/motion1.jpg",
    title: "اعلان تطبيق 2020",
    link: "https://www.youtube.com/watch?v=YL8ir86yyOs",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/motion3.jpg",
    title: "اعلان متجر نص",
    link: "https://www.youtube.com/watch?v=VttKqczs4m8",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/motion4.jpg",
    title: " اعلان MBN",
    link: "https://www.youtube.com/watch?v=XtYkhjTSgDk",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/motion5.jpg",
    title: "اعلان التجار متجر نص",
    link: "https://www.youtube.com/watch?v=VGyQWBR8fvU",
    subtitle1: "اعلان موشن جرافيك",

    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "",
    title: "اعلان بيت الاستثمار",
    link: "https://www.youtube.com/watch?v=58QJVC08Nzw",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "",
    title: "اعلان التاجر الدليل",
    link: "https://www.youtube.com/watch?v=fE2j7T7ddlU",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/project26.jpg",
    title: "سيتم اضافة المزيد قريبا ",
    link: "",
    subtitle1: "الموقع قيد التطوير soon ",
    subtitle2: "اعمال M11 للانتاج الفني",
  },

  {
    image: "/images/غلاف فديو/v1.png",
    title: "اعلان يوم التأسيس",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/d2.png",
    title: "اعلان متجر D2",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/four.png",
    title: "اعلان متجر Four",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/just.png",
    title: " اعلان متجر Just_Chill",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/kim.png",
    title: "اعلان متجر كيمس",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/poplar.png",
    title: "اعلان متجر Poplar",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/queez.png",
    title: "اعلان متجر queez",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/saya5.png",
    title: "اعلان متجر SAYA5",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/shrimp.png",
    title: "اعلان متجر SHRIMP_ANATOMY",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/tols.png",
    title: "اعلان متجر Tols",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/عالم السكوتر.png",
    title: "عالم السكوتر",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/المذاق المغربي.png",
    title: "المذاق المغربي",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/mbn.png",
    title: "MBN",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/فرغلي.png",
    title: "اعلان متجر فرغلي",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/ملحمة.png",
    title: "ملحمه",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/منتج منفذ.png",
    title: "اعلان متجر VINI",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/costa.png",
    title: "اعلان متجر Costa",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/مبهر.png",
    title: "اعلان متجر مبهر",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/مدارس كواكب.png",
    title: "مدارس كواكب",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/منيو.png",
    title: "اعلان متجر منيو",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/نخبة.png",
    title: "اعلان متجر نخبه",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
  {
    image: "/images/غلاف فديو/ورد الرياض.png",
    title: "اعلام متجر ورد الرياض",
    link: "",
    subtitle1: "اعلان موشن جرافيك",
    subtitle2: "اعمال M11 للانتاج الفني",
  },
]

const MotionProjects = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>الانتاج الفني</span>
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
                    <li className="color84 dark:text-white">
                      {item.subtitle1}
                    </li>
                    <li
                      className={`${styles.line} color84 dark:opacity-70 dark:text-white`}
                    >
                      {item.subtitle2}
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
