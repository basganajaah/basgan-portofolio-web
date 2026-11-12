"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
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

  const getText = (value?: { id: string; en: string }) =>
    value ? (locale === "id" ? value.id : value.en) : "";

  const content = {
    role: locale === "id" ? "Peran" : "Role",
    contributions: locale === "id" ? "Kontribusi Utama" : "Key Contributions",
    technologies: locale === "id" ? "Teknologi" : "Technologies",
    gallery: locale === "id" ? "Galeri Proyek" : "Project Gallery",
    context: locale === "id" ? "Konteks Proyek" : "Project Context",
    notes: locale === "id" ? "Catatan" : "Notes",
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", sm: 560, md: 680 },
            maxWidth: "100%",
            p: { xs: 3, sm: 4, md: 5 },
            overflowY: "auto",
          },
        },
      }}
    >
      <Stack spacing={3}>
        {/* Drawer Header */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose} aria-label="Close drawer">
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        {/* Project Title */}
        <Box>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            Internship Project
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1.25,
              mt: 1,
              mb: 2,
            }}
          >
            {getText(project.title)}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            {project.roles?.map((role) => (
              <Typography key={role} variant="body2" sx={{ fontWeight: 600 }}>
                {role}
              </Typography>
            ))}

            <Typography
              sx={{
                color: "text.disabled",
              }}
            >
              •
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              {project.period}
            </Typography>
          </Stack>
        </Box>

        {/* Description */}
        <Typography
          sx={{ lineHeight: 1.85, fontSize: 14, color: "text.secondary" }}
        >
          {getText(project.description)}
        </Typography>

        {/* Unique Facts */}
        {project.uniqueFacts && project.uniqueFacts.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${project.uniqueFacts.length}, minmax(0, 1fr))`,
              py: 2,
              bgcolor: "action.hover",
              borderRadius: 3,
            }}
          >
            {project.uniqueFacts.map((fact, index) => (
              <Box
                key={`${project.id}-drawer-fact-${index}`}
                sx={{
                  px: 1.5,
                  textAlign: "center",
                  borderRight:
                    index !== project.uniqueFacts!.length - 1
                      ? "1px solid"
                      : "none",
                  borderColor: "divider",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 17, sm: 22 },
                    fontWeight: 700,
                  }}
                >
                  {fact.value}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{ display: "block", mt: 0.5, color: "text.secondary" }}
                >
                  {getText(fact.label)}
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
              {content.contributions}
            </Typography>

            <Stack spacing={1.5}>
              {project.contributions.map((contribution, index) => (
                <Box
                  key={`${project.id}-detail-${index}`}
                  sx={{ display: "flex", gap: 1.5 }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      mt: 1,
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{ lineHeight: 1.75, color: "text.secondary" }}
                  >
                    {getText(contribution)}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        )}

        <Divider />

        {/* Technologies */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            {content.technologies}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {project.technologies.map((technology) => (
              <TechStackChip key={technology} label={technology} />
            ))}
          </Box>
        </Box>

        {/* Project Context */}
        {project.context && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {content.context}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              {getText(project.context)}
            </Typography>
          </Box>
        )}

        {/* NDA Notes */}
        {project.notes && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {content.notes}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              {getText(project.notes)}
            </Typography>
          </Box>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {content.gallery}
            </Typography>

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
                  }}
                >
                  <Image
                    src={image}
                    alt={`${getText(project.title)} - ${index + 1}`}
                    fill
                    sizes="(max-width: 680px) 100vw, 680px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Drawer>
  );
}
