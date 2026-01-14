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
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaShieldAlt,
    number: "1000+",
    label: "Users Provisioned",
    description: "Automated SCIM provisioning",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FaFileAlt,
    number: "40+",
    label: "IAM Guides Authored",
    description: "Reduced support tickets by 30%",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: FaChartLine,
    number: "25%",
    label: "Faster Implementation",
    description: "Reusable SAML templates",
    gradient: "from-green-500 to-emerald-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="mb-28 max-w-[65rem] scroll-mt-28 sm:mb-40 w-full px-4 mx-auto"
    >
      <SectionHeading>Key Achievements</SectionHeading>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${achievement.gradient} shadow-lg`}
                >
                  <Icon className="text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
