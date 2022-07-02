import Image from "next/image";
import React from "react";
import Main from "../../../public/images/ClientsImages/Iszy.png";
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
              Iszy
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
              Iszy is currently located in the Philippines and has lived there
              all her life. She loves creating funny and unique content for
              people to enjoy She has had many videos hit millions of views,
              this is because of her passion for creating funny content for her
              audience by posting as many as 2 videos a day every day. Iszy
              began creating content at the beginning of 2021, ever since then
              she has grown an immaculate and loyal fanbase which is rapidly
              growing each passing day.
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
              &ldquo;Before I was under Beyond vision management, I was very
              unsure about what to ask for regarding brand deals, which led me
              to severely undercharge a few times, which I&lsquo;ve now figured
              out. The team at beyond vision not only showed me my worth but
              supported me every step along the way in every way possible they
              are always there offering a helping hand even with the smallest
              things. I&lsquo;m very grateful to the team and I look forward to
              the future with the Beyond vision guys!&rdquo; day.
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
