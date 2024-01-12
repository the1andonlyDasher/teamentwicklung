import { load, loc } from "@/ts/atoms";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
/**
 * Props for `FullpageText`.
 */
export type FullpageTextProps = SliceComponentProps<Content.FullpageTextSlice>;



const section_variants = {
  initial: {},
  enter: {
    transition: { staggerChildren: 0.2, when: "beforeChildren", staggerDirection: 1 },
  },
  exit: {
    transition: { staggerChildren: 0.2, when: "afterChildren", staggerDirection: -1 },
  },
};

const wrapper_variants = {
  initial: { opacity: 0, x: -100, scaleX: 0 },
  enter: {
    opacity: 1,
    x: 0,
    scaleX: 1,
    transition: { type: "spring", damping: 50, stiffness: 200, delay: 0.75 },
  },
  exit: {
    opacity: 0, x: -100, scaleX: 0,
    transition: { type: "spring", damping: 50, stiffness: 200 },
  },
};

const bgText_variants = {
  initial: { opacity: 0, x: -100, scale: 0 },
  enter: {
    opacity: 0.07,
    x: 0,
    scale: 1,
    transition: { type: "spring" },
  },
  exit: {
    opacity: 0, x: -100, scale: 0,
    transition: { type: "spring" },
  },
};

const text_variants = {
  initial: { opacity: 0, y: -100, },
  enter: {
    opacity: 1,
    y: 0,

    transition: { type: "spring", damping: 50, stiffness: 200 },
  },
  exit: {
    opacity: 0, y: 100,
    transition: { type: "spring", damping: 50, stiffness: 200 },
  },
};

const header_variants = {
  initial: { opacity: 0, y: -100, scale: 0 },
  enter: {
    opacity: 1,
    y: 0, scale: 1,
    transition: { type: "spring", damping: 100, stiffness: 400, staggerChildren: 0.2, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    y: -100, scale: 0,
    transition: { type: "spring", damping: 100, stiffness: 400, staggerChildren: 0.2, when: "afterChildren", staggerDirection: -1 },
  },
};

const swiper_variants = {
  initial: { opacity: 0, x: -100, scale: 0 },
  enter: {
    opacity: 1,
    x: 0, scale: 1,
    transition: { type: "spring", damping: 50, stiffness: 200, delay: 0.75 },
  },
  exit: {
    opacity: 0,
    x: -100, scale: 0,
    transition: { type: "spring", damping: 50, stiffness: 200, delay: 0.75 },
  },
};

/**
 * Component for "FullpageText" Slices.
 */
const FullpageText = ({ slice }: FullpageTextProps): JSX.Element => {
  const [app, setApp] = useAtom(loc)
  return (
    <>
      <motion.section
        id={`${slice.primary.anchor}`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        viewport={{ margin: "0px", amount: 0.375, once: false }}
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
        data-section-name={`${slice.primary.anchor}`}
        initial="initial"
        whileInView={"enter"}
        exit="exit"
        variants={section_variants}
      >
        <motion.div variants={text_variants} >
          {slice.items.map((item: any, index: number) => <PrismicRichText key={index} field={item.text} />)}
        </motion.div>
      </motion.section>
    </>
  );
};

export default FullpageText;

