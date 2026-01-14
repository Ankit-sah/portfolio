import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Achievements from "@/components/achievements";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 w-full">
      <Intro />
      <SectionDivider />
      <About />
      <Achievements />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
