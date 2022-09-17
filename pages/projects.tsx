import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const projects = () => {
  return (
    <>
      <Head>
        <title>Minhae next</title>
        <meta name="description" content="project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>프로젝트</div>
      </Layout>
    </>
  );
};

export default projects;
