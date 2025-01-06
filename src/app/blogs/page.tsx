"use client";
import { BlogCard } from "@/features/blog/components";
import { fetchOgp } from "@/features/blog/funcs/ogp";
import { fetchMyQiitaURLs } from "@/features/blog/funcs/qiita";
import { OGP } from "@/features/blog/types";
import { AnimatePresence } from "framer-motion";
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
      <AnimatePresence mode="wait">
        <div className={style.titleContainer}>
          <p className={style.title}>B<span>L</span>O<span>G</span>S</p>
        </div>
        <div className={style.blogsContainer}>
          <div className={style.blogs}>
            {ogps?.map((ogp, index) => {
              if (!ogp?.images?.[0]) return null;

              return (
                <BlogCard key={index} ogp={ogp} />

              );
            })}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default BlogsPage;
