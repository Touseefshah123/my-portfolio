import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [
  {
    title: "Graduated computer Science",
    location: "islamabad",
    description:
      " when I graduated  i immediately found a job as a computer Science teacher then switched as a mern stack developer after two year in teaching.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Mern Stack developer",
    location: " invovision technology islamabad",
    description:
      "I worked as a Mern stack developer for 1 years . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Mexil software solutions islamabad",
    description:
      "I'm now a full-stack developer working as My stack includes React, Next.js,Node js,express js,Nest js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Anamcara AI",
     description: `I worked as a MERN stack developer on this blockchain-related project. 
      Users earn AnamCoins through activities, can purchase items, and play games. 
      The platform allows users to buy and sell products.`,
    tags: ["React", "Next.js", "MongoDB", "Tailwind","Node js,express js"],
    // imageUrl: corpcommentImg,
     link: "https://anamcara.ai",
  },
  {
    title: "cion",
    description:
      "social plateform for users. as a full stack developer i added features like Likes, follow and categories etc.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux","Node js","Nest js"],
    link:"https://dev.cion.social/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    link:""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nest.js",
  "Git",
  "Tailwind",
  "Mysql",
  "Prisma",
  "MongoDB",
  "Redux",
  "PostgreSQL"
] as const;
