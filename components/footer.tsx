import React from "react";

export default function Footer() {
  return (
    <footer className="section-container mb-10 border-t border-gray-200 pt-8 text-center dark:border-white/10">
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        Ankit Kumar Sah
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        IAM & Full-Stack Developer · Kathmandu, Nepal
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
        <a
          href="mailto:sah.5ankit@gmail.com"
          className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-kumar-sah-419525149/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Ankit-sah"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="/CV.pdf"
          download
          className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          Resume
        </a>
      </div>
      <small className="mt-6 block text-xs text-gray-500 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Ankit Kumar Sah. All rights reserved.
      </small>
    </footer>
  );
}
