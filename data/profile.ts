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
    highSchool: {
      id: "Sekolah Menengah Atas Negeri 1 Majalengka",
      en: "State Senior High School 1 Majalengka",
    } satisfies LocalizedText,
    campus: {
      associate: {
        id: "Politeknik Negeri Bandung",
        en: "Bandung State Polytechnic",
      } satisfies LocalizedText,
    },
  },

  educationField: {
    id: "Teknik Komputer dan Informatika",
    en: "Computer and Informatics Engineering",
  } satisfies LocalizedText,

  status: {
    id: "Lulusan Baru",
    en: "Fresh Graduate",
  } satisfies LocalizedText,

  role: [
    "Frontend Engineer",
    "Mobile Developer",
    "Full Stack Developer",
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
