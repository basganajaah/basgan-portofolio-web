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
