"use client";
import React, { useState } from "react";
import Header from "../general/Header";

import { DiJavascript } from "react-icons/di";
import {
  SiTypescript,
  SiPhp,
  SiCodeigniter,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiVuedotjs,
  SiLaravel,
  SiDotnet,
  SiDocker,
} from "react-icons/si";
import {
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

const skills = [
  {
    name: "JavaScript",
    icon: <DiJavascript />,
    category: "Languages",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Languages",
    color: "#3178C6",
  },
  { name: "PHP", icon: <SiPhp />, category: "Languages", color: "#777BB4" },
  // Frontend
  { name: "React", icon: <DiReact />, category: "Frontend", color: "#61DAFB" },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    category: "Frontend",
    color: "#ffffff",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs />,
    category: "Frontend",
    color: "#42B883",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    category: "Frontend",
    color: "#38BDF8",
  },
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend", color: "#1572B6" },
  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
    color: "#539E43",
  },
  {
    name: "CodeIgniter",
    icon: <SiCodeigniter />,
    category: "Backend",
    color: "#EF4223",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    category: "Backend",
    color: "#FF2D20",
  },
  { name: ".NET", icon: <SiDotnet />, category: "Backend", color: "#512BD4" },
  // Database
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "Database",
    color: "#336791",
  },
  { name: "MySQL", icon: <SiMysql />, category: "Database", color: "#4479A1" },
  // Tools
  { name: "Git", icon: <FaGitAlt />, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools", color: "#ffffff" },
  { name: "Postman", icon: <SiPostman />, category: "Tools", color: "#FF6C37" },
  { name: "Docker", icon: <SiDocker />, category: "Tools", color: "#2496ED" },
];

export default function SkillSection() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skill" className="py-16 px-4">
      <Header title="My Skills" />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
              ${
                active === cat
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "border-slate-700 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 bg-transparent"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill cards */}
      <div
        key={active}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {filtered.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
            className="relative bg-slate-900 border border-slate-800 rounded-2xl
              w-28 h-28 flex flex-col items-center justify-center gap-2
              cursor-default transition-all duration-300 hover:scale-110 hover:border-indigo-500/60
              hover:shadow-lg group overflow-hidden"
            style={{
              boxShadow:
                hovered === skill.name
                  ? `0 0 20px ${skill.color}25`
                  : undefined,
            }}
          >
            {/* Glow bg on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
              style={{ background: skill.color }}
            />

            {/* Icon */}
            <div
              className="text-4xl transition-colors duration-300"
              style={{
                color: hovered === skill.name ? skill.color : "#94a3b8",
              }}
            >
              {skill.icon}
            </div>

            {/* Name */}
            <p className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-center px-1">
              {skill.name}
            </p>

            {/* Category badge on hover */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-800 text-gray-500 border border-slate-700">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
