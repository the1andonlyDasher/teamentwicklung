import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterLink`.
 */
export type FooterLinkProps = SliceComponentProps<Content.FooterLinkSlice>;

/**
 * Component for "FooterLink" Slices.
 */
const FooterLink = ({ slice }: FooterLinkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_link (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FooterLink;
