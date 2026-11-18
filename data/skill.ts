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
          "Motion React",
          "TanStack Query",
          "Zustand",
        ],
      },
      {
        id: "tools",
        skills: [
          "MySQL",
          "Git",
          "GitHub",
          "GitLab",
          "Mockoon",
          "Apache ECharts",
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
          "Chart.js"
        ],
      },
      {
        id: "tools",
        skills: [
          "PostgreSQL",
          "Mapbox",
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
