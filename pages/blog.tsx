import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next/types";
import React from "react";
import Layout from "../components/Layout";

//   "kakaoHeader": "Kakao Header & Conditional Render",
//   "kakaoHeaderRefactoring": "Kakao Header Refactoring",
//   "development": "Development Log",
//   "environmentVariable": "Environment Variable"

const Blog = () => {
  const { t } = useTranslation("blog");
  return (
    <Layout>
      <ul className="p-6 m-3 bg-slate-600 rounded-md">
        <li className="p-6 m-3 bg-slate-700 rounded-md">
          <a href="https://velog.io/@robo333/series/%EB%A1%9C%ED%8B%B0%EC%97%90%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0">
            {t("blog:lotti")}
          </a>
        </li>
        <li className="p-6 m-3 bg-slate-700 rounded-md">
          <a href="https://velog.io/@robo333/series/i18n-%EA%B5%AD%EC%A0%9C%ED%99%94-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0">
            {t("blog:i18n")}
          </a>
        </li>
        <li className="p-6 m-3 bg-slate-700 rounded-md">
          <a href="https://velog.io/@robo333?tag=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8">
            {t("blog:js")}
          </a>
        </li>
        <li className="p-6 m-3 bg-slate-700 rounded-md">
          <a href="https://velog.io/@robo333/%EC%B9%B4%EC%B9%B4%EC%98%A4-%ED%97%A4%EB%8D%94-%EC%98%81%EC%97%AD">
            {t("blog:kakaoHeader")}
          </a>
        </li>
        <li className="p-6 m-3 bg-slate-700 rounded-md">
          <a href="https://velog.io/@robo333/%EC%B9%B4%EC%B9%B4%EC%98%A4-%ED%97%A4%EB%8D%94-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81">
            {t("blog:kakaoHeaderRefactoring")}
          </a>
        </li>
        <li className="p-6 m-3 bg-slate-700 rounded-md">
          <a href="https://velog.io/@robo333?tag=%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80">
            {t("blog:development")}
          </a>
        </li>
        <li className="p-6 m-3 bg-slate-700 rounded-md">
          <a href="https://velog.io/@robo333?tag=%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%EB%9E%80">
            {t("blog:environmentVariable")}
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Blog;
export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common", "blog"])),
  },
});

//p-6 m-3 bg-slate-600 rounded-md
