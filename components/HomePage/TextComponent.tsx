import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeImage1 from "../../public/images/HomeImage1.png";
import HomeImage2 from "../../public/images/HomeImage2.png";

const TextComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap xl:flex-nowrap px-0 xl:px-5 flex-row">
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          className="max-w-[900px] w-[90%] xl:w-[610px] pb-10 xl:pb-0 pr-0 xl:pr-10"
        >
          <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold">
            Why we do it
          </h1>
          <p className="text-text">
            Our goal is to transform our client&apos;s dreams into reality. 
            Our clients are unbelievably hardworking and dedicated, and each
            deserves to do content creation for a living. That is what we are
            here to do, work relentlessly to transform those dreams into reality
            while achieving beyond the vision of any aspirations!
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="600"
          className="w-[90%] xl:w-[550px] xl:h-auto"
        >
          <Image
            src={HomeImage1}
            layout="responsive"
            alt="home image with productivity setup"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap-reverse xl:flex-nowrap px-0 xl:mx-5 flex-row pt-10">
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          className="w-[90%] xl:w-[550px] xl:h-auto"
        >
          <Image
            src={HomeImage2}
            layout="responsive"
            alt="home image with productivity setup"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="600"
          className="pl-0 xl:pl-10 max-w-[900px] w-[90%] pb-10 xl:pb-0 xl:w-[610px]"
        >
          <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold">
            Why brands need to work with influencers
          </h1>
          <p className=" text-text">
          The reason working with influencers is much more beneficial is because newspaper 
          ads are between articles that the audience wants to read, and television commercials 
          are in between the content the viewer wants to see. What makes an ad with an influencer 
          any better? The audience has chosen to pay attention and watch the advert 
          in front of their eyes since they enjoy the creator's content, they are hooked by the plot, 
          and they simply feel a connection with the creator.
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <Link href="about-us">
          <button className="text-black rounded-full  bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[220px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
            View More About Us
          </button>
        </Link>
      </div>
    </>
  );
};

export default TextComponent;
