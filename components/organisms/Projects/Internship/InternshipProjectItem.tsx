"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import type { Project } from "@/types/project";
import InternshipProjectDrawer from "./InternshipProjectDrawer";
import TechStackChip from "@/components/atoms/TechStackChip";

interface InternshipProjectItemProps {
  project: Project;
  index: number;
}

export default function InternshipProjectItem({
  project,
  index,
}: InternshipProjectItemProps) {
  const locale = useLocale();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isReversed = index % 2 !== 0;
  const image = project.gallery?.[0];

  const getText = (value?: { id: string; en: string }) =>
    value ? (locale === "id" ? value.id : value.en) : "";

  const detailLabel = locale === "id" ? "Lihat Detail" : "See Details";

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? 40 : -40,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
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
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={image}
                  alt={getText(project.title)}
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
                {getText(project.title)}
              </Typography>

              <Typography
                sx={{
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                {getText(project.description)}
              </Typography>
            </Box>

            {/* Role and Period */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ color: "text.secondary" }}>
                {project.roles?.join(", ")}
              </Typography>

              <Typography sx={{ color: "text.disabled" }}>•</Typography>

              <Typography sx={{ color: "text.secondary" }}>
                {project.period}
              </Typography>

              <Typography sx={{ color: "text.disabled" }}>•</Typography>

              <Typography sx={{ color: "text.secondary" }}>
                {getText(project.context)}
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
                      {getText(fact.value)}
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
                      {getText(fact.label)}
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
                  {project.shortContributions.map((item, index) => (
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
                        {getText(item)}
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
                <TechStackChip key={technology} label={technology} />
              ))}
            </Box>

            {/* Detail Button */}
            <Box>
              <Button
                variant="outlined"
                onClick={() => setDrawerOpen(true)}
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 20,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2.5,
                }}
              >
                {detailLabel}
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
