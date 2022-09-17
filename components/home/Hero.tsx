import Link from "next/link";
import React from "react";
import Animation from "./lotti/Animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
          프론트엔드 개발자 조민해입니다.
          <br className="hidden lg:inline-block" />
          정돈된 레이어와 기술적인 성장을 지향합니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          javaScript,React,TypeScript의 대한 궁금증과 배움의 열정이 남다릅니다.
          <br />
          재사용성이 높은 코드를 작성하고 탐구합니다.
          <br />
          정확한 레이아웃을 구현하고 기본적인 HTML,CSS가 익숙합니다.
          <br />
          기능을 만드는 순간에도 조금 더 큰 그림을 보려 노력합니다.
          <br />
          기술 블로그에 겪었던 이슈,혹은 몰랐던 개념들을 기입합니다.
          <br />
          새롭게 공부하는 것에대한 두려움이 없습니다.
        </p>
        <div className="flex justify-center">
          <Link href="projects">
            <a className="btn-project">나만의 프로젝트 보러가기</a>
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
