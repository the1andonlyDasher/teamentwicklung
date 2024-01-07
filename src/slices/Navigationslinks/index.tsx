import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Link`.
 */
export type LinkProps = SliceComponentProps<Content.LinkSlice>;

/**
 * Component for "Link" Slices.
 */
const Link = ({ slice }: LinkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for link (variation: {slice.variation}) Slices
    </section>
  );
};

export default Link;
