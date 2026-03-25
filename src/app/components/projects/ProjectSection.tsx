import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "GymFlow — Gym Management System",
    imagePaths: ["/images/GymFlow-1.jpg", "/images/GymFlow-2.jpg"],
    description: "A full-stack gym management platform built for three user roles — Admin, Kasir, and Manajer Operasional. Features member management, class scheduling, attendance tracking, deposit transactions, and operational reports.",
    tags: ["Vue.js", "Laravel", "Kotlin", "PostgreSQL", "REST API", "Vuetify", "Pinia", "Sanctum"],
    githubUrl: "https://github.com/xkendrickz/gymflow",
    liveUrl: "https://gymflow-web-rho.vercel.app/",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16">
      <Header title="Recent Projects" />
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;
          const isOdd = projects.length % 2 !== 0;

          return (
            <div
              key={project.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className={
                isLast && isOdd
                  ? "md:col-span-2 flex justify-center"
                  : ""
              }
            >
              <div className={isLast && isOdd ? "md:w-1/2" : ""}>
                <ProjectCard {...project} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}