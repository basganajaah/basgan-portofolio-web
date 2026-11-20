import type { SkillLevel } from "@/types/skill";

export const skillLevels: SkillLevel[] = [
  {
    id: "strong",
    categories: [
      {
        id: "languages",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      },
      {
        id: "frameworks",
        skills: [
          "React",
          "Next.js",
          "Material UI",
          "Ant Design",
          "shadcn/ui",
          "Bootstrap",
          "Tailwind CSS",
          "TanStack Query",
          "Zustand",
          "Chart.js",
          "Apache ECharts",
        ],
      },
      {
        id: "tools",
        skills: [
          "Git",
          "GitHub",
          "GitLab",
          "Mockoon",
          "Postman",
          "Visual Studio Code",
        ],
      },
    ],
  },
  {
    id: "intermediate",
    categories: [
      {
        id: "languages",
        skills: ["Python", "PHP", "SQL"],
      },
      {
        id: "frameworks",
        skills: [
          "Vue.js",
          "Laravel",
          "Redux Toolkit",
          "next-intl/i18n",
          "NestJS",
          "Prisma",
          "Motion React",
          "Mapbox",
        ],
      },
      {
        id: "tools",
        skills: [
          "MySQL",
          "PostgreSQL",
          "Swagger",
          "Vite",
          "Docker",
          "Figma",
          "DBeaver",
          "Vercel",
        ],
      },
    ],
  },
  {
    id: "basic",
    categories: [
      {
        id: "languages",
        skills: ["C++", "Java", "Kotlin"],
      },
      {
        id: "frameworks",
        skills: ["JUnit", "OpenCV", "Streamlit", "FastAPI", "Vitest"],
      },
      {
        id: "tools",
        skills: [
          "Supabase",
          "AWS",
          "Azure",
          "Android Studio",
          "Linux (Ubuntu)",
          "Render",
        ],
      },
    ],
  },
];
