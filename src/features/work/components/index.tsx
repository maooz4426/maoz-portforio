import { Card, CardContent, CardHeader } from "@/components/ui/card";
import style from "@/features/work/styles/style.module.scss";
import Image from "next/image";

type WorkCardProps = {
  title: string;
  image: string;
};

export const WorkCard = (props: WorkCardProps) => {
  return (
    <Card className={style.card}>
      <CardHeader className={style.imgContainer}>
        <Image fill alt={"image"} src={props.image} className={style.img} />
      </CardHeader>
      <CardContent>
        <p className={style.title}>{props.title}</p>
      </CardContent>
    </Card>
  );
};
