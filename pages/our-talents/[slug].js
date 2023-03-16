import { Client } from "@notionhq/client";
import slugify from "slugify";
import React from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import Youtube from "../../public/images/ClientsImages/youtube.png";
import Instagram from "../../public/images/ClientsImages/instagram.png";
import TikTok from "../../public/images/ClientsImages/tiktok.png";
import Stock from "../../public/images/stock.png";

const Main = ({ data }) => {
  return (
    <Layout
      title={`Beyond Vision - ${data.properties.username.rich_text[0].plain_text}`}
    >
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <section className="flex justify-center items-center max-w-[1220px] w-[90%] xl:w-full  flex-col mt-[100px] xl:mt-[150px]">
          <div className="flex justify-center items-center flex-wrap-reverse mt-8 md:mt-14 xl:mt-0 xl:flex-nowrap px-0 xl:mx-5 pb-[100px] flex-row pt-10">
            {data.properties.image.files[0] ? (
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="0"
                className="w-[90%] xl:w-[550px] xl:h-auto"
              >
                <Image
                  src={data.properties.image.files[0].external.url}
                  width={550}
                  height={550}
                  className="rounded-full object-cover"
                  alt="home image with productivity setup"
                />
              </div>
            ) : (
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="0"
                className="w-[90%] xl:w-[550px] xl:h-auto"
              >
                <Image
                  src={Stock}
                  width={550}
                  height={550}
                  className="rounded-full object-cover"
                  alt="home image with productivity setup"
                />
              </div>
            )}
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="pl-0 xl:pl-10 max-w-[900px] w-[90%] pb-10 xl:pb-0 xl:w-[610px]"
            >
              <h1 className="text-[36px] md:text-[42px] text-yellow font-semibold leading-snug">
                {data.properties.name.title[0].plain_text}
              </h1>
              
                {data.properties.username.rich_text[0].plain_text && (
                  <p className="text-base text-[#fff] opacity-60 font-medium pb-3">
                    {data.properties.username.rich_text[0].plain_text}
                  </p>
                )}
              {/*  <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            className=" text-text font-semibold"
          >
            {data.properties.description.rich_text[0].plain_text}
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
           {data.properties.review.rich_text[0].plain_text}
          </p> */}
              <div className="flex flex-row pr-2 justify-start items-start pt-2">
                {data.properties.insta_link.url && (
                  <div className="px-2 w-[48px] origin-top p-0 h-auto">
                    <a
                      className="w-full h-full"
                      href={data.properties.insta_link.url}
                    >
                      <Image src={Instagram} alt="social" />
                    </a>
                  </div>
                )}
                {data.properties.tiktok_link.url && (
                  <div className="px-2 w-[48px] origin-top p-0 h-auto">
                    <a
                      className="w-full h-full"
                      href={data.properties.tiktok_link.url}
                    >
                      <Image layout="responsive" src={TikTok} alt="social" />
                    </a>
                  </div>
                )}
                {data.properties.yt_link.url && (
                  <div className="px-2 w-[48px] origin-top p-0 h-auto">
                    <a
                      className="w-full h-full"
                      href={data.properties.yt_link.url}
                    >
                      <Image src={Youtube} layout="responsive" alt="social" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Main;

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_INFLUENCER_DB_ID,
  });

  const paths = [];

  data.results.forEach((item) => {
    paths.push({
      params: {
        slug: slugify(item.properties.name.title[0].plain_text).toLowerCase(),
      },
    });
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_INFLUENCER_DB_ID,
  });

  const page = data.results.find((item) => {
    if (
      slugify(item.properties.name.title[0].plain_text).toLowerCase() === slug
    ) {
      return item;
    }
  });

  return {
    props: {
      data: page,
    },
  };
};
