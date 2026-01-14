"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Software Developer</span> with{" "}
        <span className="font-medium">3.8 years</span> of experience designing, implementing, and securing{" "}
        <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">enterprise identity ecosystems</span>. 
        I specialize in <span className="font-medium">Okta, Auth0, SAML, SCIM, MFA, and Zero Trust architectures</span> with a strong foundation in{" "}
        <span className="font-medium">full-stack development</span> (React, Next.js, Node.js).
      </p>

      <p className="mb-3">
        <span className="italic">My expertise includes</span> delivering large-scale IAM migrations, SSO integrations, 
        identity proofing, and advanced access control in high-security environments. I've{" "}
        <span className="font-medium">deployed 100+ SSO connections</span>, automated SCIM provisioning for{" "}
        <span className="font-medium">1000+ users</span>, and authored{" "}
        <span className="font-medium">40+ IAM guides</span> that reduced support tickets by 30%.
      </p>

      <p>
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js 15, Node.js, Express, TypeScript, MongoDB, Prisma, Tailwind CSS
        </span>
        . I'm passionate about building{" "}
        <span className="font-medium">secure, scalable, and automation-driven IAM solutions</span> for global organizations. 
        When I'm not coding, I enjoy{" "}
        <span className="font-medium">exploring new technologies</span> and{" "}
        <span className="font-medium">contributing to open-source projects</span>.
      </p>
    </motion.section>
  );
}
