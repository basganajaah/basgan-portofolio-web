"use client";

import { Box, Typography } from "@mui/material";
import { projects } from "@/data/project";
import InternshipProjectItem from "./InternshipProjectItem";

export default function InternshipProject() {
  const internshipProjects = projects.filter(
    (project) => project.category === "internship",
  );

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
      {/* Section Heading */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          01
        </Typography>

        <Box
          sx={{
            width: 48,
            height: "1px",
            bgcolor: "text.disabled",
          }}
        />

        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Internship Projects
        </Typography>
      </Box>

      {/* Project List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {internshipProjects.map((project, index) => (
          <InternshipProjectItem
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
}
