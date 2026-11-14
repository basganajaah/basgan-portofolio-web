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
import { getLocalizedText, type Locale } from "@/lib/utils";

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
            gap: { xs: 3, md: 5 },
            alignItems: "center",
          }}
        >
          {/* Project Image */}
          <Box
            sx={{
              position: "relative",
              aspectRatio: "16 / 10",
              overflow: "hidden",
              borderRadius: 3,
              order: { xs: 0, md: isReversed ? 1 : 0 },
              bgcolor: "action.hover",
            }}
          >
            {image && (
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
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
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
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.3,
                  mb: 1.5,
                }}
              >
                {getLocalizedText(project.title, locale)}
              </Typography>

              <Typography
                sx={{
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                {getLocalizedText(project.description, locale)}
              </Typography>
            </Box>

            {/* Role and Period */}
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
                sx={{ color: "text.secondary", fontSize: { xs: 14, md: 16 } }}
              >
                {project.roles?.join(", ")}
              </Typography>

              <Typography sx={{ color: "text.secondary" }}>•</Typography>

              <Typography
                sx={{ color: "text.secondary", fontSize: { xs: 14, md: 16 } }}
              >
                {project.period}
              </Typography>

              <Typography sx={{ color: "text.secondary" }}>•</Typography>

              <Typography
                sx={{ color: "text.secondary", fontSize: { xs: 14, md: 16 } }}
              >
                {getLocalizedText(project.context, locale)}
              </Typography>
            </Stack>

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
                        fontSize: { xs: 16, md: 20 },
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {getLocalizedText(fact.value, locale)}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        display: "block",
                        mt: 0.5,
                        lineHeight: 1.4,
                        color: "text.secondary",
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
                        color="text.secondary"
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
                <RoleChip key={technology} label={technology} />
              ))}
            </Box>

            {/* Detail Button */}
            <Box>
              <Button
                variant="outlined"
                onClick={() => setDrawerOpen(true)}
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  textTransform: "none",
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
