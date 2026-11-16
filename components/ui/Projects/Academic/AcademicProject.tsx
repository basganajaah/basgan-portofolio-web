import { Box } from "@mui/material";
import { projects } from "@/data/project";
import TitleSection from "@/components/atoms/TitleSection";
import AcademicProjectCarousel from "./AcademicProjectCarousel";
import AcademicProjectCard from "./AcademicProjectCard";

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
          mb: 4,
        }}
      >
        <AcademicProjectCarousel>
          {academicProjects.map((project) => (
            <AcademicProjectCard key={project.id} project={project} />
          ))}
        </AcademicProjectCarousel>
      </Box>
    </>
  );
}
