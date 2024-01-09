import * as prismic from "@prismicio/client";
import { createClient, repositoryName } from "../prismicio";
import { components } from "@/slices";
import Head from "next/head";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer";
import { SliceZone } from "@prismicio/react";
import { createClient as CC } from "@prismicio/client";

// Fetch content from prismic
export async function getStaticProps({ params, previewData }: any) {
    const client = createClient({ previewData });
    const c = CC(repositoryName);
    const page = await client.getByUID("page", params.uid);
    const nav = await c.getSingle("navigationsleiste");
    const footer = await c.getByUID("footer", "footer");

    return {
        props: { page, nav, footer },
    };
}

// Define Paths
export async function getStaticPaths() {
    const client = createClient();

    const pages = await client.getAllByType("page");

    return {
        paths: pages.map((page) => prismic.asLink(page)),
        fallback: true,
    };
}

export default function Home({ page, nav, footer }: any) {
    return (
        <>
            {page && (
                <>
                    {" "}
                    <Head>
                        {page.data.meta_title && <title>{page.data.meta_title}</title>}
                        {page.data.meta_description && (
                            <meta name="description" content={page.data.meta_description} />
                        )}
                        {page.data.meta_keywords && (
                            <meta name="keywords" content={page.data.meta_keywords} />
                        )}
                    </Head>
                    <Navbar navbar={nav} />
                    <SliceZone slices={page.data.slices} components={components} />
                    <Footer footer={footer} />
                </>
            )}
        </>
    );
}
