"use client"
/* eslint-disable react/jsx-key */
import Link from "next/link"
import styles from "./styles.module.scss"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"
import { IoMdArrowDropup } from "react-icons/io"
import DropMenu from "../Header/DropMenu"

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

const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "",
    link: "/",
    // showMenu: false,
  },
  {
    id: "02",
    titleAr: "من نحن",
    titleEn: "",
    link: "/about",
    // showMenu: false,
  },
  {
    id: "03",
    titleAr: "خدماتنا",
    titleEn: "",
    link: "",
    icon: IoMdArrowDropdown,
    icon2: IoMdArrowDropup,
  },
  {
    id: "04",
    titleAr: "أعمالنا",
    titleEn: "",
    link: "/project",
    // showMenu: false,
  },
  {
    id: "05",
    titleAr: "أراء العملاء",
    titleEn: "",
    link: "/",
    // showMenu: false,
  },
  {
    id: "06",
    titleAr: "فريق العمل",
    titleEn: "",
    link: "/team",
    // showMenu: false,
  },
  {
    id: "07",
    titleAr: "إتصل بنا",
    titleEn: "",
    link: "/contact",
    // showMenu: false,
  },
]

const NavBar = ({ isOpen }) => {
  //function change linkColor
  const [activeLink, setActiveLink] = useState("")

  const handleItemClick = (idTitle) => {
    setActiveLink(activeLink === idTitle ? "" : idTitle)
  }

  // functikon open sideBar

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setMenuOpen(isOpen)
  }, [isOpen])

  // function change icon arrow
  const [dropMenu, setDropMenu] = useState()

  const handleDropMenu = (id) => {
    setDropMenu(dropMenu === id ? "" : id)
  }

  return (
    <div className={`${styles.navBar} ${isMenuOpen ? styles.open : ""}`}>
      <button className={styles.close} onClick={toggleMenu}>
        <AiOutlineClose className={styles.iconClose} />
      </button>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navList.map((item) => (
            <li className={styles.navItem} key={item.id}>
              <Link
                className={`${styles.navLink} ${
                  activeLink === item.id ? styles.active : ""
                }`}
                href={item.link}
                onClick={() => {
                  if (item.id !== "03") {
                    toggleMenu()
                  }
                  handleItemClick(item.id)
                  handleDropMenu(item.id)
                }}
              >
                {item.titleAr}

                {item.id === "03" &&
                  (dropMenu === "03" ? (
                    <>
                      <item.icon2 className={styles.icon} />
                    </>
                  ) : (
                    <item.icon className={styles.icon} />
                  ))}
              </Link>

              {dropMenu === "03" && item.id === "03" ? (
                <div className={styles.services}>
                  {navLinks.map((item) => (
                    <div key={item.id}>
                      <Link href={item.link} className={styles.navmenu}>
                        {item.titleAr}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
