"use client";

import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { FiChevronDown } from "react-icons/fi";

import { certificates } from "@/data/certificate";
import type { Certificate } from "@/types/certificate";

import CertificateCard from "./CertificateCard";
import CertificateDetailModal from "./CertificateDetailModal";

const INITIAL_DISPLAY_COUNT = 3;
const LOAD_MORE_COUNT = 6;

export default function CertificateGrid() {
  const t = useTranslations("Certificate");

  const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const visibleCertificates = certificates.slice(0, visibleCount);
  const hasMore = visibleCount < certificates.length;

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + LOAD_MORE_COUNT, certificates.length),
    );
  };

  const handleOpenModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 2, md: 2.5 },
          alignItems: "stretch",
        }}
      >
        {visibleCertificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onClick={handleOpenModal}
          />
        ))}
      </Box>

      {hasMore && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 3, md: 4 },
          }}
        >
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            endIcon={<FiChevronDown />}
            sx={{
              px: 3,
              py: 1.1,
              borderRadius: 2,
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            {t("loadMore")}
          </Button>
        </Box>
      )}

      <CertificateDetailModal
        certificate={selectedCertificate}
        open={Boolean(selectedCertificate)}
        onClose={handleCloseModal}
      />
    </>
  );
}
