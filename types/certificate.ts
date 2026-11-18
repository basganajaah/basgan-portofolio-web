import type { LocalizedText } from "@/types/common";

export interface Certificate {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  organization: string;
  image: string;
  issueDate?: string;
  expirationDate?: string;
  credentialUrl?: string;
  score?: string;
  category?: string;
}
