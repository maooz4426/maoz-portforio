import style from "@/features/header/styles/style.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerTitle}>M<span>A</span>OZ dev</div>
      <div className={style.menuContainer}>
        <Link className={style.headerContent} href="/">
          <span>H</span>ome
        </Link>
        <Link className={style.about} href="/about">
          A<span>b</span>out
        </Link>
        <Link className={style.works} href="/works">
          Wo<span>r</span>ks
        </Link>
        <Link className={style.blogs} href="/blogs">
          Blo<span>g</span>s
        </Link>
      </div>
    </div>
  );
};
