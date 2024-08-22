"use client"
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from "react";
import axios from "axios"
require("dotenv").config();

export default function CategoryPage() {
    const categories = ["all", "team", "company", "alone"];
    useEffect(() => {
        axios.get(`http://localhost:3001/api/notion`)
        .then(response => {
              console.log(response.data.results);
            }).catch(error => {
              console.error("Error fetching data: ", error);
            });
      }, []);


    return (
        <>
        </>
    );
}