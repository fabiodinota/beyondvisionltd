import React from "react";
import TextComponentAbout from "./TextComponentAbout";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <section className="flex justify-center items-center max-w-[1220px] w-[90%] xl:w-full  flex-col mt-[100px] xl:mt-[150px]">
        <TextComponentAbout />
      </section>
    </div>
  );
};

export default AboutPage;
