import style from "@/features/icon/styles/link-icon.module.scss";
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
