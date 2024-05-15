"use client"
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
import { IoAppsOutline } from "react-icons/io5"
import { useState, useEffect } from "react"
import DropMenu from "./DropMenu"
import { VscMenu } from "react-icons/vsc"
import NavBar from "../navBar/NavBar"
import ThemeToggle from "../Theme/ThemeToggle"
import { useLocale, useTranslations } from "next-intl"

const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "Main",
    link: "/",
    showMenu: false,
  },
  {
    id: "02",
    titleAr: "من نحن",
    titleEn: "About Us",
    link: "/about",
    showMenu: false,
  },
  {
    id: "03",
    titleAr: "خدماتنا",
    titleEn: "Our Services",
    link: "/",
    showMenu: false,
  },
  {
    id: "04",
    titleAr: "أعمالنا",
    titleEn: "Our Works",
    link: "/project",
    showMenu: false,
  },
  {
    id: "05",
    titleAr: "أراء العملاء",
    titleEn: "Customer opinions",
    link: "/",
    showMenu: false,
  },
  {
    id: "06",
    titleAr: "فريق العمل",
    titleEn: "Work Team",
    link: "/team",
    showMenu: false,
  },
  {
    id: "07",
    titleAr: "إتصل بنا",
    titleEn: "Contact Us",
    link: "/contact",
    showMenu: false,
  },
]

const Header = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const [activeLink, setActiveLink] = useState("")
  const [navItems, setNavItems] = useState(navList)

  const [scrollHeader, setScrollHeader] = useState("")

  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const [dropApps, setDropApps] = useState(false)

  // function show dropMenu App
  const handleDropApps = () => {
    setDropApps(!dropApps)
  }

  // function sidebar
  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen)
  }

  // function scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 1) {
      setScrollHeader(styles.whiteBackground)
    } else {
      setScrollHeader("")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // functions about click links
  const handleItemClick = (idTitle) => () => {
    setActiveLink(activeLink === idTitle ? "" : idTitle)
  }

  const handleMouseEnter = (id) => {
    const updatedNavItems = navItems.map((item) =>
      item.id === id ? { ...item, showMenu: true } : item
    )
    setNavItems(updatedNavItems)
  }

  const handleMouseLeave = (id) => {
    const updatedNavItems = navItems.map((item) =>
      item.id === id ? { ...item, showMenu: false } : item
    )
    setNavItems(updatedNavItems)
  }

  return (
    <>
      <header className={`${styles.header} ${scrollHeader}`}>
        <div className={`${styles.container} secContainer`}>
          <div className={styles.logo}>
            <Image
              className={styles.logoImg}
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={55}
            />
          </div>
          <nav className={styles.nav}>
            <ul className={`${styles.navList} dark:text-white`}>
              {navItems.map((item) => (
                <li
                  className={`${styles.navItem}`}
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <Link
                    className={`${styles.navLink} ${
                      activeLink === item.id ? styles.active : ""
                    }`}
                    href={item.link}
                    onClick={handleItemClick(item.id)}
                  >
                    {locale === "ar" ? item.titleAr : item.titleEn}
                  </Link>
                  {item.id === "03" && <DropMenu show={item.showMenu} />}
                </li>
              ))}
            </ul>

            <div className={styles.navBar} onClick={toggleSideBar}>
              <VscMenu className={styles.menu} />
            </div>
          </nav>
          <div className={styles.btns}>
            <ThemeToggle />
            {/* <div className={styles.modes}>
              <button className={styles.lightModeBtn}>
                <MdOutlineLightMode className={styles.lightModeIcon} />
              </button>
            </div> */}
            <div className={styles.apps} onClick={handleDropApps}>
              <button className={`${styles.appsBtn}`}>
                <IoAppsOutline
                  className={`${styles.appsIcon} dark:text-white`}
                />
              </button>

              {dropApps && (
                <div className={styles.drop_bottom_left}>
                  <div className={styles.uk_card}>
                    <Link
                      href={"https://www.d2020.net/last_version/"}
                      className={styles.single_app}
                    >
                      <div className={styles.app_img}>
                        <Image
                          src={"/images/d2020.png"}
                          alt=""
                          className={styles.img}
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>

                      <span>D2020</span>
                    </Link>

                    <Link
                      href={"https://noo9.net/"}
                      className={styles.single_app}
                    >
                      <div className={styles.app_img}>
                        <Image
                          src={"/images/half.png"}
                          alt=""
                          className={styles.img}
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>

                      <span>Half</span>
                    </Link>

                    <Link
                      href={"https://fastcart.vercel.app/en"}
                      className={styles.single_app}
                    >
                      <div className={styles.app_img}>
                        <Image
                          src={"/images/fast.png"}
                          alt=""
                          className={styles.img}
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>

                      <span>Fast Cart</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <NavBar isOpen={isSideBarOpen} />
    </>
  )
}

export default Header
