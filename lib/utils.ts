import type { LocalizedText } from "@/types/common";

export type Locale = "id" | "en";

export function getLocalizedText(
  value: LocalizedText | null | undefined,
  locale: Locale,
): string {
  if (!value) return "";

  return value[locale] || value.en || value.id || "";
}

export function numTitle(section: string) {
  const sec = section.toLowerCase();

  let secNum = "";

  switch (sec) {
    case "projects":
      secNum = "01";
      break;
    case "experience":
      secNum = "02";
      break;
    case "about":
      secNum = "03";
      break;
    case "skills":
      secNum = "04";
      break;
    case "certificate":
      secNum = "05";
      break;
    case "contact":
      secNum = "06";
      break;
    default:
      secNum = "01";
  }

  return secNum;
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
    case "work":
      num = "01";
      break;
    case "education":
      num = "02";
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
