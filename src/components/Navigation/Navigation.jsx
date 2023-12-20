import { useTranslation } from "react-i18next";
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import LinkButton from "./LinkButton/LinkButton";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.main"), url: "https://aww.xyz/" },
    { name: "Curious Fox", url: "https://t.me/rwarden", icon: faTelegram, target: "_blank" },
    { name: "49406", url: "https://t.me/runetstalking", icon: faTelegram, target: "_blank" },
    { name: t("nav.blog"), url: "https://r.aww.xyz/", target: "" },
    { name: t("nav.world"), url: "https://world.aww.xyz/", target: "_blank" },
    { name: t("nav.gaming_hub"), url: "https://aww.xyz/games", target: "" },
    { name: t("nav.radio_tower"), url: "http://radiotower.netstalking.org/", target: "_blank" },
    { name: t("nav.other"), url: "https://etc.aww.xyz/" },
    { name: t("nav.about"), url: "./me", route: true },
    { name: "TLPE", url: "https://tulpamancy.org/", target: "_blank" },
    { name: "NSC", url: "https://netstalking.org/", target: "_blank" },
  ]

  return <div className={styles.nav_wrapper}>
    <div className={styles.nav}>
      {navLinks.map(link => <LinkButton link={link} key={link.url} />)}
    </div>
  </div>
}
