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
    initial: { opacity: 0, y: -20, scale: 0.995, blur: 0 },
    animate: { opacity: 1, y: 0, scale: 1, blur: 100 },
    exit: { opacity: 0, y: 20, scale: 1.005, blur: 0 },
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
        <meta content="#FFF46D" data-react-helmet="true" name="theme-color" />
        <meta property="og:url" content="https://www.beyondvisionltd.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beyond Vision LTD" />
        <meta
          property="og:description"
          content="Beyond Vision LTD is an influencer marketing and management agency based out of the United
         Kingdom, but not limited to working inside of the United Kingdom as the agency works with various influencers & companies of
          all different calibers all around the globe."
        />
        <meta property="og:image" content="https://i.imgur.com/Gd1N9JI.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.beyondvisionltd.org" />
        <meta
          property="twitter:url"
          content="https://www.beyondvisionltd.org"
        />
        <meta name="twitter:title" content="Beyond Vision LTD" />
        <meta
          name="twitter:description"
          content="Beyond Vision LTD is an influencer marketing and management agency based out of the United
         Kingdom, but not limited to working inside of the United Kingdom as the agency works with various influencers & companies of
          all different calibers all around the globe."
        />
        <meta name="twitter:image" content="https://i.imgur.com/Gd1N9JI.jpg" />
      </Head>
      <header>
        <NavBar />
      </header>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <main>{children}</main>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
