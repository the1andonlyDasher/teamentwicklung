import {
  faArrowDown91,
  faArrowDownZA,
  faArrowRightRotate,
  faArrowTrendUp,
  faArrowTurnUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion, useAnimation } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const modalVariants =
{
  initial: { scale: 0 },
  enter: { scale: 1 },
  exit: { scale: 0 },
}

/**
 * Props for `Modal`.
 */
export type ModalProps = SliceComponentProps<Content.ModalSlice>;

/**
 * Component for "Modal" Slices.
 */
const Modal = ({ slice }: ModalProps): JSX.Element => {
  const controls = useAnimation()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    controls.start(open ? "exit" : "enter")
  }, [open]);
  return (
    <motion.div
      initial="initial"
      variants={modalVariants}
      animate={controls}
      className="modal"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.title?.toString().toLowerCase()}
    >
      <motion.div className="modal__wrapper">
        <motion.header>
          <motion.h3>{slice.primary.title}</motion.h3>
        </motion.header>
        <motion.div className="modal__text-wrapper">
          <PrismicRichText field={slice.primary.text} />
        </motion.div>
        <motion.button onClick={() => { setOpen(!open) }} type="button" className="btn__outline">
          Schliessen <FontAwesomeIcon icon={faClose} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
