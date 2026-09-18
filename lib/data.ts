import { CgWorkAlt } from "react-icons/cg";
import ztsimg from "@/public/ztsimg.png";
import zpaimg from "@/public/zpaimg.png";
import travelimg from "@/public/travel.png";
import ecomimg from "@/public/ecom.png";


export const links = [
  { name: "Home", hash: "#home" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "IT System Administrator & IAM Engineer",
    location: "ICT Inc. · Remote via Upwork",
    description:
      "Support and improve Okta Identity Engine and Microsoft 365 environments while strengthening secure IT operations.",
    highlights: [
      "Manage Okta Identity Engine administration and identity lifecycle support",
      "Improve Microsoft 365 operations, access controls, and end-user support",
      "Strengthen security protocols and streamline employee onboarding workflows",
      "Deliver responsive, solution-oriented support across business applications",
    ],
    icon: CgWorkAlt,
    date: "Mar 2026 – Present",
  },
  {
    title: "CIAM Developer / Software Developer",
    location: "Anthropic Identity · Kathmandu, Nepal",
    description:
      "Led enterprise IAM delivery across SSO, SCIM, and MFA initiatives for client environments.",
    highlights: [
      "Deployed 100+ Okta SSO connections, cutting manual workflows by 40%",
      "Automated SCIM provisioning for 1,000+ users with enforced MFA policies",
      "Authored 40+ IAM guides and templates, reducing support tickets by 30%",
      "Built reusable SAML templates that shortened implementation time by 25%",
    ],
    icon: CgWorkAlt,
    date: "Jan 2025 – Jun 2025",
  },
  {
    title: "Developer",
    location: "BeyondID · Kathmandu, Nepal",
    description:
      "Built and maintained identity access management solutions for enterprise clients.",
    highlights: [
      "Delivered IAM features with React, Node.js, and MongoDB, improving auth workflows by 35%",
      "Resolved 100+ production issues while maintaining high application uptime",
      "Applied TypeScript and Express to reduce feature delivery time by 15%",
      "Performed root-cause analysis that reduced recurring defects by 40%",
    ],
    icon: CgWorkAlt,
    date: "Mar 2023 – Sep 2024",
  },
  {
    title: "Associate Software Developer",
    location: "BeyondID · Kathmandu, Nepal",
    description:
      "Contributed to IAM systems focused on SSO, identity proofing, and risk analysis.",
    highlights: [
      "Developed React and Node.js IAM modules for SSO and access control",
      "Resolved 100+ bug reports, improving stability and performance by 25%",
      "Wrote clean, tested code that reduced software errors by 20%",
      "Collaborated across teams to shorten debugging cycles by 20%",
    ],
    icon: CgWorkAlt,
    date: "Jul 2021 – Feb 2023",
  },
] as const;

