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
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
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
          overflow: "hidden",
          perspective: "1400px",
          py: { xs: 2, md: 4 },
        }}
      >
        {/* Carousel stage */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 450, sm: 490, md: 540 },
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

            const x = position * (isMobile ? 42 : 250);
            const scale = isActive ? 1 : isMobile ? 0.82 : 0.86;
            const z = isActive ? 100 : -100;
            const opacity = isActive ? 1 : 0.58;

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
                  scale,
                  opacity,
                  filter: isActive
                    ? "drop-shadow(0 12px 18px rgba(0, 0, 0, 0.025))"
                    : "none",
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
                  width: { xs: "82%", sm: "72%", md: "62%" },
                  maxWidth: 720,
                  height: "100%",
                  zIndex: isActive ? 3 : 1,
                  cursor: isActive ? "grab" : "pointer",
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  outline: "none",
                  touchAction: "pan-y",
                  willChange: "transform, opacity, filter",
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
                    p: { xs: 2.5, sm: 3.5, md: 4 },
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: isActive ? "rgba(255,255,255,0.8)" : "divider",
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    boxShadow: isActive
                      ? `
                        0 10px 20px rgba(0, 0, 0, 0.025),
                        0 25px 50px rgba(0, 0, 0, 0.045),
                        0 45px 80px rgba(0, 0, 0, 0.035)
                      `
                      : `
                        0 12px 30px rgba(0, 0, 0, 0.035),
                        0 25px 55px rgba(0, 0, 0, 0.025)
                      `,
                    transition:
                      "box-shadow 300ms ease, border-color 300ms ease",

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
                    spacing={{ xs: 1.5, md: 2 }}
                    sx={{
                      position: "relative",
                    }}
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
                          }}
                        >
                          {project.period}
                        </Typography>
                      )}
                    </Stack>

                    {/* Project image */}
                    <Box
                      sx={{
                        height: { xs: 150, sm: 190, md: 230 },
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
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
                            fontSize: { xs: 48, md: 72 },
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
                    <Stack spacing={1}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          letterSpacing: "-0.04em",
                          lineHeight: 1.2,
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.6rem",
                            md: "2rem",
                          },
                        }}
                      >
                        {getLocalizedText(project.title, locale)}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.8,
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
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    {project.technologies.slice(0, 5).map((technology) => (
                      <Box
                        key={technology}
                        sx={{
                          px: 1.25,
                          py: 0.6,
                          borderRadius: 1,
                          bgcolor: "action.hover",
                          fontSize: "0.7rem",
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

        {/* Carousel navigation */}
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            mt: 3,
          }}
        >
          <IconButton
            aria-label={t("previous-project")}
            onClick={() => goTo(-1)}
            disabled={total <= 1}
            size="large"
            sx={{
              width: 44,
              height: 44,
              border: "2px solid",
              borderColor: "text.primary",
              color: "text.primary",
              transition: "all 200ms ease",
              mt: 1,
              "&:hover": {
                bgcolor: "action.hover",
                borderColor: "text.primary",
              },
            }}
          >
            <ChevronLeftRounded />
          </IconButton>

          <Typography
            variant="caption"
            sx={{
              mt: 1,
              fontSize: { xs: 14, md: 16 },
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {String(activeIndex + 1).padStart(2)} / {String(total).padStart(2)}
          </Typography>

          <IconButton
            aria-label={t("next-project")}
            onClick={() => goTo(1)}
            disabled={total <= 1}
            size="large"
            sx={{
              width: 44,
              height: 44,
              border: "2px solid",
              borderColor: "text.primary",
              color: "text.primary",
              transition: "all 200ms ease",
              mt: 1,
              "&:hover": {
                bgcolor: "action.hover",
                borderColor: "text.primary",
              },
            }}
          >
            <ChevronRightRounded />
          </IconButton>
        </Stack>
      </Box>
    </motion.div>
  );
}
