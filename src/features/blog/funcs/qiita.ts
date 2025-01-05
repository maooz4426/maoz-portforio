import { QiitaItemResponse } from "@/features/blog/types";
import axios from "axios";

export const fetchMyQiitaURLs = async () => {
  const response = await axios.get("https://qiita.com/api/v2/authenticated_user/items?per_page=4", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
  const qiitaUrls: string[] = [];
  const qiitaItems: QiitaItemResponse[] = response.data;
  qiitaItems.map(item => {
    qiitaUrls.push(item.url);
  });
  return qiitaUrls;
};
