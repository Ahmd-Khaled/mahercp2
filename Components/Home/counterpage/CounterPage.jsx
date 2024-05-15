"use client"

import styles from "./styles.module.scss"
import { useState, useEffect } from "react"
import { IoPeopleOutline } from "react-icons/io5"
import { IoHeartOutline } from "react-icons/io5"
import { IoPersonOutline } from "react-icons/io5"
import { PiMedalLight } from "react-icons/pi"
import CountUp from "react-countup"

const counterContent = [
  {
    title: "عميل",
    count: 2992,
    icon: IoPeopleOutline,
  },
  {
    title: "مشاريع مختلفة تم تنفيذها",
    count: 4500,
    icon: IoHeartOutline,
  },
  {
    title: "أعضاء الفريق في الفروع ",
    count: 250,
    icon: IoPersonOutline,
  },
  {
    title: "سنين خبرة",
    count: 25,
    icon: PiMedalLight,
  },
]

const CounterPage = () => {
  const [hasCounterStarted, setHasCounterStarted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${styles.funfacts_area}`)
      const rect = element?.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      const isVisible = rect?.top <= windowHeight && rect?.bottom >= 0
      if (isVisible && !hasCounterStarted) {
        setHasCounterStarted(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasCounterStarted])

  return (
    <section className={styles.funfacts_area}>
      <div className={styles.container}>
        <div className={styles.uk_grid}>
          {counterContent.map((item, index) => (
            <div className={styles.item} key={index}>
              <span className={styles.parent}>
                <item.icon className={styles.icon} />
              </span>

              <div className={styles.theme}>
                <h3>
                  {hasCounterStarted && <CountUp start={0} end={item.count} />}
                </h3>
                <p className="primary dark:text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CounterPage
