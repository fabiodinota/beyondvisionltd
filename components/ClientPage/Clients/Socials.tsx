import React from "react";
import Instagram from "../../../public/images/Instagram.png";
import Image from "next/image";
import TikTok from "../../../public/images/tiktok.png";

const Socials = (tiktok: any, instagram: any) => {
  return (
    <div className="flex flex-row justify-start items-center pt-2">
      <div className="pr-2 pt-2">
        <a href={instagram}>
          <Image src={Instagram} alt="social" />
        </a>
      </div>
      <div className="px-2 w-[48px] origin-top p-0 h-auto">
        <a className="w-full h-full" href={tiktok}>
          <Image layout="responsive" src={TikTok} alt="social" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
