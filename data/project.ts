import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "sia-sekar-telkom",
    category: "featured",
    title: {
      id: "Sistem Informasi Akuntansi - Yayasan Sekar Telkom",
      en: "Accounting Information System - Sekar Telkom Foundation",
    },
    context: {
      id: "Proyek Akademik",
      en: "Academic Project",
    },
    description: {
      id: "Sistem informasi akuntansi yang dirancang untuk membantu yayasan dan organisasi nirlaba dalam mengelola pencatatan serta pelaporan keuangan secara terstruktur sesuai acuan ISAK 335. Aplikasi ini mencakup satu siklus akuntansi, mulai dari pencatatan transaksi hingga penyusunan laporan keuangan, serta menerapkan algoritma Jaccard Similarity untuk memberikan rekomendasi bagan akun dalam proses pencatatan jurnal umum.",
      en: "An accounting information system designed to help foundations and nonprofit organizations manage structured financial records and reporting in accordance with ISAK 335 guidelines. The application covers the complete accounting cycle, from transaction recording to financial statement preparation, and uses the Jaccard Similarity algorithm to recommend appropriate chart of accounts when recording general journal entries.",
    },
    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "AWS",
    ],
    teamSize: 3,
    period: "2026",
    roles: [
      { id: "System Analyst", en: "System Analyst" },
      { id: "Full Stack Developer", en: "Full Stack Developer" },
      { id: "UI/UX Designer", en: "UI/UX Designer" },
    ],
    contributions: [
      {
        id: "Melakukan requirements gathering, menentukan ruang lingkup proyek, dan merancang solusi aplikasi.",
        en: "Conducted requirements gathering, defined the project scope, and designed the application solution.",
      },
      {
        id: "Merancang UI/UX, database, ERD, sequence diagram, use case diagram, serta menyusun functional dan non-functional requirements.",
        en: "Designed the UI/UX, database, ERD, sequence diagrams, and use case diagrams, while defining functional and non-functional requirements.",
      },
      {
        id: "Mengembangkan aplikasi pada sisi frontend dan backend.",
        en: "Developed both the frontend and backend of the application.",
      },
      {
        id: "Melakukan deployment aplikasi ke AWS serta mengonfigurasi container dan layanan menggunakan Docker Compose.",
        en: "Deployed the application to AWS and configured containers and services using Docker Compose.",
      },
      {
        id: "Mengimplementasikan algoritma Jaccard Similarity untuk memberikan rekomendasi bagan akun pada fitur jurnal umum.",
        en: "Implemented the Jaccard Similarity algorithm to recommend appropriate chart of accounts in the general journal feature.",
      },
    ],
    organization: {
      id: "Yayasan Sekar Telkom",
      en: "Sekar Telkom Foundation",
    },
    gallery: [
      "/images/projects/SIA-01.png",
      "/images/projects/SIA-02.png",
      "/images/projects/SIA-03.png",
    ],
    links: {
      gitlab: "https://gitlab.com/basganajaah/yst-sistem-informasi-akuntansi",
    },
  },
  {
    id: "tifosi",
    category: "featured",
    title: {
      id: "TIFOSI - Telemetry & Information for Formula One Statistics & Insights",
      en: "TIFOSI - Telemetry & Information for Formula One Statistics & Insights",
    },
    context: {
      id: "Proyek Pribadi",
      en: "Personal Project",
    },
    description: {
      id: "Dashboard analitik Formula 1 yang menyajikan statistik balapan, jadwal Grand Prix, klasemen kejuaraan, arsip historis, dan visualisasi progres posisi pembalap per lap. Dikembangkan melalui migrasi dari Vanilla JavaScript ke React, dengan peningkatan antarmuka, pengelolaan state, serta integrasi data melalui RESTful API.",
      en: "A Formula 1 analytics dashboard featuring race statistics, Grand Prix schedules, championship standings, historical archives, and interactive lap-by-lap driver position visualizations. Developed through a migration from Vanilla JavaScript to React, with improvements to the user interface, state management, and RESTful API integration.",
    },
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS3",
      "TanStack Query",
      "Chart.js",
      "React Router",
      "FastAPI",
      "PostgreSQL",
    ],
    teamSize: 2,
    period: "2026",
    roles: [{ id: "Frontend Engineer", en: "Frontend Engineer" }],
    contributions: [
      {
        id: "Melakukan migrasi frontend dari Vanilla JavaScript ke React.",
        en: "Migrated the frontend from Vanilla JavaScript to React.",
      },
      {
        id: "Meningkatkan dan menyempurnakan antarmuka pengguna (UI/UX).",
        en: "Improved and refined the user interface and user experience (UI/UX).",
      },
      {
        id: "Mengelola state dan data fetching menggunakan TanStack Query.",
        en: "Managed application state and data fetching using TanStack Query.",
      },
      {
        id: "Mengintegrasikan RESTful API dan mengembangkan visualisasi data menggunakan Chart.js.",
        en: "Integrated RESTful APIs and developed data visualizations using Chart.js.",
      },
    ],
    gallery: [
      "/images/projects/TIFOSI-01.png",
      "/images/projects/TIFOSI-02.png",
      "/images/projects/TIFOSI-03.png",
      "/images/projects/TIFOSI-04.png",
    ],
    links: {
      github: "https://github.com/Cobalttt2311/f1-view",
      demo: "https://f1-view-nine.vercel.app/dashboard",
    },
  },
];
