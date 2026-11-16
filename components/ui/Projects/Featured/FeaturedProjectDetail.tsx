import { Box, Divider, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useLocale, useTranslations } from "next-intl";
import type { Project } from "@/types/project";
import RoleChip from "@/components/atoms/RoleChip";
import { getLocalizedText, type Locale, itemVariants } from "@/lib/utils";
import { motion } from "motion/react";

interface FeaturedProjectDetailProps {
  project: Project;
}

export default function FeaturedProjectDetail({
  project,
}: FeaturedProjectDetailProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Projects");

  return (
    <Stack spacing={{ xs: 2.5, md: 3 }}>
      <Divider
        sx={{
          flex: 1,
          borderBottomWidth: 2,
          borderColor: "#B2BEB5",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 5 },
        }}
      >
        <Stack direction={"column"} sx={{ gap: 1 }}>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 1.5, fontWeight: 700 }}>
              {t("about-project")}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.5,
                color: "text.secondary",
              }}
            >
              {getLocalizedText(project.description, locale)}
            </Typography>

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
                {getLocalizedText(project.notes, locale)}
              </Typography>
            )}
          </Box>
        </Stack>

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
                      color: "text.secondary",
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
                    {getLocalizedText(contribution, locale)}
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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 2.5, md: 5 },
        }}
      >
        {project.roles && project.roles.length > 0 && (
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 1.5, fontWeight: 700 }}>
              {t("roles")}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {project.roles.map((role) => (
                <motion.div
                  key={role}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <RoleChip key={role} label={role} />
                </motion.div>
              ))}
            </Stack>
          </Box>
        )}

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
        </Box>
      </Box>
    </Stack>
  );
}
