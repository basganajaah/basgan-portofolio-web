"use client";

import Image from "next/image";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { FiExternalLink, FiX } from "react-icons/fi";

import type { Certificate } from "@/types/certificate";
import { getLocalizedText, type Locale } from "@/lib/utils";
import RoleChip from "@/components/atoms/RoleChip";

interface CertificateDetailModalProps {
  certificate: Certificate | null;
  open: boolean;
  onClose: () => void;
}

export default function CertificateDetailModal({
  certificate,
  open,
  onClose,
}: CertificateDetailModalProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Certificate");

  if (!certificate) return null;

  const title = getLocalizedText(certificate.title, locale);
  const description = getLocalizedText(certificate.description, locale);

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(`${date}T00:00:00`));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            borderRadius: { xs: 2, sm: 3 },
            bgcolor: "background.paper",
            backgroundImage: "none",
            overflow: "hidden",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          p: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.05rem", sm: "1.25rem" },
            lineHeight: 1.4,
          }}
        >
          {t("details")}
        </Typography>

        <IconButton onClick={onClose} aria-label={t("close")} size="small">
          <FiX />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Stack spacing={3}>
          {/* Full Certificate Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              mx: "auto",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderRadius: 2,
              bgcolor: "action.hover",
            }}
          >
            <Image
              src={certificate.image}
              alt={title}
              fill
              sizes="(max-width: 900px) 100vw, 1060px"
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Certificate Details */}
          <Stack spacing={2}>
            <Box>
              {certificate.category && (
                <RoleChip
                  label={certificate.category}
                  variant="outlined"
                  size="small"
                  sx={{
                    mb: 1.5,
                    fontWeight: 600,
                  }}
                />
              )}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.3,
                  fontSize: { xs: "1.25rem", sm: "1.75rem" },
                  color: "text.primary",
                }}
              >
                {title}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mt: 0.75, fontWeight: 600 }}
              >
                {certificate.organization}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              {description}
            </Typography>

            <Divider />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                },
                gap: 2,
              }}
            >
              {certificate.issueDate && (
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    {t("issueDate")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {formatDate(certificate.issueDate)}
                  </Typography>
                </Box>
              )}

              {certificate.expirationDate && (
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    {t("expirationDate")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {formatDate(certificate.expirationDate)}
                  </Typography>
                </Box>
              )}

              {certificate.score && (
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    {t("score")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {certificate.score}
                  </Typography>
                </Box>
              )}
            </Box>

            {certificate.credentialUrl && (
              <Box>
                <Button
                  component="a"
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<FiExternalLink />}
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  {t("viewCredential")}
                </Button>
              </Box>
            )}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
