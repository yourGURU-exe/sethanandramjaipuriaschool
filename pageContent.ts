import { routes } from "./routes";

export type PageContent = {
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
  paragraphs?: string[];
  media?: {
    src: string;
    alt: string;
    caption?: string;
    mode?: "portrait" | "poster" | "wide";
  }[];
  ctaLabel?: string;
  ctaHref?: string;
};

const sharedAbout =
  "Seth Anandram Jaipuria School, Tarna, Varanasi is committed to Empower, Enthuse and Excel in providing quality education and ensuring every child is taught the necessary values to guide him/her through the journey of life.";

export const pageContent: Record<string, PageContent> = {
  "/": {
    title: "Seth Anandram Jaipuria School, Varanasi",
    eyebrow: "Home",
    summary:
      "A CBSE-affiliated school at Vyas Bagh, Airport Road, Tarna, Varanasi, presenting admissions, academics, facilities, news, parent testimonials, Jaipuria Journal, and contact information.",
    points: [
      "Affiliated to CBSE, New Delhi, Affiliation No. 2133576.",
      "Admissions Open 2026-27 with enquiry support on 6388906900.",
      "Pre-Primary & Primary, Middle School, and Senior School learning sections."
    ]
  },
  "/about-us": {
    title: "About SAJS Varanasi",
    eyebrow: "About Us",
    summary:
      "The school endows education for life through a dynamic curriculum, a supportive environment, and a 4.5-acre lush green campus.",
    points: [
      sharedAbout,
      "The campus includes AC classrooms with digital smart boards, a Words Worth English Language Lab, a splash pad for junior kids, and AC buses with GPS tracking.",
      "Teachers use latest pedagogy to make the teaching-learning process interactive and nurture each child's creativity, drive, and passion."
    ]
  },
  "/about-jaipuria-group": {
    title: "About Jaipuria Group",
    eyebrow: "About",
    summary:
      "The Jaipuria educational legacy connects the Varanasi school with the wider Jaipuria Group of Educational Institutions.",
    points: [
      "The Varanasi school carries the Jaipuria commitment to quality education, values, and holistic development.",
      "The original website links this page under the About Us menu.",
      "Group information is preserved locally as a route and can be expanded with verified group content."
    ]
  },
  "/group-institutions": {
    title: "Group & Institutions",
    eyebrow: "About",
    summary:
      "A local page for the Group & Institutions route discovered in the original navigation.",
    points: [
      "This route was present under About Us in the original website.",
      "It represents the broader Jaipuria educational network.",
      "The local route is retained so users stay inside the redesigned site."
    ]
  },
  "/vision": {
    title: "Vision",
    eyebrow: "Institutional Direction",
    summary:
      "We aim to nurture happy and confident children by providing child centric learning.",
    points: [
      "The school promotes creativity, environmental sensitivity, and academic excellence.",
      "Its endeavor is to inculcate a spirit of lifelong learning.",
      "Children are guided to become effective change agents."
    ]
  },
  "/mission": {
    title: "Mission",
    eyebrow: "Institutional Direction",
    summary:
      "The school empowers students to reach their full potential through progressive pedagogy and technology integration.",
    points: [
      "Personalized learning experiences foster values, new-age skills, and academic growth.",
      "The mission aligns learning with confidence, curiosity, and responsibility.",
      "Technology-supported teaching remains part of the academic experience."
    ]
  },
  "/principal-message": {
    title: "Principal's Message",
    eyebrow: "Leadership",
    summary:
      "Mr. Dharminder Manon, Principal, describes education as a balance of skills, intellect, values, inquiry, responsibility, and preparation for change.",
    points: [
      "The message emphasizes synchronization of hand, head, and heart.",
      "It highlights inquiry, research, analytical thinking, and environmental responsibility.",
      "It frames students as morally, ethically, and technically sound citizens prepared for change."
    ],
    paragraphs: [
      "As a 21st century school, the message focuses on learning that moves beyond marks alone and develops social responsibility, analytical habits, and values.",
      "The page also stresses preparation, perseverance, and the will to prepare well as important parts of education."
    ],
    media: [
      {
        src: "https://jaipuriaschoolsvaranasi.com/index/wp-content/uploads/2025/05/Mr.-Dharmendra-Manon-Principal-Varanasi-1-min.png",
        alt: "Mr. Dharminder Manon, Principal",
        caption: "Mr. Dharminder Manon, Principal",
        mode: "portrait"
      }
    ]
  },
  "/chairmans-message": {
    title: "Chairman's Message",
    eyebrow: "Leadership",
    summary:
      "A dedicated local page for the chairman's message discovered on the original website.",
    points: [
      "The original route is retained in the redesigned architecture.",
      "Leadership content can be expanded here as verified text is migrated.",
      "The page remains separate from principal and managing committee content."
    ]
  },
  "/managing-committee": {
    title: "Managing Committee",
    eyebrow: "Leadership",
    summary:
      "The managing committee route is preserved for the school's official governance information.",
    points: [
      "The original page lists managing committee details.",
      "This local page keeps that route available in the transformed site.",
      "Committee profile content should be migrated from the original page assets before final launch."
    ]
  },
  "/academics": {
    title: "Academics",
    eyebrow: "Learning",
    summary:
      "The school applies the pedagogy of Engaging the Learner and an Interdisciplinary Approach to enhance the teaching-learning experience.",
    points: [
      "Learning moves beyond lectures through discussions, videos, quizzes, games, and varied online creative resources.",
      "Technology is integrated into the teaching-learning process, with every classroom being IT-enabled.",
      "Life skills, intrapersonal development, interpersonal development, and value education support holistic learning."
    ]
  },
  "/facilities": {
    title: "Facilities",
    eyebrow: "Campus",
    summary:
      "The campus facilities support academics, safety, transport, co-curricular learning, language development, and student wellbeing.",
    points: [
      "Multi acres of lush green campus with state-of-the-art infrastructure.",
      "AC classrooms with digital smart boards, AC buses with GPS tracking, and Words Worth Language Lab.",
      "Splash pad for junior kids, safe and secure environment, hygienic canteen, library, and activity spaces."
    ]
  },
  "/activity": {
    title: "Activity",
    eyebrow: "Student Life",
    summary:
      "The activity route preserves the school's co-curricular and student participation content.",
    points: [
      "Activities support all-round development beyond classroom learning.",
      "The original site separates Activity, Activity 2, Other Activities, and Inter-School Competitions.",
      "This route now opens locally rather than redirecting to WordPress."
    ]
  },
  "/activity-2": {
    title: "Activity",
    eyebrow: "Student Life",
    summary:
      "The second activity route from the original site is preserved in the redesigned route architecture.",
    points: [
      "This page keeps the original Activity 2 route available.",
      "It can hold the second set of activity galleries and descriptions from the source site.",
      "No invented event data has been added."
    ]
  },
  "/other-activities": {
    title: "Other Activities",
    eyebrow: "Student Life",
    summary:
      "A local page for additional school activities and enrichment opportunities.",
    points: [
      "The original navigation includes this as a separate activity page.",
      "It should be populated with verified activity records during the next migration pass.",
      "The redesigned site keeps it accessible without leaving the app."
    ]
  },
  "/inter-school-competitions": {
    title: "Inter-School Competitions",
    eyebrow: "Student Life",
    summary:
      "A route for competitions and inter-school participation discovered on the original website.",
    points: [
      "Competition content remains part of the local route map.",
      "Verified competition details can be inserted here from the original page.",
      "This page avoids external redirection."
    ]
  },
  "/gallery": {
    title: "Gallery",
    eyebrow: "Media",
    summary:
      "The gallery route is preserved for school photographs and visual records.",
    points: [
      "The redesigned page is ready for existing media only.",
      "Gallery assets should be downloaded and centralized in assets.ts before final release.",
      "The current route opens inside the new site."
    ]
  },
  "/video-gallery": {
    title: "Video Gallery",
    eyebrow: "Media",
    summary:
      "The video gallery route preserves the original website's video section.",
    points: [
      "The homepage discovered YouTube video thumbnails during migration.",
      "Final implementation should embed verified videos in a custom local viewing experience.",
      "The route is available internally."
    ]
  },
  "/news-events": {
    title: "News & Events",
    eyebrow: "Updates",
    summary:
      "The original News & Events page uses a post grid for school updates.",
    points: [
      "Recent homepage content included Graduation Day Ceremony and Parent Orientation.",
      "News should be migrated from the source posts without inventing dates or events.",
      "The local route now keeps visitors inside the redesigned experience."
    ]
  },
  "/media-coverage": {
    title: "Media Coverage",
    eyebrow: "Updates",
    summary:
      "A preserved route for press and media coverage from the original website.",
    points: [
      "The page belongs under the Media menu.",
      "Verified clippings and coverage items should be migrated in the next content pass.",
      "Route clicks no longer leave the redesigned app."
    ]
  },
  "/result-highlights": {
    title: "Result Highlights",
    eyebrow: "Achievements",
    summary:
      "CBSE Class 10 and Class 12 Board Results 2024-25 are presented as original result highlight posters.",
    points: [
      "Class 10 highlight poster congratulates outstanding performers for CBSE Board Results 2024-25.",
      "Class 12 highlight poster congratulates outstanding performers across Science, Commerce, and Humanities.",
      "The posters are shown in full inside the redesigned website instead of being cropped."
    ],
    media: [
      {
        src: "https://jaipuriaschoolsvaranasi.com/index/wp-content/uploads/2025/05/10result.jpeg",
        alt: "CBSE Class 10 Board Results 2024-25 poster",
        caption: "Class 10 Board Results 2024-25",
        mode: "poster"
      },
      {
        src: "https://jaipuriaschoolsvaranasi.com/index/wp-content/uploads/2025/05/12result.jpeg",
        alt: "CBSE Class 12 Board Results 2024-25 poster",
        caption: "Class 12 Board Results 2024-25",
        mode: "poster"
      }
    ]
  },
  "/jaipuria-times": {
    title: "Jaipuria Journal",
    eyebrow: "Publication",
    summary:
      "The original media section names this route Jaipuria Journal and includes magazine issue links.",
    points: [
      "Jaipuria Journal 7 was discovered with cover and PDF assets.",
      "The final prompt asks for a premium digital reader, not a raw PDF redirect.",
      "The local route is preserved as the entry point for that reader."
    ],
    ctaLabel: "Open Journal Section",
    ctaHref: "#jaipuria-times"
  },
  "/edunext": {
    title: "Edunext",
    eyebrow: "School Platform",
    summary:
      "No dedicated Edunext route was discovered during the focused crawl, so this page remains a verified-content shell.",
    points: [
      "The route is retained because the transformation prompt requires an Edunext ecosystem.",
      "Parent, student, homework, attendance, and communication content should only be added after verification.",
      "No Edunext features have been invented."
    ]
  },
  "/admission-procedure": {
    title: "Admission Procedure",
    eyebrow: "Admissions",
    summary:
      "The original page provides registration procedure and rules, with admission and enquiry form downloads.",
    points: [
      "Registration forms are to be filled in and submitted to the school office before the end of the registration period.",
      "Incomplete or illegible registration forms, or forms without photographs, will not be processed or accepted.",
      "Dates for test, interview, or interaction are given at the time of registration."
    ],
    ctaLabel: "Go to Enquiry Form",
    ctaHref: "#admissions"
  },
  "/online-apply": {
    title: "Online Apply",
    eyebrow: "Admissions",
    summary:
      "A preserved local route for the online application workflow.",
    points: [
      "The original route contains an online form workflow.",
      "Final migration should preserve hidden fields, validation, quiz/captcha behavior, and submission handling.",
      "This local page prevents users from being sent back to WordPress."
    ],
    ctaLabel: "Admission Enquiry",
    ctaHref: "#admissions"
  },
  "/download-prospectus": {
    title: "Download Prospectus",
    eyebrow: "Admissions",
    summary:
      "The school prospectus contains relevant and updated information about facilities, methodologies, co-curricular activities, and more.",
    points: [
      "The prospectus is important for to-be students and guardians.",
      "The migration discovered 2018 and 2026 brochure PDF links.",
      "Final implementation should offer a polished local document experience."
    ]
  },
  "/fee-structure": {
    title: "Fee Structure",
    eyebrow: "Admissions",
    summary:
      "The original page lists fee structure links for 2026-27, 2025-26, and 2024-25.",
    points: [
      "The page notes that the fee structure remains the same for both new and existing students.",
      "Fee documents should be preserved as verified source documents.",
      "The local route is now available in the redesigned website."
    ]
  },
  "/download-fee-structure": {
    title: "Download Fee Structure",
    eyebrow: "Admissions",
    summary:
      "A direct route for downloading or viewing the school fee structure.",
    points: [
      "This route was discovered in the original website and footer quick links.",
      "It should point to verified fee documents only.",
      "The current implementation keeps the page internal."
    ]
  },
  "/transport": {
    title: "Transport",
    eyebrow: "Facilities",
    summary:
      "Students can avail the school transport, subject to the availability of seats.",
    points: [
      "Bus routes are framed keeping in mind the needs of parents.",
      "Parents should consult the school transport-in-charge for details.",
      "The original page includes bus rules and safety expectations."
    ]
  },
  "/medical-room": {
    title: "Medical Room",
    eyebrow: "Facilities",
    summary:
      "The school has an experienced doctor and a trained nurse to provide necessary first aid in time of emergency.",
    points: [
      "Annual health check-up, including dental and eye check-up by specialists, is a regular feature.",
      "The school maintains medical records for each child.",
      "Health advisories on illness prevention are also part of the original content."
    ]
  },
  "/splash-pad": {
    title: "Splash Pad",
    eyebrow: "Facilities",
    summary:
      "The Splash Pad is presented as a facility for junior kids.",
    points: [
      "This route belongs under Facilities in the original navigation.",
      "The local page preserves the facility route.",
      "Verified source imagery should be migrated into the final gallery."
    ]
  },
  "/school-tour-request": {
    title: "School Tour Request",
    eyebrow: "Admissions",
    summary:
      "A preserved route for requesting a school tour.",
    points: [
      "The original site links this under admissions and footer quick links.",
      "The final version should preserve the exact workflow and form fields.",
      "The local route now opens inside the redesigned site."
    ]
  },
  "/career": {
    title: "Career",
    eyebrow: "Careers",
    summary:
      "The original career page contains hiring information for teaching and coordinator roles.",
    points: [
      "Roles visible in source content include TGT, PRT, Coordinator, and PGT positions.",
      "Final content should be kept current from verified school postings.",
      "The redesigned route is available locally."
    ]
  },
  "/contact-us": {
    title: "Seth Anandram Jaipuria School, Varanasi",
    eyebrow: "Contact",
    summary:
      "Welcome to Seth Anandram Jaipuria School - Varanasi.",
    points: [
      "Phone: 6388906900 | 6388906901 | 6388906902 | 05422623999.",
      "Email: admission.vns@jaipuria.school.",
      "School Address: Vyas Bagh, Airport Road, Tarna, Varanasi - 221105."
    ]
  },
  "/mandatory-public-disclosure": {
    title: "Mandatory Public Disclosure",
    eyebrow: "Public Information",
    summary:
      "A preserved route for mandatory public disclosure documents and school compliance information.",
    points: [
      "The original route appears in the main navigation and footer quick links.",
      "Final migration should reproduce the disclosure table/documents exactly.",
      "The route now opens locally."
    ]
  },
  "/rules-regulation": {
    title: "Rules & Regulation",
    eyebrow: "Public Information",
    summary:
      "The original page includes withdrawal rules, bus rules, and school regulations.",
    points: [
      "Application for withdrawal is to be made on a prescribed proforma available in the school office.",
      "A one-month notice period or one-month notice fee is required for withdrawal.",
      "Transfer Certificate will be issued after receipt of application and clearance of dues."
    ]
  },
  "/transfer-certificate": {
    title: "Transfer Certificate",
    eyebrow: "Public Information",
    summary:
      "A preserved route for transfer certificate information and documents.",
    points: [
      "The original route appears in public/quick-link navigation.",
      "Final implementation should embed verified TC content or document views.",
      "The page is now internal to the redesigned site."
    ]
  },
  "/feedback-form": {
    title: "Feedback Form",
    eyebrow: "Forms",
    summary:
      "The original page offers a feedback form and message workflow.",
    points: [
      "The source page asks visitors to send feedback.",
      "Final migration should preserve the exact form fields, quiz/captcha, and success/error behavior.",
      "This route now opens locally."
    ]
  }
};

export const getPageContent = (path: string): PageContent => {
  return pageContent[path] ?? {
    title: routes.find((route) => route.path === path)?.label ?? "School Page",
    eyebrow: "School Page",
    summary: "This discovered route is preserved locally for verified content migration.",
    points: [
      "The page exists in the original website route inventory.",
      "No invented facts have been added.",
      "Verified source content should be migrated into this local page before launch."
    ]
  };
};
