import Image from "next/image";
import React from "react";
import Main from "../../public/images/TeamPageMain.png";

// alphanumeric code for apostrophes

const TeamPage = () => {
  return (
    <div className="flex justify-center items-center  flex-col">
      <div className="flex justify-center items-center w-screen h-full xl:h-screen px-10 md:px-20 flex-col xl:flex-row">
        <div className=" xl: mt-[300px] xl:mt-0  z-10  pb-10 xl:pb-0 w-full md:w-[510px]">
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
            className="text-[60px] xs:text-[96px] md:text-[96px] leading-none pb-5 text-yellow font-semibold"
          >
            Meet <br></br> Our <br></br>Team
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            className=" text-text font-semibold w-full md:w-[80%]"
          >
            Our team is more than a team we are one big dedicated family with
            the same goal in mind, to turn our client&#39;s dreams into reality.
            All of our team members have exemplary past achievements and recent
            case studies, highlighting why they deserve to be a part of the
            family at Beyond Vision.
          </p>
        </div>
        <div className="h-auto  max-w-[560px] w-full justify-self-center self-center xl:justify-self-end xl:self-end">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="0"
            className="h-auto max-w-[500px] w-full"
          >
            <Image
              src={Main}
              layout="responsive"
              alt="home image with productivity setup"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-10 mt-[100px] place-items-center">
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Cory Hodkinson
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">Founder & CEO</p>
          <p className="text-text w-full pb-5">
            I founded Beyond Vision in March of 2022 and since that moment I
            have loved every second and never looked back. Overall, the feeling
            of essentially changing someone&apos;s life for the astronomical
            good is such a privilege and an exhilarating and phenomenal feeling.
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:coryh@beyondvisionltd.org"
            >
              coryh@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-10 mt-[100px] place-items-center">
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Cory Hodkinson
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">Founder & CEO</p>
          <p className="text-text w-full pb-5">
            I founded Beyond Vision in March of 2022 and since that moment I
            have loved every second and never looked back. Overall, the feeling
            of essentially changing someone&apos;s life for the astronomical
            good is such a privilege and an exhilarating and phenomenal feeling.
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:coryh@beyondvisionltd.org"
            >
              coryh@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Ryan Macklin
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">Talent Manager</p>
          <p className="text-text w-full pb-5">
            &ldquo;I love being here, my co-workers, our talents, the setting as
            a whole, it&apos;s all just perfect in-fact id say this went from a
            so-called job to a hobby of mine. &rdquo;
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:ryan@beyondvisionltd.org"
            >
              ryan@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Khye Parkinson
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">Talent Manager</p>
          <p className="text-text w-full pb-5">
            &ldquo;I love it here!!&rdquo;
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:khyep@beyondvisionltd.org"
            >
              khyep@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Laurence Ivy
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">
            Talent Manager & Content Strategist
          </p>
          <p className="text-text w-full pb-5">
            I have had a passion for marketing and management since I was young.
            To be doing my passion, full-time with such incredible people all
            around me is prodigious, I love it!
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:laurence@beyondvisionltd.org"
            >
              laurence@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Jordan Scott
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">Talent Manager</p>
          <p className="text-text w-full pb-5">
            To be serving such incredible talents and helping them strive
            through their goals and aspirations is such a sensational feeling!
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:nathan@beyondvisionltd.org"
            >
              nathan@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Kiran Maharaj
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">Brand Manager</p>
          <p className="text-text w-full pb-5">
            &ldquo;Working at Beyond Vision is quite honestly a bit of a dream
            come true for me, I&apos;ve always loved the management aspect of
            things, it&apos;s a passion. The other thing I cherish is social
            media and these talented people who incredibly manage to create so
            much amazing content for their audience to enjoy. Combine them and
            it equals my job at Beyond Vision.&rdquo;
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:kiran@beyondvisionltd.org"
            >
              kiran@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Barna Boldizsar
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">Talent Manager</p>
          <p className="text-text w-full pb-5">
            &ldquo;To change the lives of these amazing people who serve it is
            such an extraordinary feeling, it&apos;s why I do what I do and I
            always will!&rdquo;
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:barna@beyondvisionltd.org"
            >
              barna@beyondvisionltd.org
            </a>
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[500px] h-max xl:h-[380px] flex justify-center items-start flex-col bg-backgroundaccent p-10 rounded-[40px]">
          <h1 className="text-yellow text-[30px] md:text-[40px] font-semibold leading-none">
            Kieran Page
          </h1>
          <p className=" text-textaccent text-[16px] pb-5">COO</p>
          <p className="text-text w-full pb-5">
            &ldquo;Working here at Beyond Vision has been tremendous! I can
            honestly say, I have the best job in the world. I get to wake up
            each morning and help each of our many hard-working and determined
            clients we have at Beyond Vision reach their aspirations and change
            their lives for good!&rdquo;
          </p>
          <p className="text-text font-semibold">
            &gt;{" "}
            <a
              className="text-text font-semibold underline"
              href="mailto:kieran@beyondvisionltd.org"
            >
              kieran@beyondvisionltd.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
