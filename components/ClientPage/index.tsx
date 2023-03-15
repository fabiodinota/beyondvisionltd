import React from "react";
import Image from "next/image";
import Farris from "../../public/images/ClientsImages/Farris.png";
import Iszy from "../../public/images/ClientsImages/Iszy.png";
import Jordan from "../../public/images/ClientsImages/Jordan.png";
import Micheal from "../../public/images/ClientsImages/Micheal.png";
import Link from "next/link";
import Greats from "../../public/images/ClientsImages/Greats.png";
import Danielle from "../../public/images/ClientsImages/DanielleRounded.png";
import Barii from "../../public/images/ClientsImages/BariiRounded.png";
import Raielle from "../../public/images/ClientsImages/RaielleRounded.png";
import Rain from "../../public/images/ClientsImages/RainRounded.png";
import WS3 from "../../public/images/ClientsImages/WS3Rounded.png";
import Ajani from "../../public/images/ClientsImages/ajani.png";
import Austen from "../../public/images/ClientsImages/austen.png";
import Craig from "../../public/images/ClientsImages/craig.png";
import Kyle from "../../public/images/ClientsImages/kyle.png";
import Megan from "../../public/images/ClientsImages/megan.png";
import Zuba from "../../public/images/ClientsImages/zuba.png";
import Yonn from "../../public/images/ClientsImages/yonn.png";
import Ralph from "../../public/images/ClientsImages/ralph.png";


const ClientPage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full pb-20 flex-col">
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
          <div className="grid max-w-[1220px] w-full gap-x-20 px-10 grid-container place-content-center place-items-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] h-auto xs:w-[316px] pt-10 ">
                <Image layout="responsive" src={Iszy} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Iszy{" "}
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @Neknekmopotato
              </p>
                <Link href="our-talents/iszy">
                <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
            </div>
            <div
              data-aos="fade-up"
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
              
                <Link href="our-talents/farris">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
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
              
                <Link href="our-talents/jordan">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Micheal} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Michael Sampsill
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @Michael701s
              </p>
              
                <Link href="our-talents/michael">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  pb-20 flex-col hover:bg-background duration-300"
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
              
                <Link href="our-talents/greats">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] h-auto xs:w-[316px] pt-10 ">
                <Image layout="responsive" src={Danielle} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Danielle
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @_danielleburke_
              </p>
              <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="our-talents/danielle">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] h-auto xs:w-[316px] pt-10 ">
                <Image layout="responsive" src={Barii} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Barii
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @famousbarii
              </p>
              <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="our-talents/famousbarii">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] h-auto xs:w-[316px] pt-10 ">
                <Image layout="responsive" src={Raielle} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Raielle
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @itsraielle
              </p>
              <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="our-talents/raielle">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] h-auto xs:w-[316px] pt-10 ">
                <Image layout="responsive" src={Rain} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Rain Clements
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @rainclements
              </p>
              <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="our-talents/rain">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] h-auto xs:w-[316px] pt-10 ">
                <Image layout="responsive" src={WS3} alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Josh
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @imnotjs3
              </p>
              <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="our-talents/ws3">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] h-auto xs:w-[316px] pt-10 ">
                <Image layout="responsive" src={Yonn} className="rounded-full" alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Yonn
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @theyonndon
              </p>
              <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                <Link href="our-talents/yonn">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Kyle}  className="rounded-full"alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Kyle
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @_vcy
              </p>
              
                <Link href="our-talents/kyle">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Austen} className="rounded-full" alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Austen
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @austentv
              </p>
              
                <Link href="our-talents/austen">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Megan} className="rounded-full" alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Megan
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @megshopwood
              </p>
              
                <Link href="our-talents/megan">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Zuba}  className="rounded-full"alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Zuba
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @zubaax_
              </p>
              
                <Link href="our-talents/zuba">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Ajani} className="rounded-full" alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Ajani
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @ceo_richie
              </p>
              
                <Link href="our-talents/ajani">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Craig} className="rounded-full" alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Craig
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @craignotcreg
              </p>
              
                <Link href="our-talents/craig">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="rounded-3xl w-full h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
            >
              <div className="w-[250px] xs:w-[316px] pt-10 h-auto">
                <Image layout="responsive" src={Ralph} className="rounded-full" alt="image" />
              </div>
              <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                Ralph
              </h3>
              <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                @freeritzyralph
              </p>
              
                <Link href="our-talents/ralph">
                  <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                  View
              </button>
                </Link>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClientPage;
