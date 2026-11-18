"use client";

import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { useState } from "react";

import { itemVariants, numTitle, sectionVariants } from "@/lib/utils";

import { skillLevels } from "@/data/skill";
import SkillsLevelCard from "./SkillsLevelCard";

export default function Skills() {
  const t = useTranslations("Skills");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Box
      component="section"
      id="skills"
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
            <Box sx={{ mb: { xs: 2, md: 4 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                }}
              >
                {numTitle("skills")} / {t("skills")}
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

          {/* Single Skills Card */}
          <motion.div variants={sectionVariants}>
            <SkillsLevelCard levels={skillLevels} />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
