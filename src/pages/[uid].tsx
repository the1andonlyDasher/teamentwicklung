import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled, asLink } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer";
import { sections } from "@/ts/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";

type Params = { uid: string };

export async function getStaticProps({
    params,
    previewData,
}: GetStaticPropsContext<Params>) {
    // The `previewData` parameter allows your app to preview
    // drafts from the Page Builder.
    const client = createClient({ previewData });
    const home = await client.getSingle("home_page");
    const page = await client.getByUID("page", params!.uid);
    const nav = await client.getSingle("navigationsleiste");
    const footer = await client.getByUID("footer", "footer");
    const pages = await client.getAllByType("page");
    return {
        props: { page, pages, nav, footer, home },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const pages = await client.getAllByType("page");

    return {
        paths: pages.map((page) => {
            return asLink(page);
        }),
        fallback: false,
    };
}

export default function Page({
    page, nav, footer, pages, home
}: InferGetStaticPropsType<typeof getStaticProps>) {
    // console.log(pages)
    const links: any = home.data.slices;
    const sec = links.filter((item: any) => item.slice_type === "content_section")
    const contactForm: any = links.find((item: any) => item.slice_type === "kontakformular")
    const hero = links.find((item: any) => item.slice_type === "hero_section")
    const arrFirst = sec.concat(contactForm)
    const arr = [hero].concat(arrFirst)
    arr.push(footer)
    const arrFinal = arr.concat(pages)
    const [s, setSections]: any = useAtom(sections)
    useEffect(() => {
        setSections(arrFinal)
    }, [])
    return (
        <>
            <Head>
                <title>{page.data.meta_title}</title>
                {isFilled.keyText(page.data.meta_description) ? (
                    <meta name="description" content={page.data.meta_description} />
                ) : null}
            </Head>
            <Navbar navbar={nav} home={true} />
            <SliceZone slices={page.data.slices} components={components} />
            <Footer footer={footer} />
        </>
    );
}




