"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 my-24 h-16 w-1 rounded-full hidden sm:block dark:from-blue-600 dark:via-purple-600 dark:to-indigo-600 shadow-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
