import Link from "next/link";
import React from "react";
import Image from "next/image";
import Image1 from "../../public/images/AboutUsImages/Image1.png";
import Image2 from "../../public/images/AboutUsImages/Image2.png";
import Image3 from "../../public/images/AboutUsImages/Image3.png";
import Main from "../../public/images/AboutUsImages/MainAboutUs.png";

const TextComponent = () => {
  return (
    <>
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
            Marketing & Management Agency{" "}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            className=" text-text font-semibold"
          >
            Beyond Vision LTD is an influencer marketing and management agency
            based out of the United Kingdom, but not limited to working inside
            of the United Kingdom as the agency works with various influencers
            &#x0026; companies of all different calibers all around the globe.
            <br />
            <br />
            Beyond Vision was founded in early March of 2022 by the current CEO,
            Cory Hodkinson, since its launch in March of 2022, Beyond Vision has
            accumulated an influencer clientele roster of over 400 million in
            terms of a combined following while rapidly expanding each passing
            day.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap xl:flex-nowrap px-0 xl:px-5 flex-row pt-[150px]">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="0"
          className="max-w-[900px] w-[90%] xl:w-[610px] pb-10 xl:pb-0 pr-0 xl:pr-10"
        >
          <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold">
            Our slogan{" "}
          </h1>
          <p className="text-text">
            Our slogan is &ldquo;Looking Beyond the Vision&rdquo; because here
            at Beyond Vision, our priority is to help our clients look beyond
            the vision of their current aspirations and achieve greater than
            originally anticipated, both short term and always opening new doors
            to paths leading to new exclusive and exquisite opportunities to
            reach beyond the vision of any long term aspirations initially
            anticipated.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="-150"
          className="w-[90%] xl:w-[550px] xl:h-auto"
        >
          <Image
            src={Image1}
            layout="responsive"
            alt="home image with productivity setup"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap-reverse xl:flex-nowrap px-0 xl:mx-5 flex-row pt-[150px]">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="150"
          className="w-[90%] xl:w-[550px] xl:h-auto"
        >
          <Image
            src={Image2}
            layout="responsive"
            alt="home image with productivity setup"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="0"
          className="pl-0 xl:pl-10 max-w-[900px] w-[90%] pb-10 xl:pb-0 xl:w-[610px]"
        >
          <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold">
            Why we do it{" "}
          </h1>
          <p className=" text-text">
            Our priority at Beyond Vision is to help our influencer clientele do
            what they love doing as a full-time living. The feeling of
            essentially changing someone&#39;s life for the greater good is
            exhilarating and so overwhelming. Each of our influencers is
            unbelievably hardworking and dedicated, they all thoroughly deserve
            to do this as a full-time living and that is what we are here to do,
            we work relentlessly to turn those dreams into reality while
            achieving above and beyond any aspirations!
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap  xl:flex-nowrap px-0 xl:px-5 flex-row pt-[150px]">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="0"
          className="max-w-[900px] w-[90%] xl:w-[610px] pb-10 xl:pb-0 pr-0 xl:pr-10"
        >
          <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold">
            Why companies need to work with influencers{" "}
          </h1>
          <p className="text-text">
            Working with influencers is a vital key a company needs for
            unlocking success. Their named influencers because of their
            immaculate, loyal, and large audience, which holds tremendous power
            to promote a brand. Working with an influencer is proven to be more
            successful for brands than any newspaper or television commercial.
            The reason working with an influencer is more successful is because
            newspaper ads are between articles the audience wants to read, and a
            television commercial is between the content viewers want to see,
            while the audience has chosen to watch the advert the influencer
            posted.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="150"
          className="w-[90%] xl:w-[550px] xl:h-auto"
        >
          <Image
            src={Image3}
            layout="responsive"
            alt="home image with productivity setup"
          />
        </div>
      </div>

      <div className="mt-[100px] mb-20">
        <button className="text-black rounded-full  bg-yellow h-[70px] w-[200px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
          <Link href="/meet-the-team">Meet Our Team</Link>
        </button>
      </div>
    </>
  );
};

export default TextComponent;
