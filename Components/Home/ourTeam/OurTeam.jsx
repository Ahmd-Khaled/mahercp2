"use client"

import React, { useRef, useState } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"
import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { TiSocialFacebook } from "react-icons/ti"
import { SlSocialInstagram } from "react-icons/sl"
import { FaLinkedinIn } from "react-icons/fa6"
import { BsTwitter } from "react-icons/bs"

const team = [
  {
    presonImg: "/images/team2.jpg",
    presonName: "م كريم حلمي",
    presonJop: "مدير المشاريع البرمجيه",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "هنادى",
    presonJop: "مسؤولة قسم التسويق",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "عواطف شيخ",
    presonJop: "مسؤولة الدعم الفني",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "هنادى",
    presonJop: "مسؤولة التسويق",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "عواطف شيخ",
    presonJop: "مسؤولة الدعم الفني",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "رغد علي",
    presonJop: "مسؤولة قسم التطوير والدراسات والترجمة",
    personSm: [""],
  },
]

const CompletedProjects = () => {
  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeButton, setActiveButton] = useState(1)

  const toggle = (buttonIndex) => {
    setActiveButton(activeButton === buttonIndex ? buttonIndex : buttonIndex)
  }

  const nextSlide = () => {
    carouselRef.current.next()
    setCurrentSlide((prevSlide) => prevSlide + 1)
  }

  const prevSlide = () => {
    carouselRef.current.previous()
    setCurrentSlide((prevSlide) => prevSlide - 1)
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className={styles.section}>
      <div className="secContainer">
        <div className={styles.container}>
          <div>
            <div className={`${styles.Title} conTitle`}>
              <span>فريقنا المتميز سيفعل أي شيء من أجلك.</span>
              <h2>فريق العمل</h2>
              <div className="bar"></div>
            </div>
            <Link href="">
              <button className={`btn ${styles.contact}`}>عرض الكل</button>
            </Link>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            autoPlaySpeed={2000}
            className={styles.carousel}
            ref={carouselRef}
            afterChange={(previousSlide, currentSlide) =>
              setCurrentSlide(currentSlide)
            }
          >
            {team.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.item} key={index}>
                <div className={styles.single_team}>
                  <ul className={styles.social}>
                    <Link href="#">
                      <TiSocialFacebook className={styles.icon} />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn className={styles.icon} />
                    </Link>
                    <Link href="#">
                      <BsTwitter className={styles.icon} />
                    </Link>
                    <Link href="#">
                      <SlSocialInstagram className={styles.icon} />
                    </Link>
                  </ul>
                  <Image
                    src={item.presonImg}
                    alt=""
                    className={styles.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />

                  <div className={styles.team_content}>
                    <h3>{item.presonName}</h3>
                    <span>{item.presonJop}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <div className={styles.customNavigation}>
            <button
              onClick={() => {
                nextSlide()
                toggle(1)
              }}
            >
              <span
                className={activeButton === 1 ? `${styles.active}` : ""}
              ></span>
            </button>
            <button
              onClick={() => {
                prevSlide()
                toggle(2)
              }}
            >
              <span
                className={activeButton === 2 ? `${styles.active}` : ""}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompletedProjects
