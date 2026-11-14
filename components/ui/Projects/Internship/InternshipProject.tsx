"use client";

import { Box } from "@mui/material";
import { projects } from "@/data/project";
import InternshipProjectItem from "./InternshipProjectItem";
import TitleSection from "@/components/atoms/TitleSection";

export default function InternshipProject() {
  const internshipProjects = projects.filter(
    (project) => project.category === "internship",
  );

  return (
    <>
      <TitleSection category="internship" reverse={true}/>
      <Box
        component="section"
        id="internship-projects"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 2 },
          mb: 10,
        }}
      >
        {internshipProjects.map((project, index) => (
          <Box key={project.id}>
            <Box sx={{ mt: { xs: 3, md: 4 } }}>
              <InternshipProjectItem project={project} index={index} />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
