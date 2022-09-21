import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout";
import Animation from "../components/home/lotti/Animation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Minhae next</title>
        <meta name="description" content="project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["header", "contants"])),
  },
});
