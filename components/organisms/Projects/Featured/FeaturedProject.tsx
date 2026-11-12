import { Box } from "@mui/material";
import { projects } from "@/data/project";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProject() {
  const featuredProjects = projects.filter(
    (project) => project.category === "featured",
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 9, md: 12 },
        mb: 10,
      }}
    >
      {featuredProjects.map((project, index) => (
        <FeaturedProjectCard key={project.id} project={project} index={index} />
      ))}
    </Box>
  );
}
