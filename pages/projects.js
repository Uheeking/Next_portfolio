import ProjectsItem from "@/components/projects/projects-item";
import React from "react";
require("dotenv").config();
const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const TOKEN = process.env.NOTION_TOKEN;

export default function projects({ projects }) {
  console.log(projects);
  return (
    <>
      <h1>총 프로젝트 : {projects.results.length}</h1>
      {projects.results.map((items) => (
        <ProjectsItem key={items.id} data={items}/>
      ))}
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

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
