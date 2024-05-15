"use client"

import styles from "./styles.module.scss"
import Image from "next/image"
import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { IoIosPhonePortrait } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { IoLogoTiktok } from "react-icons/io5"
import { FaSnapchatGhost } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { BiLogoGmail } from "react-icons/bi"
import Link from "next/link"

const services = [
  {
    title: "الخدمات",
    links: [
      {
        href: "/service/motion",
        display: "#موشن_جرافيك",
      },
      {
        href: "/service/apps",
        display: "#تصميم_مواقع",
      },
      {
        href: "/service/marketing",
        display: "#تسويق_ومشاهير",
      },
      {
        href: "/service/art",
        display: "#خدمات_الانتاج_الفني",
      },
      {
        href: "/service/product",
        display: "#تصوير_المنتجات",
      },
      {
        href: "/service/fastCart",
        display: "#فاست_كارت",
      },
    ],
  },
]
const usefulLinks = [
  {
    title: "روابط مفيدة",
    links: [
      {
        href: "/about",
        display: "من نحن",
      },
      {
        href: "/project",
        display: "الأعمال",
      },
      {
        href: "/contact",
        display: "اتصل بنا",
      },
      {
        href: "/cvs",
        display: "طلب توظيف",
      },
      {
        href: "",
        display: "سياسية الخصوصية",
      },
    ],
  },
]

const social = [
  {
    id: "01",
    icon: FaWhatsapp,
    link: "https://api.whatsapp.com/send/?phone=%2B9660502505095&text&type=phone_number&app_absent=0",
  },
  {
    id: "02",
    icon: FaInstagram,
    link: "https://www.instagram.com/mbn_cp/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: "03",
    icon: IoLogoTiktok,
    link: "https://www.tiktok.com/@mbn_cp?_t=8figzcxh02d&_r=1",
  },
  {
    id: "04",
    icon: FaSnapchatGhost,
    link: "https://www.snapchat.com/add/mbn_cp?share_id=O0udupOfi8U&locale=ar-SA",
  },
  {
    id: "05",
    icon: FaXTwitter,
    link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fmbn_cp",
  },
  {
    id: "06",
    icon: BiLogoGmail,
    link: "mbn.sm2020@gmail.com [undefined:mbn.sm2020@gmail.com]",
  },
]
const Footer = () => {
  const date = new Date().getFullYear()

  const goTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.logo}>
          <Image
            className={styles.image}
            src={"/images/logo.png"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
          <p>ماهر بن نايف للإنتاج التقني والفني والخدمات التسويقية</p>

          <div className={styles.socails}>
            <ul className={styles.iconsMedia}>
              {social.map((item) => (
                <Link href={item.link} className={styles.icon} key={item.id}>
                  <item.icon className={styles.item} />
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.servcies}>
          {services.map((item, index) => (
            <div className={styles.servcies_content} key={index}>
              <h3 className={styles.title}>{item.title}</h3>

              <div className={styles.links}>
                <ul className={styles.nav}>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.display}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.usefulLinks}>
          {usefulLinks.map((item, index) => (
            <div className={styles.usefulLinks_content} key={index}>
              <h3 className={styles.title}>{item.title}</h3>

              <div className={styles.links}>
                <ul className={styles.nav}>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.display}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <h3 className={styles.title}>تواصل معانا</h3>

          <div className={styles.contact_content}>
            <div className={styles.info}>
              <IoLocationOutline className={styles.icon} />
              <a
                href="http://www.mahercp.net/job_request.html#"
                className={styles.location}
              >
                جدة - الخالدية - برج الغيداء
              </a>
            </div>
            <div className={styles.info}>
              <AiOutlineMail className={styles.icon} />
              <a
                href="http://www.mahercp.net/job_request.html#"
                className={styles.location}
              >
                INFO@MAHERCP.NET
              </a>
            </div>
            <div className={styles.info}>
              <IoIosPhonePortrait className={styles.icon} />

              <a
                href="http://www.mahercp.net/job_request.html#"
                className={styles.location}
              >
                0126059755
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright_area}>
        <div className={styles.go_top}>
          <IoIosArrowUp className={styles.top} onClick={goTopScroll} />
        </div>
        <p>© {date} جميع الحقوق محفوظة</p>
      </div>
      <div className={styles.shapes}>
        <Image
          className={styles.shape1}
          src={"/images/footer-shape1.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
        />
        <Image
          className={styles.shape2}
          src={"/images/footer-shape2.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
        />
      </div>
    </footer>
  )
}

export default Footer
