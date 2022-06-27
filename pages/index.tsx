import type { NextPage } from "next";
import React from "react";
import HomePage from "../components/HomePage";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Beyond Vision - Home">
      <HomePage />
    </Layout>
  );
};

export default Home;
