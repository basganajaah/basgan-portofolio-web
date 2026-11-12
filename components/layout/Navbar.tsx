"use client";

import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Close, Download } from "@mui/icons-material";
import ProfileImage from "@/public/images/logo.png";
import Image from "next/image";
import LanguageSwitcher from "@/components/atoms/LanguageSwicher";
import { profile } from "@/data/profile";
import { useTranslations } from "next-intl";

const CV_PATH = "/document/CV_ATS_Bandyaga Adiansyah Sugandi.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const t = useTranslations("Navbar");

  const navLinks = [
    { label: t("projects"), href: "#projects", id: "projects" },
    { label: t("experience"), href: "#experience", id: "experience" },
    { label: t("about"), href: "#about", id: "about" },
    { label: t("skills"), href: "#skills", id: "skills" },
    { label: t("certificate"), href: "#certificate", id: "certificate" },
    { label: t("contact"), href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["projects", "experience", "about", "skills", "certificate", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      if (window.scrollY < 150) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: { xs: 12, md: 20 },
        left: 0,
        right: 0,
        width: "calc(100% - 32px)",
        maxWidth: "1100px",
        mx: "auto",
        borderRadius: "20px",
        bgcolor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(16px)",
        border: "2px solid #17171720",
        boxShadow: "0 4px 20px #17171720",
        color: "text.primary",
        zIndex: 1100,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 3 } }}>
        <Stack
          direction="row"
          sx={{
            minHeight: 68,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="#home"
            onClick={() => setMenuOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "inherit",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.25rem",
              letterSpacing: "0.15rem",
              transition: "transform 0.3s ease",
              transformOrigin: "left center",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src={ProfileImage}
              width={25}
              height={25}
              alt="logo-basgan-portofolio"
            />

            <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
              {profile.nickname.acronym}
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <Box key={link.id} sx={{ position: "relative" }}>
                  <Button
                    component="a"
                    href={link.href}
                    disableRipple
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      color: isActive ? "#ffffff" : "text.secondary",
                      fontSize: "0.85rem",
                      fontWeight: isActive ? 700 : 500,
                      textTransform: "none",
                      borderRadius: "10px",
                      px: 1.75,
                      py: 0.75,
                      bgcolor: "transparent",
                      transition: "color 0.3s ease",

                      "&:hover": {
                        bgcolor: "transparent",
                        color: isActive ? "#ffffff" : "#171717",
                      },

                      ...(!isActive && {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: "14px",
                          right: "14px",
                          bottom: "4px",
                          height: "1.5px",
                          bgcolor: "#171717",
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                          transition:
                            "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                        },

                        "&:hover::after": {
                          transform: "scaleX(1)",
                        },
                      }),
                    }}
                  >
                    {link.label}
                  </Button>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 28,
                        mass: 0.8,
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#171717",
                        borderRadius: "10px",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Stack>

          {/* Desktop Actions */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <LanguageSwitcher />

            <Button
              component="a"
              href={CV_PATH}
              download
              endIcon={<Download sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: "#171717",
                color: "#fff",
                borderRadius: "10px",
                px: 2,
                py: 1,
                fontSize: "0.82rem",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#171717",
                },
              }}
            >
              {t("cv-download")}
            </Button>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "text.primary",
            }}
          >
            {menuOpen ? (
              <Close sx={{ fontSize: 22 }} />
            ) : (
              <Menu sx={{ fontSize: 22 }} />
            )}
          </IconButton>
        </Stack>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Divider sx={{ borderColor: "#17171715" }} />

              <Stack spacing={0.5} sx={{ py: 2 }}>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Button
                      key={link.label}
                      onClick={() => handleMobileNavClick(link.id)}
                      sx={{
                        justifyContent: "flex-start",
                        color: isActive ? "#ffffff" : "text.secondary",
                        bgcolor: isActive ? "#171717" : "transparent",
                        textTransform: "none",
                        fontSize: "0.9rem",
                        fontWeight: isActive ? 700 : 500,
                        borderRadius: "10px",
                        px: 1.5,
                        py: 1,
                        "&:hover": {
                          color: "#ffffff",
                          bgcolor: isActive ? "#171717" : "rgba(23, 23, 23, 0.08)",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  );
                })}

                <Divider sx={{ my: 1, borderColor: "#17171715" }} />

                {/* Mobile Language Switcher */}
                <Stack
                  direction="row"
                  sx={{
                    px: 1.5,
                    py: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "text.secondary",
                      fontWeight: 500,
                    }}
                  >
                    Language
                  </Typography>

                  <LanguageSwitcher />
                </Stack>

                {/* Mobile CV Download */}
                <Button
                  component="a"
                  href={CV_PATH}
                  download
                  onClick={() => setMenuOpen(false)}
                  endIcon={<Download sx={{ fontSize: 17 }} />}
                  fullWidth
                  sx={{
                    bgcolor: "#171717",
                    color: "#fff",
                    mt: 1,
                    py: 1.2,
                    borderRadius: "10px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#404040",
                    },
                  }}
                >
                  {t("cv-download")}
                </Button>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </AppBar>
  );
}
