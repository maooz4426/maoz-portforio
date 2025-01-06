import { ProfileIcon } from "@/features/icon/components/ProfileIcon";
import style from "./style.module.scss";

const AboutPage = () => {
  return (
      <>
<div className={style.titleContainer}>
      <p className={style.title}>A<span>B</span>OU<span>T</span></p>
</div>
    <div className={style.aboutContainer}>

      <div>
        <ProfileIcon width={500} height={500} />
      </div>
      <div className={style.profileContainer}>
        <h1 className={style.name}>尾﨑 真央</h1>
        <p>所属:</p>
        <p className={style.detail}>立命館大学情報理工学部実世界情報コース3回生</p>
        <p className={style.detail}> 2024年度立命館コンピュータクラブ執行委員長</p>
        <p className={style.detail}>Nextend　正会員</p>
      </div>
    </div>
      </>
  );
};

export default AboutPage;
