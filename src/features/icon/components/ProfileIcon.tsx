import style from "@/features/icon/styles/profile-icon.module.scss";
import Image from "next/image";

type ProfileIconProps = {
  width: number;
  height: number;
};

export const ProfileIcon = (props: ProfileIconProps) => {
  return (
    <div className={style.profileIcon}>
      <Image src={"/icon.png"} alt="icon" width={props.width} height={props.height} />
    </div>
  );
};
