import { Card } from "@/components/ui/card";
import style from "@/features/blog/styles/style.module.scss";
// import React from "react";
import { OGP } from "@/features/blog/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  ogp: OGP;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      key="image-container"
    >
      <Card className={style.card}>
        <Link href={props.ogp.url || ""}>
          {/*<CardContent>*/}
          <Image width={500} height={500} src={props.ogp.images[0].toString() || ""} alt={"image"} />
          <p className={style.blogTitle}>{props.ogp.title}</p>
          {/*</CardContent>*/}
        </Link>
      </Card>
    </motion.div>
  );
};
