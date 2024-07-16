import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata =   {
  metadataBase: new URL("https://youdw.vercel.app"),
  title: "Download Youtube Videos and Convert to MP3",
  description: "Convert YouTube videos to MP3 easily with our app! Легко конвертируйте видео с YouTube в MP3 с помощью нашего приложения! Convertissez facilement les vidéos YouTube en MP3 avec notre application ! Facile videos de YouTube in MP3 converte cum nostra app!",
  keywords: [
    "download youtube videos", 
    "convert youtube to mp3", 
    "youtube downloader", 
    "mp3 converter", 
    "video downloader",
    "Скачать видео с YouTube", 
    "Конвертер YouTube в MP3", 
    "Загрузчик YouTube", 
    "MP3 конвертер", 
    "Видео загрузчик",
    "Télécharger des vidéos YouTube", 
    "Convertisseur YouTube en MP3", 
    "Téléchargeur YouTube", 
    "Convertisseur MP3", 
    "Téléchargeur vidéo",
    "Video de YouTube download", 
    "YouTube ad MP3 converter", 
    "YouTube downloader", 
    "MP3 converter", 
    "Video downloader"
  ],
  authors:[{name:"Video downloader youdw"}],
  creator:"Video downloader youdw",
  publisher:"Video downloader youdw",
  manifest:'/site.webmanifest',
  icons:{
    icon:['/favicon.ico?v=1'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  
  },
  twitter:{
    card:"summary_large_image"
        },
  openGraph: {
    title: "Download Youtube Videos and Convert to MP3",
    description: "Convert YouTube videos to MP3 easily with our app!",
    url: "https://youdw.vercel.app/",
    siteName: "Download Youtube Videos and Convert to MP3",
    type: "website",
  },
 
  robots: "index, follow", // Allow search engines to index and follow this page
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      
<meta name="robots" content="index, follow, download youtube videos, convert youtube to mp3, youtube downloader, mp3 converter, video downloader, Скачать видео с YouTube, Конвертер YouTube в MP3, Загрузчик YouTube, MP3 конвертер, Видео загрузчик, Télécharger des vidéos YouTube, Convertisseur YouTube en MP3, Téléchargeur YouTube, Convertisseur MP3, Téléchargeur vidéo, Video de YouTube download, YouTube ad MP3 converter, YouTube downloader, MP3 converter, Video downloader" />


      </Head>
      <body className={inter.className}>



        <Navbar/>
        {children}
        <Footer/>

        
        </body>
    </html>
  );
}
