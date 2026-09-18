"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index },
  }),
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-container mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading subtitle="Industry credentials that validate deep Okta expertise for enterprise IAM roles.">
        Certifications
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.name}
            className="certification-card group card-surface relative flex items-center gap-4 overflow-hidden p-5 text-left transition hover:-translate-y-1 hover:shadow-xl"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            custom={index}
          >
            <div className="certification-logo">
              <Image src={cert.logo} alt={`${cert.issuer} logo`} width={34} height={34} />
            </div>
            <div className="min-w-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
                {cert.issuer} credential
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                <FaCheckCircle className="text-xs text-emerald-500" aria-hidden />
                Certification listed on profile
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
