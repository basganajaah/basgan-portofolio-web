"use client";

import { Box } from "@mui/material";
import { projects } from "@/data/project";
import OtherProjectSection from "./OtherProjectSection";
import TitleSection from "@/components/atoms/TitleSection";

export default function OtherProject() {
  const otherProjects = projects.filter(
    (project) => project.category === "other",
  );

  return (
    <>
      <TitleSection category="other" reverse={true} />
      <Box
        component="section"
        id="other-projects"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 1 },
          mb: 4,
          mt: 2,
        }}
      >
        {otherProjects.map((project) => (
          <OtherProjectSection key={project.id} project={project} />
        ))}
      </Box>
    </>
  );
}
