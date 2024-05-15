"use clinet"

import { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

const navLinks = [
  {
    id: "01",
    titleAr: "موشن جرافيك",
    titleEn: "",
    link: "/service/motion",
  },
  {
    id: "02",
    titleAr: "تطبيقات ومواقع",
    titleEn: "",
    link: "/service/apps",
  },
  {
    id: "03",
    titleAr: "تسويق ومشاهير",
    titleEn: "",
    link: "/service/marketing",
  },
  {
    id: "04",
    titleAr: "خدمات الانتاج الفني",
    titleEn: "",
    link: "/service/art",
  },
  {
    id: "05",
    titleAr: "تصميم بوسترات اعلانيه",
    titleEn: "",
    link: "/service/poster",
  },
  {
    id: "06",
    titleAr: "تصوير منتجات",
    titleEn: "",
    link: "/service/product",
  },
  {
    id: "07",
    titleAr: "دراسة المشاريع التقنية",
    titleEn: "",
    link: "/service/technique",
  },
  {
    id: "08",
    titleAr: "فاست كارت",
    titleEn: "",
    link: "/service/fastCart",
  },
  {
    id: "09",
    titleAr: "إدارة المشاريع ميديا",
    titleEn: "",
    link: "/service/management",
  },
]

const DropMenu = ({ show }) => {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (show) {
      setIsHovered(true)
    } else {
      setIsHovered(false)
    }
  }, [show])

  return (
    <div className={`${styles.DropMenu} ${isHovered ? styles.show : ""}`}>
      {navLinks.map((item) => (
        <div key={item.id}>
          <Link href={item.link} className={styles.navmenu}>
            {item.titleAr}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default DropMenu
