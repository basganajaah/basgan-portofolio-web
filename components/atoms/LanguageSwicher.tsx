"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Button, Stack, Divider } from "@mui/material";
export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (nextLocale: "id" | "en") => {
    if (nextLocale === locale) return;

    router.replace(pathname, { locale: nextLocale, scroll: false });
  };

  return (
    <Stack
      direction="row"
      spacing={0.5}
      sx={{
        border: "2px solid #171717",
        bgColor: "#ffffff",
        borderRadius: "50px",
        p: 0.4,
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => switchLanguage("id")}
        disableRipple
        sx={{
          minWidth: 38,
          px: 1,
          py: 0.5,
          borderRadius: 20,
          fontSize: "0.75rem",
          fontWeight: 700,
          color: locale === "id" ? "white" : "text.primary",
          bgcolor: locale === "id" ? "primary.main" : "transparent",
          "&:hover": {
            bgcolor: locale === "id" ? "primary.main" : "action.hover",
          },
        }}
      >
        ID
      </Button>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          borderRightWidth: 2,
          borderColor: "text.primary",
          height: "1.25rem",
          alignSelf: "center",
        }}
      />

      <Button
        onClick={() => switchLanguage("en")}
        disableRipple
        sx={{
          minWidth: 38,
          px: 1,
          py: 0.5,
          borderRadius: 20,
          fontSize: "0.75rem",
          fontWeight: 700,
          color: locale === "en" ? "white" : "text.primary",
          bgcolor: locale === "en" ? "primary.main" : "transparent",
          "&:hover": {
            bgcolor: locale === "en" ? "primary.main" : "action.hover",
          },
        }}
      >
        EN
      </Button>
    </Stack>
  );
}
