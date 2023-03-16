import {
  animate,
  motion,
  useAnimation,
  useCycle,
  useSpring,
  useTime,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
/* import Image1 from "../../public/images/brands/cameo.png";
import Image9 from "../../public/images/brands/gameshow.png";
import Image3 from "../../public/images/brands/halara.png"; //
import Image16 from "../../public/images/brands/holoash.png"; // 
import Image15 from "../../public/images/brands/infinix.png"; // 
import Image11 from "../../public/images/brands/lifeboard.png"; //
import Image8 from "../../public/images/brands/logitech.png";
import Image17 from "../../public/images/brands/nordvpn.png";
import Image6 from "../../public/images/brands/obs.png"; //
import Image10 from "../../public/images/brands/pretty.png";
import Image5 from "../../public/images/brands/prime.png";
import Image12 from "../../public/images/brands/romwe.png";
import Image4 from "../../public/images/brands/rumble.png"; //
import Image14 from "../../public/images/brands/shein.png"; //
import Image13 from "../../public/images/brands/snapchat.png"; //
import Image18 from "../../public/images/brands/temu.png"; //
import Image7 from "../../public/images/brands/tide.png";
import Image2 from "../../public/images/brands/tiktok.png";
import Image19 from "../../public/images/brands/wondershare.png"; // 
import Image20 from "../../public/images/brands/gfuel.png"; // */

const Brands = ({ data }) => {
  /* const variants = {
    initial: {
      x: "0%",
    },
    animate: {
      x: "-78%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      },
    },
    exit: {
      x: "0%",
    },
  }; */

  return (
    <>
      {/* <pre className="text-[#fff]">{JSON.stringify(data, null, 2)}</pre>  */}

      <div className="h-[200px] container relative w-full max-w-[1220px] mb-10">
        <div className="brand-wheel overflow-clip scrollbar flex-shrink-0">
         {/*  <motion.div
            variants={variants}
            initial="initial"
            animate={"animate"}
            className={`brand-slide flex-shrink-0 flex flex-row w-max gap-20`}
          > */}
          <div className="brand-slide flex-shrink-0 flex flex-row w-max gap-20">
            {data.results.map((item) => {
              return (
                <div
                  key={item.id}
                  className="logo-div flex flex-col items-center"
                >
                  <Image
                    loading="eager"
                    quality={100}
                    className="logo-div"
                    src={item.properties.logo.files[0].external.url}
                    alt="brand"
                    width={169}
                    height={169}
                    objectFit="contain"
                  />
                  {item.properties.name.title[0] && (
                    <p className="text-[#fff] font-semibold">
                      {item.properties.name.title[0].plain_text}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="brand-slide delay flex-shrink-0 flex flex-row w-max gap-20">
            {data.results.map((item) => {
              return (
                <div
                  key={item.id}
                  className="logo-div flex flex-col items-center"
                >
                  <Image
                    loading="eager"
                    quality={100}
                    className="logo-div"
                    src={item.properties.logo.files[0].external.url}
                    alt="brand"
                    width={169}
                    height={169}
                    objectFit="contain"
                  />
                  {item.properties.name.title[0] && (
                    <p className="text-[#fff] font-semibold">
                      {item.properties.name.title[0].plain_text}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
