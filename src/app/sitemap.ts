import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {
    return [
      {
        url: 'https://youdw.vercel.app',
       
      },
      {
        url: 'https://youdw.vercel.app/privacy-policy',
       
      },
      {
        url: 'https://youdw.vercel.app/terms-of-use',
       
      },
    
    
    ]
  }