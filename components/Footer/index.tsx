import Image from "next/image";
import React from "react";
import Instagram from "../../public/images/Instagram.png";
import LinkedIn from "../../public/images/LinkedIn.png";
import Twitter from "../../public/images/Twitter.png";

const Footer = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center flex-col pb-[60px]">
        <h1 className="text-yellow text-[24px] text-center font-semibold">
          Looking Beyond The Vision
        </h1>
        <div className="flex flex-row justify-center items-center pt-2">
          <div className="px-2">
            <a href="https://www.instagram.com/beyondvisionltd/">
              <Image src={Instagram} alt="social" />
            </a>
          </div>
          <div className="px-2">
            <a href="https://www.linkedin.com/company/beyond-vision-ltd/">
              <Image src={LinkedIn} alt="social" />
            </a>
          </div>
        </div>
        <p className="text-yellow opacity-50 pt-1  font-regular text-[16px]">
          © 2023 by Beyond Vision
        </p>
      </div>
    </>
  );
};

export default Footer;
