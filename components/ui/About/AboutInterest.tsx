"use client";

import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";
import { SlotText } from "slot-text/react";
import "slot-text/style.css";

import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import NightlifeRoundedIcon from "@mui/icons-material/NightlifeRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

import { aboutInterests } from "@/data/about";
import { getLocalizedText, type Locale } from "@/lib/utils";
import type { AboutInterestIcon } from "@/types/about";

const interestIcons = {
  code: CodeRoundedIcon,
  gamepad: SportsEsportsRoundedIcon,
  music: NightlifeRoundedIcon,
  writing: EditNoteRoundedIcon,
} satisfies Record<AboutInterestIcon, typeof CodeRoundedIcon>;

interface AboutInterestProps {
  activeIndex: number;
  isVisible: boolean;
}

export default function AboutInterest({
  activeIndex,
  isVisible,
}: AboutInterestProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("About");

  const interest = aboutInterests[activeIndex];

  const InterestIcon = interestIcons[interest.icon];

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
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, lg: 3 },
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",

        // Shimmer effect
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-130%",
          zIndex: 2,
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

        // Background icon hover effect
        "&:hover .interest-background-icon": {
          transform: "rotate(-8deg) scale(1.03)",
        },
      }}
    >
      {/* Background Watermark Icon */}
      <AnimatePresence mode="wait">
        <motion.div
          key={interest.id}
          initial={{
            opacity: 0,
            x: 70,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -35,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            right: -15,
            bottom: -30,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <InterestIcon
            className="interest-background-icon"
            aria-hidden="true"
            sx={{
              fontSize: { xs: 150, md: 185 },
              color: "primary.main",
              transform: "rotate(-15deg)",
              transition: "all 0.35s ease",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minWidth: 0,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.035em",
            mb: 2,
            fontSize: { xs: "2rem", lg: "3rem" },
          }}
        >
          {t("interest")}
        </Typography>

        {/* Fixed Title Area */}
        <Box
          sx={{
            minHeight: 52,
            height: 52,
            display: "flex",
            alignItems: "flex-start",
            overflow: "hidden",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.3,
              fontSize: {
                xs: "1.45rem",
                lg: "1.6rem",
              },
              whiteSpace: "nowrap",
            }}
          >
            <SlotText
              text={getLocalizedText(interest.title, locale)}
              options={{
                rollBy: "character",
                duration: 500,
                stagger: 100,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </Typography>
        </Box>

        {/* Fixed Description Container */}
        <Box
          sx={{
            height: 126,
            minHeight: 126,
            maxHeight: 126,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${interest.id}-${locale}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              style={{
                height: "100%",
              }}
            >
              {isVisible && (
                <Box
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", lg: "0.875rem" },
                    lineHeight: 1.7,
                    overflowWrap: "break-word",
                  }}
                >
                  <Typewriter
                    key={`${interest.id}-${locale}`}
                    options={{
                      delay: 18,
                      cursor: "",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          getLocalizedText(interest.description, locale),
                        )
                        .start();
                    }}
                  />
                </Box>
              )}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}
