import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/styles/globals.css"
import '@/styles/scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
import { PrismicPreview } from "@prismicio/next";
import { createClient } from "@prismicio/client";
import { repositoryName } from "@/prismicio";
import { Cursor } from "@/components/Cursor";




export default function App({ Component, pageProps }: AppProps) {
  const names = ["Home", "Produkte", "Kontakt"];
  const legals_names = [`Datenschutz`, `Impressum`]
  return (
    <>
      <Cursor />
      <Layout navbar={names} legals={legals_names}  >
        <PrismicPreview repositoryName={repositoryName} />
        <Component {...pageProps} />
      </Layout>
    </>

  )
}
