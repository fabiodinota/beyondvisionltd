import Image from "next/image";
import React from "react";
import Main from "../../../public/images/ClientsImages/megan.png";
import TikTok from "../../../public/images/tiktok.png";
import Instagram from "../../../public/images/Instagram.png";

const MeganPage = () => {
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
              className="rounded-full"

            />
          </div>
          <div className="pl-0 xl:pl-10 max-w-[900px] w-[90%] pb-10 xl:pb-0 xl:w-[610px]">
            <h1
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
              className="text-[36px] md:text-[42px] pb-5 text-yellow font-semibold"
            >
              Megan
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
Megan began her content creation endeavors in 2020. She was born in Blackpool in the United Kingdom and has lived there ever since. Her content consists of 5-10 second videos showing glimpses into her day-to-day lifestyle. Megan began posting content just as a thing to pass by time, and since then it has become one of her treasured hobbies which she loves to do.
            </p>
            <br />
            <br />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="750"
              className="flex flex-row justify-start items-center pt-2"
            >
              <div className="pr-2 pt-2">
                <a href="https://www.instagram.com/meganlhopwood/">
                  <Image src={Instagram} alt="social" />
                </a>
              </div>
              <div className="px-2 w-[48px] origin-top p-0 h-auto">
                <a
                  className="w-full h-full"
                  href="https://www.tiktok.com/@megshopwood?lang=en"
                >
                  <Image layout="responsive" src={TikTok} alt="social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeganPage;
