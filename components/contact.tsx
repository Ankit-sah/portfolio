"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="section-container mb-20 scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading subtitle="Interested in IAM engineering, full-stack roles, or consulting opportunities? I'd love to connect.">
        Let&apos;s work together
      </SectionHeading>

      <div className="card-surface mx-auto max-w-lg p-8">
        <p className="text-center text-gray-700 dark:text-gray-300">
          Reach me directly at{" "}
          <a
            className="font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
            href="mailto:sah.5ankit@gmail.com"
          >
            sah.5ankit@gmail.com
          </a>{" "}
          or send a message below.
        </p>

        <form
          ref={formRef}
          className="mt-8 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Message sent successfully!");
            formRef.current?.reset();
          }}
        >
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="company-website">Company website</label>
            <input id="company-website" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <input
            className="h-14 rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-white/95"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email address"
          />
          <textarea
            className="my-3 h-44 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-white/95"
            name="message"
            placeholder="Tell me about the role, project, or opportunity..."
            required
            maxLength={5000}
          />
          <SubmitBtn />
          <p className="mt-4 text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            Please include enough context about your role or project for a useful reply.
          </p>
        </form>
      </div>
    </motion.section>
  );
}
