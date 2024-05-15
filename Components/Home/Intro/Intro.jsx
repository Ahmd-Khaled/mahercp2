import { useLocale, useTranslations } from "next-intl";
import styles from "./styles.module.scss"
import Link from "next/link"

const Intro = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <>
      <div className="dark:bg-dark secContainer">
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.main_banner}>
              <h1 className="dark:text-white">{t("home-i01")}</h1>
              <p className="color84 dark:text-white">{t("home-i02")}</p>

              <Link href={""}>
                <button className={`btn ${styles.contact}`}>{t("home-i03")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
