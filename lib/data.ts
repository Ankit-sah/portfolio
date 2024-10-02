import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ztsimg from "@/public/ztsimg.png";
import zpaimg from "@/public/zpaimg.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

const currentYear = new Date().getFullYear();

export const experiencesData = [
  {
    title: "Software Developer at BeyondID",
    location: "Kathmandu",
    description:
      "Currently contributing as a Software Developer at BeyondID, where I've been actively involved in projects such as ZTS (Zero Trust Scorecard), ZTA (Zero Trust Assessment), and the development of the ZPA (Zero Trust Platform) project from inception.",
    icon: React.createElement(LuGraduationCap),
    date: `${currentYear}`,
  },
  {
    title: "Previous Front-End Development Roles",
    location: "Kathmandu",
    description:
      "Accrued over 3 years of hands-on experience in Identity and Access Management (IAM). Worked on cutting-edge technologies like React, MongoDB, and Node.js. Notable achievements include bug resolution and deep engagement with the Okta platform.",
    icon: React.createElement(CgWorkAlt),
    date: "[2021] - [2023]",
  },
  {
    title: "Projects Beyond Professional Roles",
    location: "[Bhopal,India]",
    description:
      "Engineered creative projects such as YelpCamp, Random Image Feed, Frontend Ninja, Density-Based Traffic Control System, and the Automatic Train Alert System, contributing to safety and efficiency improvements.",
    icon: React.createElement(FaReact),
    date: "2020",
  },
  // Add more experiences as needed
] as const;

// Updated projectsData
export const projectsData = [
  {
    title: "ZTS (Zero Trust Scorecard) and ZTA (Zero Trust Assessment)",
    description:
      "Contributed to the development of Zero Trust projects, showcasing proficiency in React, MongoDB, and Node.js.",
    tags: ["React", "MongoDB", "Node.js"],
    imageUrl: ztsimg,
  },
  {
    title: "ZPA (Zero Trust Platform)",
    description:
      "Played a key role in building the Zero Trust Platform project from scratch, demonstrating expertise in React, MongoDB, Next.js, Tailwind CSS, and Prisma.",
    tags: ["React", "MongoDB", "Next.js", "Tailwind CSS", "Prisma"],
    imageUrl: zpaimg,
  },
  // Add more projects as needed
] as const;

// Updated skillsData
export const skillsData = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express",
  "C",
  "C++",
  "React JS",
  "Next.js 13",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  // Add or remove skills as needed
] as const;