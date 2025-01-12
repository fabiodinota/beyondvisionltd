import Image from "next/image";
import React from "react";
import Background from "../../public/images/home-bg.png";
import Phone from "../../public/images/phone-home.png";
import ServicesCard from "./ServicesCard";
import InfluencerCard from "./InfluencerCard";
import Link from "next/link";
import TextComponent from "./TextComponent";
import Brands from "./brands";

const HomePage = ({ data }) => {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col overflow-hidden">
      
      {/* Original part - Start */}
      <section className="flex justify-center items-center max-w-[1220px] w-full mx-10 h-screen flex-row">
        <div className=" px-10 md:pl-20 relative z-50">
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
            alt="phone with social media stats including: likes, followers, and views."
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

      <Link href="our-talents">
        <button className="text-black rounded-full  bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[170px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
          View More
        </button>
      </Link>

      <section className="lg:mt-[100px] max-w-[1220px] w-full">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="0"
          className="text-yellow text-[48px] mt-[150px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold pb-[50px]"
        >
          Brands we&apos;ve worked with
        </h1>
      </section>
      <Brands data={data} />

      <section className="flex justify-center items-center max-w-[1220px] w-[90%] xl:w-full  flex-col mt-[100px] xl:mt-[150px]">
        <TextComponent />
      </section>
      <section className=" lg:mt-[100px] max-w-[1220px] w-full">
      </section>
    </div>
  );
};

export default HomePage;
