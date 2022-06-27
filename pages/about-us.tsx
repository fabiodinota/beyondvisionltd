import type { NextPage } from "next";
import React from "react";
import AboutPage from "../components/AboutPage";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Beyond Vision - About Us">
      <AboutPage />
    </Layout>
  );
};

export default Home;
