import style from "@/features/header/styles/style.module.scss";

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerTitle}>MAOZ dev</div>
      <div className={style.menuContainer}>
        <div className={style.headerContent}>Home</div>
        <div className={style.headerContent}>About</div>
        <div className={style.headerContent}>Works</div>
      </div>
    </div>
  );
};
