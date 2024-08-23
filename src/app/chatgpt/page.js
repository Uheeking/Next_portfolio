"use client";
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import axios from "axios";
import Spinner from "../components/spinner";  // Import the Spinner component
require("dotenv").config();

const Chatgpt = dynamic(() => import('../components/chatgpt'));

export default function Gpt() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`/api/gpt`)
      .then(response => {
        const gptProjects = response.data.results;
        setProjects(gptProjects);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold sm:text-5xl">
        총 대화내용 수: <span className="pl-4 text-blue-500">{projects.length}</span>
      </h1>
        {projects.length === 0 ? (
          <Spinner />  // Show spinner while data is loading
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 m-6 py-10 gap-8 xs:w-full">
          {projects.map((items) => (
            <Chatgpt key={items.id} data={items} />
          ))}
          </div>
        )}
    </div>
  );
}
