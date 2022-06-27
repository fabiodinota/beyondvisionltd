import type { NextPage } from "next";
import React from "react";
import ClientPage from "../components/ClientPage";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Beyond Vision - Our Talents">
      <ClientPage />
    </Layout>
  );
};

export default Home;
