import { QiitaItemResponse } from "@/features/blog/types";
import axios from "axios";

export const fetchMyQiitaURLs = async (page: number) => {
  const response = await axios.get(`https://qiita.com/api/v2/authenticated_user/items?page=${page}&per_page=6`, {
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
