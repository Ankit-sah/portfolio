"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Certifications() {

  return (
    <section
      id="certifications"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 w-full px-4 mx-auto"
    >
      <SectionHeading>Certifications</SectionHeading>
      <div className="flex flex-wrap justify-center gap-4">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800 rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{
              once: true,
              margin: "-50px",
            }}
            custom={index}
          >
            <FaCertificate className="text-2xl text-blue-600 dark:text-blue-400" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
