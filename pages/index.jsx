import { Client } from "@notionhq/client";
import React from "react";
import HomePage from "../components/HomePage";
import Layout from "../components/layout";

const Home = ({ data }) => {
  return (
    <Layout title="Beyond Vision - Home">
      <HomePage data={data} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_BRAND_DB_ID,
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
