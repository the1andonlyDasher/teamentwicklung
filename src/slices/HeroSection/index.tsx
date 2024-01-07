import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Hero } from "@/components/hero";
import Link from "next/link";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;



/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero
        headerPartOne={`${slice.primary.hero_header}`}
        subHeader={slice.primary.hero_subheader}
        text={slice.primary.hero_text}
      ><div className="button__wrapper no-flex">
          {slice.items.map((item: any, index: number) =>
            <Link key={index} className={`${item.hero_buttonStyle}` === "Call to Action" ? "btn__primary" : "btn__outline"} href={"#" + item.hero_anchor.toString().toLowerCase()}>{`${item.hero_ButtonText}`}</Link>)}
        </div>
      </Hero>
    </section>
  );
};

export default HeroSection;
