"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";

import { Box, Stack, Typography } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import type { Education } from "@/types/experience";
import { getLocalizedText, itemVariants, type Locale } from "@/lib/utils";

import ProjectImageFallback from "@/components/atoms/ProjectImageFallback";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Experience");

  const [logoError, setLogoError] = useState(false);

  const institution = getLocalizedText(education.institution, locale);
  const degree = getLocalizedText(education.degree, locale);
  const fieldOfStudy = getLocalizedText(education.fieldOfStudy, locale);
  const period = getLocalizedText(education.period, locale);
  const description = getLocalizedText(education.description, locale);
  const gpaScore = education.gpaScore;

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          border: "4px solid",
          borderColor: "text.primary",
          borderRadius: 2,
          bgcolor: "background.paper",
          transition: "border-color 0.25s ease, transform 0.25s ease",
          "&:hover": {
            transform: "translateY(-3px)",
          },
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 2.5 }}
          sx={{
            alignItems: "flex-start",
          }}
        >
          {/* Institution Logo */}
          <Box
            sx={{
              width: { xs: 48, sm: 58 },
              height: { xs: 48, sm: 58 },
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1.5,
              bgcolor: "background.paper",
              border: "2px solid",
              borderColor: "divider",
              overflow: "hidden",
            }}
          >
            {education.institutionLogo && !logoError ? (
              <Image
                src={education.institutionLogo}
                alt={`${institution} logo`}
                width={58}
                height={58}
                onError={() => setLogoError(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: 6,
                }}
              />
            ) : (
              <ProjectImageFallback
                title={institution}
                textSx={{
                  fontSize: { xs: 20, sm: 24 },
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  opacity: 0.6,
                }}
              />
            )}
          </Box>

          {/* Education Details */}
          <Stack
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* Institution */}
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                fontWeight: 700,
                lineHeight: 1.3,
                color: "text.primary",
              }}
            >
              {institution}
            </Typography>

            {/* Degree */}
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 1.6,
                color: "text.primary",
              }}
            >
              {degree}
            </Typography>

            {/* Field of Study */}
            <Typography
              sx={{
                fontSize: 13,
                color: "text.secondary",
              }}
            >
              {fieldOfStudy}
            </Typography>

            {/* Period */}
            <Stack direction="row" spacing={1}>
              <Typography
                sx={{
                  fontSize: 12,
                  color: "text.secondary",
                }}
              >
                {period}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  color: "text.secondary",
                }}
              >
                {t("index")} {gpaScore}
              </Typography>
            </Stack>

            {/* Description */}
            {description && (
              <Typography
                sx={{
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                {description}
              </Typography>
            )}

            {/* Achievements */}
            {education.achievements && education.achievements.length > 0 && (
              <Stack spacing={0.75}>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  {t("achievements")}
                </Typography>

                <Stack spacing={0.5}>
                  {education.achievements.map((achievement, index) => (
                    <Stack
                      key={`${education.id}-achievement-${index}`}
                      direction="row"
                      spacing={1}
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <SchoolRoundedIcon
                        sx={{
                          fontSize: 15,
                          mt: 0.25,
                          color: "text.secondary",
                          flexShrink: 0,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: 13,
                          lineHeight: 1.7,
                          color: "text.secondary",
                        }}
                      >
                        {getLocalizedText(achievement, locale)}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
}
