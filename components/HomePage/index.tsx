import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Background from "../../public/images/home-bg.png";
import Phone from "../../public/images/phone-home.png";
import ServicesCard from "./ServicesCard";
import InfluencerCard from "./InfluencerCard";
import Link from "next/link";
import Cameo from "../../public/images/brand-images/Cameo.png";
import Infinix from "../../public/images/brand-images/Infinix.png";
import Kalamtime from "../../public/images/brand-images/kalamtime.png";
import Lovingtan from "../../public/images/brand-images/Lovingtan.png";
import Patreon from "../../public/images/brand-images/Patreon.png";
import Pietra from "../../public/images/brand-images/Pietra.png";
import Romwe from "../../public/images/brand-images/Romwe.png";
import Shein from "../../public/images/brand-images/Shein.png";
import SportsCenter from "../../public/images/brand-images/SportsCenter.png";
import Tide from "../../public/images/brand-images/Tide.png";
import TextComponent from "./TextComponent";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col overflow-hidden">
      <section className="flex justify-center items-center max-w-[1220px] w-full mx-10 h-screen flex-row">
        <div className=" mt-20 md:mt-0 px-10 md:pl-20 relative z-50">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-[40px] xxs:text-[54px] xl:text-[84px] text-yellow leading-[100%] font-bold "
          >
            Looking <br></br> Beyond <br></br>the Vision
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-text text-[15px] xs:text-[20px] leading-[150%] font-semibold max-w-[400px] w-90% lg:w-[400px] pt-5"
          >
            With YouTube &#38; Social Media administration, Content Creation,
            and Personalised Workflows, this all-in-one solution for Content
            Creators &#38; Influencers will take your business to the next level
            while saving you time.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className=" z-10 hidden md:block h-auto max-w-[750px] w-full mt-10"
        >
          <Image
            className="z-[10]"
            layout="responsive"
            src={Phone}
            alt="phone with social media statson inlcuding: likes, followers and views."
          />
        </div>

        <Image
          className="fixed  no-select opacity-50 md:opacity-100"
          src={Background}
          alt="background"
          layout="fill"
        />
      </section>

      <section className="mt-[100px] max-w-[1220px] w-full">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="0"
          className="text-yellow text-[48px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold pb-[50px]"
        >
          What do we do?
        </h1>
      </section>
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-delay="0"
        className="flex justify-center items-center w-full flex-col pb-[100px]"
      >
        <ServicesCard />
      </div>
      <section className="mt-[100px] max-w-[1220px] w-full">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="0"
          className="text-yellow text-[38px] xs:text-[48px] px-10 xl:px-0 text-start font-semibold pb-[50px]"
        >
          Influencers working with us
        </h1>
      </section>
      <div className="flex justify-center items-center w-full flex-col pb-[30px]">
        <InfluencerCard />
      </div>
      <button className="text-black rounded-full bg-yellow h-[70px] w-[150px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
        <Link href="/our-talents">View More</Link>
      </button>
      <section className="flex justify-center items-center max-w-[1220px] w-[90%] xl:w-full  flex-col mt-[100px] xl:mt-[150px]">
        <TextComponent />
      </section>
      <section className=" lg:mt-[100px] max-w-[1220px] w-full">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="0"
          className="text-yellow text-[48px] mt-[150px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold pb-[50px]"
        >
          Brands we&apos;ve worked with
        </h1>
      </section>
      <div className="max-w-[1220px] w-[90%] flex justify-center items-center flex-wrap pb-[100px] xl:pb-[50px]">
        <div className=" w-[100px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Tide} layout="responsive" alt="tide logo" />
        </div>
        <div className="w-[100px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Patreon} layout="responsive" alt="patreon logo" />
        </div>
        <div className="w-[100px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={SportsCenter} layout="responsive" alt="brand image" />
        </div>
        <div className="w-[100px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Kalamtime} layout="responsive" alt="brand image" />
        </div>
        <div className="w-[150px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Romwe} layout="responsive" alt="brand image" />
        </div>
        <div className="w-[150px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Infinix} layout="responsive" alt="brand image" />
        </div>
        <div className="w-[150px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Cameo} layout="responsive" alt="brand image" />
        </div>
        <div className="w-[150px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Lovingtan} layout="responsive" alt="brand image" />
        </div>
        <div className="w-[150px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Shein} layout="responsive" alt="brand image" />
        </div>
        <div className="w-[150px] h-auto aspect-auto mx-10 my-4 lg:my-0">
          <Image src={Pietra} layout="responsive" alt="brand image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
