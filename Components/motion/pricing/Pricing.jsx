import styles from "./styles.module.scss"
import Link from "next/link"

const Pricing = () => {
  return (
    <section className={`${styles.section} color89  dark:bg-dark`}>
      <div className="secContainer">
        <div className={styles.container}>
          <div className={`${styles.Title} conTitle`}>
            <h2 className="dark:text-white">الاسعار</h2>
            <span>تقدم هذه الاسعار بخصم 50% بمناسبة اليوم الوطني السعودي</span>
            <div className={`${styles.barbro} bar`}></div>
          </div>

          <div className={styles.uk_grid}>
            <div className={styles.item}>
              <div
                className={`${styles.single_pricing_box} dark:bg-card dark:shadow-none shadow11`}
              >
                <div className={styles.pricing_header}>
                  <h3 className="dark:text-white">غير شامل تعليق صوتي</h3>
                </div>
                <div className={styles.price}>
                  $10
                  <span> للثانية</span>
                </div>
                <div className={styles.pricing_des}>
                  <p>
                    القيمة الموضحة بالاعلى لا تحدد وقت معين للمشروع وينقصها
                    التعليق الصوتي
                  </p>
                </div>
                <div className={styles.pricing_features}>
                  <ul>
                    <li>سيناريو</li>
                    <li>رسم</li>
                    <li>تحريك</li>
                    <li>تعليق صوتي</li>
                    <li>إخراج</li>
                  </ul>
                </div>

                <Link href={""}>
                  <button className={`btn ${styles.contact}`}>احجز الان</button>
                </Link>
              </div>
            </div>

            <div className={styles.item}>
              <div
                className={`${styles.single_pricing_box} ${styles.single_pricing_box_active}`}
              >
                <ul className={styles.circles}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <div className={styles.pricing_header}>
                  <h3>شآمل مع التعليق الصوتي</h3>
                </div>
                <div className={styles.price}>
                  $15
                  <span>للثانية</span>
                </div>
                <div className={styles.pricing_des}>
                  <p>يتم احتساب القيمة الموضحه بالاعلى للثانية بتعليق صوتي</p>
                </div>
                <div className={styles.pricing_features}>
                  <ul>
                    <li>سيناريو</li>
                    <li>رسم</li>
                    <li>تحريك</li>
                    <li>تعليق صوتي</li>
                    <li>إخراج</li>
                  </ul>
                </div>

                <Link href={""}>
                  <button className={styles.contact}>احجز الان</button>
                </Link>
              </div>
            </div>

            <div className={styles.item}>
              <div
                className={`${styles.single_pricing_box} dark:bg-card dark:shadow-none shadow11`}
              >
                <div className={styles.pricing_header}>
                  <h3 className="dark:text-white">شآمل اعلى من دقيقة</h3>
                </div>
                <div className={styles.price}>
                  $13
                  <span> أعلى من دقيقة</span>
                </div>
                <div className={styles.pricing_des}>
                  <p>عند عمل اعلى من دقيقة صوتي تكون القيمة 13 دولار للثانية</p>
                </div>
                <div className={styles.pricing_features}>
                  <ul>
                    <li>سيناريو</li>
                    <li>رسم</li>
                    <li>تحريك</li>
                    <li>تعليق صوتي</li>
                    <li>إخراج</li>
                  </ul>
                </div>

                <Link href={""}>
                  <button className={`btn ${styles.contact} dark:btnDark`}>
                    احجز الان
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.br_line}></div>
      </div>
    </section>
  )
}

export default Pricing
