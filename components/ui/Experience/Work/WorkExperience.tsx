import { Box } from "@mui/material";
import { workExperiences } from "@/data/experience";
import WorkExperienceTimeline from "./WorkExperienceTimeline";
import TitleSection from "@/components/atoms/TitleSection";

export default function WorkExperience() {
  return (
    <>
      <TitleSection category="work" namespace="Experience" />
      <Box
        component="section"
        id="work-experience"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 4 },
          mb: 4,
          mt: 2,
        }}
      >
        <WorkExperienceTimeline experiences={workExperiences} />
      </Box>
    </>
  );
}

