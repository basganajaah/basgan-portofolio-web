"use client";

import { Box, Typography, type SxProps, type Theme } from "@mui/material";

interface ProjectImageFallbackProps {
  title: string;
  sx?: SxProps<Theme>;
  textSx?: SxProps<Theme>;
}

export default function ProjectImageFallback({
  title,
  sx,
  textSx,
}: ProjectImageFallbackProps) {
  const initials = (title || "").trim().slice(0, 2).toUpperCase();

  return (
    <Box
      sx={[
        {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          color: "text.primary",
          userSelect: "none",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography
        sx={[
          {
            fontSize: { xs: 36, md: 48 },
            fontWeight: 800,
            letterSpacing: "-0.08em",
            opacity: 0.5,
          },
          ...(Array.isArray(textSx) ? textSx : [textSx]),
        ]}
      >
        {initials}
      </Typography>
    </Box>
  );
}
