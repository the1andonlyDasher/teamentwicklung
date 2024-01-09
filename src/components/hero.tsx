import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { Url } from "url";
import { PrismicRichText } from "@prismicio/react";
import { loc } from "@/ts/atoms";
import { useAtom } from "jotai";


const section_variants = {
  initial: {
    transition: { staggerChildren: 0.2 },
  },
  enter: {
    transition: { staggerChildren: 0.2, },
  },
  exit: {
    transition: { staggerChildren: 0.2 },
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
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring", damping: 50, stiffness: 100, restDelta: 0.01,
    },
  },
  exit: {
    x: 50,
    scale: 0,
    opacity: 0,
    transition: {
      type: "spring", damping: 50, stiffness: 100, restDelta: 0.01,
    },
  },
};

interface heroProps {
  headerPartOne?: string | number | undefined,
  headerPartTwo?: string | number | undefined,
  subHeader?: any,
  text?: any,
  children?: ReactNode;
  childrenRight?: ReactNode;
}

export const Hero = (props: heroProps) => {

  const [app, setApp] = useAtom(loc)
  return (
    <>
      <motion.div className="lr__wrapper">
        <motion.div
          className="left-wrapper"
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
          {props.headerPartOne ? <motion.h1 className="sectionHeader" variants={header_variants}>{props.headerPartOne}
            <br /> <strong>{props.headerPartTwo ? props.headerPartTwo : null}</strong>
          </motion.h1> : null}

          <motion.h2 variants={header_variants}>{props.subHeader}</motion.h2>
          <motion.div variants={text_variants}>
            <PrismicRichText field={props.text} />
          </motion.div>
          {props.children}
        </motion.div>
        <motion.div className="right-wrapper">
          {props.childrenRight}
        </motion.div>
      </motion.div>
    </>
  );
};


