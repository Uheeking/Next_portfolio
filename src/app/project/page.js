"use client";
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useMemo } from "react";
import Spinner from "../components/spinner";
import { useRouter } from 'next/navigation';
import axios from "axios";
require("dotenv").config();

const ProjectsItem = dynamic(() => import('../components/projects-item'));

export default function CategoryPage() {
    const router = useRouter();
    const categories = ["all", "team", "company", "alone"];
    const [selectedCate, setSelectedCate] = useState("all");
    const [projects, setProjects] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({
        all: 0,
        team: 0,
        company: 0,
        alone: 0,
    });

    useEffect(() => {
        axios.get(`/api/notion`)
            .then(response => {
                const fetchedProjects = response.data.results;
                setProjects(fetchedProjects);

                // Compute category counts
                const counts = { all: fetchedProjects.length, team: 0, company: 0, alone: 0 };
                fetchedProjects.forEach(item => {
                    const title = item.properties.Name.title[0].plain_text.toLowerCase();
                    if (title.includes("팀")) {
                        counts.team += 1;
                    } else if (title.includes("기업")) {
                        counts.company += 1;
                    } else {
                        counts.alone += 1;
                    }
                });
                setCategoryCounts(counts);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedCate === "all") return projects;
        return projects.filter((item) => {
            const title = item.properties.Name.title[0].plain_text.toLowerCase();
            if (selectedCate === "team") return title.includes("팀");
            if (selectedCate === "company") return title.includes("기업");
            return true; // "alone" case
        });
    }, [selectedCate, projects]);

    const handleCategoryClick = (newCategory) => {
        setSelectedCate(newCategory);
        router.push(`/project?${newCategory}`);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold sm:text-6xl mb-3">
                    총 프로젝트 : <span className="text-blue-500">{filteredProjects.length}</span>
                </h1>
                <div className="flex">
                    {categories.map((cate, index) => (
                        <div key={index}>
                            <a
                                className={`ml-2 text-blue-500 cursor-pointer ${selectedCate === cate && "font-bold"}`}
                                onClick={() => handleCategoryClick(cate)}
                            >
                                #{cate} ({categoryCounts[cate]})
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {filteredProjects.length === 0 ? (
          <Spinner />  // Show spinner while data is loading
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 py-10 gap-8 xs:w-full justify-center">
            {filteredProjects.map((item) => (
                <ProjectsItem key={item.id} data={item} category={selectedCate} />
            ))}
            </div>
        )}  
        </>
    );
}
