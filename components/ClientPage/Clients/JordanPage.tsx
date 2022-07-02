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
              data-aos-duration="700"
              data-aos-delay="150"
              className="text-[36px] md:text-[42px] pb-5 text-yellow font-semibold"
            >
              Jordan Roe
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
              Jordan had first started making Tiktoks in early April of 2020. He
              had his first of many videos go viral in March of 2021 from there
              on he knew what he wanted to do regarding his career. Jordan kept
              pursuing his dream and he is now doing his passion, creating
              content for people to enjoy full time with his family.
            </p>
            <br />
            <br />
            <h3 className="text-[20px] pb-5 text-yellow font-semibold">
              Review
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
              &ldquo;Since I signed with Beyond Vision, they have brought me
              numerous great collaboration opportunities as well as show me a
              whole new light. They have always communicated with me, whether
              it&lsquo;s to see how I am doing or if they can help me out with
              anything at all. &rdquo;
            </p>
            <Socials
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
