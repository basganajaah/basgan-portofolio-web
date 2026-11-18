import type { Certificate } from "@/types/certificate";

export const certificates: Certificate[] = [
  {
    id: "arutala-software-tester",
    title: {
      id: "Arutala Lab Certified Junior Software Tester",
      en: "Arutala Lab Certified Junior Software Tester",
    },
    description: {
      id: "Sertifikasi Junior Software Tester yang menunjukkan kompetensi dalam pelaksanaan pengujian perangkat lunak, termasuk test execution dan unit testing.",
      en: "A Junior Software Tester certification demonstrating competency in software testing practices, including test execution and unit testing.",
    },
    organization: "Arutala Lab",
    image: "/images/certificates/ARUTALA.jpg",
    issueDate: "2026-07-01",
    expirationDate: "2029-07-01",
    category: "Software Testing",
    credentialUrl:
      "https://atms.arutalalab.net/sertifikat/TC2026.J.SWT.C.07.006",
  },
  {
    id: "toeic",
    title: {
      id: "TOEIC Listening and Reading",
      en: "TOEIC Listening and Reading",
    },
    description: {
      id: "Sertifikat hasil tes kemampuan bahasa Inggris untuk mengukur keterampilan listening dan reading dalam konteks komunikasi sehari-hari maupun profesional.",
      en: "An English proficiency test result measuring listening and reading skills in everyday and professional communication contexts.",
    },
    organization: "ITC - International Test Center",
    image: "/images/certificates/TOEIC.jpg",
    issueDate: "2026-05-01",
    expirationDate: "2028-05-01",
    score: "820",
    category: "English Proficiency",
    credentialUrl: "https://itc-indonesia.com/scanqr/detail.php",
  },
  {
    id: "wadhwani",
    title: {
      id: "Job Ready: Employability Skills",
      en: "Job Ready: Employability Skills",
    },
    description: {
      id: "Sertifikat penyelesaian program pengembangan keterampilan kerja yang berfokus pada kesiapan profesional dan kemampuan yang dibutuhkan di dunia kerja.",
      en: "A certificate of completion for an employability skills program focused on professional readiness and essential workplace competencies.",
    },
    organization: "Wadhwani Foundation",
    image: "/images/certificates/WADHWANI.jpg",
    issueDate: "2025-06-01",
    category: "Professional Development",
    credentialUrl:
      "https://web.certificate.wfglobal.org/en/certificate?certificateId=6878b016d47f2916618b19e0",
  },
  {
    id: "binar",
    title: {
      id: "Frontend Engineering",
      en: "Frontend Engineering",
    },
    description: {
      id: "Program pembelajaran pengembangan frontend yang berfokus pada pembangunan antarmuka web dan penerapan teknologi frontend.",
      en: "A frontend development learning program focused on building web interfaces and applying frontend technologies.",
    },
    organization: "Binar Academy",
    issueDate: "2023-03-01",
    image: "/images/certificates/BINAR.jpg",
    category: "Frontend Web Development",
  },
];
