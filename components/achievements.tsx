"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaUsers, FaShieldAlt, FaFileAlt, FaChartLine } from "react-icons/fa";

const achievements = [
  {
    icon: FaUsers,
    number: "100+",
    label: "SSO Connections Deployed",
    description: "Reduced manual workflows by 40%",
  },
  {
    icon: FaShieldAlt,
    number: "1,000+",
    label: "Users Provisioned",
    description: "Automated SCIM provisioning with MFA enforcement",
  },
  {
    icon: FaFileAlt,
    number: "40+",
    label: "IAM Guides Authored",
    description: "Reduced support tickets by 30%",
  },
  {
    icon: FaChartLine,
    number: "25%",
    label: "Faster Implementation",
    description: "Reusable SAML integration templates",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-container mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading subtitle="Measurable outcomes from enterprise IAM and secure application work.">
        Impact at a glance
      </SectionHeading>
      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.label}
              variants={itemVariants}
              className="card-surface p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-600 p-3 text-white shadow-sm dark:bg-blue-500">
                  <Icon className="text-xl" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
                    {achievement.number}
                  </div>
                  <div className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                    {achievement.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
