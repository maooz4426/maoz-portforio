'use server'
import { getLinkPreview } from 'link-preview-js';
import {OGP} from "@/features/blog/types";

export const fetchOgp = async (url: string) =>{
    const data = await getLinkPreview(url, {
        followRedirects: 'follow'
    })
    const ogps :OGP = data
    return ogps
}

