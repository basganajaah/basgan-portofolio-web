import type { Metadata } from "next";
import { Suspense } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";

import ThemeRegistry from "@/components/providers/ThemeRegistry";
import ScrollProgress from "@/components/atoms/ScrollProgressBar";
import { routing } from "@/i18n/routing";

import "../globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Bandyaga A. Sugandi | My Journey Portfolio Website",
  description:
    "Fullstack Developer passionate about building modern, responsive, and scalable web applications.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={plusJakartaSans.variable}>
      <body>
        <Suspense fallback={null}>
          <NextIntlClientProvider
            locale={locale}
            messages={(await import(`../../messages/${locale}.json`)).default}
          >
            <ThemeRegistry>
              <ScrollProgress />
              {children}
            </ThemeRegistry>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
