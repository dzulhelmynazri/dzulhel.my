"use client";

import { motion } from "motion/react";

export const AnimatedPromptLeft = () => {
  return (
    <motion.div
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-muted-foreground">
        <span className="text-[10px] md:hidden">TO VISIT THE BLOG</span>
        <span className="hidden md:inline">TO VISIT THE BLOG</span>
      </p>
    </motion.div>
  );
};
