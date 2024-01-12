
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { load, scrollEnabled } from "@/ts/atoms";
import { useAtom } from "jotai";
import WebGL from "@/gl/GL";
import Loader from "./Loader";


export default function Layout({ children, navbar, legals, t }: any) {
  const [loaded, setLoaded] = useAtom(load)

  const router = useRouter()
  const ref = useRef<any>(!null)
  const scrollContainer = useRef<any>(!null)
  const [scroll, setScroll] = useAtom(scrollEnabled)

  const variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.25, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
        duration: 0.5,
        delay: 0.25,
      },
    },
  };


  const handExitComplete = () => {
    window.scrollTo(0, 0);
    scrollContainer.current.scrollTo(0, 0)
    if (typeof window !== "undefined") {
      // Get the hash from the url
      const hashId = window.location.hash;

      if (hashId) {
        // Use the hash to find the first element with that id
        const element = document.querySelector(`${hashId}`);

        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          // console.log("scrollToHash");
        }
      }
      // else {
      //   window.scrollTo(0,0)
      //   // console.log("scrollTop")
      // }
    }
  };

  return (
    <>
      {/* <Navbar navbar={navbar} legals={legals} /> */}
      <AnimatePresence
        mode="wait"
        initial={true}>

        <motion.div
          ref={ref}
          key={router.route}
          variants={variants}
          initial="initial"
          animate={loaded && "enter"}
          exit="exit"
          className="main"
        >

          {children}

        </motion.div>

      </AnimatePresence>

      <WebGL eventSource={ref} />
      <Loader />

    </>
  );
}