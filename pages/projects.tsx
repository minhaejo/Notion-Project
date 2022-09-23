import Head from "next/head";
import React, { FC } from "react";
import { TOKEN, DATABASE_ID } from "../config";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

import Layout from "../components/Layout";
import { NotionDataBase, Result } from "../model/projects";
import ProjectItem from "../components/projects/ProjectItem";

interface Props {
  projects: NotionDataBase;
}

const Projects: FC<Props> = ({ projects }) => {
  const { t } = useTranslation("project");
  console.log(projects);
  return (
    <>
      {/* 햄버거 바 하나만들고 누르면 슉 내려오게 그래서 ko en 을 고를수있게  */}
      {/* 고르면 그 위치로 (즉 locale로 ) 이동할수있어야함 a or Link  */}
      {/* 그 위치로 가면  */}
      {/* <Link href="projects" locale="en">
        <button></button>
      </Link> */}
      <Layout>
        <div className="flex flex-col items-center justify-content min-h-screen px-3  mb-10 ">
          <Head>
            <title>Minhae next</title>
            <meta name="description" content="project" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-4xl font-bold sm:text-6xl">
            {t("counter")} :
            <span className="pl-4 text-blue-500">
              {projects.results.length}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-12 m-4 gap-8 ">
            {projects.results.map((aProject: Result) => (
              <ProjectItem key={aProject.id} aProjectData={aProject} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ], //정렬하기
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  console.log(projects);
  // const projectNames = projects.results.map(
  //   (aProject: Result) => aProject.properties.Name.title[0].plain_text
  // );

  // const notionTitlePlainText = projectProperties.join();
  // const notionTitlePlainTextArray = notionTitlePlainText.split("  ,", 4);
  // console.log(notionTitlePlainTextArray);

  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale as string, [
        "project",
        "common",
      ])),
    }, // will be passed to the page component as props
  };
}

//  복사본
// const projectProperties = projects.results.map(
//   (aProject: Result) => aProject.properties.Name.title[0].plain_text
// );
// console.log(projectProperties);

// import { Router, useRouter } from "next/router";
// import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
// import Link from "next/link";
// import { GetStaticPropsContext } from "next";

// export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
//   props: {
//     ...(await serverSideTranslations(locale as string, ["about"])),
//     //로케일을 들고 즉 "ko","en"인것중에서 about json 을 들고오는게 서버사이드 트렌스레이트
//     //json 파일 자체가 백엔드 쪽 서버영역이기 때문에 가져오는대 서버코드가 필요한거같음.
//     //serverSideTranslations,locale,과 데이터를 들고올 페이지를 작성하는거임
//   },
// });
// //locale활성 로케일을 포함합니다(활성화된 경우) 컨텍스트 매개변수.
// const AboutPage = () => {
//   const router = useRouter();
//   //useRouter 객체안에는 여러 데이터들중 locale이라는 데이터 값이있음.
//   const { t } = useTranslation("about");
//   //useTranslation을 통해서 about으로 시작하는 json 데이터를 가지고옴
//   return (
//     <div>
//       <h1>{t("h1")}</h1>
//       <ul>
//         <li>
//           {t("currentUrl")} : http://localhost:3000
//           {router.locale !== "ko" && "/" + router.locale}
//           {router.pathname}
//         </li>
//         <li>locale:{router.locale}</li>
//         <li>pathname: {router.pathname}</li>
//       </ul>
//       <div>
//         <Link href="/about" locale="en">
//           <button style={{ width: 70, height: 70 }}>{t("English")}</button>
//         </Link>
//         <Link href="/about" locale="ko">
//           <button style={{ width: 70, height: 70 }}>{t("Korean")}</button>
//         </Link>
//       </div>
//     </div>
//   );
// };
