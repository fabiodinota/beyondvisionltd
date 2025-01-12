import type { NextPage } from "next";
import React from "react";
import StudiesPage from "../components/StudiesPage";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Beyond Vision - Case Studies">
      <StudiesPage />
    </Layout>
  );
};

export default Home;
