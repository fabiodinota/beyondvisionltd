import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import NavBar from "./Navbar";
import { motion } from "framer-motion";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const variants = {
    initial: { opacity: 0, y: -20, scale: 0.995 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.995 },
  };

  return (
    <div className="bg-[#161616] -z-50">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="referrer" content="origin" />
        <link rel="shortcut icon" type="image/jpeg" href="/favicon.jpg" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Beyond Vision LTD is an influencer marketing and management agency based out of the United
          Kingdom, but not limited to working inside of the United Kingdom as the agency works with various influencers & companies of
          all different calibers all around the globe."
        />
      </Head>
      <header>
        <NavBar />
      </header>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
      >
        <main>{children}</main>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;