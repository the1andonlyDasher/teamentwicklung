import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FullpageText`.
 */
export type FullpageTextProps = SliceComponentProps<Content.FullpageTextSlice>;

/**
 * Component for "FullpageText" Slices.
 */
const FullpageText = ({ slice }: FullpageTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fullpage_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FullpageText;
