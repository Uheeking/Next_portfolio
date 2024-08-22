import Image from "next/image";
import Link from "next/link";
import ChatGPT_logo from "@/public/ChatGPT_logo.png";

export default function ProjectsItem({ data }) {
  const { properties } = data;
  const name = properties.Name.title[0].plain_text;
  const url = properties.URL.url;

  return (
    <div className="project-card">
      <div>
        <Image
          style={{ width: "100%" }}
          className="rounded-t-xl"
          alt="image"
          src={ChatGPT_logo}
          width={100}
          quality={100}
        />
        <div className="p-3">
          <h1 className="text-xl font-bold">{name}</h1>
          <Link href={url}>chatgpt 바로가기</Link>
        </div>
      </div>
    </div>
  );
}
