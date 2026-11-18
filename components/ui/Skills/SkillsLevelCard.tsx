"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { SyntheticEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FiAward,
  FiBookOpen,
  FiChevronDown,
  FiTrendingUp,
} from "react-icons/fi";
import type { IconType } from "react-icons";

import type { SkillLevel } from "@/types/skill";
import SkillsCategory from "./SkillsCategory";

const levelConfig = {
  strong: {
    color: "success",
    Icon: FiAward,
  },
  intermediate: {
    color: "info",
    Icon: FiTrendingUp,
  },
  basic: {
    color: "warning",
    Icon: FiBookOpen,
  },
} as const satisfies Record<
  SkillLevel["id"],
  { color: "success" | "info" | "warning"; Icon: IconType }
>;

interface SkillsLevelCardProps {
  levels: SkillLevel[];
}

export default function SkillsLevelCard({ levels }: SkillsLevelCardProps) {
  const t = useTranslations("Skills");
  const theme = useTheme();

  // Strong is expanded by default.
  const [expanded, setExpanded] = useState<string>("strong");

  const handleChange =
    (levelId: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      // Pastikan minimal 1 accordion selalu aktif (tidak bisa ditutup semua)
      if (isExpanded) {
        setExpanded(levelId);
      }
    };

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 3,
        border: "4px solid",
        borderColor: "text.primary",
        bgcolor: "background.paper",
        boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
      }}
    >
      {levels.map((level) => {
        const config = levelConfig[level.id];
        const accent = theme.palette[config.color].main;
        const primaryText = theme.palette.text.primary;
        const LevelIcon = config.Icon;
        const isExpanded = expanded === level.id;

        const before = t(`levels.${level.id}.before`);
        const highlight = t(`levels.${level.id}.highlight`);
        const after = t(`levels.${level.id}.after`);
        const description = t(`levels.${level.id}.description`);

        return (
          <Accordion
            key={level.id}
            expanded={isExpanded}
            onChange={handleChange(level.id)}
            disableGutters
            elevation={0}
            square
            sx={{
              position: "relative",
              bgcolor: "transparent",
              border: 0,
              borderRadius: 0,
              boxShadow: "none",
              overflow: "hidden",

              "&::before": {
                display: "none",
              },

              // Gradient highlight for the active level.
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(
                  90deg,
                  ${alpha(accent, 0)} 0%,
                  ${alpha(accent, 0.45)} 15%,
                  ${accent} 40%,
                  ${primaryText} 70%,
                  ${alpha(primaryText, 0.15)} 100%
                )`,
                opacity: isExpanded ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
                zIndex: 2,
              },

              // Soft glow without creating another border.
              ...(isExpanded && {
                background: `linear-gradient(
                  180deg,
                  ${alpha(accent, theme.palette.mode === "dark" ? 0.09 : 0.045)} 0%,
                  transparent 35%
                )`,
              }),

              transition: "background 0.3s ease",

              // Only one separator between accordion items.
              "&:not(:last-child)": {
                borderBottom: "1px solid",
                borderColor: "divider",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <FiChevronDown size={20} color={theme.palette.text.secondary} />
              }
              sx={{
                minHeight: 68,
                px: { xs: 2, md: 2.5 },

                "& .MuiAccordionSummary-content": {
                  my: 1.5,
                },

                "&.Mui-expanded": {
                  minHeight: 68,
                },

                "& .MuiAccordionSummary-content.Mui-expanded": {
                  my: 1.5,
                },
              }}
            >
              <Box sx={{ minWidth: 0, pr: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  {before && (
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        lineHeight: 1.7,
                        color: "text.primary",
                      }}
                    >
                      {before}
                    </Typography>
                  )}

                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      px: 0.8,
                      py: 0.15,
                      borderRadius: 1,
                      color: accent,
                      bgcolor: alpha(
                        accent,
                        theme.palette.mode === "dark" ? 0.2 : 0.12,
                      ),
                      fontWeight: 800,
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    {highlight}
                  </Box>

                  {after && (
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        lineHeight: 1.7,
                        color: "text.primary",
                      }}
                    >
                      {after}
                    </Typography>
                  )}
                </Box>

                <Typography
                  component="p"
                  variant="caption"
                  sx={{
                    mt: 0.35,
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.7rem", md: "0.75rem" },
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                position: "relative",
                px: { xs: 2, md: 2.5 },
                pt: 0.5,
                pb: 3,
                overflow: "hidden",
              }}
            >
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        pr: { xs: 0, sm: 1 },
                        pb: 1,
                      }}
                    >
                      {level.categories.map((category) => (
                        <SkillsCategory
                          key={category.id}
                          category={category}
                          accentColor={accent}
                        />
                      ))}
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative level icon */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.6, rotate: -15, y: 20 }}
                animate={
                  isExpanded
                    ? { opacity: 0.15, scale: 1, rotate: 0, y: 0 }
                    : { opacity: 0, scale: 0.6, rotate: -15, y: 20 }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  right: { xs: 12, md: 20 },
                  bottom: 10,
                  color: accent,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                <LevelIcon size={110} />
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Card>
  );
}
