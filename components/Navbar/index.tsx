import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../../public/images/Logo.svg";
import Menu from "../../public/images/menu.png";
import CloseMenu from "../../public/images/close.png";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const router = useRouter();
  const variants = {
    open: { opacity: 1, display: "flex" },
    closed: { opacity: 0, transitionEnd: { display: "none" } },
  };
  const buttonVariants = {
    normal: { scale: 1 },
    click: { scale: 0.9 },
  };

  const liVariants = {
    closed: { y: -10, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  if (isOpen === true) {
    window.scrollTo(0, 0);
  }
  const links = {
    home: "/",
    about: "/about-us",
    team: "/meet-the-team",
    clients: "/our-talents",
    contact: "/contact",
  };
  return (
    <div>
      <nav className="relative z-[9999] w-full">
        <div
          className={`ml-[40px] xs:ml-[75px] mt-[50px] absolute z-50 cursor-pointer ${
            isOpen ? "fixed" : ""
          }`}
        >
          <Link href="/">
            <Image
              src={Logo}
              // layout="responsive"
              height={45}
              width={73}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="absolute list-none right-0 mr-[75px] pt-[38px] hidden bml:block">
          <li
            className={`inline-block p-5 text-[20px] nav-item text-white ${
              router.pathname !== links.home
                ? "text-text"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] nav-item text-white ${
              router.pathname !== links.about
                ? "text-text"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/about-us">About us</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] nav-item text-white ${
              router.pathname !== links.team
                ? "text-text"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/meet-the-team">Meet the team</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] nav-item text-white ${
              router.pathname !== links.clients
                ? "text-text"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/our-talents">Our talents</Link>
          </li>
          <li
            className={`inline-block p-5 text-[20px] nav-item text-white ${
              router.pathname !== links.contact
                ? "text-text"
                : "text-[#FFF46D] underline "
            }`}
          >
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={isOpen ? "normal" : "click"}
          variants={buttonVariants}
          className={` z-[60] cursor-pointer right-0 mr-[40px] xs:mr-[75px] top-[45px] block bml:hidden select-none ${
            isOpen ? "fixed" : "absolute"
          }`}
        >
          {!isOpen ? (
            <Image width={40} height={40} src={Menu} alt="menuicon" />
          ) : (
            <Image width={40} height={40} src={CloseMenu} alt="menuicon" />
          )}
        </motion.button>
        <div className={`bml:${isOpen ? "hidden" : "block"} `}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`z-50 fixed bg-background bml:bg-transparent opacity-100 bml:opacity-0 w-screen h-screen flex justify-center items-center overflow-hidden bml:hidden ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div
                className={`ml-[40px] xs:ml-[75px] mt-[50px]  absolute z-50 top-0 left-0`}
              >
                <Image
                  src={Logo}
                  // layout="responsive"
                  height={45}
                  width={73}
                  alt="logo"
                />
              </div>
              <ul className="flex justify-center items-center w-full h-full flex-col bml:hidden">
                <motion.li
                  variants={liVariants}
                  animate={isOpen ? "open" : "closed"}
                  exit="exit"
                  transition={{ delay: 0.1 }}
                  className={`text-center p-2 text-[20px] nav-item text-white ${
                    router.pathname !== links.home
                      ? "text-text"
                      : "text-[#FFF46D] underline "
                  }`}
                >
                  <Link href="/">Home</Link>
                </motion.li>
                <motion.li
                  variants={liVariants}
                  animate={isOpen ? "open" : "closed"}
                  exit="exit"
                  transition={{ delay: 0.2 }}
                  className={`text-center p-2 text-[20px] nav-item text-white ${
                    router.pathname !== links.about
                      ? "text-text"
                      : "text-[#FFF46D] underline "
                  }`}
                >
                  <Link href="/about-us">About us</Link>
                </motion.li>
                <motion.li
                  variants={liVariants}
                  animate={isOpen ? "open" : "closed"}
                  exit="exit"
                  transition={{ delay: 0.3 }}
                  className={`text-center p-2 text-[20px] nav-item text-white ${
                    router.pathname !== links.team
                      ? "text-text"
                      : "text-[#FFF46D] underline "
                  }`}
                >
                  <Link href="/meet-the-team">Meet the team</Link>
                </motion.li>
                <motion.li
                  variants={liVariants}
                  animate={isOpen ? "open" : "closed"}
                  exit="exit"
                  transition={{ delay: 0.4 }}
                  className={`text-center p-2 text-[20px] nav-item text-white ${
                    router.pathname !== links.clients
                      ? "text-text"
                      : "text-[#FFF46D] underline "
                  }`}
                >
                  <Link href="/our-talents">Our talents</Link>
                </motion.li>
                <motion.li
                  variants={liVariants}
                  animate={isOpen ? "open" : "closed"}
                  exit="exit"
                  transition={{ delay: 0.5 }}
                  className={`text-center p-2 text-[20px] nav-item text-white ${
                    router.pathname !== links.contact
                      ? "text-text"
                      : "text-[#FFF46D] underline "
                  }`}
                >
                  <Link href="/contact">Contact us</Link>
                </motion.li>
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
