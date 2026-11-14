"use client";

import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import type { Project } from "@/types/project";
import FeaturedProjectGallery from "./FeaturedProjectGallery";
import FeaturedProjectDetail from "./FeaturedProjectDetail";
import { getLocalizedText, type Locale } from "@/lib/utils";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Projects");

  const linkButtonSx = {
    borderRadius: "9px",
    px: 1.75,
    py: 0.75,
    fontSize: "0.8rem",
    textTransform: "none" as const,
    fontWeight: 600,
    whiteSpace: "nowrap" as const,
  };

  return (
    <Box
      component={motion.article}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: "easeOut" }}
      sx={{ minWidth: 0 }}
    >
      <Stack spacing={{ xs: 2.5, md: 3 }}>
        {/* Project Heading */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              mt: 1.5,
              fontSize: { xs: "1.65rem", md: "2.35rem" },
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.2,
            }}
          >
            {getLocalizedText(project.title, locale)}
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            useFlexGap
            sx={{
              alignItems: "center",
              mt: 1,
              flexWrap: "wrap",
              rowGap: 1.5,
            }}
          >
            {project.context && (
              <Typography sx={{ color: "text.secondary" }}>
                {getLocalizedText(project.context, locale)}
              </Typography>
            )}

            {project.context && project.organization && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderRightWidth: 2,
                  borderColor: "text.secondary",
                  opacity: 0.6,
                  height: "1em",
                  alignSelf: "center",
                }}
              />
            )}

            {project.organization && (
              <Typography sx={{ color: "text.secondary" }}>
                {getLocalizedText(project.organization, locale)}
              </Typography>
            )}

            {(project.organization || project.context) && project.teamSize && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderRightWidth: 2,
                  borderColor: "text.secondary",
                  opacity: 0.6,
                  height: "1em",
                  alignSelf: "center",
                }}
              />
            )}

            {project.teamSize && (
              <Stack
                direction="row"
                spacing={0.6}
                sx={{ alignItems: "center" }}
              >
                <GroupsOutlinedIcon
                  sx={{ fontSize: 28, color: "text.secondary", pr: "6px" }}
                />
                <Typography sx={{ color: "text.secondary" }}>
                  {project.teamSize} {t("team")}
                </Typography>
              </Stack>
            )}

            {(project.organization || project.context || project.teamSize) &&
              project.period && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderRightWidth: 2,
                    borderColor: "text.secondary",
                    opacity: 0.6,
                    height: "1em",
                    alignSelf: "center",
                  }}
                />
              )}

            {project.period && (
              <Typography sx={{ color: "text.secondary" }}>
                {project.period}
              </Typography>
            )}

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                ml: { xs: 0, md: "auto" },
              }}
            >
              {project.links?.github && (
                <Button
                  component="a"
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    ...linkButtonSx,
                    bgcolor: "text.primary",
                    color: "background.paper",
                    "&:hover": { bgcolor: "grey.800" },
                  }}
                >
                  GitHub
                </Button>
              )}

              {project.links?.gitlab && (
                <Button
                  component="a"
                  href={project.links.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    ...linkButtonSx,
                    bgcolor: "text.primary",
                    color: "background.paper",
                    "&:hover": { bgcolor: "grey.800" },
                  }}
                >
                  GitLab
                </Button>
              )}

              {project.links?.demo && (
                <Button
                  component="a"
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    ...linkButtonSx,
                    border: "2px solid",
                    borderColor: "text.secondary",
                    color: "text.primary",
                    "&:hover": {
                      bgcolor: "#171717",
                      borderColor: "text.primary",
                      color: "#ffffff",
                    },
                  }}
                >
                  {t("view-demo")}
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>

        <FeaturedProjectGallery project={project} />

        <FeaturedProjectDetail project={project} />
      </Stack>
    </Box>
  );
}
