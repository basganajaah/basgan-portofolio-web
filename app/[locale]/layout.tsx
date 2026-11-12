import type { Metadata } from "next";
import { Suspense } from "react";
// import type { ReactNode } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import "../globals.css";
import ScrollProgress from "@/components/atoms/ScrollProgressBar";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bandyaga A. Sugandi | My Journey Portofolio Website",
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
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
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
