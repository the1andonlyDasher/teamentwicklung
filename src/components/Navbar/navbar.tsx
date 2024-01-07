import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { NavItem } from "@/components/Navbar/NavItemDesktop";
import Navigation from "@/components/Navbar/Navigation";
import MobileNav from "@/components/Navbar/MobileNav";
import { NavItem as Mnav } from "@/components/Navbar/NavItemMobile";
import NavbarToggle from "./NavbarToggle";
import { PrismicImage } from "@prismicio/react";

const Navbar = ({ logo, alt, navbar, legals }: any) => {
  const navbarMain = useRef<any>(!null);
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100)
        ) {
          return true;
        }
        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }
        return isShrunk;
      });
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const variants = {
    closed: {},
    open: {},
  };

  const image_variants = {
    initial: { scale: 0, opacity: 0 },
    enter: { scale: [0, 1.2, 1], opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const hrefs = ["/", "/portfolio", "/moreinfo", "/contact"];
  const legal_hrefs = ["/datapolicy", "/imprint"];

  return (
    <motion.nav
      // className={isShrunk ? "navbar shrunk" : "navbar"}
      className={"navbar"}
      variants={variants}
      ref={navbarMain}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="navbar__container" aria-haspopup="menu">
        <motion.a
          aria-label="Home"
          aria-current="page"
          className="navbar__logo active"
          href="/"
          variants={image_variants}
          initial="hidden"
          animate="enter"
          exit="exit"
        >

          <PrismicImage
            field={navbar.data.logo}
            width={navbar.data.logo.dimensions.width}
            height={navbar.data.logo.dimensions.height}


          />
        </motion.a>
        <Navigation>
          {navbar.data.slices.map((i: any, index: number) =>
            i.items.map((item: any, index: number) => (
              <NavItem
                clickLink={null}
                key={item.linkName + index}
                name={item.linkName}
                href={"#" + item.anchor.toString().toLowerCase()}
              />
            ))
          )}
        </Navigation>
        <MobileNav>
          {navbar.data.slices.map((i: any, index: number) =>
            i.items.map((item: any, index: number) => (
              <NavItem
                clickLink={null}
                key={item.linkName + index}
                name={item.linkName}
                href={"#" + item.anchor.toString().toLowerCase()}
              />
            ))
          )}
        </MobileNav>
        <NavbarToggle toggle={() => toggleOpen()} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
