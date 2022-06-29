import Image from "next/image";
import React from "react";
import Background from "../../public/images/home-bg.png";
import Phone from "../../public/images/phone-home.png";
import ServicesCard from "./ServicesCard";
import InfluencerCard from "./InfluencerCard";
import HomeImage1 from "../../public/images/HomeImage1.png";
import HomeImage2 from "../../public/images/HomeImage2.png";
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

const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col -z-10">
      <section className="flex justify-center items-center w-[1220px] mx-[5%] h-screen flex-row">
        <div className="z-10 mt-20 md:mt-0">
          <h1 className="z-10 text-[64px] md:text-[64px] xl:text-[96px] text-yellow leading-[100%] font-bold ">
            Looking <br></br> Beyond <br></br>the Vision
          </h1>
          <p className="text-text text-[20px] leading-[150%] font-semibold w-[400px] pt-5">
            With YouTube & Social Media administration, Content Creation, and
            Personalised Workflows, this all-in-one solution for Content
            Creators & Influencers will take your business to the next level
            while saving you time.
          </p>
        </div>
        <div className="hidden md:block h-auto md:w-[350px] bml:w-[430px] lg:w-[500px] xl:w-[600px] 2xl:w-[750px] mt-10">
          <Image
            className="z-10"
            layout="responsive"
            src={Phone}
            alt="phone with social media statson inlcuding: likes, followers and views."
          />
        </div>
        <Image
          className="fixed -z-0 no-select opacity-50 md:opacity-100"
          src={Background}
          alt="background"
          layout="fill"
        />
      </section>
      <section className="mt-[100px] max-w-[1220px] w-full">
        <h1 className="text-yellow text-[48px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold pb-[50px]">
          What do we do?
        </h1>
      </section>
      <div className="flex justify-center items-center w-full flex-col pb-[100px]">
        <ServicesCard />
      </div>
      <section className="mt-[100px] max-w-[1220px] w-full">
        <h1 className="text-yellow text-[48px] px-10 xl:px-0 text-start font-semibold pb-[50px]">
          Influencers working with us
        </h1>
      </section>
      <div className="flex justify-center items-center w-full flex-col pb-[30px]">
        <InfluencerCard />
      </div>
      <button className="text-black rounded-full bg-yellow h-[70px] w-[150px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
        <Link href="/meet-the-team">View More</Link>
      </button>
      <section className="flex justify-center items-center max-w-[1220px] w-[90%] xl:w-full h-screen flex-col mt-[200px] xl:mt-[100px]">
        <div className="flex justify-center items-center flex-wrap xl:flex-nowrap px-0 xl:px-5 flex-row">
          <div className="max-w-[570px] w-[90%] xl:w-[610px] pb-10 xl:pb-0 pr-0 xl:pr-10">
            <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold">
              Why we do it
            </h1>
            <p className="text-text">
              Our goal is to turn our client&apos;s dreams into reality. Each of
              our clients is unbelievably hardworking and dedicated, each of
              them deserves to do content creation for a living. That is what we
              are here to do, work relentlessly to turn those dreams into
              reality while achieving beyond the vision of any aspirations!{" "}
            </p>
          </div>
          <div className="w-[90%] xl:w-[550px] xl:h-auto">
            <Image
              src={HomeImage1}
              layout="responsive"
              alt="home image with productivity setup"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap-reverse xl:flex-nowrap px-0 xl:mx-5 flex-row pt-10">
          <div className="w-[90%] xl:w-[550px] xl:h-auto">
            <Image
              src={HomeImage2}
              layout="responsive"
              alt="home image with productivity setup"
            />
          </div>
          <div className="pl-0 xl:pl-10 max-w-[570px] w-[90%] pb-10 xl:pb-0 xl:w-[610px]">
            <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold">
              Why companies need to work with influencers
            </h1>
            <p className=" text-text">
              The reason working with influencers is more beneficial is because
              newspaper ads are between articles that the audience wants to
              read, and television commercials are between the content the
              viewer wants to see. What makes an ad with an influencer any
              better? The audience has chosen to pay attention and watch the
              advert in front of their eyes.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[150px] lg:mt-[100px] max-w-[1220px] w-full">
        <h1 className="text-yellow text-[48px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold pb-[50px]">
          Brands we&apos;ve working with
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
