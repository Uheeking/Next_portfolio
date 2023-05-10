import React from "react";
import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-0 font-medium text-gray-900">
          👩🏻‍💻 FullStack Programmer, Web Developer
        </h1>
        <br />{" "}
        <h3 className="text-2xl mb-4" style={{ marginTop: "-10px" }}>
        &quot;안녕하세요👋👋 개발자 유희왕입니다.&quot;<br /> 배우기 위해 힘 쓰고, 궁금한
          것이 있다면 물어볼려고 합니다. 항상 성장하기 위해 나아갈려고 합니다.
          <br />
        </h3>
        <p className="mb-8 leading-relaxed">
          계속적으로 코딩한 것을 업데이트할 예정입니다. 버튼을 클릭했을 때
          나오는 화면은 vue.js, react, flutter, next.js등을 하면서 만든
          프로젝트가 나옵니다. 자유롭게 구경해주세요~
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
