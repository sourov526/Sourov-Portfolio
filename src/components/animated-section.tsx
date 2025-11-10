"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  unstyled?: boolean;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
  unstyled = false,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={clsx(
        "w-full scroll-mt-28 md:scroll-mt-36",
        unstyled
          ? "transition"
          : "rounded-3xl border border-white/10 bg-[color:var(--card)] p-6 backdrop-blur-md transition md:p-10",
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
}
