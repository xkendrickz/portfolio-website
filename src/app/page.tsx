import AnimationLayout from "../../layouts/AnimationLayout";
import HeroSection from "./components/home/HeroSection";
import ResumeSection from "./components/resume/ResumeSection";
import ProjectSection from "./components/projects/ProjectSection";
import SkillSection from "./components/skills/SkillSection";
import ContactSection from "./components/contact/ContactSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>
  );
}
