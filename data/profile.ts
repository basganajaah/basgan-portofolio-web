import type { LocalizedText } from "@/types/common";

export const profile = {
  name: "Bandyaga Adiansyah Sugandi",

  nickname: {
    common: "Bandy",
    acronym: "Basgan",
    short: "Aga",
    alias: "Saga",
  },

  birthPlace: "Jakarta",

  birthDay: {
    id: "1 April 2004",
    en: "April 1st, 2004",
  } satisfies LocalizedText,

  education: {
    highSchool: [
      {
        schoolName: {
          id: "Sekolah Menengah Atas Negeri 1 Majalengka",
          en: "State Senior High School 1 Majalengka",
        } satisfies LocalizedText,
        schoolField: {
          id: "Matematika dan Ilmu Pengetahuan Alam",
          en: "Mathematics and Science",
        } satisfies LocalizedText,
      },
    ],
    campus: [
      {
        campusName: {
          id: "Politeknik Negeri Bandung",
          en: "Bandung State Polytechnic",
        } satisfies LocalizedText,
        campusField: {
          id: "Diploma Teknik Komputer dan Informatika",
          en: "Associate Computer and Informatics Engineering",
        } satisfies LocalizedText,
      },
    ],
  },

  status: {
    id: "Lulusan Baru",
    en: "Fresh Graduate",
  } satisfies LocalizedText,

  role: [
    "Full Stack Developer",
    "Mobile Developer",
    "Software Engineer",
    "UI/UX Designer",
    "Software Tester",
  ],

  image: "/images/profile.jpeg",

  socialLinks: {
    github: "https://github.com/basganajaah",
    linkedin: "https://linkedin.com/in/bandyagaadiansyah/",
    whatsapp: "https://wa.me/628950710037",
    telegram: "https://t.me/gaaaruuureeen",
    email:
      "https://mail.google.com/mail/?view=cm&fs=1&to=bandyagaadiansyah@gmail.com",
  },

  email: "bandyagaadiansyah@gmail.com",
  phone: "+6289507130037",
};
