import React, { FC } from "react";
import { Result } from "../../model/projects";
import Image from "next/image";

interface Props {
  aProjectData: Result;
}
//  aProjectData.properties.Name.title[0].plain_text;
const ProjectItem: FC<Props> = ({ aProjectData }) => {
  const projectTitle = aProjectData.properties.Name.title[0].plain_text;
  const githubLink = aProjectData.properties.Github.rich_text[0].text.link.url;
  const description =
    aProjectData.properties.description.rich_text[0].plain_text;
  const imgSrc = aProjectData.cover.external.url;
  const tags = aProjectData.properties.Tags.multi_select;
  const start = aProjectData.properties.workperiod.date.start;
  const end = aProjectData.properties.workperiod.date.end;

  // console.log(projectTitle);

  const calculatedPeriod = (start: string, end: string) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      Number(startDateStringArray[0]),
      Number(startDateStringArray[1]),
      Number(startDateStringArray[2])
    );
    let endDate = new Date(
      Number(endDateStringArray[0]),
      Number(endDateStringArray[1]),
      Number(endDateStringArray[2])
    );

    const diffInMs = Math.abs(Number(endDate) - Number(startDate));
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col ">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4">{description}</h3>
        <a href={githubLink}>깃허브 프로젝트 링크</a>
        <p className="my-1 ">
          작업기간 :{start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              key={tag.id}
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
