import Image from "next/image";
import React from "react";
import Main from "../../../public/images/ClientsImages/Greats.png";
import TikTok from "../../../public/images/tiktok.png";
import Instagram from "../../../public/images/Instagram.png";

const GreatsPage = () => {
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
              Dai & Liyah
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className=" text-text font-semibold"
            >
              The greats began their content creation journey in June 2021 out
              of Houston, Texas. They started their journey with one goal in
              mind to make people laugh and positively impact someone&lsquo;s
              day. The greats are made up of two people, Diah and Liyah, who
              have always had a passion for performing and entertainment. Since
              they began in 2021 they have already accumulated a large and
              active fanbase of nearly one million people on TikTok alone!
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
              &ldquo;Working with Beyond Vision has truly been a great pleasure.
              We have a great relationship with the agency and we look forward
              to working with them in the future. At beyond vision they treat
              their clients like family, and we have such trust in them and the
              work they are doing for us. They are always professional,
              attentive, and helpful!&rdquo;
            </p>
            <div
              ata-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="750"
              className="flex flex-row justify-start items-center pt-2"
            >
              <div className="pr-2 pt-2">
                <a href="https://instagram.com/aaliyahhh.5280?igshid=YmMyMTA2M2Y=">
                  <Image src={Instagram} alt="social" />
                </a>
              </div>
              <div className="px-2 w-[48px] origin-top p-0 h-auto">
                <a
                  className="w-full h-full"
                  href="https://vm.tiktok.com/ZMN6jsUc4/"
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

export default GreatsPage;
