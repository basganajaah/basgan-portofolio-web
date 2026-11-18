"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Box, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import type { WorkExperience } from "@/types/experience";
import { getLocalizedText, itemVariants, type Locale } from "@/lib/utils";

import RoleChip from "@/components/atoms/RoleChip";
import ProjectImageFallback from "@/components/atoms/ProjectImageFallback";

interface WorkExperienceItemProps {
  experience: WorkExperience;
}

export default function WorkExperienceItem({
  experience,
}: WorkExperienceItemProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Experience");

  const [logoError, setLogoError] = useState(false);

  const position = getLocalizedText(experience.position, locale);
  const employmentType = getLocalizedText(experience.employmentType, locale);
  const location = getLocalizedText(experience.location, locale);
  const workMode = getLocalizedText(experience.workMode, locale);
  const period = getLocalizedText(experience.period, locale);
  const description = getLocalizedText(experience.description, locale);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 2.5 }}
        sx={{
          alignItems: "flex-start",
        }}
      >
        {/* Company Logo */}
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
            borderColor: "text.primary",
            overflow: "hidden",
          }}
        >
          {experience.companyLogo && !logoError ? (
            <Image
              src={experience.companyLogo}
              alt={`${experience.company} logo`}
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
              title={experience.company}
              textSx={{
                fontSize: { xs: 20, sm: 24 },
                fontWeight: 800,
                letterSpacing: "-0.04em",
                opacity: 0.6,
              }}
            />
          )}
        </Box>

        {/* Work Details */}
        <Stack
          spacing="0.25rem"
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Position and Company */}
          <Stack>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                fontWeight: 700,
                lineHeight: 1.3,
                color: "text.primary",
              }}
            >
              {position}
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "text.primary",
              }}
            >
              {experience.company}
            </Typography>

            {/* Employment Type */}
            <Typography
              sx={{
                fontSize: 13,
                color: "text.secondary",
              }}
            >
              {employmentType}
            </Typography>
          </Stack>

          {/* Period */}
          <Typography
            sx={{
              fontSize: 12,
              color: "text.secondary",
            }}
          >
            {period}
          </Typography>

          {/* Location */}
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: 0.75,
              rowGap: 0.25,
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                color: "text.secondary",
              }}
            >
              {location}
            </Typography>

            {workMode && (
              <>
                <CircleIcon
                  sx={{
                    fontSize: 4,
                    color: "text.disabled",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "text.secondary",
                  }}
                >
                  {workMode}
                </Typography>
              </>
            )}
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

          {/* Key Contributions */}
          {experience.contributions?.length && (
            <Stack>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                {t("key-contributions")}
              </Typography>

              <Stack>
                {experience.contributions?.map((contribution, index) => (
                  <Stack
                    key={`${experience.id}-contribution-${index}`}
                    direction="row"
                    spacing={1}
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: 6,
                        mt: 0.9,
                        color: "text.secondary",
                        flexShrink: 0,
                        alignItems: "center",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "text.secondary",
                      }}
                    >
                      {getLocalizedText(contribution, locale)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}

          {/* Technologies */}
          {experience.technologies.length > 0 && (
            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                gap: 0.75,
              }}
            >
              {experience.technologies.map((technology) => (
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
          )}
        </Stack>
      </Stack>
    </motion.div>
  );
}
