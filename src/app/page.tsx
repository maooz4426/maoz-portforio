import Image from "next/image";
import style from "./style.module.scss"
import {LinkIcon} from "@/features/icon/components";
export default function Home() {
  return (
    <div className={style.container}>
        <div  className={style.icon}>
      <Image
          src={`/icon.png`}
          alt="icon"
          width={500}
          height={500}

      />
        </div>

        <div className={style.iconContainer}>
            <LinkIcon width={90} height={90} href="https://github.com/maooz4426" src="Github.svg"/>
            <LinkIcon width={80} height={80} href="https://x.com/maotan426" src="X.svg"/>
            <LinkIcon width={80} height={80} href="https://qiita.com/maooz4426" src="/Qiita.png"/>
            <LinkIcon width={80} height={80} href="https://mixi.social/@maooz4426" src="mixi2.svg"/>
        </div>
    </div>
  );
}
