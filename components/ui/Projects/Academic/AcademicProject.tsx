import { Box } from "@mui/material";
import { projects } from "@/data/project";
import AcademicProjectCarousel from "./AcademicProjectCarousel";
import TitleSection from "@/components/atoms/TitleSection";

export default function AcademicProject() {
  const academicProjects = projects.filter(
    (project) => project.category === "academic",
  );

  if (academicProjects.length === 0) return null;

  return (
    <>
      <TitleSection category="academic" />
      <Box
        component="section"
        id="academic-projects"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 5, md: 7 },
          mb: 10,
        }}
      >
        <AcademicProjectCarousel projects={academicProjects} />
      </Box>
    </>
  );
}
