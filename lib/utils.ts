import type { LocalizedText } from "@/types/common";

export type Locale = "id" | "en";

export function getLocalizedText(
  value: LocalizedText | null | undefined,
  locale: Locale,
): string {
  if (!value) return "";

  return value[locale] || value.en || value.id || "";
}

export function numSection(category: string) {
  const cat = category.toLowerCase();

  let num = "";

  switch (cat) {
    case "featured":
      num = "01";
      break;
    case "internship":
      num = "02";
      break;
    case "academic":
      num = "03";
      break;
    case "other":
      num = "04";
      break;
    default:
      num = "01";
  }

  return num;
}

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.12,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};
