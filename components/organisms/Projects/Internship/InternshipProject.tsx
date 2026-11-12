"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/project";
import InternshipProjectItem from "./InternshipProjectItem";

export default function InternshipProject() {
  const internshipProjects = projects.filter(
    (project) => project.category === "internship",
  );

  const t = useTranslations("Projects");

  return (
    <Box
      component="section"
      id="internship-projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
      }}
    >
      {internshipProjects.map((project, index) => (
        <Box key={project.id}>
          {/* Project Heading */}
          <motion.div
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 40 : -40,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {String(index + 1).padStart(2, "0")}
              </Typography>

              <Divider
                sx={{
                  flex: 1,
                  borderBottomWidth: 2,
                  borderColor: "#171717",
                }}
              />

              <Typography
                variant="overline"
                sx={{ fontWeight: 700, letterSpacing: "0.14em" }}
              >
                {t("internship")}
              </Typography>
            </Stack>
          </motion.div>

          {/* Project Item */}
          <Box sx={{ mt: { xs: 3, md: 4 } }}>
            <InternshipProjectItem project={project} index={index} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
