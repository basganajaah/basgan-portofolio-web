"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Button, Stack, Divider } from "@mui/material";

const SCROLL_ANCHOR_KEY = "lang-switch-scroll-anchor";
const ANCHOR_TTL_MS = 10000;

interface SavedScrollAnchor {
  selector: string;
  offsetTop: number;
  hash: string;
  scrollY: number;
  timestamp: number;
}

function captureScrollAnchor(): SavedScrollAnchor {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main section[id], footer"),
  );

  // Pick the section currently at the reading line (below the fixed navbar)
  const readingLine = 140;
  let activeEl: HTMLElement | null = null;

  for (const el of sections) {
    const rect = el.getBoundingClientRect();
    if (rect.top <= readingLine) {
      activeEl = el;
    } else {
      break;
    }
  }

  if (!activeEl && sections.length > 0) {
    activeEl = sections[0];
  }

  const selector = activeEl
    ? activeEl.id
      ? `#${activeEl.id}`
      : "footer"
    : "";

  return {
    selector,
    offsetTop: activeEl ? activeEl.getBoundingClientRect().top : 0,
    hash: window.location.hash,
    scrollY: window.scrollY,
    timestamp: Date.now(),
  };
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const raw = sessionStorage.getItem(SCROLL_ANCHOR_KEY);
    if (!raw) return;

    let saved: SavedScrollAnchor | null = null;
    try {
      saved = JSON.parse(raw) as SavedScrollAnchor;
    } catch {
      sessionStorage.removeItem(SCROLL_ANCHOR_KEY);
      return;
    }

    if (!saved || Date.now() - saved.timestamp > ANCHOR_TTL_MS) {
      sessionStorage.removeItem(SCROLL_ANCHOR_KEY);
      return;
    }

    if (saved.hash) {
      window.history.replaceState(null, "", saved.hash);
    }

    let cancelled = false;
    const cancelOnUserScroll = () => {
      cancelled = true;
      sessionStorage.removeItem(SCROLL_ANCHOR_KEY);
    };

    window.addEventListener("wheel", cancelOnUserScroll, { passive: true, once: true });
    window.addEventListener("touchstart", cancelOnUserScroll, { passive: true, once: true });

    const restorePosition = () => {
      if (cancelled) return;

      if (saved.scrollY <= 10) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }

      const el = saved.selector
        ? document.querySelector<HTMLElement>(saved.selector)
        : null;

      if (el) {
        const currentTop = el.getBoundingClientRect().top;
        const targetY = window.scrollY + (currentTop - saved.offsetTop);
        window.scrollTo({ top: Math.max(0, targetY), behavior: "instant" });
      } else {
        window.scrollTo({ top: saved.scrollY, behavior: "instant" });
      }
    };

    let raf2 = 0;
    const raf1 = window.requestAnimationFrame(() => {
      restorePosition();
      raf2 = window.requestAnimationFrame(restorePosition);
    });
    const timer1 = window.setTimeout(restorePosition, 100);
    const timer2 = window.setTimeout(() => {
      restorePosition();
      sessionStorage.removeItem(SCROLL_ANCHOR_KEY);
    }, 300);

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      window.removeEventListener("wheel", cancelOnUserScroll);
      window.removeEventListener("touchstart", cancelOnUserScroll);
    };
  }, [locale]);

  const switchLanguage = (nextLocale: "id" | "en") => {
    if (nextLocale === locale) return;

    try {
      const anchor = captureScrollAnchor();
      sessionStorage.setItem(SCROLL_ANCHOR_KEY, JSON.stringify(anchor));
    } catch {
      // Ignore storage errors in restricted environments
    }

    router.replace(pathname, { locale: nextLocale, scroll: false });
  };

  return (
    <Stack
      direction="row"
      spacing={0.5}
      sx={{
        border: "2px solid #171717",
        bgcolor: "background.paper",
        borderRadius: "50px",
        p: 0.4,
        alignItems: "center",
      }}
    >
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
          color: locale === "en" ? "background.paper" : "text.primary",
          bgcolor: locale === "en" ? "primary.main" : "transparent",
          "&:hover": {
            bgcolor: locale === "en" ? "primary.main" : "action.hover",
          },
        }}
      >
        EN
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
        onClick={() => switchLanguage("id")}
        disableRipple
        sx={{
          minWidth: 38,
          px: 1,
          py: 0.5,
          borderRadius: 20,
          fontSize: "0.75rem",
          fontWeight: 700,
          color: locale === "id" ? "background.paper" : "text.primary",
          bgcolor: locale === "id" ? "primary.main" : "transparent",
          "&:hover": {
            bgcolor: locale === "id" ? "primary.main" : "action.hover",
          },
        }}
      >
        ID
      </Button>
    </Stack>
  );
}
