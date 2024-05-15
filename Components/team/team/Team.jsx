import Image from "next/image"
import styles from "./styles.module.scss"
import MobileContant from "../mobile/MobileContant"

const Team = () => {
  return (
    <section className={styles.section}>
      <div className={styles.main_container}>
        <div className={styles.main_wrapper}>
          <div className={styles.honeycomb_right}>
            <div className="honeycomb_cell">
              <div className="honeycomb_title">
                <h3>
                  <span>MAHER</span> BIN NAIF
                </h3>
                <p>CEO</p>
              </div>
            </div>
          </div>

          <ul className={styles.honeycomb_left}>
            <div className={styles.lineOne}>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
              <li className={styles.honeycomb_cell}></li>
            </div>
            <div className={styles.lineTwo}>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>FARDOS</span> NASSER
                  </h3>
                  <p>Marketing consultant</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>MAHMOUD</span> AWWAD
                  </h3>
                  <p>BACK END</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>SAJA </span> SAOUD
                  </h3>
                  <p>Brand strategist</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>AHMED</span> MAGDY
                  </h3>
                  <p>
                    Head of Mobile
                    <br />
                    Development
                  </p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
            </div>
            <div className={styles.lineThree}>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>MADAWI </span> ELBASARY
                  </h3>
                  <p>VP</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>REEM</span> OMAR
                  </h3>
                  <p>LEGAL AFFAIRS</p>
                </div>
              </li>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>MAHMOUD </span> AWADALLA
                  </h3>
                  <p>UI/UX desgin</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}></li>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            </div>

            <div className={styles.lineFour}>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>AHMED </span> KHALED
                  </h3>
                  <p>head of front end</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>MUSTAFA </span> ABOKHALIL
                  </h3>
                  <p>SENIOR MOBILE DEVELOPER</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
            </div>

            <div className={styles.lineFive}>
              <li className={`${styles.honeycomb_cell}`}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>KARIM </span> HELMY
                  </h3>
                  <p>CTO</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>HAZEM </span> FATHY
                  </h3>
                  <p>CTO</p>
                </div>
              </li>
              <li className={`${styles.honeycomb_cell} ${styles.perfect}`}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>MOHAMED </span> OUDA
                  </h3>
                  <p>Senior Back End</p>
                  <p className={styles.titlePerfect}>
                    {styles.perfect ? "EMPOLYEE OFF THE MONTH" : ""}
                  </p>
                </div>
                <Image
                  className={styles.star}
                  src={"/images/starpng.png"}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>MOHAMED </span>SAMIR
                  </h3>
                  <p>TESTER</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>SADEK </span>ZEDAN
                  </h3>
                  <p>Art Director</p>
                </div>
              </li>
              <li className={`${styles.honeycomb_cell}`}></li>
              <li className={styles.honeycomb_cell}></li>
            </div>

            <div className={styles.lineSix}>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>AMAL </span>SAMI
                  </h3>
                  <p>MARKTING</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>Mohamed </span>ADEL
                  </h3>
                  <p>TESTER</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>RAHAF </span>OMAR
                  </h3>
                  <p>ACCOUNTANT</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}>
                <div className={styles.honeycomb_title}>
                  <h3>
                    <span>AMR </span>IMAM
                  </h3>
                  <p>FRONT END</p>
                </div>
              </li>
              <li className={styles.honeycomb_cell}></li>
              <li className={`${styles.honeycomb_cell}`}></li>
              <li className={styles.honeycomb_cell}></li>
            </div>
            <div className={styles.lineSaven}>
              <li className={styles.honeycomb_cell}></li>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>

              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
              <li className={styles.honeycomb_cell}></li>
            </div>

            <MobileContant />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Team
