import type { LocalizedText } from "@/types/common";

export interface WorkExperience {
  id: string;
  company: string;
  companyLogo?: string;
  position: LocalizedText;
  employmentType: LocalizedText;
  location: LocalizedText;
  workMode?: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  contributions?: LocalizedText[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: LocalizedText;
  institutionLogo?: string;
  degree: LocalizedText;
  fieldOfStudy: LocalizedText;
  period: LocalizedText;
  description?: LocalizedText;
  gpaScore: string;
  achievements?: LocalizedText[];
}
