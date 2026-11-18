"use client";

import { Box, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";

import { profile } from "@/data/profile";
import { getLocalizedText, type Locale } from "@/lib/utils";

interface AboutProfileProps {
  isVisible: boolean;
}

const profileFields = [
  "fullName",
  "birthplace",
  "location",
  "workMode",
  "languages",
] as const;

export default function AboutProfile({ isVisible }: AboutProfileProps) {
  const t = useTranslations("About");
  const locale = useLocale() as Locale;

  const profileValues = {
    fullName: profile.name,
    birthplace: getLocalizedText(profile.birthPlace, locale),
    location: getLocalizedText(profile.basedIn, locale),
    workMode: profile.workMode
      ? getLocalizedText(profile.workMode, locale)
      : t("notProvided"),
    languages:
      profile.languages.length > 0
        ? profile.languages
            .map((language) => getLocalizedText(language, locale))
            .join(", ")
        : t("notProvided"),
  };

  return (
    <Box
      sx={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
        height: 360,
        minHeight: 360,
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, lg: 3 },
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-130%",
          zIndex: 0,
          width: "65%",
          height: "100%",
          pointerEvents: "none",
          transform: "skewX(-20deg)",
          background:
            "linear-gradient(110deg, transparent, rgba(255,255,255,0.5), transparent)",
          transition: "left 0.75s ease",
        },
        "&:hover::after": {
          left: "160%",
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          letterSpacing: "-0.035em",
          mb: 2.5,
        }}
      >
        {t("profile")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
          gap: 1,
          minHeight: 0,
        }}
      >
        {profileFields.map((field) => (
          <Box
            key={field}
            sx={{
              minWidth: 0,
              minHeight: 44,
              display: "flex",
              flexDirection: "column",
              gap: 0.35,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                letterSpacing: "0.055em",
                lineHeight: 1.3,
              }}
            >
              {t(`profileFields.${field}`)}
            </Typography>

            <Box
              sx={{
                height: 22,
                minHeight: 22,
                overflow: "hidden",
                fontSize: "0.84rem",
                fontWeight: 600,
                lineHeight: "22px",
                color: "text.primary",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {isVisible && (
                <Typewriter
                  key={`${field}-${locale}`}
                  options={{
                    delay: 18,
                    cursor: "",
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString(profileValues[field]).start();
                  }}
                />
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
