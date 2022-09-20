import Head from "next/head";
import React, { FC } from "react";
import { TOKEN, DATABASE_ID } from "../config";

import Layout from "../components/Layout";
import { NotionDataBase, Result } from "../model/projects";
import ProjectItem from "../components/projects/ProjectItem";

interface Props {
  projects: NotionDataBase;
}

const projects: FC<Props> = ({ projects }) => {
  console.log(projects);
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-content min-h-screen px-5 py-24 mb-10 px-6">
          <Head>
            <title>Minhae next</title>
            <meta name="description" content="project" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-4xl font-bold sm:text-6xl">
            총 프로젝트 :
            <span className="pl-4 text-blue-400">
              {projects.results.length}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 ">
            {projects.results.map((aProject: Result) => (
              <ProjectItem key={aProject.id} aProjectData={aProject} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default projects;

export async function getStaticProps() {
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
  const projectNames = projects.results.map(
    (aProject: Result) => aProject.properties.Name.title[0].plain_text
  );

  // const notionTitlePlainText = projectProperties.join();
  // const notionTitlePlainTextArray = notionTitlePlainText.split("  ,", 4);
  // console.log(notionTitlePlainTextArray);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

//  복사본
// const projectProperties = projects.results.map(
//   (aProject: Result) => aProject.properties.Name.title[0].plain_text
// );
// console.log(projectProperties);
