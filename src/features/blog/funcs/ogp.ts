"use server";
import { OGP } from "@/features/blog/types";
import { getLinkPreview } from "link-preview-js";

export const fetchOgp = async (url: string) => {
  const data = await getLinkPreview(url, {
    followRedirects: "follow",
  });
  const ogps: OGP = data;
  return ogps;
};
