import { createClient } from "@prismicio/client";
import { repositoryName } from "@/prismicio";
import { components } from "@/slices";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { sections } from "@/ts/atoms";

export async function getStaticProps({ params }: any) {
  const client = createClient(repositoryName);
  const pageContent = await client.getSingle("home_page");
  const nav = await client.getSingle("navigationsleiste");
  const footer = await client.getByUID("footer", "footer");
  const pages = await client.getAllByType("page");

  return {
    props: {
      pageContent, nav, footer, pages

    },
  };
}

export default function Home({ pageContent, nav, footer, pages }: any) {
  // console.log(pages)
  const links = pageContent.data.slices;
  const sec = links.filter((item: any) => item.slice_type === "content_section")
  const contactForm = links.find((item: any) => item.slice_type === "kontakformular")
  const hero = links.find((item: any) => item.slice_type === "hero_section")
  const arrFirst = sec.concat(contactForm)
  const arr = [hero].concat(arrFirst)
  arr.push(footer)
  const arrFinal = arr.concat(pages)
  const [s, setSections]: any = useAtom(sections)
  useEffect(() => {
    // console.log(arrFinal)
    setSections(arrFinal)
  }, [])

  return (<>
    <Head>
      <title>{pageContent.data.meta_title}</title>
      <meta name="description" content={pageContent.data.meta_description} />
      <meta name="keywords" content={pageContent.data.meta_keywords} />
    </Head>
    <Navbar navbar={nav} links={arr} />
    <SliceZone slices={pageContent.data.slices} components={components} />
    <Footer footer={footer} />
  </>
  )

}
