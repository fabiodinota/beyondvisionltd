import Image from "next/image";
import React from "react";
import Main from "../../../public/images/ClientsImages/Micheal.png";
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
              Michael Samspill
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
              Michael started TikTok in early 2020 out of his hometown Broken
              Arrow, OK. Originally Michael began to try and earn extra income
              for his daughters and have an outlet for hobbies and creativity.
              He wanted them to have the absolute best childhood imaginable, and
              for them to see that anyone can chase their dreams and raise
              amazing kids too. Since then he has proven it is always worth
              chasing your dreams as he has accumulated a following of over two
              million on TikTok with an amazing, large, and active fanbase.
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
              &ldquo;Before teaming up with Cory and his team at Beyond vision,
              I was massively underrating my abilities as a content creator and
              was unsure of what to charge. To show how grateful I am for Beyond
              vision I use #beyondvision on all of my posts. They have not only
              helped me gain confidence as a creator but also advised me on what
              I&apos;m worth and what should be expected as a creator.
              Don&apos;t sell yourself short, you&apos;re worth more than you
              think! &rdquo;
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
