"use client";
import { Card } from "@/components/ui/card";
import { fetchOgp } from "@/features/blog/funcs/ogp";
import { fetchMyQiitaURLs } from "@/features/blog/funcs/qiita";
import { OGP } from "@/features/blog/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

const BlogsPage = () => {
  const [ogps, setOgps] = React.useState<OGP[]>();
  const [_loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const urls = await fetchMyQiitaURLs();

        const ogpPromises = urls.map(url => fetchOgp(url));
        const results = await Promise.all(ogpPromises);

        setOgps(results);
      } catch (error) {
        console.error("Error fetching OGPs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);
  console.log(ogps);

  return (
    <>
      <div className={style.titleContainer}>
        <p className={style.title}>Blogs</p>
      </div>
      <div className={style.blogsContainer}>
        <div className={style.blogs}>
          {ogps?.map((ogp, index) => {
            if (!ogp?.images?.[0]) return null;

            return (
              <Card key={index} className={style.card}>
                <Link href={ogp.url}>
                  {/*<CardContent>*/}
                  <Image
                    key={index} // もしくは一意のID
                    width={500}
                    height={500}
                    src={ogp.images[0].toString()}
                    alt={"image"}
                    className={style.blog}
                  />
                  <p className={style.blogTitle}>{ogp.title}</p>
                  {/*</CardContent>*/}
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
