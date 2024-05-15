import styles from "./styles.module.scss"
import { PiMedalLight } from "react-icons/pi"
import Link from "next/link"
import Image from "next/image"
const Info = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={styles.left_info}>
          <div className={styles.title}>
            <span>من نحن</span>
            <h3 className={`${styles.sub} dark:text-white`}>
              ماهر بن نايف للإتصالات وتقنية المعلومات للإنتاج التقني والفني
              والخدمات التسويقية
            </h3>
            <div className="bar"></div>
          </div>

          <div className={`${styles.about_text}`}>
            <PiMedalLight className={styles.icon} />

            <div className={styles.text}>
              <h3 className="dark:text-white">
                تقدم ماهر بن نايف خدماتها المختلفة في مجال التقنية
              </h3>
              <p className="color84 dark:text-white">
                عن طريق مجموعة من أمهر الكوادر بخبرات كبيرة في كل الفروع
                بالمملكة العربية السعودية وجمهورية مصر العربية وماليزيا فنحن
                متخصصون في تصميم تطبيقات الجوال و الهواتف الذكية بأحدث التقنيات
                البرمجية التي تساعدنا على تحقيق أهدافنا للحصول على ثقة عمالئنا
                بنا
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right_info}>
          <Image
            src={"/images/bg.jpg"}
            alt=""
            className={styles.img_main}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
          <Image
            src={"/images/1.png"}
            alt=""
            className={styles.img_three}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className={styles.img_two}>
            <Link href={""}>
              <Image
                src={"/images/about1.jpg"}
                alt=""
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
              />
              <button className={`btn ${styles.contact}`}>
                معرفة المزيد عنا
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
