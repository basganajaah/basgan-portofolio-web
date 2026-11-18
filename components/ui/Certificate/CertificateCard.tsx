"use client";

import Image from "next/image";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

import type { Certificate } from "@/types/certificate";
import { getLocalizedText, type Locale } from "@/lib/utils";
import RoleChip from "@/components/atoms/RoleChip";

interface CertificateCardProps {
  certificate: Certificate;
  onClick: (certificate: Certificate) => void;
}

export default function CertificateCard({
  certificate,
  onClick,
}: CertificateCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Certificate");

  const title = getLocalizedText(certificate.title, locale);
  const description = getLocalizedText(certificate.description, locale);

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(`${date}T00:00:00`));

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        overflow: "hidden",
        border: "none",
        borderRadius: 3,
        bgcolor: "background.paper",
        boxShadow: 1,
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        "&:hover": {
          boxShadow: 3,
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardActionArea
        onClick={() => onClick(certificate)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {/* Certificate Preview */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            bgcolor: "action.hover",
          }}
        >
          <Image
            src={certificate.image}
            alt={title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              transition: "transform 0.35s ease",
            }}
          />
        </Box>

        {/* Certificate Information */}
        <CardContent
          sx={{
            width: "100%",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1.25,
            p: 2.5,
            "&:last-child": {
              pb: 2.5,
            },
          }}
        >
          {certificate.category && (
            <RoleChip
              label={certificate.category}
              size="small"
              sx={{
                fontWeight: 600,
                borderRadius: 1.5,
              }}
            />
          )}

          <Typography
            variant="h6"
            sx={{
              fontSize: "1.05rem",
              fontWeight: 700,
              lineHeight: 1.4,
              color: "text.primary",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>

          <Box sx={{ mt: "auto", pt: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              {certificate.organization}
            </Typography>

            {certificate.issueDate && (
              <Typography variant="caption" color="text.secondary">
                {t("issued")} {formatDate(certificate.issueDate)}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
