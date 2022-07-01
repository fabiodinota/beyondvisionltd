import React from "react";
import Image from "next/image";
import Farris from "../../public/images/ClientsImages/Farris.png";
import Iszy from "../../public/images/ClientsImages/Iszy.png";
import Jordan from "../../public/images/ClientsImages/Jordan.png";
import Lexi from "../../public/images/ClientsImages/Lexi.png";
import Micheal from "../../public/images/ClientsImages/Micheal.png";
import OG from "../../public/images/ClientsImages/OG.png";
import Subas from "../../public/images/ClientsImages/Subas.png";
import Link from "next/link";
import Mo from "../../public/images/ClientsImages/Mo.png";
import Greats from "../../public/images/ClientsImages/Greats.png";

const ClientPage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full pb-10 flex-col">
        <section className="mt-[150px] max-w-[1220px] w-full">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="0"
            className="text-yellow text-[48px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold"
          >
            Talent Roster
          </h1>
          {/* <div className="flex justify-center items-center max-w-[1220px] w-full"> */}
          <div className="grid grid-cols-3 max-w-[1220px] w-full gap-x-20 px-10 grid-container place-content-center place-items-center">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Iszy} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Iszy{" "}
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @Neknekmopotato
              </p>
              <button className="text-black rounded-full bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="150"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Subas} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Subas Shrestha
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @subasx
              </p>
              <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Farris} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                FarrisFilms
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @farrisfilms
              </p>
              <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
            <div className="flex justify-center items-center w-full flex-col">
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="250"
                className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
              >
                <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                  <Image layout="responsive" src={OG} alt="image" />
                </div>
                <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                  OG
                </h3>
                <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                  @OgJoseph
                </p>
                <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  <Link href="/about-us">View</Link>
                </button>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Lexi} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Lexi
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @Latelywithlex
              </p>
              <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="350"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Jordan} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                JordanRoe21
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @Thejordanroe21
              </p>
              <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Micheal} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Michael Sampsill
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @Micheal701s
              </p>
              <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="450"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] rounded-full xs:w-[316px] pt-10 h-auto">
                <Image
                  className="rounded-full"
                  layout="responsive"
                  src={Mo}
                  alt="image"
                />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Mo
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @_m0_g
              </p>
              <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image
                  className="rounded-full"
                  layout="responsive"
                  src={Greats}
                  alt="image"
                />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Dai & Liyah
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @Thegreats_
              </p>
              <button className="text-black rounded-full  bg-yellow h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="/about-us">View</Link>
              </button>
            </div>
          </div>
          {/*           </div>
           */}{" "}
        </section>
      </div>
    </>
  );
};

export default ClientPage;
