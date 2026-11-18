"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        mt: { xs: 6, md: 2 },
        pt: { xs: 6, md: 2 },
        pb: { xs: 2, md: 1.5 },
        bgcolor: "background.default",
      }}
    >
      {/* Wave Divider */}
      <Box
        component="svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "100%",
          height: { xs: 45, md: 75 },
          display: "block",
          color: "background.default",
          pointerEvents: "none",
        }}
      >
        <path
          d="M0,35 C180,85 360,5 540,35 C720,70 900,90 1080,42 C1230,2 1350,20 1440,40 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          mx: "auto",
        }}
      >
        {/* Animated Brand */}
        <Box
          sx={{
            mb: { xs: 4, md: 5 },
            py: { xs: 1, md: 1.5 },
            textAlign: "center",
            overflow: "visible",
          }}
        >
          <Stack
            spacing={{ xs: 1.5, md: 2 }}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Brand Icon */}
            <Box
              component={motion.div}
              whileHover={{
                y: -5,
                rotate: 8,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              sx={{
                width: { xs: 48, md: 64 },
                height: { xs: 48, md: 64 },
                position: "relative",
                borderRadius: 2.5,
                overflow: "visible",
                boxShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 4px 12px rgba(0,0,0,0.22)"
                    : "0 4px 12px rgba(0,0,0,0.10)",
                filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.04))",
              }}
            >
              <Image
                src="/icon.png"
                alt="BASGAN Logo"
                fill
                sizes="64px"
                style={{
                  objectFit: "contain",
                  borderRadius: "inherit",
                }}
              />
            </Box>

            {/* Animated Wordmark */}
            <Stack
              direction="row"
              sx={{
                cursor: "default",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible",
              }}
            >
              {"BASGAN".split("").map((letter, index) => (
                <Box
                  component={motion.span}
                  key={`${letter}-${index}`}
                  whileHover={{
                    y: -12,
                    color: "primary.main",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 12,
                    },
                  }}
                  sx={{
                    display: "inline-block",
                    fontSize: {
                      xs: "3.5rem",
                      sm: "5.5rem",
                      md: "8rem",
                    },
                    lineHeight: 0.95,
                    fontWeight: 900,
                    letterSpacing: {
                      xs: "-0.08em",
                      md: "-0.1em",
                    },
                    color: "text.primary",
                    userSelect: "none",
                    transition: "color 0.25s ease",
                  }}
                >
                  {letter}
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Footer Information */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                fontSize: "0.85rem",
              }}
            >
              {t("copyright")}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 0.6,
                color: "text.secondary",
                fontSize: "0.75rem",
                lineHeight: 1.6,
              }}
            >
              {t("builtWith")}
            </Typography>
          </Box>

          <Button
            onClick={handleBackToTop}
            variant="outlined"
            size="small"
            endIcon={<KeyboardArrowUpRoundedIcon />}
            sx={{
              px: 1.8,
              py: 0.8,
              borderRadius: 2,
              border: "2px solid",
              borderColor: "text.primary",
              color: "text.primary",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                color: "#eef2ff",
                bgcolor: "text.primary",
                transform: "translateY(-2px)",
              },
            }}
          >
            {t("backToTop")}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
