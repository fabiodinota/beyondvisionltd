import Image from "next/image";
import React from "react";
import Main from "../../../public/images/ClientsImages/Jordan.png";
import Socials from "./Socials";

const IszyPage = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <section className="flex justify-center items-center max-w-[1220px] w-[90%] xl:w-full  flex-col mt-[100px] xl:mt-[150px]">
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
              data-aos-duration="1000"
              data-aos-delay="150"
              className="text-[36px] md:text-[42px] pb-5 text-yellow font-semibold"
            >
              Subas Shrestha
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
              Subas began creating content in early 2019 with his breathtaking
              cooking and kitchen skill-styled videos. It wasn&apos;t long
              before Subas gained a large and loyal fanbase that keeps growing
              in numbers each passing day. Subas currently lives in Nepal and
              has always had a passion for cooking even excluding his social
              media presence Subas has always been in and around the industry in
              some way. He has grown ties with some of the largest
              kitchen-related brands around the globe.
            </p>
            <br />
            <br />
            <h3  data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="450" className="text-[20px] pb-5 text-yellow font-semibold">
              Review
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="450"
              className=" text-text font-semibold"
            >
              &ldquo;Beyond Vision management has been amazing so far. To sum it
              up, I signed to the agency non-exclusively for a planned three
              months, then about a month in I loved it so much I decided to
              upgrade my career and be under beyond vision management
              exclusively. I love beyond vision because of how far they go to
              make sure you are happy, as well as all the opportunities they
              bring in for me at prices I wouldn&apos;t believe to be realistic
              previously, I&apos;m looking forward to the future! &rdquo;
            </p>
            <Socials
             data-aos="fade-up"
             data-aos-duration="700"
             data-aos-delay="300"
              instagram="https://instagram.com/farrisfilms?igshid=YmMyMTA2M2Y="
              tiktok="https://vm.tiktok.com/ZMN6j2bnG/"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IszyPage;
