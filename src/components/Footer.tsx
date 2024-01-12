import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { loc } from "@/ts/atoms";
import { useAtom } from "jotai";

const section_variants = {
  initial: {
  },
  enter: {
    transition: { staggerChildren: 0.2, when: "beforeChildren", staggerDirection: 1 },
  },
  exit: {
    transition: { staggerChildren: 0.2, when: "afterChildren", staggerDirection: -1 },
  },
}

const Footer = ({ footer }: any) => {
  const date = new Date()
  const [app, setApp] = useAtom(loc)
  return (
    <>
      <motion.section
        className="footer"
        id={`${footer.type}`}
        variants={section_variants}
        initial="initial"
        data-section-name={`${footer.type}`}
        whileInView="enter"
        viewport={{ margin: "100px", amount: 0.375, once: false }}
        onViewportEnter={(entry) => {
          // controls.start("enter")
          entry?.isIntersecting
            ? setApp(
              `${entry.target?.getAttribute(
                "data-section-name"
              )}`
            )
            : null;
        }}
        exit="exit"
      >
        <PrismicRichText field={footer.data.text} />
        <div className="footer-links">
          {footer.data.slices.map((slice: any) => <Link key={slice.primary.link.uid} href={`/${slice.primary.link.uid}`} className="btn__alt" >{slice.primary.link.uid}</Link>)}
        </div>
        <h5>Teamentwicklung © {date.getFullYear()} </h5>
      </motion.section>
    </>
  );
};

export default Footer;
