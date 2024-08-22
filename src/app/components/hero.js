import React from "react";
import Link from "next/link";
import profile from "../../../public/profile.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
        <Image
          src={profile}
          className="w-[120px] h-[120px] mb-[30px]"
          style={{ borderRadius: "50%" }}
        />
        <div style={{ fontSize: "20px", fontWeight: "400" }}>
          Nice to Meet You,
        </div>
        <div style={{ marginTop: "5px", fontSize: "35px", fontWeight: "700" }}>
          I'm Full Stack Developer Uheeking.
        </div>
        <div className="flex mt-2 bg-white">
          <Link href="/project" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}