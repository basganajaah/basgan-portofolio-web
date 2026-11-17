import type { LocalizedText } from "@/types/common";

export type AboutInterestId = "development" | "gaming" | "music" | "writing";

export type AboutInterestIcon = "code" | "gamepad" | "music" | "writing";

export interface AboutInterest {
  id: AboutInterestId;
  icon: AboutInterestIcon;
  image: string;
  imageAlt: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}
