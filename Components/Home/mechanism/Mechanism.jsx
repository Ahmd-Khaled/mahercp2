"use client"

import styles from "./styles.module.scss"

import { MdCall } from "react-icons/md"
import { IoSettingsSharp } from "react-icons/io5"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaFileContract } from "react-icons/fa6"
import Image from "next/image"

const mechanism_work = [
  {
    icon: MdCall,
    title: "تواصل معنا",
    subtitle: "قدم لنا أفكارك ونساعدك بأفكارنا",
    color:
      "linear-gradient(to bottom, #d89287, #e08071, #e66c5a, #ea5743, #ec3d2a)",
  },
  {
    icon: IoSettingsSharp,
    title: "نقدم لك الدراسة",
    subtitle: "نقدم لك الدراسة المجانية المبسطة لفكرتك",
    color:
      "linear-gradient(to bottom, #78cfc6, #66c8c0, #51c1ba, #37bab4, #00b3af);",
  },
  {
    icon: AiOutlineShoppingCart,
    title: "تسليمها لك",
    subtitle: "نسلمك الدراسة المجانية ومن ثم عمل اجتماع لمناقشتها",

    color:
      "linear-gradient(to top, #ee3e0c, #f25e00, #f57900, #f79100, #f8a815);",
  },
  {
    icon: FaFileContract,
    title: "توقيع العقد",
    subtitle:
      "خطوة التنفيذ هي الإطلاع على العقد ومن ثم يتم توقيعه والبدء في تنفيذ المشروع",

    color:
      "linear-gradient(to top, #a830f1, #b02ef3, #b82cf5, #bf2af7, #c727f9);",
  },
]

const Mechanism = () => {
  return (
    <div className="secContainer fixed">
      <div className={styles.shape_circle}>
        <Image
          className={`${styles.image} dark:opacity-10`}
          src={"/images/shape-img2.png"}
          width={305}
          height={600}
          alt=""
          sizes="100vw"
        />
      </div>
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>آالية العمل</span>
          <h2 className="dark:text-white">طرق سهلة للاستعداد لعملك</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.arrow}>
          <Image
            src={"/images/arrow_ar.png"}
            alt=""
            width={0}
            height={0}
            className={styles.arrowImg}
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className={styles.uk_grid}>
          {mechanism_work.map((item, index) => (
            <div
              className={`${styles.item} ${
                index === 0 || index === 2 ? styles.itemWithMargin : ""
              }`}
              key={index}
            >
              <div className={styles.single_process}>
                <div className={styles.icon} style={{ background: item.color }}>
                  <item.icon className={styles.uk_icon} />
                </div>

                <div className={styles.content_process}>
                  <h3 className="dark:text-white">{item.title}</h3>
                  <span className=" dark:text-white color:84">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mechanism
