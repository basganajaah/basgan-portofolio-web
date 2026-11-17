import { Box } from "@mui/material";

import { educations } from "@/data/experience";
import TitleSection from "@/components/atoms/TitleSection";

import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <>
      <TitleSection
        category="education"
        namespace="Experience"
        reverse={true}
      />

      <Box
        component="section"
        id="education"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 3 },
          mb: 4,
          mt: 2,
        }}
      >
        {educations.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </Box>
    </>
  );
}
