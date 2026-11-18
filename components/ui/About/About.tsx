"use client";

import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { useState } from "react";

import { itemVariants, sectionVariants, numTitle } from "@/lib/utils";

import AboutProfile from "./AboutProfile";
import AboutCarousel from "./AboutCarousel";
import AboutInterest from "./AboutInterest";

const cardHover = {
  y: -4,
  transition: {
    duration: 0.25,
    ease: "easeOut" as const,
  },
};

export default function About() {
  const t = useTranslations("About");

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Box
      component="section"
      id="about"
      sx={{
        pb: { xs: 4, md: 6 },
        scrollMarginTop: "100px",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          onViewportEnter={() => setIsVisible(true)}
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: { xs: 3, md: 4 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                }}
              >
                {numTitle("about")} / {t("about")}
              </Typography>

              <Typography
                component="div"
                variant="h2"
                sx={{
                  mt: 1,
                  fontWeight: 800,
                  letterSpacing: "-0.055em",
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.1,
                  minHeight: { xs: "1.1em", md: "1.1em" },
                }}
              >
                {isVisible && (
                  <Typewriter
                    options={{
                      delay: 65,
                      cursor: "",
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString(t("title")).start();
                    }}
                  />
                )}
              </Typography>

              <Typography
                component="div"
                sx={{
                  mt: 2,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  minHeight: "3.6em",
                }}
              >
                {isVisible && (
                  <Typewriter
                    options={{
                      delay: 5,
                      cursor: "",
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString(t("subtitle")).start();
                    }}
                  />
                )}
              </Typography>
            </Box>
          </motion.div>

          {/* Three-column card layout */}
          <motion.div variants={sectionVariants}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  lg: "minmax(0, 0.9fr) minmax(0, 1.2fr) minmax(0, 0.9fr)",
                },
                gap: { xs: 2.5, lg: 2.5 },
                alignItems: "stretch",
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={cardHover}
                style={{ height: "100%" }}
              >
                <AboutProfile isVisible={isVisible} />
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={cardHover}
                style={{ height: "100%" }}
              >
                <AboutCarousel
                  activeIndex={activeIndex}
                  onChange={setActiveIndex}
                  isActive={isVisible}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={cardHover}
                style={{ height: "100%" }}
              >
                <AboutInterest
                  activeIndex={activeIndex}
                  isVisible={isVisible}
                />
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
