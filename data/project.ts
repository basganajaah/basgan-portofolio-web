import type { Project } from "@/types/project";

export const projects: Project[] = [
  // FEATURED PROJECTS
  {
    id: "sia-sekar-telkom",
    category: "featured",
    title: {
      id: "Sistem Informasi Akuntansi - Yayasan Sekar Telkom",
      en: "Accounting Information System - Sekar Telkom Foundation",
    },
    context: {
      id: "Proyek Akademik di bawah NDA",
      en: "Academic Project under NDA",
    },
    notes: {
      id: "Beberapa data, nama, dan tampilan dalam proyek ini telah disamarkan atau diubah menjadi ilustrasi untuk mematuhi Non-Disclosure Agreements (NDA).",
      en: "Some data, names, and visuals in this project have been masked or illustrated to comply with Non-Disclosure Agreements (NDA).",
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
    roles: ["System Analyst", "Full Stack Developer", "UI/UX Designer"],
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
      "/images/projects/SIA-01.jpeg",
      "/images/projects/SIA-02.jpeg",
      "/images/projects/SIA-03.jpeg",
      "/images/projects/SIA-04.jpeg",
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
    roles: ["Frontend Engineer"],
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
      demo: "https://f1-view-nine.vercel.app/",
    },
  },

  // INTERNSHIP PROJECTS
  {
    id: "NTI-Benso",
    category: "internship",
    title: {
      id: "Analitik Jaringan Telco - Benchmark Solution",
      en: "Telco Network Analytics - Benchmark Solution",
    },
    description: {
      id: "Benchmark Solution adalah platform berbasis web yang terintegrasi dengan berbagai dashboard khusus untuk membantu operator jaringan memantau serta membandingkan kinerja layanan telekomunikasi dengan provider lain di Indonesia.",
      en: "Benchmark Solution is a web-based platform integrated with various dashboards to help network operators monitor and compare telecommunications service performance against other providers in Indonesia.",
    },
    organization: {
      id: "PT Neural Technologies Indonesia",
      en: "PT Neural Technologies Indonesia",
    },
    period: "2025",
    technologies: [
      "React",
      "Vue",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Query",
      "Zustand",
      "Ant Design",
      "Echarts",
      "MSW",
    ],
    roles: ["Frontend Engineer"],
    contributions: [
      {
        id: "Melakukan slicing dan implementasi desain UI dari Figma ke dalam aplikasi React dan Vue dengan TypeScript menggunakan Ant Design, dengan membangun komponen yang modular dan reusable.",
        en: "Translated Figma designs into React and Vue with TypeScript interfaces using Ant Design, building modular and reusable components.",
      },
      {
        id: "Mengelola state aplikasi, UI, dan filter menggunakan Zustand, serta mengintegrasikan REST API dan data fetching menggunakan TanStack React Query.",
        en: "Managed application state, UI interactions, and filters using Zustand, while integrating REST APIs and handling server-side data fetching with TanStack React Query.",
      },
      {
        id: "Mengembangkan visualisasi data menggunakan Apache ECharts, mengimplementasikan tabel dan komponen dashboard dinamis, serta mengonfigurasi tipografi dan tema light/dark mode.",
        en: "Developed data visualizations using Apache ECharts, implemented tables and dynamic dashboard components, and configured typography and light/dark themes.",
      },
      {
        id: "Meningkatkan desain UI/UX serta melakukan refactoring terhadap kode yang sudah ada untuk meningkatkan usability, maintainability, dan kualitas kode aplikasi.",
        en: "Improved UI/UX designs and refactored existing code to enhance application usability, maintainability, and overall code quality.",
      },
      {
        id: "Melakukan deployment dashboard melalui workflow Telegram Bot dan Termius untuk mendukung proses deployment pada lingkungan development.",
        en: "Deployed web dashboards through Telegram Bot workflows and Termius, supporting deployment processes in the development environment.",
      },
    ],
    shortContributions: [
      {
        id: "Implementasi UI",
        en: "UI Implementation",
      },
      {
        id: "Integrasi API & Manajemen State",
        en: "API Integration & State Management",
      },
      {
        id: "Visualisasi Data & Pengaturan Tema",
        en: "Data Visualization & Theming",
      },
      {
        id: "Refaktorisasi & Deployment",
        en: "Refactoring & Deployment",
      },
    ],
    context: {
      id: "Proyek Magang di bawah NDA",
      en: "Internship Project under NDA",
    },
    notes: {
      id: "Sebagian data dan tampilan telah disesuaikan demi mematuhi NDA.",
      en: "Some data and visuals have been adjusted to comply with an NDA.",
    },
    uniqueFacts: [
      {
        value: {
          id: "5 Dashboard",
          en: "5 Dashboards",
        },
        label: {
          id: "Semua terintegrasi dalam satu platform",
          en: "All-in-one integrated platform",
        },
      },
      {
        value: {
          id: "2 Kerangka Kerja",
          en: "2 Frameworks",
        },
        label: {
          id: "Dibangun menggunakan React dan Vue",
          en: "Built using React and Vue",
        },
      },
      {
        value: {
          id: "2 Sumber Data",
          en: "2 Data Source",
        },
        label: {
          id: "Dari platform pengukuran jaringan global terkemuka",
          en: "From leading global network benchmarking platform.",
        },
      },
    ],
    gallery: ["/images/projects/BENSO-01.jpeg"],
  },
  {
    id: "NTI-POI-CEI",
    category: "internship",
    title: {
      id: "Analitik Jaringan Telco - POI CEI 7 KQI",
      en: "Telco Network Analytics - POI CEI 7 KQI",
    },
    description: {
      id: "Dashboard real-time untuk memantau kualitas pengalaman pelanggan (CEI) di berbagai lokasi penting (POI) berdasarkan 7 indikator utama (latensi, jitter, dan stabilitas) pada layanan web, streaming, serta game guna mendeteksi gangguan dan menjaga performa tetap optimal.",
      en: "A real-time dashboard monitoring the Customer Experience Index (CEI) across key Points of Interest (POI) via 7 Key Quality Indicators (latency, jitter, and stability) for web, streaming, and gaming services to detect issues and maintain optimal performance.",
    },
    organization: {
      id: "PT Neural Technologies Indonesia",
      en: "PT Neural Technologies Indonesia",
    },
    period: "2025",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Query",
      "Zustand",
      "Material UI",
      "Echarts",
      "Mapbox-GL",
      "Framer Motion",
    ],
    roles: ["Frontend Engineer"],
    contributions: [
      {
        id: "Mengembangkan frontend POI-CEI secara mandiri sebagai Solo Frontend Engineer hingga produk mencapai tahap MVP dan rilis versi pertamanya.",
        en: "Solely developed the POI-CEI frontend as the Solo Frontend Engineer, bringing the product to its initial MVP release.",
      },
      {
        id: "Mengimplementasikan desain UI dari Figma menggunakan React, TypeScript, dan Material UI dengan membangun komponen yang modular, reusable, dan responsif.",
        en: "Translated Figma designs into responsive interfaces using React, TypeScript, and Material UI, building modular and reusable components.",
      },
      {
        id: "Mengembangkan peta interaktif menggunakan Mapbox GL, termasuk fitur pencarian lokasi melalui search bar yang terintegrasi dengan peta.",
        en: "Developed interactive maps using Mapbox GL, including an integrated search bar for location discovery.",
      },
      {
        id: "Mengimplementasikan dashboard dengan pembaruan data berkala menggunakan TanStack React Query untuk mendukung pemantauan performa jaringan secara real-time.",
        en: "Implemented scheduled data polling with TanStack React Query to support real-time network performance monitoring.",
      },
      {
        id: "Mengelola state aplikasi menggunakan Zustand, mengintegrasikan REST API, serta mengimplementasikan alur autentikasi pada sisi frontend.",
        en: "Managed application state using Zustand, integrated REST APIs, and implemented the frontend authentication flow.",
      },
      {
        id: "Mengembangkan visualisasi data menggunakan Apache ECharts, serta mengonfigurasi tema light/dark mode dan tipografi untuk meningkatkan konsistensi antarmuka.",
        en: "Developed data visualizations using Apache ECharts and configured light/dark themes and typography to improve interface consistency.",
      },
      {
        id: "Menggunakan Mockoon untuk menyediakan mock API selama proses pengembangan dan integrasi frontend.",
        en: "Used Mockoon to provide mock APIs during frontend development and integration.",
      },
    ],
    shortContributions: [
      {
        id: "Pengembangan Frontend Mandiri",
        en: "Solo Frontend Development",
      },
      {
        id: "Implementasi UI",
        en: "UI Implementation",
      },
      {
        id: "Peta Interaktif & Pencarian Lokasi",
        en: "Interactive Map & Location Search",
      },
      {
        id: "Integrasi Data Real-Time",
        en: "Real-Time Data Integration",
      },
      {
        id: "Implementasi Autentikasi Frontend",
        en: "Frontend Authentication",
      },
      {
        id: "Visualisasi Data & Pengaturan Tema",
        en: "Data Visualization & Theming",
      },
    ],
    context: {
      id: "Proyek Magang di bawah NDA",
      en: "Internship Project under NDA",
    },
    notes: {
      id: "Sebagian data dan tampilan telah disesuaikan demi mematuhi NDA.",
      en: "Some data and visuals have been adjusted to comply with an NDA.",
    },
    uniqueFacts: [
      {
        value: {
          id: "Peta Interaktif",
          en: "Interactive Map",
        },
        label: {
          id: "Menggunakan Mapbox-GL untuk visualisasi peta interaktif",
          en: "Uses Mapbox-GL for interactive map visualizations",
        },
      },
      {
        value: {
          id: "Solo Frontend",
          en: "Solo Frontend",
        },
        label: {
          id: "Mengembangkan frontend secara mandiri hingga rilis MVP pertama",
          en: "Independently built the frontend through its initial MVP release",
        },
      },
      {
        value: {
          id: "Real-Time",
          en: "Real-Time",
        },
        label: {
          id: "Pembaruan data berkala untuk pemantauan performa jaringan",
          en: "Scheduled data updates for network performance monitoring",
        },
      },
    ],
    gallery: ["/images/projects/POI-CEI-01.jpeg"],
  },
];
