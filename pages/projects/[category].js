import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProjectsItem from "@/components/projects/projects-item";
require("dotenv").config();
const { NOTION_DATABASE_ID, NOTION_TOKEN } = process.env;

export default function CategoryPage({ projects, category }) {
  const categories = ["all", "team", "company", "alone"];
  const [selectedCate, setSelectedCate] = useState(category || "all");
  const [categoryCounts, setCategoryCounts] = useState({
    all: projects.results.length,
    team: 0,
    company: 0,
    alone: 0,
  });
  const [filteredProjects, setFilteredProjects] = useState(projects.results);
  const router = useRouter();

  useEffect(() => {
    setSelectedCate(category || "all");
  }, [category]);

  useEffect(() => {
    const updatedCategoryCounts = {
      all: projects.results.length,
      team: 0,
      company: 0,
      alone: 0,
    };

    const filtered = projects.results.filter((item) => {
      const title = item.properties.Name.title[0].plain_text.toLowerCase();
      if (title.includes("팀")) {
        updatedCategoryCounts.team += 1;
        return selectedCate === "all" || selectedCate === "team";
      } else if (title.includes("기업")) {
        updatedCategoryCounts.company += 1;
        return selectedCate === "all" || selectedCate === "company";
      } else {
        updatedCategoryCounts.alone += 1;
        return selectedCate === "all" || selectedCate === "alone";
      }
    });

    setCategoryCounts(updatedCategoryCounts);
    setFilteredProjects(filtered);
  }, [projects, selectedCate]);

  const handleCategoryClick = (newCategory) => {
    setSelectedCate(newCategory);
    router.push(`/projects/${newCategory}`);
  };

  return (
    <>
      <h1 className="text-4xl font-bold sm:text-6xl mb-3">
        총 프로젝트 :{" "}
        <span className="text-blue-500">{categoryCounts[selectedCate]}</span>
      </h1>
      <div className="flex">
        {categories.map((cat, index) => (
          <div key={index}>
            <Link href={`/projects/${cat}`} legacyBehavior>
              <a
                className={`ml-2 text-blue-500 ${
                  selectedCate === cat && "font-bold"
                }`}
                onClick={() => handleCategoryClick(cat)}
              >
                #{cat}({categoryCounts[cat]})
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 py-10 gap-8 xs:w-full">
        {filteredProjects.map((items) => (
          <ProjectsItem key={items.id} data={items} category={category} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: "Name", direction: "descending" }],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects, category: params?.category || "all" },
  };
}

export async function getStaticPaths() {
  const categories = ["all", "team", "company", "alone"];

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
}
