"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const highlights = [
  "4+ years experience",
  "4× Okta certified",
  "100+ SSO deployments",
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="section-container mb-20 scroll-mt-[100rem] text-center sm:mb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex justify-center"
      >
        <span className="badge">Open to new opportunities</span>
      </motion.div>

      <div className="mb-8 flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <Image
              src="/Ankit.jpg"
              alt="Ankit Kumar Sah"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl ring-2 ring-blue-500/20 dark:border-gray-800 dark:ring-blue-400/25 sm:h-32 sm:w-32"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          IAM & Full-Stack Developer
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl sm:leading-tight">
          Ankit Kumar Sah
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
          I help organizations ship{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            secure identity platforms
          </span>{" "}
          and production-ready web applications using Okta, Auth0, SAML, SCIM,
          React, and Next.js.
        </p>
      </motion.div>

      <motion.ul
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
          >
            {item}
          </li>
        ))}
      </motion.ul>

      <motion.div
        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Link
          href="#contact"
          className="btn-primary group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch
          <BsArrowRight className="opacity-80 transition group-hover:translate-x-0.5" />
        </Link>

        <a className="btn-secondary group" href="/CV.pdf" download>
          Download resume
          <HiDownload className="opacity-70 transition group-hover:translate-y-0.5" />
        </a>

        <div className="flex items-center gap-2">
          <a
            className="btn-secondary !px-4 !py-3"
            href="https://www.linkedin.com/in/ankit-kumar-sah-419525149/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <BsLinkedin />
          </a>

          <a
            className="btn-secondary !px-4 !py-3 text-xl"
            href="https://github.com/Ankit-sah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
