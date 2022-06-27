import type { NextPage } from "next";
import React from "react";
import Layout from "../components/layout";
import TeamPage from "../components/TeamPage";

const Team: NextPage = () => {
  return (
    <Layout title="Beyond Vision - Meet The Team">
      <TeamPage />
    </Layout>
  );
};

export default Team;
