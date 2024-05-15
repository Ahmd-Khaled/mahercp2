/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa"
import { FiMessageCircle } from "react-icons/fi"
import { PiPresentation } from "react-icons/pi"
import { IoLogoGoogle } from "react-icons/io5"

import Image from "next/image"

const projectContent = [
  {
    id: "1",
    img: "/images/chat.svg",
    title: "تسويق واتس اب",
    subTitle:
      "في ظل التطور الملحوظ في برنامج المراسلات الشهير واتساب اثبتت الدراسات بان برنامج واتساب من البرامج التي يهتم لها العمي ب الرسائل ولذلك قمنا بربط اعلانتنا ببرنامج واتساب لسهولة وظمان الوصول للرسائل بشكل ايجابي وخدمة المنشآت والخدمات المعلنة بإرسالها ألكبر عدد يصل إلى اكثر من 000.000.1 مليون مستخدم .",
    icon: FaWhatsapp,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/message.svg",
    title: "ارسال رسائل اس ام اس",
    subTitle:
      "قوم بإرسال خدمات ونشاط العميل للعملاء كرسالة اس ام اس بشكل عشوائي او بحسب الفئات المستهدفة من قبل العميل",
    icon: FiMessageCircle,
    arrow: FaArrowRightLong,
  },
  {
    id: "3",
    img: "/images/social.svg",
    title: "خدمات تسويق السوشيال",
    subTitle:
      "نقدم خدمات تسويق السوشيال ميديا بعد دراسة دقيقة للنشاط واستهداف الحسابات التي يكون مرتاديها من مهتمين هذا النشاط كما اننا نقوم بنشر اعلانك في السوشيال ميديا : إعالن مدفوع يظهر بحسب المنطقة او المدينة التي تختارها",
    icon: PiPresentation,
    arrow: FaArrowRightLong,
  },
  {
    id: "4",
    img: "/images/google.svg",
    title: "اعلانات جوجل آد ورد",
    subTitle:
      "تقدم مجموعة جوجل العالمية خدمات اعلانات جوجل اد وورد للاعلانات على محركات البحث بحيث يحتل اسم نشاطك المرتبة الأولي في المحركات بحسب الكلمات التي يتم اختيارها من قبل العميل كما ان اننا نقوم ايضا بعرض اعلان العميل على اعلانات يوتيوب .",
    icon: IoLogoGoogle,
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
      <div className={styles.br_line}></div>
    </div>
  )
}

export default BoxService
