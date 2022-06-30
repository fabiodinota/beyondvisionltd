import React from "react";
import Image from "next/image";
import Jordan from "../../public/images/InfluencerCardAssets/Jordan.png";
import Micheal from "../../public/images/InfluencerCardAssets/Micheal.png";
import Subas from "../../public/images/InfluencerCardAssets/Subas.png";

const ServicesCard = () => {
  return (
    <>
      <div className=" rounded-3xl grid-container max-w-[1220px] w-[90%] overflow-hidden bg-backgroundaccent md:h-[1500px] 1xl:h-[500px] grid md:grid-cols-1 md:grid-rows-3 1xl:grid-cols-3 1xl:grid-rows-1 gap-10 p-10 place-items-center">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
        >
          <div className="w-[200px] xs:w-[316px] pt-10 h-auto">
            <Image layout="responsive" src={Jordan} alt="image" />
          </div>
          <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
            thejordanroe21
          </h3>
          <p className="text-textaccent pb-10 text-center  1xl:w-full px-5 text-[13px]">
            3 Million Followers
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
        >
          <div className="w-[200px] xs:w-[316px] pt-10 h-auto">
            <Image layout="responsive" src={Subas} alt="image" />
          </div>
          <h3 className="text-[30px] text-center pt-3 font-semibold text-yellow">
            Subas Shrestha
          </h3>
          <p className="text-textaccent pb-10 text-center 1xl:w-full px-5 text-[13px]">
            2.1 Million Followers
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="rounded-3xl w-full h-full flex justify-center items-center py-10 flex-col hover:bg-background duration-300"
        >
          <div className="w-[200px] xs:w-[316px] pt-10 h-auto">
            <Image layout="responsive" src={Micheal} alt="image" />
          </div>
          <h3 className="text-center text-[30px] pt-3 font-semibold text-yellow">
            Michael Sampsill
          </h3>
          <p className="text-textaccent pb-10 text-center 1xl:w-full px-5 text-[13px]">
            1.4 Million Followers
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
