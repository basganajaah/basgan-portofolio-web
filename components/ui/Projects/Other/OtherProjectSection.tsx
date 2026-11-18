"use client";

import type { Project } from "@/types/project";
import { Box, Stack, Grid, Typography, Button, Divider } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import {
  getLocalizedText,
  type Locale,
  itemVariants,
  sectionVariants,
} from "@/lib/utils";
import { useGalleryImageErrors } from "@/hooks/useImageError";
import ProjectImageFallback from "@/components/atoms/ProjectImageFallback";
import RoleChip from "@/components/atoms/RoleChip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "motion/react";

interface OtherProjectSectionProps {
  project: Project;
}

export default function OtherProjectSection({
  project,
}: OtherProjectSectionProps) {
  const { isError, handleError } = useGalleryImageErrors();
  const locale = useLocale() as Locale;
  const t = useTranslations("Projects");

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Box>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid size={{ xs: 12, md: 2 }}>
            {project.links?.github && (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Box
                  component="a"
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                    overflow: "hidden",
                    borderRadius: 1,

                    "&:hover .github-image": {
                      opacity: 0.4,
                    },

                    "&:hover .github-overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  {project.gallery?.[0] && !isError(project.id) ? (
                    <Box
                      component="img"
                      className="github-image"
                      src={project.gallery[0]}
                      alt={getLocalizedText(project.title, locale)}
                      loading="lazy"
                      onError={() => handleError(project.id)}
                      sx={{
                        width: "fit-content",
                        height: "fit-content",
                        border: "2px solid",
                        borderColor: "text.primary",
                        borderRadius: 1,
                        objectFit: "contain",
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  ) : (
                    <ProjectImageFallback
                      title={getLocalizedText(project.title, locale)}
                    />
                  )}

                  <Stack
                    className="github-overlay"
                    direction="row"
                    spacing={0.5}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#eef2ff",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}
                  >
                    <GitHubIcon
                      fontSize="small"
                      sx={{ color: "text.primary" }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 12,
                        color: "text.primary",
                      }}
                    >
                      GitHub
                    </Typography>
                    <ArrowOutwardIcon
                      sx={{ fontSize: 16, color: "text.primary" }}
                    />
                  </Stack>
                </Box>
              </motion.div>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div variants={itemVariants}>
              <Stack direction="column">
                <Stack
                  direction="row"
                  sx={{
                    flexWrap: "wrap",
                    columnGap: 0.75,
                    rowGap: 0.25,
                    alignItems: "baseline",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {getLocalizedText(project.title, locale)}
                  </Typography>

                  {project.period && (
                    <>
                      <Typography
                        component="span"
                        sx={{ color: "primary.main", fontSize: 14 }}
                      >
                        •
                      </Typography>

                      <Typography
                        sx={{
                          color: "text.primary",
                          fontWeight: 500,
                          fontSize: { xs: 12, md: 14 },
                        }}
                      >
                        {project.period}
                      </Typography>
                    </>
                  )}

                  {getLocalizedText(project.context, locale) && (
                    <>
                      <Typography
                        component="span"
                        sx={{
                          color: "primary.main",
                          fontSize: { xs: 12, md: 14 },
                        }}
                      >
                        •
                      </Typography>

                      <Typography
                        sx={{
                          color: "text.primary",
                          fontWeight: 500,
                          fontSize: { xs: 12, md: 14 },
                        }}
                      >
                        {getLocalizedText(project.context, locale)}
                      </Typography>
                    </>
                  )}
                </Stack>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontWeight: 300,
                    fontSize: 12,
                  }}
                >
                  {getLocalizedText(project.description, locale)}
                </Typography>

                <Stack
                  direction="row"
                  sx={{
                    flexWrap: "wrap",
                    gap: 0.5,
                    mt: 1,
                  }}
                >
                  {project.technologies.map((technology) => (
                    <motion.div
                      key={technology}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <RoleChip key={technology} label={technology} />
                    </motion.div>
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          {(project.links?.github || project.links?.demo) && (
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                {project.links?.github && (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      component="a"
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      sx={{
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
                  </motion.div>
                )}

                {project.links?.demo && (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      component="a"
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      variant="outlined"
                      endIcon={<ArrowOutwardIcon />}
                      sx={{
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
                  </motion.div>
                )}
              </Stack>
            </Grid>
          )}

          <Divider
            sx={{
              flex: 1,
              borderBottomWidth: 2,
              borderColor: "#B2BEB5",
            }}
          />
        </Grid>
      </Box>
    </motion.div>
  );
}
