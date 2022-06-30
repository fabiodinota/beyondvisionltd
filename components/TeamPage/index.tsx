import Image from "next/image";
import React from "react";
import Main from "../../public/images/TeamPageMain.png";

const TeamPage = () => {
  return (
    <div className="flex justify-center items-center w-full">
       <div className="flex justify-center items-center flex-wrap-reverse mt-8 md:mt-14 xl:mt-0 xl:flex-nowrap px-0 xl:mx-5 pb-[100px] flex-row pt-10">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="0"
          className="w-[90%] xl:w-[550px] xl:h-auto"
        >
          <Image
            src={Main}
            layout="responsive"
            alt="home image with productivity setup"
          />
        </div>
        <div className="pl-0 xl:pl-10 max-w-[900px] w-[90%] pb-10 xl:pb-0 xl:w-[610px]">
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
            className="text-[36px] md:text-[42px] pb-5 text-yellow font-semibold"
          >
            Marketing & Management Agency{" "}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            className=" text-text font-semibold"
          >
            Beyond Vision LTD is an influencer marketing and management agency
            based out of the United Kingdom, but not limited to working inside
            of the United Kingdom as the agency works with various influencers
            &#x0026; companies of all different calibers all around the globe.
            <br />
            <br />
            Beyond Vision was founded in early March of 2022 by the current CEO,
            Cory Hodkinson, since its launch in March of 2022, Beyond Vision has
            accumulated an influencer clientele roster of over 400 million in
            terms of a combined following while rapidly expanding each passing
            day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
