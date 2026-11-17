import type { LocalizedText } from "@/types/common";

export const profile = {
  name: "Bandyaga Adiansyah Sugandi",

  nickname: {
    common: "Bandy",
    acronym: "Basgan",
    short: "Aga",
    alias: "Saga",
  },

  birthPlace: {
    id: "Jakarta, Indonesia — 1 April 2004",
    en: "Jakarta, Indonesia — April 1st 2004",
  } satisfies LocalizedText,

  basedIn: {
    id: "Jakarta dan Bandung",
    en: "Jakarta and Bandung ",
  } satisfies LocalizedText,

  workMode: {
    id: "Remote, Hybrid, dan On-site",
    en: "Remote, Hybrid, and On-site",
  } satisfies LocalizedText,

  languages: [
    {
      id: "Bahasa Indonesia",
      en: "Indonesian",
    },
    {
      id: "Bahasa Inggris",
      en: "English",
    },
  ] satisfies LocalizedText[],

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
