import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import FeaturedProject from "@/components/organisms/Projects/Featured/FeaturedProject";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        pb: { xs: 10, md: 16 },
        scrollMarginTop: "100px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "text.secondary",
              fontWeight: 700,
              letterSpacing: "0.16em",
            }}
          >
            01 / {t("projects")}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontWeight: 800,
              letterSpacing: "-0.055em",
              fontSize: { xs: "2.5rem", md: "4rem" },
              lineHeight: 1.1,
            }}
          >
            {t("title")}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            {t("subtitle")}
          </Typography>
        </Box>

        <FeaturedProject />
      </Container>
    </Box>
  );
}
