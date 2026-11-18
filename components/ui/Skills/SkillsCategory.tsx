"use client";

import { Box, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import type { IconType } from "react-icons";

import { FiCode, FiLayers, FiTool } from "react-icons/fi";

import { skillIcons } from "@/components/icons/CustomIcons";
import RoleChip from "@/components/atoms/RoleChip";
import type { SkillCategory, SkillCategoryId } from "@/types/skill";

const categoryIcons: Record<SkillCategoryId, IconType> = {
  languages: FiCode,
  frameworks: FiLayers,
  tools: FiTool,
};

interface SkillCategoryProps {
  category: SkillCategory;
  accentColor?: string;
}

export default function SkillsCategory({
  category,
  accentColor,
}: SkillCategoryProps) {
  const t = useTranslations("Skills");
  const theme = useTheme();

  const CategoryIcon = categoryIcons[category.id];
  const accent = accentColor ?? theme.palette.primary.main;

  if (category.skills.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        minWidth: 0,
      }}
    >
      {/* Category heading */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CategoryIcon size={21} color={accent} />

        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.015em",
          }}
        >
          {t(`categories.${category.id}`)}
        </Typography>
      </Box>

      {/* Skill chips */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {category.skills.map((skill) => {
          const SkillIcon = skillIcons[skill] ?? FiCode;

          return (
            <RoleChip
              key={skill}
              label={skill}
              icon={<SkillIcon size={16} />}
              variant="outlined"
              size="small"
              sx={{
                height: 31,
                border: "1px solid",
                borderColor: alpha(accent, 0.3),
                bgcolor: alpha(accent, 0.055),
                color: "text.primary",
                fontWeight: 500,
                fontSize: { xs: "0.65rem", md: "0.75rem" },
                borderRadius: 1.5,
                transition: "all 0.2s ease",

                "& .MuiChip-icon": {
                  color: accent,
                  ml: 0.8,
                  mr: -0.3,
                },

                "&:hover": {
                  borderColor: accent,
                  bgcolor: alpha(accent, 0.12),
                  transform: "translateY(-2px)",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
