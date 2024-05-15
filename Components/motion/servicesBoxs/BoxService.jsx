/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { TbMicrophone } from "react-icons/tb"
import { LiaPenAltSolid } from "react-icons/lia"
import { FaArrowRightLong } from "react-icons/fa6"

import { PiPresentation } from "react-icons/pi"
import { IoColorPaletteOutline } from "react-icons/io5"
import Image from "next/image"

const projectContent = [
  {
    id: "1",
    img: "/images/design1.svg",
    title: "التسجيل الصوتي",
    subTitle: "يتوفر لدينا معلقين بجميع اللهجات العربية صوت رجالي نسائي",
    icon: TbMicrophone,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/design2.svg",
    title: "كتابة السيناريو",
    subTitle: "يكتب السيناريو في بداية المشروع من فريق متخصص",
    icon: LiaPenAltSolid,
    arrow: FaArrowRightLong,
  },
  {
    id: "3",
    img: "/images/design1.svg",
    title: "تحريك الشخصية",
    subTitle:
      "لدينا فريق متخصص في تحريك الخصيات بما يتناسب مع السيناريو والتسجيل الصوتي والتفاعل الموسيقي",
    icon: PiPresentation,
    arrow: FaArrowRightLong,
  },
  {
    id: "4",
    img: "/images/design2.svg",
    title: "رسم",
    subTitle: "يتم رسم السيناريو باحدث التقنيات",
    icon: IoColorPaletteOutline,
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
