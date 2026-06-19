import { assets } from "./assets";

export const brand = {
  name: "Seth Anandram Jaipuria School",
  location: "Varanasi",
  sourceUrl: "https://jaipuriaschoolsvaranasi.com/index/"
};

export const hero = {
  headline: "WHERE FUTURES\nTAKE FLIGHT",
  subheading: "Preserving Legacy.Inspiring Leadership.Shaping Tomorrow.",
  affiliation: "Affiliated to CBSE, New Delhi (Affiliation No. 2133576)",
  notice: "Admissions Open 2026-27",
  primaryVideo: assets.videos.hero
};

export const contact = {
  schoolName: "Seth Anandram Jaipuria School, Varanasi",
  address: "Vyas Bagh, Airport Road, Tarna, Varanasi - 221105",
  phones: ["05422623999", "6388906900"],
  email: "admission.vns@jaipuria.school",
  socials: [
    "https://www.facebook.com/JaipuriaSchoolVaranasi",
    "https://www.instagram.com/jaipuriaschoolsvaranasi/",
    "https://twitter.com/sajs_varanasi",
    "https://www.youtube.com/channel/UCD1EEleXpGtW22WaAguPR6g"
  ]
};

export const admissionForm = {
  sourceAction: "https://jaipuriaschoolsvaranasi.com/index/#wpcf7-f6533-o1",
  method: "post",
  fields: [
    { label: "Student Name", name: "text-212", type: "text", required: true },
    { label: "Parent Name", name: "text-962", type: "text", required: true },
    { label: "Email", name: "email-596", type: "email", required: false },
    { label: "Phone", name: "tel-511", type: "tel", required: true },
    { label: "City", name: "text-214", type: "text", required: true },
    { label: "Class", name: "text-961", type: "text", required: true }
  ]
};

export const sections = [
  {
    id: "about-us",
    eyebrow: "About SAJS Varanasi",
    title: "Empower, Enthuse and Excel.",
    body: "Seth Anandram Jaipuria School, Tarna, Varanasi is committed to providing quality education and ensuring every child is taught the values needed for the journey of life.",
    media: assets.liveMedia.building
  },
  {
    id: "academics",
    eyebrow: "Academics",
    title: "Engaging the Learner.",
    body: "The school applies an interdisciplinary approach with discussions, videos, quizzes, games, creative online resources, and IT-enabled classrooms.",
    media: assets.liveMedia.prePrimary
  },
  {
    id: "facilities",
    eyebrow: "Facilities",
    title: "A 4.5-acre campus for all-round development.",
    body: "AC classrooms with digital smart boards, AC buses with GPS tracking, Words Worth Language Lab, splash pad, library, safe environment, and activity spaces.",
    media: assets.liveMedia.middleClass
  },
  {
    id: "result-highlights",
    eyebrow: "Results & Recognition",
    title: "Achievement records preserved.",
    body: "Result highlights and school achievements remain part of the redesigned route system and are ready for verified media migration.",
    media: assets.liveMedia.seniorSchool
  },
  {
    id: "gallery",
    eyebrow: "Gallery",
    title: "Existing school media, redesigned.",
    body: "The gallery experience is structured for the school's verified photographs, banners, videos, and publication assets only.",
    media: assets.liveMedia.webBannerOne,
    mediaFit: "contain" as const
  },
  {
    id: "news-events",
    eyebrow: "News & Events",
    title: "School updates and events.",
    body: "Recent source content includes Graduation Day Ceremony and Parent Orientation, with event posts to be migrated from verified original data.",
    media: assets.liveMedia.webBannerTwo,
    mediaFit: "contain" as const
  }
];

export const principal = {
  name: "Mr. Dharminder Manon",
  role: "Principal",
  image: assets.liveMedia.principal,
  quote: "Education is what remains after one has forgotten what one has learned in school.",
  message:
    "The essence of education lies in the synchronisation of the hand, head and heart, striking a balance between skills, intellect and value systems. As a 21st century school, we aim at learning that incorporates inquiry, research, analytical thinking, and social and environmental responsibility."
};

export const resultHighlights = {
  title: "CBSE Board Result Highlights 2024-25",
  subtitle: "Congratulations to our outstanding performers.",
  posters: [
    {
      title: "Class 10 Board Results 2024-25",
      image: assets.liveMedia.resultClass10
    },
    {
      title: "Class 12 Board Results 2024-25",
      image: assets.liveMedia.resultClass12
    }
  ]
};

export const jaipuriaTimes = {
  title: "JAIPURIA TIMES",
  subtitle: "Stories.Achievements.Creativity.Leadership.",
  issues: [
    {
      title: "Jaipuria Journal 7",
      cover: assets.liveMedia.jaipuriaJournalSevenCover,
      pdf: assets.liveDocuments.jaipuriaJournalSeven
    }
  ]
};

export const edunext = {
  title: "YOUR SCHOOL.ANYWHERE.",
  sourceStatus: "No dedicated Edunext route was discovered in the focused live crawl; the route is scaffolded for verified content migration."
};
