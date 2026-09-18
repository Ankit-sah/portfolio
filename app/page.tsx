import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Achievements from "@/components/achievements";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Intro />
      <Achievements />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <About />
      <Contact />
    </main>
  );
}
