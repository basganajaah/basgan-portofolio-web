import { Box } from "@mui/material";
import { projects } from "@/data/project";
import FeaturedProjectCard from "./FeaturedProjectCard";
import TitleSection from "@/components/atoms/TitleSection";

export default function FeaturedProject() {
  const featuredProjects = projects.filter(
    (project) => project.category === "featured",
  );

  return (
    <>
      <TitleSection category="featured" />
      <Box
        component="section"
        id="featured-projects"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 4 },
          mb: 10,
        }}
      >
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </>
  );
}
