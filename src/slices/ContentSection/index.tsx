import { load, loc } from "@/ts/atoms";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Props for `ContentSection`.
 */
export type ContentSectionProps =
  SliceComponentProps<Content.ContentSectionSlice>;

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
    transition: { type: "spring", damping: 50, stiffness: 200 },
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

interface sectionProps {
  sectionName?: string;
  ref?: any;
  id?: string;
  header?: string | number;
  subheader?: string | number;
  text?: string;
  children?: JSX.Element;
}

interface sProps {
  props: sectionProps;
}





/**
 * Component for "ContentSection" Slices.
 */
const ContentSection = ({ slice }: ContentSectionProps, props: sectionProps): JSX.Element => {
  console.log(slice.primary.image_lr)
  const [loaded, setLoaded] = useAtom(load)
  const [app, setApp] = useAtom(loc)
  const controls = useAnimation();
  const [width, setWidth] = useState("")
  const [bg, setBg] = useState("")
  const [slim, setSlim] = useState("")
  const { scrollYProgress } = useScroll()
  const Y = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    setWidth(slice.primary.fullWidth ? "fullWidth" : "")
    setBg(`${slice.primary.bgColor}`)
    setSlim(slice.primary.background ? "lr__wrapper-slim" : "lr__wrapper")
  }, []);

  return (<>
    {slice.primary.image_lr === "rechts" ?
      <motion.section
        className={slice.primary.background === true ? "section__bg" : ""}
        id={`${slice.primary.anchor}`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        viewport={{ margin: "0px", amount: 0.375, once: true }}
        onViewportEnter={(entry) => {
          controls.start("enter")
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
        animate={controls}
        exit="exit"
        ref={props.ref}
        variants={section_variants}
      >

        <motion.div variants={wrapper_variants} className={slim + " " + width + " " + bg}>
          <motion.div style={{ x: Y }} className="lr__wrapper-bgFont" variants={bgText_variants}>{slice.primary.section_header}</motion.div>
          <motion.div variants={header_variants} className="left-wrapper">
            <motion.h3 variants={text_variants}>{slice.primary.section_header}</motion.h3>
            <motion.h4 variants={text_variants}>{slice.primary.section_subheader}</motion.h4>
            <motion.div variants={text_variants} >
              <PrismicRichText field={slice.primary.section_text} />
            </motion.div>
          </motion.div>
          <motion.div className="right-wrapper" variants={swiper_variants}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="alt"
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              rewind={true}
            >
              {slice.items.map((item: any, index: number) =>

                <SwiperSlide key={index}>
                  <div className="inner">
                    <div className="bg" style={{ backgroundImage: `url("${item.section_image.url}")` }} />
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </motion.div>
        </motion.div>
      </motion.section>
      :
      <motion.section
        id={`${slice.primary.anchor}`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        viewport={{ margin: "100px", amount: 0.375, once: true }}
        onViewportEnter={(entry) => {
          controls.start("enter")
          entry?.isIntersecting
            ? setApp(
              `${entry.target?.getAttribute(
                "data-section-name"
              )}`
            )
            : null;
        }}
        data-section-name={props.sectionName}
        initial="initial"
        animate={controls}
        exit="exit"
        ref={props.ref}
        variants={section_variants}
      >
        <motion.div variants={wrapper_variants} className={slim + " " + width + " " + bg}
        >
          <motion.div className="lr__wrapper-bgFont" variants={bgText_variants}>{slice.primary.section_header}</motion.div>
          <motion.div variants={swiper_variants} className="left-wrapper">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="alt"
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              rewind={true}
            >
              {slice.items.map((item: any, index: number) =>

                <SwiperSlide key={index}>
                  <div className="inner">
                    <div className="bg" style={{ backgroundImage: `url("${item.section_image.url}")` }} />
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </motion.div>
          <motion.div variants={header_variants} className={slice.primary.background === true ? "right-wrapper text-wrapper" : "right-wrapper"}>
            <motion.h3 variants={text_variants}>{slice.primary.section_header}</motion.h3>
            <motion.h4 variants={text_variants}>{slice.primary.section_subheader}</motion.h4>
            <motion.div variants={text_variants} >
              <PrismicRichText field={slice.primary.section_text} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    }
  </>
  );
};

export default ContentSection;
