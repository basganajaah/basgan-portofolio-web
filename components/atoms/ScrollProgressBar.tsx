"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, (value) => `${value * 100}vw`);
  const opacity = useTransform(scrollYProgress, (value) => (value > 0 ? 1 : 0));

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width,
        height: "3px",
        opacity,
        background:
          "linear-gradient(90deg, #737373 0%, #171717 75%, #000000 100%)",
        zIndex: 99999,
        pointerEvents: "none",
      }}
    />
  );
}
