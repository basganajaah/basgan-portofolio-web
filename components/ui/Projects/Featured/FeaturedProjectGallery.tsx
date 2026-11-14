"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "next-intl";
import type { Project } from "@/types/project";

interface FeaturedProjectGalleryProps {
  project: Project;
}

export default function FeaturedProjectGallery({
  project,
}: FeaturedProjectGalleryProps) {
  const locale = useLocale();
  const images = (project.gallery ?? []).filter(
    (image): image is string => Boolean(image),
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const activeImage = images[activeIndex] ?? "/images/profile.jpeg";

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length, isHovered, activeIndex]);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "minmax(0, 1fr)",
          md: images.length > 1 ? "minmax(0, 1fr) 130px" : "1fr",
        },
        gap: 1.5,
        alignItems: "stretch",
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderRadius: 0,
          border: "none",
          outline: "none",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 4px 20px rgba(0, 0, 0, 0.45)"
              : "0 4px 20px rgba(0, 0, 0, 0.08)",
          isolation: "isolate",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${locale}-${project.id}-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          >
            <Image
              src={activeImage}
              alt={`${project.title.en} screenshot`}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 900px) 100vw, 1100px"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            gap: 1,
            height: { xs: "auto", md: "100%" },
            minHeight: 0,
            minWidth: 0,
            overflowX: { xs: "auto", md: "hidden" },
            overflowY: { xs: "hidden", md: "auto" },
            p: 0.5,
            m: -0.5,
            pr: { xs: 0.5, md: 1 },

            scrollbarWidth: "thin",
            scrollbarColor: "#737373 transparent",

            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#737373",
              borderRadius: "999px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#171717",
            },
          }}
        >
          {images.map((image, index) => (
            <Box
              key={`${locale}-${project.id}-thumbnail-${index}`}
              component="button"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project image ${index + 1}`}
              aria-pressed={activeIndex === index}
              sx={{
                position: "relative",
                flex: {
                  xs: "0 0 112px",
                  md: "0 0 76px",
                },
                width: { xs: 112, md: "100%" },
                height: { xs: 70, md: 76 },
                minWidth: 0,
                overflow: "hidden",
                p: 0,
                borderRadius: 0,
                outline: "none",
                border: "none",
                boxShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 2px 8px rgba(0, 0, 0, 0.3)"
                    : "0 2px 8px rgba(0, 0, 0, 0.06)",
                cursor: "pointer",
                opacity: activeIndex === index ? 1 : 0.45,
                transition: "opacity 0.25s",
                "&:hover": { opacity: 1 },
              }}
            >
              <Image
                src={image}
                alt={`Project screenshot ${index + 1}`}
                fill
                sizes="130px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
