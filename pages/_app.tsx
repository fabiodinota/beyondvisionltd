import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AnimatePresence>
        <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
