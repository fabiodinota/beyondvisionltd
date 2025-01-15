import React from "react";
import Image from "next/image";
import Zail from "../../public/images/InfluencerCardAssets/Zail.png";
import Kengi from "../../public/images/InfluencerCardAssets/Kengi.png";
import BeamSquad from "../../public/images/InfluencerCardAssets/Subas.png";

const ServicesCard = () => {
  return (
    <>
      <div className=" rounded-3xl grid-container-home max-w-[1220px] w-[90%] overflow-hidden bg-backgroundaccent md:h-[1500px] 1xl:h-[500px] grid md:grid-cols-1 md:grid-rows-3 1xl:grid-cols-3 1xl:grid-rows-1 gap-10 p-10 place-items-center">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
        >
          <div className="w-[150px] xxs:w-[200px] xs:w-[316px] pt-10 h-auto">
            <Image layout="responsive" src={Kengi} alt="image" />
          </div>
          <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
            Kengi
          </h3>
          <p className="text-textaccent pb-10 text-center  1xl:w-full px-5 text-[13px]">
            5 Million Followers
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col bg-backgroundaccent hover:bg-background duration-300"
        >
          <div className="w-[150px] xxs:w-[200px] xs:w-[316px] pt-10 h-auto">
            <Image layout="responsive" src={Zail} alt="image" />
          </div>
          <h3 className="text-[30px] text-center pt-3 font-semibold text-yellow">
            Itszail
          </h3>
          <p className="text-textaccent pb-10 text-center 1xl:w-full px-5 text-[13px]">
            6 Million Followers
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="rounded-3xl w-full h-full flex justify-center items-center py-10 flex-col hover:bg-background duration-300"
        >
          <div className="w-[150px] xxs:w-[200px] xs:w-[316px] pt-10 h-auto">
            <Image layout="responsive" src={BeamSquad} alt="image" />
          </div>
          <h3 className="text-center text-[30px] pt-3 font-semibold text-yellow">
            Beam Squad
          </h3>
          <p className="text-textaccent pb-10 text-center 1xl:w-full px-5 text-[13px]">
            4 Million Followers
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
