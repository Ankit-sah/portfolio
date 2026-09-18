"use client";

import { motion } from "framer-motion";
import { FiCode, FiKey, FiRefreshCw } from "react-icons/fi";
import SectionHeading from "./section-heading";

const services = [
  {
    title: "Identity & access management",
    description: "Okta and Auth0 implementation, SSO, SAML, OIDC, MFA, and role-based access control.",
    icon: FiKey,
  },
  {
    title: "Lifecycle automation",
    description: "SCIM provisioning, identity workflows, Microsoft 365 access support, and onboarding improvements.",
    icon: FiRefreshCw,
  },
  {
    title: "Secure web delivery",
    description: "Production-ready React and Next.js applications with protected routes, APIs, and payments.",
    icon: FiCode,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-container mb-28 scroll-mt-28">
      <SectionHeading subtitle="Ways I help teams deliver secure, maintainable identity and application experiences.">
        Services
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            className="card-surface p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-500/20">
              <Icon aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
