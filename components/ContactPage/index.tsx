import Image from "next/image";
import React, { useState } from "react";
import ContactMain from "../../public/images/Contact/ContactMain.png";
import InquiryForm from "./InquiryForm";
import CareerForm from "./CareerForm";
import BrandForm from "./BrandForm";
import InfluencerForm from "./InfluencerForm";

const ContactPage = () => {
  const options = {
    inquiry: "Inquiry",
    careers: "Careers",
    brand: "Work with us - Brand",
    influencer: "Work with us - Influencers",
  };
  const [select, setSelect] = useState("inquiry");
  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-start relative w-full h-full flex-wrap pt-[180px] xl:flex-nowrap px-0 pb-[100px] flex-row ">
        <div className="pl-0 xl:pl-10 max-w-[900px] w-[90%] pb-10 xl:pb-0 xl:w-[610px]">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="0"
            className="text-yellow text-[48px] pb-5  flex justify-start items-start text-start px-0  font-semibold"
          >
            Contact Us
          </h1>
          <p className="text-text text-[20px] font-semibold pb-10">
            489 489 Lytham <br></br>Road Blackpool <br></br>FY4 1QY <br></br>
            <a className="underline text-text">business@beyondvisionltd.org</a>
          </p>
          <select
            onChange={handleChange}
            name="Choice"
            id="select"
            className="safari appearance-none rounded-none border-b-4 w-full  px-2 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none bg-transparent pb-3"
          >
            <option className="bg-background w-full h-20" value="inquiry">
              {options.inquiry}
            </option>
            <option className="bg-background w-full h-20" value="careers">
              {options.careers}
            </option>
            <option className="bg-background w-full h-20" value="brand">
              {options.brand}
            </option>
            <option className="bg-background w-full h-20" value="influencer">
              {options.influencer}
            </option>
          </select>

          {select === "inquiry" ? (
            <InquiryForm />
          ) : select === "careers" ? (
            <CareerForm />
          ) : select === "brand" ? (
            <BrandForm />
          ) : select === "influencer" ? (
            <InfluencerForm />
          ) : (
            ""
          )}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="0"
          className="w-[90%] xl:w-[550px] xl:h-auto p-10"
        >
          <Image
            src={ContactMain}
            layout="responsive"
            alt="home image with productivity setup"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
