import { Box } from "@mui/material";
import { projects } from "@/data/project";

export default function AcademicProject() {
  const academicProjects = projects.filter(
    (project) => project.category === "academic",
  );

  return (
    <Box
    component="section"
    id="academic-projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 9, md: 12 },
        mb: 10,
      }}
    >
      asdasd
    </Box>
  );
}
