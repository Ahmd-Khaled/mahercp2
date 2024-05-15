/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { CiMobile2 } from "react-icons/ci"
import { FaArrowRightLong } from "react-icons/fa6"
import { GiPuzzle } from "react-icons/gi"
import { HiOutlineLightBulb } from "react-icons/hi"

import Image from "next/image"

const projectContent = [
  {
    id: "1",
    img: "/images/android.svg",
    title: "شركة تصميم تطبيقات اندرويد",
    subTitle:
      "يستخدم نظام اندرويد من قبل العديد من الشركات المصممة للهواتف الذكية مثل سامسونج والعديد من العالمات التجارية األخرى. لذلك يجب عليك الحرص على امتالك تطبيق خاص بشركتك بنظام اندرويد",
    icon: CiMobile2,
    icon2: GiPuzzle,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/ios.svg",
    title: "شركة تصميم تطبيقات آي او اس",
    subTitle:
      "الحصول على تطبيق بنظام آي او اس للعمل على هواتف ايفون من االشياء الهامة لزيادة فرص التواصل بين تطبيقك والعالم الخارجي بسبب التزايد المستمر ألفراد المستخدمين لاليفون و اآليباد",
    icon: CiMobile2,
    icon2: HiOutlineLightBulb,
    arrow: FaArrowRightLong,
  },
]

const BoxService = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <h2 className="dark:text-white">أنظمة التطبيقات</h2>
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
                          <item.icon2 className={styles.icon_service} />
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
