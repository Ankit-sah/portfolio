"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  caseStudy,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 w-full sm:mb-8 last:mb-0"
    >
      <section className={`card-surface relative max-w-[42rem] overflow-hidden sm:pr-8 sm:group-even:pl-8 ${isCaseStudyOpen ? "sm:min-h-[20rem]" : "sm:h-[20rem]"}`}>
        <div className="flex h-full flex-col px-5 py-6 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
            Project {index + 1}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
            {title}
          </h3>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <button
            type="button"
            className="mt-3 w-fit text-sm font-semibold text-blue-700 underline-offset-4 transition hover:underline dark:text-blue-300"
            onClick={() => setIsCaseStudyOpen((open) => !open)}
            aria-expanded={isCaseStudyOpen}
          >
            {isCaseStudyOpen ? "Hide case study" : "View case study"}
          </button>
          {isCaseStudyOpen && (
            <div className="mt-3 space-y-2 rounded-xl border border-blue-100 bg-blue-50/70 p-3 text-sm leading-relaxed text-gray-700 dark:border-blue-400/15 dark:bg-blue-500/10 dark:text-gray-200">
              <p><span className="font-semibold">Role:</span> {caseStudy.role}</p>
              <p><span className="font-semibold">Challenge:</span> {caseStudy.challenge}</p>
              <p><span className="font-semibold">Approach:</span> {caseStudy.approach}</p>
              <p><span className="font-semibold">Outcome:</span> {caseStudy.outcome}</p>
            </div>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200">
              Visit live project <FiExternalLink aria-hidden />
            </a>
          )}
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {imageUrl ? (
          <Image src={imageUrl} alt={title} quality={95} className="absolute top-8 -right-40 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.03] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-1 sm:block group-even:right-[initial] group-even:-left-40 group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-1" />
        ) : (
          <a href={liveUrl ?? undefined} target="_blank" rel="noreferrer" className="absolute top-8 -right-20 hidden h-56 w-80 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl transition group-hover:scale-[1.03] group-hover:-translate-x-2 group-hover:translate-y-2 sm:flex sm:flex-col sm:justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Live learning platform</span>
            <span className="text-3xl font-bold leading-tight">Chaitanya<br />Loksewa</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">Open site <FiExternalLink aria-hidden /></span>
          </a>
        )}
      </section>
    </motion.div>
  );
}
