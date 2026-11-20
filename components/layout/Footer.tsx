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
        mt: { xs: 6, md: 4 },
        pt: { xs: 6, md: 4 },
        pb: 0,
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      {/* City Skyline Background Decoration across entire Footer root */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: { xs: 150, sm: 190, md: 230, lg: 260 },
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.22,
          backgroundImage: "url('/images/footer.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Animated Brand */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            mb: { xs: 3, md: 4 },
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
                y: -8,
                scale: 1.1,
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
                overflow: "visible",
                boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
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
                    y: -22,
                    scale: 1.15,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
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
                      md: "0.25rem",
                    },
                    color: "text.primary",
                    userSelect: "none",
                    transition: "color 0.25s ease",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {letter}
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>

      {/* Footer Bottom Content */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1440px",
            px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
            mx: "auto",
            position: "relative",
            pt: { xs: 2, sm: 3, md: 4 },
            pb: { xs: 3.5, sm: 4, md: 4.5 },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2.5, sm: 2 }}
            sx={{
              alignItems: { xs: "center", sm: "center" },
              justifyContent: "space-between",
              textAlign: { xs: "center", sm: "left" },
              width: "100%",
            }}
          >
            {/* Copyright and Built With */}
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "70%", md: "65%" },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  letterSpacing: "0.01em",
                }}
              >
                {t("copyright")}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  fontWeight: 500,
                  display: "block",
                  mt: 0.6,
                  color: "text.primary",
                  fontSize: { xs: "0.75rem", md: "0.8rem" },
                  lineHeight: 1.6,
                }}
              >
                {t("builtWith")}
              </Typography>
            </Box>

            {/* Back to Top */}
            <Button
              onClick={handleBackToTop}
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowUpRoundedIcon />}
              sx={{
                px: 2,
                py: 0.85,
                borderRadius: 2,
                bgcolor: "text.primary",
                color: "background.paper",
                backdropFilter: "blur(8px)",
                fontSize: "0.8rem",
                fontWeight: 500,
                textTransform: "none",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              {t("backToTop")}
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
