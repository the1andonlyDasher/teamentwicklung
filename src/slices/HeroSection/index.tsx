import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { motion, } from "framer-motion";

import Link from "next/link";

import { PrismicRichText } from "@prismicio/react";
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

const text_variants = {
  initial: {
    opacity: 0,
    y: -10
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const header_variants = {
  initial: { opacity: 0, x: 100 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeIn", duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const variants = {
  initial: {
    x: 50,
    scale: 0,
    opacity: 0,
  },
  enter: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring", damping: 50, stiffness: 100, restDelta: 0.01,
      staggerChildren: 0.2, when: "beforeChildren", staggerDirection: 1
    },
  },
  exit: {
    x: 50,
    scale: 0,
    opacity: 0,
    transition: {
      type: "spring", damping: 50, stiffness: 100, restDelta: 0.01,
      staggerChildren: 0.2, when: "afterChildren", staggerDirection: -1
    },
  },
};



/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;



/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  const [app, setApp] = useAtom(loc)
  return (
    <motion.section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-section-name={`${slice.primary.anchor}`}
      id={`${slice.primary.anchor}`}
      variants={section_variants}
      initial="initial"
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
      <motion.div variants={section_variants} className="lr__wrapper">
        <motion.div
          className="left-wrapper"
          variants={section_variants}
        >
          {slice.primary.hero_header && <motion.h1 className="sectionHeader" variants={header_variants}>{slice.primary.hero_header}</motion.h1>}
          {slice.primary.hero_subheader && <motion.h2 variants={header_variants}>{slice.primary.hero_subheader}</motion.h2>}
          <motion.div variants={text_variants}>
            <PrismicRichText field={slice.primary.hero_text} />
          </motion.div>
          <div className="button__wrapper no-flex">
            {slice.items.map((item: any, index: number) =>
              <Link key={index} className={`${item.hero_buttonStyle}` === "Call to Action" ? "btn__primary" : "btn__outline"} href={"#"}>{`${item.hero_ButtonText}`}</Link>)}
          </div>
        </motion.div>
        <motion.div className="right-wrapper">
        </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default HeroSection;






