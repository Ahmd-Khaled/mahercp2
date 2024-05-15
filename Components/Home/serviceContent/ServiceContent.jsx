import styles from "./styles.module.scss"
import { IoColorFilterOutline } from "react-icons/io5"
import { HiOutlineMegaphone } from "react-icons/hi2"
import { HiOutlineFilm } from "react-icons/hi2"
import { IoCameraOutline } from "react-icons/io5"
import { HiOutlinePresentationChartBar } from "react-icons/hi"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from "next/link"
import { MdOutlineLaptopMac } from "react-icons/md"
import { TiShoppingCart } from "react-icons/ti"
import { MdOutlineSettingsSuggest } from "react-icons/md"

const Content = [
  {
    title: "موشن جرافيك",
    icon: IoColorFilterOutline,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/motion",
  },
  {
    title: "تطبيقات ومواقع",
    icon: MdOutlineLaptopMac,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/apps",
  },
  {
    title: "تسويق ومشاهير",
    icon: HiOutlineMegaphone,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/marketing",
  },
  {
    title: "خدمات الانتاج الفني",
    icon: HiOutlineFilm,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/art",
  },
  {
    title: "تصوير المنتجات",
    icon: IoCameraOutline,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/product",
  },
  {
    title: "دراسة المشاريع التقنية",
    icon: HiOutlinePresentationChartBar,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/technique",
  },
  {
    title: "فاست كارت",
    icon: TiShoppingCart,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/fastCart",
  },
  {
    title: "إداره سوشيال ميديا",
    icon: MdOutlineSettingsSuggest,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/management",
  },
]

const ServiceContent = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className="conTitle">
          <span>ماذا نقدم ؟</span>
          <h2 className="dark:text-white">خدماتنا</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.uk_grid}>
          {Content.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link href={item.link}>
              <div
                className={`${styles.single_services} color85 dark:bg-card `}
                key={index}
              >
                <div className={styles.item}>
                  <span className="dark:bg-dark white">
                    <item.icon className={styles.icon} />
                  </span>
                  <h3 className="dark:text-white">{item.title}</h3>
                  <item.arrow className={styles.arrow} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceContent
