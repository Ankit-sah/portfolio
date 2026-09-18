"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="section-container mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading subtitle="Technical strengths aligned with IAM engineering and full-stack product delivery.">
        Skills & expertise
      </SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {skillsCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="card-surface p-6 text-left"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={categoryIndex}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-800 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
