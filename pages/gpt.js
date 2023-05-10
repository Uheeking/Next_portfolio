import Chatgpt from "@/components/gpt/chatgpt";
import React from "react";
require("dotenv").config();
const GPT_DB_ID = process.env.NOTION_GPT_DB_ID;
const GPT_TOKEN = process.env.NOTION_GPT_TOKEN;

export default function gpt({ projects }) {
  console.log(projects);
  return (
    <>
      <h1 className="text-4xl font-bold sm:text-6xl">총 대화내용 수 : 
      <span className="pl-4 text-blue-500">{projects.results.length}</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 m-6 py-10 gap-8 xs:w-full">
        {projects.results.map((items) => (
          <Chatgpt key={items.id} data={items} />
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
      Authorization: `Bearer ${GPT_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: "Name", direction: "descending" }],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${GPT_DB_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
