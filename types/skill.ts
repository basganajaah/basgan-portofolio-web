export type SkillLevelId = "strong" | "intermediate" | "basic";

export type SkillCategoryId = "languages" | "frameworks" | "tools";

export interface SkillCategory {
  id: SkillCategoryId;
  skills: string[];
}

export interface SkillLevel {
  id: SkillLevelId;
  categories: SkillCategory[];
}
