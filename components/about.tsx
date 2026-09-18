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
      className="section-container mb-28 scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="about"
    >
      <SectionHeading subtitle="Focused on secure identity systems, automation, and reliable delivery in enterprise environments.">
        About me
      </SectionHeading>

      <div className="card-surface space-y-5 p-8 text-left leading-8 text-gray-700 dark:text-gray-300">
        <p>
          I&apos;m a software developer with{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            4+ years of experience
          </span>{" "}
          building identity and access management solutions for organizations
          that need strong security without slowing down product delivery.
        </p>

        <p>
          My work spans{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Okta, Auth0, SAML, SCIM, MFA, and Zero Trust
          </span>
          , combined with full-stack development in React, Next.js, Node.js, and
          TypeScript. I&apos;ve supported large-scale IAM migrations, SSO
          integrations, and automation that improves both security posture and
          operational efficiency.
        </p>

        <p>
          I&apos;m especially effective when teams need someone who can connect
          identity architecture with practical engineering — from integration
          design and documentation to production-ready application development.
        </p>
      </div>
    </motion.section>
  );
}
