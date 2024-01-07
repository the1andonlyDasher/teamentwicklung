import * as prismic from '@prismicio/client'
import { createClient as cC, repositoryName } from '../prismicio'
import { createClient } from "@prismicio/client";

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

// Define Paths
export async function getStaticPaths() {
    const client = cC()

    const pages = await client.getAllByType('page')


    return {
        paths: pages.map((page) => prismic.asLink(page)),
        fallback: true,
    }
}

export default function Home({ page, nav }: any) {
    return (<>

        <div></div>

    </>
    )
}