"use client";

import { motion } from "motion/react";

export const AnimatedPromptRight = () => {
  return (
    <motion.div
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-muted-foreground">
        <span className="text-[10px] md:hidden">PRESS THE BUTTON</span>
        <span className="hidden md:inline">
          PRESS{" "}
          <kbd className="inline-flex size-5 max-h-full items-center justify-center rounded border bg-muted px-1 font-mono text-[0.625rem] font-medium text-foreground">
            T
          </kbd>{" "}
          NOW
        </span>
      </p>
    </motion.div>
  );
};
