"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedText, type Locale } from "@/lib/utils";

import type { Project } from "@/types/project";

interface AcademicProjectCarouselProps {
  projects: Project[];
}

const MotionBox = motion.create(Box);

export default function AcademicProjectCarousel({
  projects,
}: AcademicProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const locale = useLocale() as Locale;
  const t = useTranslations("Projects");

  const total = projects.length;

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
                color: "#ffffff",
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
                color: "#ffffff",
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
            {projects.map((project, index) => {
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
                  key={project.id}
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
                  animate={{
                    x,
                    z,
                    rotateY,
                    scale,
                    opacity,
                  }}
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
                  {/* Project card */}
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      p: { xs: 1.75, sm: 2, md: 2.5 },
                      overflow: "hidden",
                      border: "4px solid",
                      borderColor: "text.secondary",
                      borderRadius: 2.5,
                      bgcolor: "background.paper",
                      transition: "border-color 300ms ease",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        background: isActive
                          ? "linear-gradient(135deg, rgba(255,255,255,0.55), transparent 45%)"
                          : "none",
                      },
                    }}
                  >
                    <Stack
                      spacing={{ xs: 1, md: 1.25 }}
                      sx={{ position: "relative" }}
                    >
                      {/* Card header */}
                      <Stack
                        direction="row"
                        sx={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            color: "text.secondary",
                            fontSize: "0.6rem",
                          }}
                        >
                          {t("academic")}
                        </Typography>

                        {project.period && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.secondary",
                              fontWeight: 600,
                              fontSize: "0.65rem",
                            }}
                          >
                            {project.period}
                          </Typography>
                        )}
                      </Stack>

                      {/* Project image */}
                      <Box
                        sx={{
                          height: {
                            xs: 115,
                            sm: 140,
                            md: 165,
                          },
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 1.5,
                          bgcolor: "action.hover",
                          color: "text.primary",
                        }}
                      >
                        {project.gallery?.[0] ? (
                          <Box
                            component="img"
                            src={project.gallery[0]}
                            alt={getLocalizedText(project.title, locale)}
                            loading="lazy"
                            sx={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <Typography
                            sx={{
                              fontSize: { xs: 36, md: 48 },
                              fontWeight: 800,
                              letterSpacing: "-0.08em",
                              opacity: 0.5,
                            }}
                          >
                            {getLocalizedText(project.title, locale)
                              .slice(0, 2)
                              .toUpperCase()}
                          </Typography>
                        )}
                      </Box>

                      {/* Project information */}
                      <Stack spacing={0.65}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            letterSpacing: "-0.04em",
                            lineHeight: 1.2,
                            fontSize: {
                              xs: "1rem",
                              sm: "1.25rem",
                              md: "1.5rem",
                            },
                          }}
                        >
                          {getLocalizedText(project.title, locale)}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.6,
                            fontSize: {
                              xs: "0.7rem",
                              sm: "0.75rem",
                            },
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {getLocalizedText(project.description, locale)}
                        </Typography>
                      </Stack>
                    </Stack>

                    {/* Technologies */}
                    <Stack
                      direction="row"
                      sx={{
                        position: "relative",
                        flexWrap: "wrap",
                        gap: 0.65,
                        mt: 1,
                      }}
                    >
                      {project.technologies.slice(0, 5).map((technology) => (
                        <Box
                          key={technology}
                          sx={{
                            px: 0.9,
                            py: 0.4,
                            borderRadius: 1,
                            bgcolor: "action.hover",
                            fontSize: "0.6rem",
                            fontWeight: 600,
                          }}
                        >
                          {technology}
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </MotionBox>
              );
            })}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
