"use client";

import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "motion/react";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  WhatsApp,
  GitHub,
  LinkedIn,
  Email,
  Telegram,
} from "@mui/icons-material";

import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";

import RoleChip from "@/components/atoms/RoleChip";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        py: { xs: 14, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 5, md: 4 }}
          sx={{ alignItems: "center", mt: 2 }}
        >
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ minWidth: 0 }}>
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  border: "2px solid #22c55e60",
                  borderRadius: "50px",
                  bgcolor: "#22c55e25",
                  px: 1.5,
                  py: 0.8,
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#22c55e",
                    boxShadow: "0 0 0 4px rgba(34,197,94,0.12)",
                    animation: "blink 1.5s infinite ease-in-out",
                    "@keyframes blink": {
                      "0%, 100%": { transform: "scale(1.25)" },
                      "50%": { transform: "scale(0.75)" },
                    },
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{ color: "success.main", fontWeight: 500 }}
                >
                  {t("availability")}
                </Typography>
              </Box>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  lineHeight: 1.02,
                  fontWeight: 750,
                  letterSpacing: "-0.075em",
                  color: "text.primary",
                  mb: 2,
                }}
              >
                <span className="font-light">{t("greeting")}</span>
                <br />
                Bandyaga A. Sugandi
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ flexWrap: "wrap", mb: 2 }}
              >
                {profile.role.map((role) => (
                  <RoleChip key={role} label={role} />
                ))}
              </Stack>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typography
                sx={{
                  maxWidth: "540px",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  mb: 3,
                }}
              >
                {t("description")}
              </Typography>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Button
                  component="a"
                  href="#projects"
                  variant="contained"
                  endIcon={<ArrowOutwardIcon sx={{ fontSize: 17 }} />}
                  sx={{
                    bgcolor: "#171717",
                    color: "#fff",
                    borderRadius: "12px",
                    px: 2.5,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#404040" },
                  }}
                >
                  {t("explore")}
                </Button>

                <Button
                  component="a"
                  href="#contact"
                  variant="outlined"
                  sx={{
                    color: "text.primary",
                    border: "2px solid",
                    borderColor: "#e5e5e5",
                    borderRadius: "12px",
                    px: 2,
                    py: 1,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "#171717",
                      bgcolor: "rgba(23,23,23,0.03)",
                    },
                  }}
                >
                  {t("contact")}
                </Button>
              </Box>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {t("find")}
                </Typography>

                <Box
                  component="a"
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <GitHub sx={{ fontSize: 19 }} />
                </Box>

                <Box
                  component="a"
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <LinkedIn sx={{ fontSize: 19 }} />
                </Box>

                <Box
                  component="a"
                  href={profile.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <WhatsApp sx={{ fontSize: 19 }} />
                </Box>

                <Box
                  component="a"
                  href={profile.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <Telegram sx={{ fontSize: 19 }} />
                </Box>

                <Box
                  component="a"
                  href={profile.socialLinks.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <Email sx={{ fontSize: 19 }} />
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/* Right Image */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "auto",
                  mx: "auto",
                  aspectRatio: "1 / 1",
                  borderRadius: { xs: 50, md: 50 },
                  overflow: "hidden",
                  bgcolor: "#f0f0f0",
                  position: "relative",
                  border: "4px solid #000000",
                }}
              >
                <Box
                  component="img"
                  src="/images/profile.jpeg"
                  alt="Bandyaga Adiansyah Sugandi"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "70% 50%",
                    transform: "scale(1)",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
