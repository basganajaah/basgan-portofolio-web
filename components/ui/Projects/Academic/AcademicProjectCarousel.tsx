"use client";

import {
  Children,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import type { Project } from "@/types/project";
import AcademicProjectCard from "./AcademicProjectCard";

interface AcademicProjectCarouselProps {
  children: ReactNode;
}

const MotionBox = motion.create(Box);

export default function AcademicProjectCarousel({
  children,
}: AcademicProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("Projects");

  const items = Children.toArray(children);
  const total = items.length;

  const goTo = useCallback(
    (direction: number) => {
      if (total <= 1) return;
      setActiveIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total <= 1 || isPaused) return;

    const intervalId = window.setInterval(() => {
      goTo(1);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [goTo, isPaused, total]);

  if (total === 0) return null;

  const getRelativePosition = (index: number) => {
    let position = index - activeIndex;
    if (position > total / 2) position -= total;
    if (position < -total / 2) position += total;
    return position;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          const nextTarget = event.relatedTarget as Node | null;
          if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
            setIsPaused(false);
          }
        }}
        sx={{
          width: "100%",
          overflow: "clip",
          py: { xs: 4, md: 5 },
        }}
      >
        {/* Carousel wrapper */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            perspective: "1200px",
          }}
        >
          {/* Previous button */}
          <IconButton
            aria-label={t("previous-project")}
            onClick={() => goTo(-1)}
            disabled={total <= 1}
            size="large"
            sx={{
              position: "absolute",
              left: { xs: 2, sm: 4, md: 6 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 5,
              width: { xs: 34, sm: 40 },
              height: { xs: 34, sm: 40 },
              bgcolor: "background.paper",
              color: "text.primary",
              border: "2px solid",
              "&:hover": {
                bgcolor: "text.primary",
                color: "#eef2ff",
                borderColor: "text.primary",
              },
            }}
          >
            <ChevronLeftRounded />
          </IconButton>

          {/* Next button */}
          <IconButton
            aria-label={t("next-project")}
            onClick={() => goTo(1)}
            disabled={total <= 1}
            size="large"
            sx={{
              position: "absolute",
              right: { xs: 2, sm: 4, md: 6 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 5,
              width: { xs: 34, sm: 40 },
              height: { xs: 34, sm: 40 },
              borderColor: "divider",
              bgcolor: "background.paper",
              color: "text.primary",
              border: "2px solid",
              "&:hover": {
                bgcolor: "text.primary",
                color: "#eef2ff",
                borderColor: "text.primary",
              },
            }}
          >
            <ChevronRightRounded />
          </IconButton>

          {/* Carousel stage */}
          <Box
            sx={{
              position: "relative",
              height: { xs: 370, sm: 400, md: 430 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformStyle: "preserve-3d",
            }}
          >
            {items.map((item, index) => {
              const position = getRelativePosition(index);
              if (Math.abs(position) > 1) return null;

              const isActive = position === 0;
              const x = position * (isMobile ? 65 : 290);
              const scale = isActive
                ? isMobile
                  ? 0.92
                  : 1
                : isMobile
                  ? 0.74
                  : 0.82;
              const z = isActive ? 100 : -120;
              const rotateY = position * -8;
              const opacity = isActive ? 1 : 0.55;

              return (
                <MotionBox
                  key={index}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  dragMomentum={false}
                  onDragStart={() => setIsPaused(true)}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) goTo(1);
                    if (info.offset.x > 50) goTo(-1);
                    setIsPaused(false);
                  }}
                  onClick={() => {
                    if (!isActive) goTo(position);
                  }}
                  animate={{ x, z, rotateY, scale, opacity }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                    mass: 0.9,
                  }}
                  whileHover={isActive ? { scale: 1.015 } : undefined}
                  sx={{
                    position: "absolute",
                    width: {
                      xs: "74%",
                      sm: "68%",
                      md: "58%",
                    },
                    maxWidth: 620,
                    height: "100%",
                    zIndex: isActive ? 3 : 1,
                    cursor: isActive ? "grab" : "pointer",
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    outline: "none",
                    touchAction: "pan-y",
                    willChange: "transform, opacity",
                    pointerEvents: "auto",
                  }}
                >
                  {Children.map(item, (child) =>
                    child && typeof child === "object" && "props" in child ? (
                      <AcademicProjectCard
                        {...(child.props as { project: Project })}
                        isActive={isActive}
                      />
                    ) : (
                      child
                    ),
                  )}
                </MotionBox>
              );
            })}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
