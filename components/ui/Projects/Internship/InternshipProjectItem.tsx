"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import type { Project } from "@/types/project";
import InternshipProjectDrawer from "./InternshipProjectDrawer";
import RoleChip from "@/components/atoms/RoleChip";
import { getLocalizedText, itemVariants, type Locale } from "@/lib/utils";
import { useImageError } from "@/hooks/useImageError";
import ProjectImageFallback from "@/components/atoms/ProjectImageFallback";

interface InternshipProjectItemProps {
  project: Project;
  index: number;
}

export default function InternshipProjectItem({
  project,
  index,
}: InternshipProjectItemProps) {
  const locale = useLocale() as Locale;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { hasError, handleError } = useImageError();

  const isReversed = index % 2 !== 0;
  const image = project.gallery?.[0];

  const t = useTranslations("Projects");
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? 40 : -40,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2, md: 4 },
            alignItems: "center",
            mt: { xs: 1, md: 2 },
          }}
        >
          {/* Project Image */}
          <Box
            sx={{
              position: "relative",
              aspectRatio: "16 / 10",
              overflow: "hidden",
              borderRadius: 1,
              order: { xs: 0, md: isReversed ? 1 : 0 },
              bgcolor: "action.hover",
            }}
          >
            {image && !hasError ? (
              <motion.div
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={image}
                  alt={getLocalizedText(project.title, locale)}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "fill" }}
                  onError={handleError}
                />
              </motion.div>
            ) : (
              <ProjectImageFallback
                title={getLocalizedText(project.title, locale)}
              />
            )}
          </Box>

          {/* Project Information */}
          <Stack
            spacing={2}
            sx={{
              order: { xs: 1, md: isReversed ? 0 : 1 },
              minWidth: 0,
            }}
          >
            <Box>
              <Stack
                direction="column"
                useFlexGap
                sx={{
                  mb: 1.25,
                  gap: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {getLocalizedText(project.title, locale)}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{
                    alignItems: "center",
                    flexWrap: "wrap",
                    rowGap: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 12, md: 14 },
                      alignItems: "center",
                      letterSpacing: 1,
                      color: "text.secondary",
                    }}
                  >
                    {getLocalizedText(project.organization, locale)}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: 12, md: 14 },
                    }}
                  >
                    •
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 12, md: 14 },
                      alignItems: "center",
                      letterSpacing: 1,
                      color: "text.secondary",
                    }}
                  >
                    {project.period}
                  </Typography>
                </Stack>
              </Stack>

              {/* Role */}
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ flexWrap: "wrap" }}
              >
                {project.roles?.map((role) => (
                  <motion.div
                    key={role}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RoleChip key={role} label={role} sx={{ mb: 1.25 }} />
                  </motion.div>
                ))}
              </Stack>

              <Typography
                sx={{
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                {getLocalizedText(project.description, locale)}
              </Typography>
            </Box>

            {/* Unique Facts */}
            {project.uniqueFacts && project.uniqueFacts.length > 0 && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${project.uniqueFacts.length}, minmax(0, 1fr))`,
                  py: 1,
                }}
              >
                {project.uniqueFacts.map((fact, index) => (
                  <Box
                    key={`${project.id}-fact-${index}`}
                    sx={{
                      px: 1.5,
                      textAlign: "center",
                      borderRight:
                        index !== project.uniqueFacts!.length - 1
                          ? "2px solid"
                          : "none",
                      borderColor: "#B2BEB5",
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 12, md: 20 },
                        fontWeight: 700,
                        lineHeight: 1.2,
                      }}
                    >
                      {getLocalizedText(fact.value, locale)}
                    </Typography>

                    <Typography
                      sx={{
                        display: "block",
                        mt: 1,
                        lineHeight: 1.2,
                        color: "text.secondary",
                        fontSize: { xs: 10, md: 12 },
                      }}
                    >
                      {getLocalizedText(fact.label, locale)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
            {/* Short Contributions */}
            {project.shortContributions &&
              project.shortContributions.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.75,
                  }}
                >
                  {project.shortContributions.map((scItem, index) => (
                    <Box
                      key={`${project.id}-contribution-${index}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                      }}
                    >
                      {index > 0 && (
                        <Typography
                          component="span"
                          sx={{
                            color: "primary.main",
                            fontSize: 12,
                          }}
                        >
                          •
                        </Typography>
                      )}

                      <Typography
                        component="span"
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {getLocalizedText(scItem, locale)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            {/* Technologies */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.75,
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
            </Box>
            {/* Detail Button */}
            <Box>
              <Button
                variant="outlined"
                onClick={() => setDrawerOpen(true)}
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 1,
                  textTransform: "none",
                  border: "2px solid",
                  borderColor: "text.secondary",
                  color: "text.primary",
                  "&:hover": {
                    bgcolor: "#171717",
                    borderColor: "text.primary",
                    color: "#eef2ff",
                  },
                }}
              >
                {t("view-details")}
              </Button>
            </Box>
          </Stack>
        </Box>
      </motion.div>

      <InternshipProjectDrawer
        project={project}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor={isReversed ? "left" : "right"}
      />
    </>
  );
}
