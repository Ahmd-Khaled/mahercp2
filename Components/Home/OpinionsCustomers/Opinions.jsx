"use client"
import styles from "./styles.module.scss"
import Image from "next/image"
import { RiDoubleQuotesL } from "react-icons/ri"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const opinionsContent = [
  {
    icon: RiDoubleQuotesL,
    comment:
      "ولاً قمة في التعامل روح وسعة صدر كبيره من الفريق توجيهات رائعة أثناء بناء المشروع وتلبيه كافة التطلبات تقريباً وقمة في التعامل والرد خدمات تستاهل أكثر من السعر المطلوب صراحتاً أتمنى التوفيق لكم والمزيد من النجاح",
    client: "محمد السعدي",
  },
  {
    icon: RiDoubleQuotesL,
    comment:
      "عند نجاح اي فكرة مشروع لا تتوقف على الفكرة فقط كم من مشاريع تم تنفيذها بأفكار جميلة وتخدم المجتمع ولكن دون نجاح ولذلك يعتبر التسويق من الأساسيات والمكملات لأضلاع المشروع ومن دونها يعتبر المشروع غير مكتمل مهما كانت الفكرة مميز الدراسة التسويقية للمشروع هي من الأساسيات",
    client: "ماهر بن نايف",
    titleClient: "المدير التنفيذى",
  },
  {
    icon: RiDoubleQuotesL,
    comment:
      "التصوير والمونتاج رسم عالمك وعرضه لعملائك وكلما كانت الصور والتصميم إحترافي كلما كان لدى عملائك النظرة الاحترافية لأعمالك",
    client: "ماهر بن نايف",
    titleClient: "المدير التنفيذى",
  },
]

const Opinions = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={styles.left_info}>
          <Image
            src={"/images/bg.jpg"}
            alt=""
            className={styles.img_main}
            width={600}
            height={400}
            sizes="100vw"
            loading="lazy"
          />
          <Image
            src={"/images/1.png"}
            alt=""
            className={styles.img_three}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className={styles.right_info}>
          <div className="conTitle">
            <span>ماذا يقول العميل عنا ؟</span>
            <h2 className="dark:text-white">آراء العملاء</h2>
            <div className="bar"></div>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            autoPlaySpeed={8000}
          >
            {opinionsContent.map((opinion, index) => (
              <div key={index} className={styles.opinion}>
                <div>
                  <opinion.icon className={styles.icon} />
                </div>
                <p>{opinion.comment}</p>
                <div className={styles.client}>
                  <h3 className="dark:text-white">{opinion.client}</h3>
                  <span>{opinion?.titleClient}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Opinions
