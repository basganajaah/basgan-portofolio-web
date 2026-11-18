"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedText, type Locale } from "@/lib/utils";
import { useGalleryImageErrors } from "@/hooks/useImageError";
import ProjectImageFallback from "@/components/atoms/ProjectImageFallback";
import type { Project } from "@/types/project";
import RoleChip from "@/components/atoms/RoleChip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";

interface AcademicProjectCardProps {
  project: Project;
  isActive?: boolean;
}

export default function AcademicProjectCard({
  project,
  isActive = false,
}: AcademicProjectCardProps) {
  const { isError, handleError } = useGalleryImageErrors();
  const locale = useLocale() as Locale;
  const t = useTranslations("Projects");

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        p: { xs: 1.75, sm: 2, md: 2.5 },
        overflow: "hidden",
        border: "2px solid",
        borderColor: "primary.main",
        borderRadius: 2.5,
        bgcolor: "background.paper",
        transition: "border-color 300ms ease",
        boxShadow: 4,
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
      <Stack spacing={{ xs: 0.75, md: 1.25 }} sx={{ position: "relative" }}>
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
            borderRadius: 1,
            bgcolor: "#eef2ff",
            color: "text.primary",
          }}
        >
          {project.gallery?.[0] && !isError(project.id) ? (
            <Box
              component="img"
              src={project.gallery[0]}
              alt={getLocalizedText(project.title, locale)}
              loading="lazy"
              onError={() => handleError(project.id)}
              sx={{
                display: "block",
                top: "-100px",
                width: "100%",
                height: "100%",
                objectFit: { xs: "contain", md: "fill" },
                aspectRatio: "7 / 2",
              }}
            />
          ) : (
            <ProjectImageFallback
              title={getLocalizedText(project.title, locale)}
            />
          )}
        </Box>

        {/* Project information */}
        <Stack spacing={0.25} sx={{ minHeight: 0 }}>
          <Typography
            sx={{
              fontWeight: 700,
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
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: {
                xs: "0.55rem",
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

      {/* Project footer */}
      <Stack
        spacing={{ xs: 0.75, sm: 1 }}
        sx={{
          position: "relative",
          mt: "auto",
          flexShrink: 0,
        }}
      >
        {/* Technologies */}
        <Stack
          direction="row"
          sx={{
            flexWrap: { xs: "nowrap", sm: "wrap" },
            gap: { xs: 0.35, sm: 0.5 },
            maxHeight: { xs: 28, sm: "none" },
            overflowX: { xs: "auto", sm: "visible" },
            overflowY: "hidden",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "& > *": {
              flexShrink: 0,
            },
          }}
        >
          {project.technologies.map((technology) => (
            <RoleChip key={technology} label={technology} />
          ))}
        </Stack>

        {/* Project links */}
        {(project.links?.github || project.links?.demo) && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{
              alignItems: {
                xs: "stretch",
                sm: "flex-start",
              },
            }}
          >
            {project.links?.github && (
              <Button
                component="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="contained"
                startIcon={<GitHubIcon />}
                sx={{
                  width: { xs: "100%", sm: "fit-content" },
                  borderRadius: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#363636",
                    color: "#eef2ff",
                  },
                }}
              >
                GitHub
              </Button>
            )}

            {project.links?.demo && (
              <Button
                component="a"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="outlined"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  width: { xs: "100%", sm: "fit-content" },
                  borderRadius: 1,
                  border: "2px solid",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#171717",
                    borderColor: "text.primary",
                    color: "#eef2ff",
                  },
                }}
              >
                {t("view-demo")}
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
