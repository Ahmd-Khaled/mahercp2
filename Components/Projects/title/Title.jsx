"use client"

import { useState } from "react"
import styles from "./styles.module.scss"
import BarLine from "@/Components/Home/barLine/BarLine"
import Image from "next/image"

const projectContent = [
  {
    id: "1",
    img: "/images/p8.jpg",
    title: "أعمال موشن جرافيك",
    subTitle: "موشن جرافيك",
  },
  {
    id: "2",
    img: "/images/p9.jpg",
    title: "أعمال المواقع والتطبيقات",
    subTitle: "تطبيقات ومواقع",
  },
  {
    id: "3",
    img: "/images/p10.jpg",
    title: "أعمال وخدمات التسويق",
    subTitle: "تسويق ومشاهير",
  },
  {
    id: "4",
    img: "/images/p11.jpg",
    title: "أعمال وخدمات الانتاج الفني",
    subTitle: "الانتاج الفني",
  },
]

const bar = [
  {
    id: "0",
    btnbar: "الكل",
  },
  {
    id: "1",
    btnbar: "موشن جرافيك",
  },
  {
    id: "2",
    btnbar: "تطبيقات ومواقع",
  },
  {
    id: "3",
    btnbar: "تسويق الكتروني",
  },
  {
    id: "4",
    btnbar: "خدمات الانتاج الفني",
  },
]

const GridItem = ({ img }) => (
  <>
    <Image
      className={styles.img}
      src={img.img}
      alt={img.title}
      width={0}
      height={0}
      sizes="100vw"
      loading="lazy"
    />
    <div className={`${styles.content} color86 dark:bg-card`}>
      <h3 className="dark:text-white">{img.title}</h3>
      <span className="color84 dark:text-white">{img.subTitle}</span>
    </div>
  </>
)

const Title = () => {
  const [activeBtn, setActiveBtn] = useState("0")

  const handleBtn = (buttonId) => {
    setActiveBtn(activeBtn === buttonId ? "" : buttonId)
  }

  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <h2 className=" dark:text-white">أعمالنا المنجزة</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.filtering_btns}>
            <div className={styles.toolbar}>
              {bar.map((item) => (
                <button
                  onClick={() => handleBtn(item.id)}
                  className={`${styles.navigation} ${
                    activeBtn === item.id ? styles.active : ""
                  } dark:bg-card color86`}
                  key={item.btnbar}
                >
                  <span className="dark:text-white">{item.btnbar}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.uk_grid}>
            {projectContent
              .filter((item) => activeBtn === "0" || item.id === activeBtn)
              .map((item) => (
                <div key={item.title} className={styles.main}>
                  <GridItem img={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title
