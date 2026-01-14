import { CgWorkAlt } from "react-icons/cg";
import ztsimg from "@/public/ztsimg.png";
import zpaimg from "@/public/zpaimg.png";
import travelimg from "@/public/travel.png";
import ecomimg from "@/public/ecom.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "CIAM Developer / Software Developer",
    location: "Anthropic Identity | Kathmandu, Nepal",
    description:
      "Deployed 100+ SSO (Okta) connections, reducing manual workflows by 40% and improving authentication efficiency. Automated SCIM provisioning for 1000+ users and enforced MFA policies, enhancing security posture. Authored 40+ IAM guides and templates; resolved sync and access issues, reducing support tickets by 30%. Created reusable SAML integration templates and access control rules, decreasing implementation time by 25%.",
    icon: CgWorkAlt,
    date: "Jan 2025 – Jun 2025",
  },
  {
    title: "Developer",
    location: "BeyondID | Kathmandu, Nepal",
    description:
      "Developed and implemented identity access management solutions using React, Node.js, and MongoDB, improving system security and user authentication processes by 35%. Verified and resolved over 100 bug reports and issues, ensuring smooth operation of applications and increasing system uptime. Learned and applied multiple coding languages and development frameworks, such as TypeScript and Express, reducing development time by 15%. Conducted rigorous root-cause analyses to identify and correct software issues, decreasing recurring problems by 40%.",
    icon: CgWorkAlt,
    date: "Feb 2023 – Sep 2024",
  },
  {
    title: "Associate Software Developer",
    location: "BeyondID | Kathmandu, Nepal",
    description:
      "Wrote clean, well-tested code for various projects, reducing software errors by 20% and improving maintainability across codebase. Verified and resolved over 100 bug reports, enhancing application stability and performance by 25%. Developed IAM systems with React and Node.js, focusing on SSO, identity proofing, and risk analysis for user applications. Collaborated with developers to identify and fix software bugs, reducing debugging time by 20%.",
    icon: CgWorkAlt,
    date: "Aug 2021 – Feb 2023",
  },
] as const;

// Updated projectsData
export const projectsData = [
  {
    title: "Travel Booking Platform – Secure Web Application",
    description:
      "Architected a secure travel booking platform using Next.js 14 App Router with server components and TypeScript. Implemented Okta-based OIDC authentication via NextAuth.js to secure administrative and booking workflows. Designed and enforced role-based access control (RBAC) across protected routes and server actions. Integrated Stripe Checkout with webhook-driven reconciliation to manage booking payment lifecycles.",
    tags: ["Next.js 14", "TypeScript", "Okta", "NextAuth.js", "Stripe", "Prisma", "MongoDB", "RBAC"],
    imageUrl: travelimg,
  },
  {
    title: "Janakpur Art & Craft - Secure E-Commerce Platform",
    description:
      "Designed and developed a secure e-commerce platform with Okta OIDC authentication using NextAuth.js. Implemented role-based access control (RBAC) for admin dashboards and protected API endpoints. Integrated Okta API tokens to support controlled user onboarding and lifecycle management. Built secure checkout and order management workflows using Stripe Checkout and webhook reconciliation.",
    tags: ["Next.js", "Okta", "NextAuth.js", "Stripe", "RBAC", "Prisma", "MongoDB"],
    imageUrl: ecomimg,
  },
  {
    title: "CFI Group - Enterprise IAM Migration",
    description:
      "Spearheaded migration of enterprise applications to modern identity platforms. Enhanced security through multi-factor authentication and conditional access policies. Resolved complex identity synchronization challenges across hybrid environments. Developed comprehensive technical documentation for identity management processes.",
    tags: ["Okta", "SAML", "SCIM", "MFA", "Enterprise IAM"],
    imageUrl: ztsimg,
  },
  {
    title: "Zero Trust Security System",
    description:
      "Developed full-stack application with React frontend and Express.js backend with MongoDB. Implemented comprehensive identity access management system with CRUD operations. Built modules for SSO type management, security assessments, and risk factor analysis. Created reporting dashboard for security metrics and compliance tracking.",
    tags: ["React", "Express.js", "MongoDB", "IAM", "SSO", "Zero Trust"],
    imageUrl: zpaimg,
  },
] as const;

// Updated skillsData
export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js 15",
  "Node.js",
  "Express",
  "HTML5",
  "CSS",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Prisma",
  "Okta",
  "Auth0",
  "SAML",
  "SCIM",
  "MFA",
  "Zero Trust",
  "RBAC",
  "AWS S3",
  "Docker",
  "Git",
  "CI/CD",
] as const;

export const certificationsData = [
  {
    name: "Okta Certified Professional",
    issuer: "Okta",
  },
  {
    name: "Okta Certified Developer",
    issuer: "Okta",
  },
  {
    name: "Okta Certified Administrator",
    issuer: "Okta",
  },
  {
    name: "Okta Certified Consultant",
    issuer: "Okta",
  },
] as const;