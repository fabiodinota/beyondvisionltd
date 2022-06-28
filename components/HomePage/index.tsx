import Image from "next/image";
import React from "react";
import Background from "../../public/images/home-bg.png";
import Phone from "../../public/images/phone-home.png";
import ServicesCard from "./ServicesCard";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <section className="flex justify-center items-center w-[1220px] mx-[5%] h-screen flex-row">
        <div className="z-10 mt-20 md:mt-0">
          <h1 className="z-10 text-[96px] md:text-[64px] xl:text-[96px] text-yellow leading-[100%] font-bold ">Looking <br></br> Beyond <br></br>the Vision</h1>
          <p className="text-text text-[20px] leading-[150%] font-semibold w-[400px] pt-5">With YouTube & Social Media administration, Content Creation, and Personalised Workflows, this all-in-one solution for Content Creators & Influencers will take your business to the next level while saving you time.</p>
        </div>
        <div className="hidden md:block h-auto md:w-[350px] bml:w-[430px] lg:w-[500px] xl:w-[600px] 2xl:w-[750px] mt-10">
          <Image className="z-20" layout="responsive" src={Phone} alt="phone with social media statson inlcuding: likes, followers and views." />
        </div>
        <Image className="fixed -z-0 opacity-50 md:opacity-100" src={Background} alt="background" layout="fill" />
      </section>
      <section className="flex justify-center items-center w-full h-screen flex-col">
        <ServicesCard />
      </section>
    </div>
  );
};

export default HomePage;
