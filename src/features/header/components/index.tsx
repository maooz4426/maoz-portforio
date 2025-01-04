import style from "@/features/header/styles/style.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerTitle}>MAOZ dev</div>
      <div className={style.menuContainer}>
        <Link className={style.headerContent} href="/">
          Home
        </Link>
        <Link className={style.headerContent} href="/about">
          About
        </Link>
        <div className={style.headerContent}>Works</div>
      </div>
    </div>
  );
};
