"use client";

import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDownwardRounded } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  const t = useTranslations("Hero");

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      setVisible(!atBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            bottom: "calc(20px + env(safe-area-inset-bottom))",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 1200,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: 2,
              py: 1,
              borderRadius: "50px",
              bgcolor: "#171717",
              color: "#ffffff",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {t("scroll")}
            </Typography>

            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              style={{ display: "flex" }}
            >
              <ArrowDownwardRounded sx={{ fontSize: 18, color: "inherit" }} />
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
