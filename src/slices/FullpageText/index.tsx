import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      {slice.items.map((item: any, index: number) => <PrismicRichText key={index} field={item.text} />)}

    </section>
  );
};

export default FullpageText;
