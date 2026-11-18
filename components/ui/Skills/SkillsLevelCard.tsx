"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { SyntheticEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FiAward,
  FiBookOpen,
  FiMinus,
  FiPlus,
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
      // Keep at least one accordion expanded.
      if (isExpanded) {
        setExpanded(levelId);
      }
    };

  return (
    <Card
      sx={{
        width: "100%",
        overflow: "hidden",
        border: 0,
        borderRadius: 0,
        bgcolor: "transparent",
        boxShadow: "none",
      }}
    >
      {levels.map((level) => {
        const config = levelConfig[level.id];
        const accent = theme.palette[config.color].main;
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

              "&:not(:last-child)": {
                borderBottom: "2px solid",
                borderColor: "text.primary",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isExpanded ? accent : "text.primary",
                    transition: "color 0.2s ease",
                  }}
                >
                  {isExpanded ? <FiMinus size={19} /> : <FiPlus size={19} />}
                </Box>
              }
              sx={{
                minHeight: 68,
                px: 0,
                py: 0,

                "& .MuiAccordionSummary-content": {
                  my: 1.5,
                  mx: 0,
                },

                "&.Mui-expanded": {
                  minHeight: 68,
                },

                "& .MuiAccordionSummary-content.Mui-expanded": {
                  my: 1.5,
                },

                "& .MuiAccordionSummary-expandIconWrapper": {
                  transform: "none",
                  ml: 1,
                },
              }}
            >
              <Box sx={{ minWidth: 0, pr: 1 }}>
                <Typography
                  component="div"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    lineHeight: 1.7,
                    color: "text.primary",
                  }}
                >
                  {before}
                  <Box
                    component="span"
                    sx={{
                      display: "inline",
                      color: accent,
                      fontWeight: 800,
                    }}
                  >
                    {highlight}
                  </Box>
                  {after}
                </Typography>

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
                overflow: "hidden",
                p: 0,
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
                        p: 0,
                        pb: 2,
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
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  rotate: -15,
                  y: 20,
                }}
                animate={
                  isExpanded
                    ? {
                        opacity: 0.28,
                        scale: 1,
                        rotate: 0,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        scale: 0.6,
                        rotate: -15,
                        y: 20,
                      }
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
                  opacity: 0.5,
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
