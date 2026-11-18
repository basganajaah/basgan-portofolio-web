"use client";

import { Box } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";

import { aboutInterests } from "@/data/about";
import { getLocalizedText, type Locale } from "@/lib/utils";

interface AboutCarouselProps {
  activeIndex: number;
  onChange: (index: number) => void;
  isActive: boolean;
}

export default function AboutCarousel({
  activeIndex,
  onChange,
  isActive,
}: AboutCarouselProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("About");

  const prefersReducedMotion = useReducedMotion();

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const currentInterest = aboutInterests[activeIndex];

  useEffect(() => {
    if (
      !isActive ||
      isHovered ||
      isDragging ||
      prefersReducedMotion === true ||
      aboutInterests.length <= 1
    ) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onChange((activeIndex + 1) % aboutInterests.length);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [
    activeIndex,
    isActive,
    isHovered,
    isDragging,
    prefersReducedMotion,
    onChange,
  ]);

  const handleDragEnd = (info: {
    offset: { x: number };
    velocity: { x: number };
  }) => {
    const threshold = 65;
    const velocityThreshold = 500;

    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      onChange((activeIndex + 1) % aboutInterests.length);
    } else if (
      info.offset.x > threshold ||
      info.velocity.x > velocityThreshold
    ) {
      onChange(
        (activeIndex - 1 + aboutInterests.length) % aboutInterests.length,
      );
    }

    setIsDragging(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      onChange((activeIndex + 1) % aboutInterests.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onChange(
        (activeIndex - 1 + aboutInterests.length) % aboutInterests.length,
      );
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
        height: 360,
        minHeight: 360,
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: "0 18px 20px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s ease",

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-130%",
          zIndex: 2,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          transform: "skewX(-20deg)",
          background:
            "linear-gradient(110deg, transparent, rgba(255,255,255,0.18), transparent)",
          transition: "left 0.75s ease",
        },

        "&:hover::after": {
          left: "160%",
        },

        "&:hover": {
          boxShadow: "0 10px 26px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box
        role="group"
        aria-roledescription="carousel"
        aria-label={t("carouselLabel")}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 0,
          outline: "none",
          cursor: "grab",
          touchAction: "pan-y",

          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.main",
            outlineOffset: 4,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentInterest.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            dragSnapToOrigin
            dragDirectionLock
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => handleDragEnd(info)}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              cursor: "grab",
              touchAction: "pan-y",
            }}
            whileDrag={{ cursor: "grabbing" }}
          >
            <Image
              src={currentInterest.image}
              alt={getLocalizedText(currentInterest.imageAlt, locale)}
              fill
              draggable={false}
              sizes="(max-width: 1200px) 100vw, 40vw"
              style={{
                objectFit: "cover",
                userSelect: "none",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
