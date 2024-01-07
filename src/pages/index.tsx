import { createClient } from "@prismicio/client";
import { repositoryName } from "@/prismicio";
import { components } from "@/slices";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import Navbar from "@/components/Navbar/navbar";
import { Cursor } from "@/components/Cursor";

export async function getStaticProps() {
  const client = createClient(repositoryName);
  const pageContent = await client.getSingle("home_page");
  const nav = await client.getSingle("navigationsleiste");
  return {
    props: {
      pageContent, nav

    },
  };
}

export default function Home({ pageContent, nav }: any) {
  console.log(pageContent, nav);
  return (<>
    <Head>
      <title>{pageContent.data.meta_title}</title>
      <meta name="description" content={pageContent.data.meta_description} />
      <meta name="keywords" content={pageContent.data.meta_keywords} />
    </Head>
    <Navbar navbar={nav} />
    <SliceZone slices={pageContent.data.slices} components={components} />
  </>
  )

}
