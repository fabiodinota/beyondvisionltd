import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import { Client } from "@notionhq/client";
import slugify from "slugify";
import Stock from "../public/images/stock.png";

const Home = ({ data }) => {
  const dataProps = data.results;
  return (
    <Layout title="Beyond Vision - Our Talents">
      <div className="flex justify-center items-center w-full pb-20 flex-col">
        <section className="mt-[150px] max-w-[1220px] w-full">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="0"
            className="text-yellow text-[48px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold"
          >
            Talent Roster
          </h1>
{/*           <pre className="text-[#fff]">{JSON.stringify(dataProps, null, 2)}</pre>
 */}          <div className="grid max-w-[1220px] w-full gap-x-20 px-10 grid-container place-content-center place-items-center">
            {dataProps.map((item, idx) => {
              const link = item.properties.name.title[0].plain_text;
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={idx}
                  className="rounded-3xl w-full  h-full flex justify-center items-center py-10  flex-col hover:bg-background duration-300"
                >
                  {item.properties.image.files[0] ? (
                    <div className="w-[250px] rounded-full relative h-[250px] xs:h-[316px] xs:w-[316px] pt-10 ">
                      <Image
                        layout="fill"
                        className="rounded-full object-cover"
                        src={item.properties.image.files[0].external.url}
                        alt="image"
                      />
                    </div>
                  ) : (
                    <div className="w-[250px] rounded-full relative h-[250px] xs:h-[316px] xs:w-[316px] pt-10 ">
                      <Image
                        layout="fill"
                        className="rounded-full object-cover"
                        src={Stock}
                        alt="image"
                      />
                    </div>
                  )}

                  <h3 className="text-[20px] xs:text-[30px] pt-3 font-semibold text-yellow">
                    {item.properties.name.title[0].plain_text}
                  </h3>
                  <p className="text-textaccent pb-5 text-center  1xl:w-full px-5 text-[13px]">
                    {item.properties.username.rich_text[0].plain_text}
                  </p>
                  <Link href={`our-talents/${slugify(link).toLowerCase()}`}>
                    <button className="text-black rounded-full bg-yellow hover:bg-opacity-75 duration-300 h-[70px] w-[120px] shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]">
                      View
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_INFLUENCER_DB_ID,
    cache: 'no_cache=' + Math.floor(Math.random() * 100000),
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
