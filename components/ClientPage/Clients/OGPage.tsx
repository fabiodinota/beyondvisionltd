import Image from "next/image";
import React from "react";
import Main from "../../../public/images/ClientsImages/OG.png";
import TikTok from "../../../public/images/tiktok.png";
import Instagram from "../../../public/images/Instagram.png";

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
              OG
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
              Joseph lives in Canada and has done all his life. He started
              Tiktok for fun in 2019 to make videos with his friends, and since
              then he began to fall in love with creating content. Joseph got
              his first viral video in 2019, and from then on his passion for
              creating content has brewed immensely. Joseph&apos;s hobbies
              include playing basketball, video games, taking pictures
              (modeling), watching movies/tv shows, and of course, creating
              content for his audience to enjoy.
            </p>
            <br />
            <br />
            <h3
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="450"
              className="text-[20px] pb-5 text-yellow font-semibold"
            >
              Review
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="600"
              className=" text-text font-semibold"
            >
              &ldquo;Being a part of beyond vision management has truly been a
              great experience. They have always shown me so much support and
              offered great advice on how to help myself earn the best possible
              opportunities with different brands and so much more! &rdquo;
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="750"
              className="flex flex-row justify-start items-center pt-2"
            >
              <div className="pr-2 pt-2">
                <a href="https://instagram.com/ogjjoseph?igshid=YmMyMTA2M2Y=">
                  <Image src={Instagram} alt="social" />
                </a>
              </div>
              <div className="px-2 w-[48px] origin-top p-0 h-auto">
                <a
                  className="w-full h-full"
                  href="https://vm.tiktok.com/ZMN6jdqrw/"
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

export default IszyPage;
