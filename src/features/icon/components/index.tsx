import style from "@/features/icon/styles/style.module.scss";
import Image from "next/image";
import Link from "next/link";

type LinkIconProps = {
  width: number;
  height: number;
  href: string;
  src: string;
};

export const LinkIcon = (props: LinkIconProps) => {
  return (
    <Link href={props.href} className={style.icon}>
      <Image width={props.width} height={props.height} src={props.src} alt="icon" />
    </Link>
  );
};

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
