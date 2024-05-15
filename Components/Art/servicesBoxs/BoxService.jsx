/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { FaArrowRightLong } from "react-icons/fa6"
import { BsFilm } from "react-icons/bs"
import Image from "next/image"
import { IoIosMusicalNote } from "react-icons/io"
import { FiCamera } from "react-icons/fi"
import { SiMaterialdesignicons } from "react-icons/si"

const projectContent = [
  {
    id: "1",
    img: "/images/design2.svg",
    title: "اعمال الموشن جرافيك",
    subTitle:
      "نرسم الخطط والشخصيات بنا ًء لعميل لفكرة ا ونقوم بعمل موشن جرافيك اعلانات او شروحات او مسلسلات يومية قصيرة لأصحاب الأعمال الأهلية والقطاعات الحكومية",
    icon: SiMaterialdesignicons,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/sound.svg",
    title: "الأعمال الصوتية",
    subTitle:
      "في الأعمال الصوتية نهتم في دقة الهندسة الصوتية ونقدم اعمال التسجيلات الصوتية بشكل عام من اغاني وقصائد واعمال صوتية تجارية للتسويق عن الخدمات واالعمال",
    icon: IoIosMusicalNote,
    arrow: FaArrowRightLong,
  },
  {
    id: "3",
    img: "/images/viedo.svg",
    title: "تصوير الفيديو",
    subTitle:
      "نوفر فريق متكامل لتصوير الأعلانات والبرامج والمسلسلات والأعمال التلفزيونية واعمال اليوتيوب ومختصون في تصوير اللقاءات التي تبين اعمال ومهام اصحاب الأعمال ونغطي حسابات السوشيال ميديا بتصوير العمال والخدمات",
    icon: BsFilm,
    arrow: FaArrowRightLong,
  },
  {
    id: "4",
    img: "/images/photo.svg",
    title: "التصوير الفوتوغرافي",
    subTitle:
      "في القسم الفتوتوغرافي نقوم باخراج الصور باحترافية عالية ونقدم خدماتنا للعميل لتصوير المنتجات والتصوير الشخصي وتصوير المنشآت والمناسبات ومشاركتها فالسوشيال ميديا",
    icon: FiCamera,
    arrow: FaArrowRightLong,
  },
]

const BoxService = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <h2 className="dark:text-white">الخدمات</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.wrapper}>
          {projectContent.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.services_box}>
                <div className={styles.services_img}>
                  <Image
                    src={item.img}
                    className={styles.img}
                    alt=""
                    width={0}
                    height={0}
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <item.icon className={styles.icon_service} />
                  </div>
                  <h3>{item.title}</h3>
                </div>

                <div className={styles.content_hover}>
                  <div className={styles.d_table}>
                    <div className={styles.d_table_cell}>
                      <div className={styles.inner}>
                        <div className={styles.icon}>
                          <item.icon className={styles.icon_service} />
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.subTitle}</p>
                        <item.arrow className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoxService
