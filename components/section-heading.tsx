import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  subtitle?: string;
};

export default function SectionHeading({
  children,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-gradient">{children}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
