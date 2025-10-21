"use client";

import { motion } from "motion/react";

export const AnimatedPrompt = () => {
  return (
    <motion.div
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg text-muted-foreground">
        <span className="md:hidden">Press the button to get started</span>
        <span className="hidden text-xs leading-none md:inline">
          Press{" "}
          <kbd className="inline-flex size-4 max-h-full items-center justify-center rounded border bg-muted px-1 font-mono text-[0.625rem] font-medium text-foreground">
            T
          </kbd>{" "}
          to get <br /> started
        </span>
      </p>
    </motion.div>
  );
};
