import Link from "next/link"
import styles from "./styles.module.scss"
import { HiOutlineMail } from "react-icons/hi"
import { IoIosPhonePortrait } from "react-icons/io"
import { IoLocationOutline } from "react-icons/io5"
import Image from "next/image"
const Contact = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>نحن هنا لمساعدتك</span>
          <h2 className="dark:text-white">تواصل معانا</h2>
        </div>

        <div className={styles.uk_grid}>
          <div className={styles.right_contact}>
            <div className={styles.contact_box}>
              <h2 className={styles.title}>معلومات الاتصال</h2>

              <div className={styles.address_box}>
                <div className={styles.address_icon}>
                  <HiOutlineMail className={styles.icon} />
                </div>
                <div className={styles.address_text}>
                  <span>البريد الالكتروني : </span>
                  <Link href="">INFO@MAHERCP.NET</Link>
                </div>
              </div>
              <div className={styles.address_box}>
                <div className={styles.address_icon}>
                  <IoIosPhonePortrait className={styles.icon} />
                </div>
                <div className={styles.address_text}>
                  <span>رقم الهاتف :</span>
                  <Link href="tel:+920006942">+920006942</Link>
                </div>
              </div>
              <div className={styles.address_box}>
                <div className={styles.address_icon}>
                  <IoLocationOutline className={styles.icon} />
                </div>
                <div className={styles.address_text}>
                  <span>العنوان :</span>
                  <p className={styles.desc}>جدة - الخالدية - برج الغيداء</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.left_contact}>
            <Image
              className={styles.img_email}
              src={"/images/mail.gif"}
              alt=""
              width={158}
              height={158}
              loading="lazy"
              sizes="100vw"
            />

            <form id="contactForm" className={styles.form}>
              <div className={styles.item}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder="الاسم بالكامل"
                />
              </div>
              <div className={styles.item}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder="البريد الالكتروني"
                />
              </div>
              <div className={styles.item}>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder="رقم الهاتف"
                />
              </div>
              <div className={styles.item}>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder="الموضوع"
                />
              </div>
              <div className={styles.item_mes}>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  className={`${styles.uk_textarea} color87 dark:bg-card`}
                  placeholder="رسالتك"
                ></textarea>
              </div>
              <button className={`btn ${styles.contact}`} type="sumbit">
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.br_line}></div>
    </div>
  )
}

export default Contact
