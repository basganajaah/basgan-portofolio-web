"use client";

import { Box, Stack } from "@mui/material";

import type { WorkExperience } from "@/types/experience";
import WorkExperienceItem from "./WorkExperienceItem";

interface WorkExperienceTimelineProps {
  experiences: WorkExperience[];
}

export default function WorkExperienceTimeline({
  experiences,
}: WorkExperienceTimelineProps) {
  return (
    <Stack spacing={4}>
      {experiences.map((experience, index) => (
        <Box
          key={experience.id}
          sx={{
            position: "relative",
            pl: experiences.length > 1 ? { xs: 2, sm: 2.5 } : 0,
            pb: index !== experiences.length - 1 ? 1 : 0,

            ...(experiences.length > 1 && {
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 5,
                bottom: index !== experiences.length - 1 ? -24 : "auto",
                width: "2px",
                bgcolor: "divider",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                left: -4,
                top: 5,
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "primary.main",
                border: "2px solid",
                borderColor: "background.paper",
              },
            }),
          }}
        >
          <WorkExperienceItem experience={experience} />
        </Box>
      ))}
    </Stack>
  );
}