// Updated projectsData
export const projectsData = [
  {
    title: "Chaitanya Loksewa LMS Platform",
    description:
      "Developed the end-to-end frontend for a Loksewa-focused learning platform. Built course discovery, learner progress tracking, dynamic learning content, discussion forums, chat, responsive interfaces, and secure API integrations for academic and public-service exam preparation.",
    tags: ["React", "Next.js", "Tailwind CSS", "React Query", "LMS", "Responsive UI"],
    imageUrl: null,
    liveUrl: "https://chaitanya.solutech.com.np/",
    caseStudy: {
      role: "Frontend developer",
      challenge: "Create an accessible, fast learning experience for Loksewa candidates across devices.",
      approach: "Built responsive course discovery, progress tracking, learning content, discussion, and chat experiences with production API integrations.",
      outcome: "A live learning platform that supports structured preparation for academic and public-service exams.",
    },
  },
  {
    title: "Travel Booking Platform – Secure Web Application",
    description:
      "Architected a secure travel booking platform using Next.js 14 App Router with server components and TypeScript. Implemented Okta-based OIDC authentication via NextAuth.js to secure administrative and booking workflows. Designed and enforced role-based access control (RBAC) across protected routes and server actions. Integrated Stripe Checkout with webhook-driven reconciliation to manage booking payment lifecycles.",
    tags: ["Next.js 14", "TypeScript", "Okta", "NextAuth.js", "Stripe", "Prisma", "MongoDB", "RBAC"],
    imageUrl: travelimg,
    liveUrl: null,
    caseStudy: {
      role: "Full-stack developer",
      challenge: "Protect booking and administrative journeys while keeping payments and access control reliable.",
      approach: "Combined Next.js server components, Okta OIDC, role-based authorization, and Stripe webhook reconciliation.",
      outcome: "A secure booking workflow with controlled access and auditable payment state.",
    },
  },
  {
    title: "Janakpur Art & Craft - Secure E-Commerce Platform",
    description:
      "Designed and developed a secure e-commerce platform with Okta OIDC authentication using NextAuth.js. Implemented role-based access control (RBAC) for admin dashboards and protected API endpoints. Integrated Okta API tokens to support controlled user onboarding and lifecycle management. Built secure checkout and order management workflows using Stripe Checkout and webhook reconciliation.",
    tags: ["Next.js", "Okta", "NextAuth.js", "Stripe", "RBAC", "Prisma", "MongoDB"],
    imageUrl: ecomimg,
    liveUrl: null,
    caseStudy: {
      role: "Full-stack developer",
      challenge: "Deliver secure customer and administrator journeys for an e-commerce platform.",
      approach: "Implemented Okta OIDC, NextAuth.js sessions, RBAC, protected API routes, and Stripe Checkout.",
      outcome: "A production-oriented commerce foundation with secure onboarding and order workflows.",
    },
  },
  {
    title: "BeyondID Integration Network",
    description:
      "Researched and developed a greenfield identity assessment platform using Next.js and Tailwind CSS. Built security model questionnaires, risk categorization workflows, and Prisma-powered MongoDB data operations for identity-management assessments.",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "IAM", "Risk Assessment"],
    imageUrl: ztsimg,
    liveUrl: null,
    caseStudy: {
      role: "IAM-focused software developer",
      challenge: "Turn identity risk discovery into a consistent, actionable assessment process.",
      approach: "Created guided security questionnaires, risk categorization, and Prisma-backed MongoDB workflows.",
      outcome: "A repeatable identity assessment experience for teams evaluating security posture.",
    },
  },
  {
    title: "Zero Trust Security System",
    description:
      "Developed full-stack application with React frontend and Express.js backend with MongoDB. Implemented comprehensive identity access management system with CRUD operations. Built modules for SSO type management, security assessments, and risk factor analysis. Created reporting dashboard for security metrics and compliance tracking.",
    tags: ["React", "Express.js", "MongoDB", "IAM", "SSO", "Zero Trust"],
    imageUrl: zpaimg,
    liveUrl: null,
    caseStudy: {
      role: "Full-stack developer",
      challenge: "Centralize SSO, assessment, and risk-management processes in one application.",
      approach: "Built React and Express modules with MongoDB-backed CRUD, reporting, and access-management workflows.",
      outcome: "A consolidated dashboard for identity security operations and compliance reporting.",
    },
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
  "Microsoft 365",
  "Active Directory",
  "System Administration",
  "Technical Support",
  "Docker",
  "Git",
  "CI/CD",
] as const;

export const skillsCategories = [
  {
    title: "Identity & Security",
    skills: ["Okta", "Auth0", "SAML", "SCIM", "MFA", "Zero Trust", "RBAC"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js 15", "TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    skills: ["AWS S3", "Docker", "Git", "CI/CD", "Microsoft 365", "Active Directory"],
  },
] as const;

export const certificationsData = [
  {
    name: "Okta Certified Professional",
    issuer: "Okta",
    logo: "/brands/okta.svg",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/05f101fc-a871-4a3c-8332-5dffc36b7568",
    validity: "Valid through Sep 2027",
  },
  {
    name: "Okta Certified Administrator",
    issuer: "Okta",
    logo: "/brands/okta.svg",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/fbc03e7e-d35c-4384-a702-acc622b46f97",
    validity: "Valid through Sep 2027",
  },
  {
    name: "Okta Certified Consultant",
    issuer: "Okta",
    logo: "/brands/okta.svg",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/d1b56c1e-0856-4527-82bd-5077237fe428",
    validity: "Valid through Sep 2027",
  },
  {
    name: "Okta Workforce Identity Product Specialized",
    issuer: "Okta",
    logo: "/brands/okta.svg",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/422c7cd3-fc56-41e1-987b-1c34d606da43",
    validity: "No expiration",
  },
  {
    name: "Auth0 Consumer Application Prototype Champion",
    issuer: "Auth0",
    logo: "/brands/auth0.svg",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/96bd2e3a-149e-4aa8-9cd7-d5666c1484e5",
    validity: "No expiration",
  },
] as const;
