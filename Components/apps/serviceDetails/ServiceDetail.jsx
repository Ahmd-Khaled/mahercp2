"use client"

/* eslint-disable react/jsx-key */
import Link from "next/link"
import styles from "./styles.module.scss"
import { IoSearchSharp } from "react-icons/io5"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import { IoCheckmark } from "react-icons/io5"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

const sliderImages = [
  { image: "/images/service2.jpg" },
  { image: "/images/service1.jpg" },
  { image: "/images/service2.jpg" },
]

const content = [
  {
    id: "01",
    title: "موشن جرافيك",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/motion",
  },
  {
    id: "02",
    title: "تطبيقات ومواقع",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/apps",
  },
  {
    id: "03",
    title: "تسويق ومشاهير",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/marketing",
  },
  {
    id: "04",
    title: "خدمات الانتاج الفني",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/art",
  },
  {
    id: "05",
    title: "تصميم بوسترات اعلانيه",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/art",
  },
  {
    id: "06",
    title: "تصوير المنتجات",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/product",
  },
  {
    id: "07",
    title: "دراسة المشاريع التقنية",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/technique",
  },
  {
    id: "08",
    title: "فاست كارت",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/fastCart",
  },
  {
    id: "09",
    title: "إداره سوشيال ميديا",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/management",
  },
]

const ServiceDetail = () => {
  const [activeService, setActiveService] = useState("02")
  const [searchQuery, setSearchQuery] = useState("")

  const handleService = (idService) => {
    setActiveService(activeService === idService ? idService : "")
  }

  const filteredContent = content.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const BreakpointSlides = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    Tdesktop: {
      breakpoint: { max: 1024, min: 767 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 767, min: 560 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={styles.uk_grid}>
          <div className={styles.uk_sidebar}>
            <div className={`${styles.widget_search} white dark:bg-card`}>
              <form>
                <input
                  className={`${styles.uk_input} dark:bg-card dark:border-dark border51`}
                  type="text"
                  value={searchQuery}
                  placeholder="بحث هنا .."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                  <IoSearchSharp className={styles.icon} />
                </button>
              </form>
            </div>

            <div className={styles.service_list}>
              {filteredContent.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div
                    onClick={() => {
                      handleService(item.id)
                    }}
                    className={`${styles.list} ${
                      activeService === item.id ? styles.active : ""
                    } dark:bg-card dark:border-b-dark border50`}
                  >
                    <span>{item.title}</span>
                    <item.arrow className={styles.arrow} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.inner}>
            <h3 className="dark:text-white">انشاء تطبيق وموقع إلكتروني</h3>
            <p className="color84 dark:text-white">
              أثبتت الدراسات ان 60 % من مستخدمي الانترنت يتصفحون من خلال الجوال
              مقابل 40 % من المتصفحين من أجهزة الحاسوب, كما تتواجد دراسة مؤكدة
              بأن إجمالي التجارة اإللكترونية بالمملكة العربية السعودية وصل الي
              70 مليار لاير سعودي و 50 % من هذه التجارة تتم من خلال تطبيقات
              الجوال . وبناء علي ما سبق , يجب على النشاط التجاري الحصول على
              تطبيق جوال يحتوي على اسم النشاط , المنتجات او الخدمات كما ان
              التطبيق يتيح سرعة التواصل مع العملاء .. نقوم نحن في ام بي ان
              ببرمجة تطبيق وموقع إلكتروني خاص بك بأعلى المعايير، لنا شركة تصميم
              تطبيقات الجوال التي تتمتع بأعلى المزايا، وتقدم أفضل العروض
            </p>

            <div className={styles.services_images_slider}>
              <Carousel
                responsive={BreakpointSlides}
                infinite={true}
                autoPlay={true}
                keyBoardControl={true}
                autoPlaySpeed={2000}
                showDots={true}
                itemClass="carousel-item"
              >
                {sliderImages.map((item, index) => (
                  <div key={index} className={styles.slider}>
                    <Image
                      className={styles.image}
                      src={item.image}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div>
              <h3>لماذا تختار هذه الخدمة ؟</h3>
              <p>
                تصميم متجر الكتروني هي خطوة هامة جدا لزيادة أرباحك من خلال
                التجارة االلكترونية والبيع من خلال الانترنت ويشمل تصميم المتجر
                كل الوسائل التي تساعدك لعرض منتجات شركتك وبدء عملية البيع، وتعد
                ) ام بي ان( افضل الشركات في تصميم المتاجر الالكترونية حيث نقدم
                لك متجر متكامل يوفر لك حلول فريدة ومبتكرة تجعلك تدير عملية البيع
                بسهولة تامة فالتصميم يأتي بواجهة سهلة االستخدام وبجميع أدوات
                التجارة االلكترونية التي تساعد على زيادة حركة البيع ليس هذا فحسب
                فنحن نعلم أنك تريد التسويق لمتجرك عبر الانترنت لذلك نراعى اثناء
                تصميم المتجر أن يكون متوافق مع محركات البحث، بحيث يتم تهيئة
                التصميم ليكون صديق للجوجل مما يعزز تصدر متجرك للحصول على النتائج
                األولى في جوجل، كما أننا نقدم جميع استشارات التسويق اإللكتروني
                مجانا إن ) ام بي ان ( تعد واحدة من افضل شركات تصميم متاجر
                الكترونية فنحن نضمن لك أن جميع طرق الدفع تكون مؤمنة بنسبة 100
                %وهو األمر الذي يضمن سالمة خطوات البيع، كما نوفر لك حلول مبتكرة
                لطباعة الفواتير بعد الشراء أو ارسالها في رسالة على الجوال مع
                توضيح كافة إجراءات التعامالت البنكية التي تم إجرائها
              </p>
            </div>
            <ul className={styles.services_features_list}>
              <li className="dark:text-white">
                <IoCheckmark className={styles.check} />
                تنفيذ العمل
              </li>
              <li className="dark:text-white">
                <IoCheckmark className={styles.check} />
                كتابة السيناريو
              </li>
              <li className="dark:text-white">
                <IoCheckmark className={styles.check} />
                صناعة الفكرة
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
