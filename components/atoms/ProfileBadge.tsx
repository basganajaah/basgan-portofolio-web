"use client";

import { Box, Typography, type SxProps, type Theme } from "@mui/material";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ProfileBadgeProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  delay?: number;
  floatDuration?: number;
  sx?: SxProps<Theme>;
}

export default function ProfileBadge({
  icon,
  title,
  subtitle,
  delay = 0.4,
  floatDuration,
  sx,
}: ProfileBadgeProps) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      sx={[
        {
          position: "absolute",
          zIndex: 10,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        component={motion.div}
        animate={{ y: [0, -6, 0] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        transition={{
          y: {
            duration: floatDuration ?? 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 1.5 },
          px: { xs: 1.2, sm: 1.8 },
          py: { xs: 0.8, sm: 1 },
          borderRadius: { xs: "12px", sm: "16px" },
          bgcolor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          border: "4px solid #000000",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {icon && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 26, sm: 34 },
              height: { xs: 26, sm: 34 },
              borderRadius: { xs: "8px", sm: "10px" },
              bgcolor: "#171717",
              color: "#ffffff",
              flexShrink: 0,
              "& .MuiSvgIcon-root": {
                fontSize: { xs: 14, sm: 18 },
              },
            }}
          >
            {icon}
          </Box>
        )}
        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: { xs: "0.68rem", sm: "0.78rem" },
              fontWeight: 700,
              color: "#171717",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              sx={{
                fontSize: { xs: "0.58rem", sm: "0.65rem" },
                color: "text.secondary",
                fontWeight: 500,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
