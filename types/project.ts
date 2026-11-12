import type { LocalizedText, uniqueFactsData } from "@/types/common";

export type ProjectCategory = "featured" | "internship" | "academic" | "other";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: LocalizedText;
  description: LocalizedText;
  context?: LocalizedText;
  notes?: LocalizedText;
  gallery?: string[];
  technologies: string[];
  teamSize?: number;
  roles?: string[];
  period?: string;
  organization?: LocalizedText;
  contributions?: LocalizedText[];
  shortContributions?: LocalizedText[];
  uniqueFacts?: uniqueFactsData[];
  links?: {
    github?: string;
    gitlab?: string;
    demo?: string;
  };
}
