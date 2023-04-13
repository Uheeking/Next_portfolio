import ProjectsItem from "@/components/projects/projects-item";
import React from "react";
require("dotenv").config();
const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const TOKEN = process.env.NOTION_TOKEN;

export default function projects({ projects }) {
  console.log(projects);
  return (
    <>
      <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : 
      <span className="pl-4 text-blue-500">{projects.results.length}</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 m-6 py-10 gap-8 xs:w-full">
        {projects.results.map((items) => (
          <ProjectsItem key={items.id} data={items} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: "Name", direction: "descending" }],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  console.log(process.env);

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
