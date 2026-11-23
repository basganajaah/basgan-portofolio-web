"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowOutwardRounded,
  ContentCopyRounded,
  CheckRounded,
  GitHub,
  LinkedIn,
  WhatsApp,
  Telegram,
  Email,
  DownloadRounded,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import Typewriter from "typewriter-effect";

import { profile } from "@/data/profile";
import { numTitle } from "@/lib/utils";

const socialLinks = [
  { label: "GitHub", href: profile.socialLinks.github, icon: GitHub },
  { label: "LinkedIn", href: profile.socialLinks.linkedin, icon: LinkedIn },
  { label: "WhatsApp", href: profile.socialLinks.whatsapp, icon: WhatsApp },
  { label: "Telegram", href: profile.socialLinks.telegram, icon: Telegram },
  { label: "Email", href: profile.socialLinks.email, icon: Email },
];

export default function Contact() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        pt: { xs: 2, md: 4 },
        pb: { xs: 4, md: 6 },
        scrollMarginTop: "100px",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          onViewportEnter={() => setIsVisible(true)}
          style={{
            width: "100%",
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",
              overflow: "hidden",
              p: { xs: 2.5, sm: 3, md: 4 },
              borderRadius: { xs: 2.5, md: 3 },
              bgcolor: "background.paper",
              borderColor: "text.primary",

              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? "0 8px 20px rgba(0,0,0,0.16)"
                  : "0 8px 20px rgba(0,0,0,0.035)",

              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",

              "&:hover": {
                transform: "translateY(-3px)",

                boxShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 10px 32px rgba(0,0,0,0.28)"
                    : "0 10px 32px rgba(0,0,0,0.075)",
              },

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-120%",
                width: "60%",
                height: "100%",
                pointerEvents: "none",
                background:
                  "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.12) 50%, transparent 80%)",
                transform: "skewX(-20deg)",
                transition: "left 0.7s ease",
              },

              "&:hover::before": {
                left: "160%",
              },
            }}
          >
            <Stack
              spacing={{ xs: 2.5, md: 3 }}
              sx={{
                width: "100%",
                minWidth: 0,
              }}
            >
              <Box sx={{ width: "100%", minWidth: 0 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    fontSize: "0.7rem",
                  }}
                >
                  {numTitle("contact")} / {t("contact")}
                </Typography>

                {/* Animated Title */}
                <Box
                  sx={{
                    mt: 1,
                    width: "100%",
                    maxWidth: 680,
                    minWidth: 0,
                    minHeight: {
                      xs: "5.2rem",
                      sm: "6.3rem",
                      md: "7.8rem",
                    },
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                      minWidth: 0,
                      overflowWrap: "anywhere",
                      fontWeight: 800,
                      letterSpacing: "-0.05em",
                      lineHeight: 1.12,
                      fontSize: {
                        xs: "2rem",
                        sm: "2.8rem",
                        md: "3.5rem",
                      },
                      color: "text.primary",
                    }}
                  >
                    {isVisible && (
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString(t("title")).start();
                        }}
                        options={{
                          delay: 35,
                          cursor: "",
                        }}
                      />
                    )}
                  </Typography>
                </Box>

                {/* Animated Description */}
                <Box
                  sx={{
                    mt: 1.5,
                    width: "100%",
                    maxWidth: 600,
                    minWidth: 0,
                    minHeight: {
                      xs: "5rem",
                      sm: "4rem",
                      md: "3.5rem",
                    },
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                      minWidth: 0,
                      overflowWrap: "anywhere",
                      whiteSpace: "normal",
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: {
                        xs: "0.875rem",
                        md: "0.95rem",
                      },
                    }}
                  >
                    {isVisible && (
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString(t("description")).start();
                        }}
                        options={{
                          delay: 5,
                          cursor: "",
                        }}
                      />
                    )}
                  </Typography>
                </Box>
              </Box>

              {/* Contact Actions */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.2}
                useFlexGap
                sx={{
                  width: "100%",
                  minWidth: 0,
                  flexWrap: "wrap",
                  alignItems: {
                    xs: "stretch",
                    sm: "center",
                  },
                }}
              >
                <Button
                  component="a"
                  href={profile.socialLinks.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="medium"
                  endIcon={<ArrowOutwardRounded />}
                  sx={{
                    px: 2.3,
                    py: 1.1,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "none",
                  }}
                >
                  {t("emailCta")}
                </Button>

                <Button
                  onClick={handleCopyEmail}
                  variant="outlined"
                  size="medium"
                  sx={{
                    px: 2.3,
                    py: 1.1,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "none",
                    overflow: "hidden",
                    border: 2
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: 18,
                        height: 18,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={copied ? "check" : "copy"}
                          initial={{
                            opacity: 0,
                            rotate: -90,
                            y: 6,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: 90,
                            y: -6,
                          }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          {copied ? (
                            <CheckRounded sx={{ fontSize: 18 }} />
                          ) : (
                            <ContentCopyRounded sx={{ fontSize: 18 }} />
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </Box>

                    {/* Fixed Text Container */}
                    <Box
                      sx={{
                        position: "relative",
                        display: "grid",
                        alignItems: "center",
                        overflow: "hidden",
                        height: "1.4em",
                        lineHeight: "1.4em",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          gridArea: "1 / 1",
                          visibility: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("copyEmail")}
                      </Box>

                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={copied ? "copied" : "copy"}
                          initial={{
                            y: "100%",
                            opacity: 0,
                          }}
                          animate={{
                            y: 0,
                            opacity: 1,
                          }}
                          exit={{
                            y: "-100%",
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.22,
                            ease: "easeInOut",
                          }}
                          style={{
                            gridArea: "1 / 1",
                            whiteSpace: "nowrap",
                            lineHeight: "1.4em",
                          }}
                        >
                          {copied ? t("copied") : t("copyEmail")}
                        </motion.span>
                      </AnimatePresence>
                    </Box>
                  </Stack>
                </Button>

                <Button
                  component="a"
                  href="/document/CV_ATS_Bandyaga%20Adiansyah%20Sugandi.pdf"
                  download
                  variant="text"
                  size="medium"
                  startIcon={<DownloadRounded />}
                  sx={{
                    px: 1.5,
                    py: 1.1,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "none",
                  }}
                >
                  {t("downloadCV")}
                </Button>
              </Stack>

              {/* Social Links */}
              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  pt: 2,
                  borderTop: "2px solid",
                  borderColor: "text.primary",
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  alignItems: {
                    xs: "flex-start",
                    sm: "center",
                  },
                  justifyContent: "flex-end",
                  gap: 1.5,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "text.primary",
                  }}
                >
                  {t("socialTitle")}
                </Typography>

                <Stack direction="row" spacing={0.8}>
                  {socialLinks.map(({ label, href, icon: IconComponent }) => (
                    <IconButton
                      key={label}
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      size="small"
                      sx={{
                        width: 36,
                        height: 36,
                        color: "background.paper",
                        bgcolor: "text.primary",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "background.paper",
                          bgcolor: "text.primary",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <IconComponent sx={{ fontSize: 17 }} />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
