import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import Animation from "./lotti/Animation";

const Hero = () => {
  const { t } = useTranslation(["contants"]);
  //   {
  //   "introduce": "프론트엔드 개발자 조민해입니다.정돈된 레이어와 기술적인 성장을 지향합니다.",
  //   "differentPassion": "javaScript,React,TypeScript의 대한 궁금증과 배움의 열정이 남다릅니다.",
  //   "reusableCodeAimfor ": "재사용성이 높은 코드를 작성하고 탐구합니다.",
  //   "LayoutAndCss": "정확한 레이아웃을 구현하고 기본적인 HTML,CSS가 익숙합니다.",
  //   "lookAtTheBiggerPicture": "기능을 만드는 순간에도 조금 더 큰 그림을 보려 노력합니다.",
  //   "technicalBlogs": "기술 블로그에 겪었던 이슈,혹은 몰랐던 개념들을 기록합니다.",
  //   "anewStudying": "새롭게 공부하는 것에대한 두려움이 없습니다."
  // }
  //
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-xl mb-3 font-medium text-gray-900 ">
          {t("contants:introduce")}
          <br className="hidden lg:inline-block" />
          <span className="mt-[20px]">{t("contants:subIntroduce")}</span>
        </h1>
        <p className="mb-8 leading-relaxed text-[15px]">
          {t("contants:differentPassion")}
          <br />
          {t("contants:reusableCodeAimfor")}
          <br />
          {t("contants:layoutAndCss")}
          <br />
          {t("contants:lookAtTheBiggerPicture")}
          <br />
          {t("contants:technicalBlogs")}
          <br />
          {t("contants:anewStudying")}
        </p>
        <div className="flex justify-center">
          <Link href="projects">
            <a className="btn-project">{t("contants:viewMyProject")}</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
