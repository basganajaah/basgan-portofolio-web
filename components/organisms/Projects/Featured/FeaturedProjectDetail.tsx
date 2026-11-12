"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useLocale, useTranslations } from "next-intl";
import type { Project } from "@/types/project";
import TechStackChip from "@/components/atoms/TechStackChip";
import RoleChip from "@/components/atoms/RoleChip";

interface FeaturedProjectDetailProps {
  project: Project;
}

export default function FeaturedProjectDetail({
  project,
}: FeaturedProjectDetailProps) {
  const locale = useLocale() as "id" | "en";
  const t = useTranslations("Projects");

  const localized = (value: { id: string; en: string }) => value[locale];

  return (
    <Stack spacing={{ xs: 2.5, md: 3 }}>
      <Divider
        sx={{
          flex: 1,
          borderBottomWidth: 2,
          borderColor: "#B2BEB5",
        }}
      />

      {/* Description & Contributions */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 5 },
        }}
      >
        {/* Description */}
        <Stack direction={"column"} sx={{ gap: 1 }}>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 1.5, fontWeight: 700 }}>
              {locale === "id" ? "Tentang Proyek" : "About the Project"}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.5,
                color: "text.secondary",
              }}
            >
              {localized(project.description)}
            </Typography>

            {/* Problem Statement */}
            {project.notes && (
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  color: "text.secondary",
                  mt: 4,
                  fontStyle: "italic",
                }}
              >
                {localized(project.notes)}
              </Typography>
            )}
          </Box>
        </Stack>

        {/* Contributions */}
        {project.contributions && project.contributions.length > 0 && (
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 1.5, fontWeight: 700 }}>
              {t("responsibilities")}
            </Typography>

            <Stack spacing={1.2}>
              {project.contributions.map((contribution, contributionIndex) => (
                <Stack
                  key={`${project.id}-contribution-${contributionIndex}`}
                  direction="row"
                  spacing={1.25}
                  sx={{ alignItems: "center" }}
                >
                  <CircleIcon
                    sx={{
                      width: 7,
                      height: 7,
                      minWidth: 7,
                      minHeight: 7,
                      color: "text.primary",
                      mt: "7px",
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                      color: "text.secondary",
                    }}
                  >
                    {localized(contribution)}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      <Divider
        sx={{
          flex: 1,
          borderBottomWidth: 2,
          borderColor: "#B2BEB5",
        }}
      />

      {/* Roles & Technologies */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 2.5, md: 5 },
        }}
      >
        {/* Roles */}
        {project.roles && project.roles.length > 0 && (
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 1.5, fontWeight: 700 }}>
              {locale === "id" ? "Peran" : "Roles"}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {project.roles.map((role, roleIndex) => (
                <RoleChip
                  key={`${project.id}-role-${roleIndex}`}
                  label={role}
                />
              ))}
            </Stack>
          </Box>
        )}

        {/* Technologies */}
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ mb: 1.5, fontWeight: 700 }}>
            {t("technologies")}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {project.technologies.map((technology) => (
              <TechStackChip key={technology} label={technology} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
