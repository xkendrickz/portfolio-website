import React from "react";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";
import { LuBriefcase, LuGraduationCap, LuLanguages } from "react-icons/lu";

const education = [
  {
    icon: LuGraduationCap,
    role: "Bachelor of Computer Science",
    institution: "Atma Jaya Yogyakarta University",
    date: "Aug 2020 – Aug 2025",
    description:
      "Focused on algorithms, data structures, software engineering principles, and web technologies. Relevant coursework: Web Development, Database Systems, Software Engineering, Computer Networks.",
  },
  {
    icon: LuLanguages,
    role: "HSK Level 3 Certified",
    institution: "Mandarin Chinese Certification",
    date: "Sep 2025 – Dec 2025",
    description:
      "Completed Chinese language training and achieved HSK Level 3 certification, demonstrating intermediate proficiency in communication and comprehension.",
  },
];

const experience = [
  {
    icon: LuBriefcase,
    role: "Software Engineer Intern",
    institution: "PT. Vadhana International",
    date: "Aug 2023 – Feb 2024",
    description:
      "Contributed to the development and maintenance of web application features using CodeIgniter 3 and PostgreSQL. Collaborated within a 3-person team to implement new modules, fix system bugs, and optimize database queries. Built and integrated frontend components with backend logic following MVC architecture.",
  },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16">
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12">

        {/* Education */}
        <div data-aos="fade-right">
          <Header title="My Education" as="h2" />
          <div className="space-y-4 mt-2">
            {education.map((item) => (
              <ResumeCard key={item.role} {...item} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div data-aos="fade-left" data-aos-delay="150">
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-4 mt-2">
            {experience.map((item) => (
              <ResumeCard key={item.role} {...item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}