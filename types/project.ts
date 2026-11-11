import type { LocalizedText } from "@/types/common";

export type ProjectCategory = "featured" | "internship" | "academic" | "other";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: LocalizedText;
  description: LocalizedText;
  context?: LocalizedText;
  gallery?: string[];
  technologies: string[];
  teamSize?: number;
  roles?: LocalizedText[];
  period?: string;
  organization?: LocalizedText;
  contributions?: LocalizedText[];
  links?: {
    github?: string;
    gitlab?: string;
    demo?: string;
  };
}
