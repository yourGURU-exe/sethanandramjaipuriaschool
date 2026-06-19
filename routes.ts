export type SiteRoute = {
  label: string;
  path: string;
  sourceUrl: string;
  priority: "core" | "supporting" | "utility";
};

const source = "https://jaipuriaschoolsvaranasi.com/index";

export const routes: SiteRoute[] = [
  { label: "Home", path: "/", sourceUrl: `${source}/`, priority: "core" },
  { label: "About Us", path: "/about-us", sourceUrl: `${source}/about-us/`, priority: "core" },
  { label: "About Jaipuria Group", path: "/about-jaipuria-group", sourceUrl: `${source}/about-jaipuria-group/`, priority: "supporting" },
  { label: "Group Institutions", path: "/group-institutions", sourceUrl: `${source}/about-us/group-institutions/`, priority: "supporting" },
  { label: "Vision", path: "/vision", sourceUrl: `${source}/vision/`, priority: "supporting" },
  { label: "Mission", path: "/mission", sourceUrl: `${source}/mission/`, priority: "supporting" },
  { label: "Principal Message", path: "/principal-message", sourceUrl: `${source}/principal-message/`, priority: "supporting" },
  { label: "Chairmans Message", path: "/chairmans-message", sourceUrl: `${source}/chairmans-message/`, priority: "supporting" },
  { label: "Managing Committee", path: "/managing-committee", sourceUrl: `${source}/managing-committee/`, priority: "supporting" },
  { label: "Academics", path: "/academics", sourceUrl: `${source}/academics/`, priority: "core" },
  { label: "Facilities", path: "/facilities", sourceUrl: `${source}/facilities/`, priority: "core" },
  { label: "Activity", path: "/activity", sourceUrl: `${source}/activity/`, priority: "core" },
  { label: "Activity 2", path: "/activity-2", sourceUrl: `${source}/activity-2/`, priority: "supporting" },
  { label: "Other Activities", path: "/other-activities", sourceUrl: `${source}/other-activities/`, priority: "supporting" },
  { label: "Inter School Competitions", path: "/inter-school-competitions", sourceUrl: `${source}/inter-school-competitions/`, priority: "supporting" },
  { label: "Gallery", path: "/gallery", sourceUrl: `${source}/gallery/`, priority: "core" },
  { label: "Video Gallery", path: "/video-gallery", sourceUrl: `${source}/video-gallery/`, priority: "supporting" },
  { label: "News & Events", path: "/news-events", sourceUrl: `${source}/news-events/`, priority: "core" },
  { label: "Media Coverage", path: "/media-coverage", sourceUrl: `${source}/media-coverage/`, priority: "supporting" },
  { label: "Result Highlights", path: "/result-highlights", sourceUrl: `${source}/result-highlights/`, priority: "supporting" },
  { label: "Jaipuria Times", path: "/jaipuria-times", sourceUrl: `${source}/jaipuria-journal/`, priority: "core" },
  { label: "Edunext", path: "/edunext", sourceUrl: `${source}/`, priority: "core" },
  { label: "Admission Procedure", path: "/admission-procedure", sourceUrl: `${source}/admission-procedure/`, priority: "core" },
  { label: "Online Apply", path: "/online-apply", sourceUrl: `${source}/online-apply/`, priority: "core" },
  { label: "Download Prospectus", path: "/download-prospectus", sourceUrl: `${source}/download-prospectus/`, priority: "core" },
  { label: "Fee Structure", path: "/fee-structure", sourceUrl: `${source}/fee-structure/`, priority: "supporting" },
  { label: "Download Fee Structure", path: "/download-fee-structure", sourceUrl: `${source}/download-fee-structure/`, priority: "supporting" },
  { label: "Transport", path: "/transport", sourceUrl: `${source}/transport/`, priority: "supporting" },
  { label: "Medical Room", path: "/medical-room", sourceUrl: `${source}/medical-room/`, priority: "supporting" },
  { label: "Splash Pad", path: "/splash-pad", sourceUrl: `${source}/splash-pad/`, priority: "supporting" },
  { label: "School Tour Request", path: "/school-tour-request", sourceUrl: `${source}/school-tour-request/`, priority: "supporting" },
  { label: "Career", path: "/career", sourceUrl: `${source}/career/`, priority: "supporting" },
  { label: "Contact Us", path: "/contact-us", sourceUrl: `${source}/contact-us/`, priority: "core" },
  { label: "Mandatory Public Disclosure", path: "/mandatory-public-disclosure", sourceUrl: `${source}/mandatory-public-disclosure-2/`, priority: "utility" },
  { label: "Rules & Regulation", path: "/rules-regulation", sourceUrl: `${source}/rules-regulation-2/`, priority: "utility" },
  { label: "Transfer Certificate", path: "/transfer-certificate", sourceUrl: `${source}/transfer-certificate/`, priority: "utility" },
  { label: "Feedback Form", path: "/feedback-form", sourceUrl: `${source}/feedback-form/`, priority: "utility" }
];

export const navRoutes = routes.filter((route) =>
  ["Home", "About Us", "Academics", "Facilities", "News & Events", "Jaipuria Times", "Admission Procedure", "Contact Us"].includes(route.label)
);
