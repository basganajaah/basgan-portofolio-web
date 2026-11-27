import type { WorkExperience, Education } from "@/types/experience";

export const workExperiences: WorkExperience[] = [
  {
    id: "nti-intern",
    company: "PT Neural Technologies Indonesia",
    companyLogo: "/images/experience/NTI.png",
    position: {
      id: "Frontend Engineer",
      en: "Frontend Engineer",
    },
    employmentType: {
      id: "Magang",
      en: "Internship",
    },
    location: {
      id: "Jakarta Selatan, Jakarta, Indonesia",
      en: "South Jakarta, Jakarta, Indonesia",
    },
    workMode: {
      id: "Hybrid",
      en: "Hybrid",
    },
    period: {
      id: "Juli 2026 — Oktober 2026",
      en: "July 2026 — October 2026",
    },
    description: {
      id: "Berperan sebagai Frontend Engineer dalam pengembangan platform analitik jaringan telekomunikasi untuk memantau kualitas layanan dan performa jaringan. Terlibat dalam pengembangan dashboard interaktif, visualisasi data, serta integrasi API untuk mendukung kebutuhan monitoring operator.",
      en: "Worked as a Frontend Engineer developing telecommunications network analytics platforms to monitor service quality and network performance. Contributed to interactive dashboards, data visualization, and API integration to support network operators monitoring needs.",
    },
    // contributions: [
    //   {
    //     id: "Mengembangkan fitur aplikasi web.",
    //     en: "Developed web application features.",
    //   },
    // ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Map and Charts Data Visualization",
      "Modular Component Library",
      "Real Time Analytical Dashboard",
    ],
  },
];

export const educations: Education[] = [
  {
    id: "polban",
    institution: {
      id: "Politeknik Negeri Bandung",
      en: "Bandung State Polytechnic",
    },
    institutionLogo: "/images/experience/POLBAN.png",
    degree: {
      id: "Diploma Tiga Teknik Komputer dan Informatika",
      en: "Associate Degree in Computer and Informatics Engineering",
    },
    fieldOfStudy: {
      id: "Teknik Komputer dan Informatika",
      en: "Computer and Informatics Engineering",
    },
    period: {
      id: "2023 — 2026",
      en: "2023 — 2026",
    },
    gpaScore: "3.61 / 4.00  Cum Laude",
  },
];
