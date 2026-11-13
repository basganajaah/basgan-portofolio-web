"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CircleIcon from "@mui/icons-material/Circle";
import type { Project } from "@/types/project";
import TechStackChip from "@/components/atoms/TechStackChip";

interface InternshipProjectDrawerProps {
  project: Project;
  open: boolean;
  onClose: () => void;
  anchor: "left" | "right";
}

export default function InternshipProjectDrawer({
  project,
  open,
  onClose,
  anchor,
}: InternshipProjectDrawerProps) {
  const locale = useLocale();

  const localized = (value?: { id: string; en: string }) =>
    value ? (locale === "id" ? value.id : value.en) : "";

  const t = useTranslations("Projects");

  const footnote = [localized(project.context), localized(project.notes)]
    .filter(Boolean)
    .join("\n\n");

  useEffect(() => {
    if (!open) return;

    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [open]);

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}

      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.35)",
          },
        },
        paper: {
          sx: {
            width: { xs: "100%", sm: 560, md: 680 },
            maxWidth: "100%",
            p: { xs: 3, sm: 4, md: 5 },
            overflowY: "auto",

            /* Chrome, Edge, Safari */
            "@supports selector(::-webkit-scrollbar)": {
              "&::-webkit-scrollbar": {
                width: "10px",
                height: "10px",
              },

              "&::-webkit-scrollbar-button": {
                display: "none !important",
                width: "0 !important",
                height: "0 !important",
              },

              "&::-webkit-scrollbar-corner": {
                background: "transparent",
              },

              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },

              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#171717",
                border: "2px solid transparent",
                backgroundClip: "content-box",
                borderRadius: "999px",
              },

              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#000000",
              },
            },

            /* Firefox */
            "@supports not selector(::-webkit-scrollbar)": {
              scrollbarWidth: "thin",
              scrollbarColor: "#171717 transparent",
            },
          },
        },
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: anchor === "right" ? 24 : -24,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <Stack spacing={3}>
          {/* Drawer Header */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={onClose} aria-label="Close drawer">
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          {/* Project Title and Role */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                lineHeight: 1.25,
                mb: 2,
              }}
            >
              {localized(project.title)}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {project.roles?.map((role, index) => (
                <Typography
                  key={`${project.id}-role-${index}`}
                  sx={{ color: "text.secondary" }}
                >
                  {index > 0 ? `, ${role}` : role}
                </Typography>
              ))}

              {project.roles && project.roles.length > 0 && (
                <Typography sx={{ color: "text.secondary" }}>•</Typography>
              )}

              <Typography sx={{ color: "text.secondary" }}>
                {project.period}
              </Typography>

              <Typography sx={{ color: "text.secondary" }}>•</Typography>

              <Typography sx={{ color: "text.secondary" }}>
                {localized(project.context)}
              </Typography>
            </Stack>
          </Box>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <Box>
              <Stack spacing={2}>
                {project.gallery.map((image, index) => (
                  <Box
                    key={`${project.id}-gallery-${index}`}
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 10",
                      borderRadius: 2,
                      overflow: "hidden",
                      bgcolor: "action.hover",
                      transition: "0.25s ease-in-out",
                      " &:hover": {
                        scale: 1.025,
                      },
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${localized(project.title)} - ${index + 1}`}
                      fill
                      sizes="(max-width: 680px) 100vw, 680px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          )}

          {/* Description */}
          <Typography
            sx={{
              lineHeight: 1.85,
              fontSize: 14,
              color: "text.secondary",
            }}
          >
            {localized(project.description)}
          </Typography>

          {/* Unique Facts */}
          {project.uniqueFacts && project.uniqueFacts.length > 0 && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${project.uniqueFacts.length}, minmax(0, 1fr))`,
                py: 2,
              }}
            >
              {project.uniqueFacts.map((fact, index) => (
                <Box
                  key={`${project.id}-drawer-fact-${index}`}
                  sx={{
                    px: { xs: 2, sm: 3 },
                    py: 1,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
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
                      fontSize: { xs: 17, sm: 22 },
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {localized(fact.value)}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      mt: 0.75,
                      color: "text.secondary",
                      lineHeight: 1.3,
                      wordBreak: "break-word",
                    }}
                  >
                    {localized(fact.label)}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          {/* Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {t("key-contribution")}
              </Typography>

              <Stack spacing={1.5}>
                {project.contributions.map((contribution, index) => (
                  <Box
                    key={`${project.id}-detail-${index}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <CircleIcon
                      sx={{
                        width: 7,
                        height: 7,
                        minWidth: 7,
                        minHeight: 7,
                        borderRadius: "50%",
                        color: "text.secondary",
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.75,
                        color: "text.secondary",
                      }}
                    >
                      {localized(contribution)}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          )}

          <Divider sx={{ border: "1px solid", borderColor: "#B2BEB5" }} />

          {/* Technologies */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              {t("technologies")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {project.technologies.map((technology) => (
                <TechStackChip key={technology} label={technology} />
              ))}
            </Box>
          </Box>

          {/* Footnote */}
          {footnote && (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {t("footnote")}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontStyle: "italic",
                  whiteSpace: "pre-line",
                }}
              >
                {footnote}
              </Typography>
            </Box>
          )}
        </Stack>
      </motion.div>
    </Drawer>
  );
}
