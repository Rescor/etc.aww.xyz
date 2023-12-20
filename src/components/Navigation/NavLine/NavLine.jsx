import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./NavLine.module.css";

export default function NavLine(props) {
  const { t } = useTranslation();

  return <div className={props.page === "main" ? styles.navline_wrapper_main : styles.navline_wrapper}>
    <a href="https://aww.xyz/" className={styles.link}>{t("nav.main")}</a>
    <span className={styles.delimiter}>/</span>
    {props.page === "main" ? <p>{t("nav.other")}</p> :
      <>
        <NavLink to={"../"} className={styles.link}>{t("nav.other")}</NavLink>
        <span className={styles.delimiter}>/</span>
        <p>{props.title}</p>
      </>
    }
  </div>
}
