"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="section-container mb-28 scroll-mt-28">
      <SectionHeading subtitle="Selected work demonstrating secure authentication, RBAC, and production-ready full-stack delivery.">
        Featured projects
      </SectionHeading>
      <div className="flex flex-col items-center">
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
