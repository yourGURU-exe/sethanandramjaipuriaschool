import { ArrowRight, BookOpen, ChevronRight, Compass, Download, FileText, GraduationCap, Mail, MapPin, Navigation, Phone, Search, Smartphone, Sparkles, ZoomIn } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { admissionForm, brand, contact, edunext, hero, jaipuriaTimes, principal, resultHighlights, sections } from "./config/siteContent";
import { assets } from "./config/assets";
import { navRoutes, routes } from "./config/routes";
import { getPageContent } from "./config/pageContent";
import ThreeEnvironment from "./components/ThreeEnvironment";

gsap.registerPlugin(ScrollTrigger);

const navAnchors: Record<string, string> = {
  "/": "#hero"
};

const routeHref = (path: string) => `#/page${path === "/" ? "/" : path}`;

const legacyTimeline = [
  {
    eyebrow: hero.affiliation,
    title: `${brand.name}, ${brand.location}`,
    body: hero.subheading,
    media: assets.liveMedia.logo,
    logo: true
  },
  ...sections.slice(0, 4).map((section) => ({
    eyebrow: section.eyebrow,
    title: section.title,
    body: section.body,
    media: section.media,
    logo: false
  })),
  {
    eyebrow: "Contact Us",
    title: contact.schoolName,
    body: contact.address,
    media: assets.liveMedia.building,
    logo: false
  }
];

const scrollToId = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  window.history.replaceState(null, "", `#${id}`);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

function getHashPage() {
  if (typeof window === "undefined") return null;
  if (!window.location.hash.startsWith("#/page")) return null;
  const path = window.location.hash.replace("#/page", "") || "/";
  return routes.some((route) => route.path === path) ? path : null;
}

function useHashPage() {
  const [activePath, setActivePath] = useState<string | null>(getHashPage);

  useEffect(() => {
    const update = () => setActivePath(getHashPage());
    window.addEventListener("hashchange", update);
    update();
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    if (!activePath) return;
    window.setTimeout(() => {
      document.getElementById("school-pages")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  }, [activePath]);

  return activePath;
}

function FloatingNav() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`floating-nav ${compact ? "is-compact" : ""}`}>
      <a className="brand-mark" href="#hero" aria-label={`${brand.name} home`}>
        <span className="brand-logo-frame">
          <img src={assets.liveMedia.logo} alt={`${brand.name} ${brand.location} logo`} />
        </span>
        <span className="brand-text">
          <strong>{brand.name}</strong>
          <small>{brand.location}</small>
        </span>
      </a>
      <nav aria-label="Primary navigation" className="nav-menu">
        {navRoutes.map((route) => (
          <a key={route.path} href={navAnchors[route.path] ?? routeHref(route.path)} className="magnetic-link">
            {route.label}
          </a>
        ))}
        <a href="#content-inventory" className="magnetic-link">All Pages</a>
      </nav>
      <a className="nav-cta" href="#admissions" aria-label="Open admissions journey">
        <GraduationCap size={18} />
        <span>Enquiry</span>
      </a>
    </header>
  );
}

function CinematicIntro() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 360 : 1450);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  if (!visible) return null;

  return (
    <motion.div
      className="cinematic-intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-hidden="true"
    >
      <div className="intro-logo-orbit">
        <img src={assets.liveMedia.logo} alt="" />
      </div>
      <span className="intro-light" />
    </motion.div>
  );
}

function CinematicCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const element = cursor.current;
    if (!element) return;

    const current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...current };
    let frame = 0;

    const move = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const over = (event: PointerEvent) => {
      if ((event.target as Element).closest("a, button, input, .story-media, .page-media, .result-poster, .timeline-monument, .location-marker")) {
        element.classList.add("is-active");
      }
    };

    const out = (event: PointerEvent) => {
      if ((event.target as Element).closest("a, button, input, .story-media, .page-media, .result-poster, .timeline-monument, .location-marker")) {
        element.classList.remove("is-active");
      }
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      element.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return <div ref={cursor} className="cinematic-cursor" aria-hidden="true" />;
}

function LithosHero() {
  const root = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = root.current;
    if (!element || reducedMotion) return;

    const current = { x: 0.5, y: 0.5 };
    const target = { x: 0.5, y: 0.5 };
    let frame = 0;

    const move = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      target.x = (event.clientX - rect.left) / rect.width;
      target.y = (event.clientY - rect.top) / rect.height;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.075;
      current.y += (target.y - current.y) * 0.075;
      element.style.setProperty("--spotlight-x", `${current.x * 100}%`);
      element.style.setProperty("--spotlight-y", `${current.y * 100}%`);
      element.style.setProperty("--hero-depth", `${(current.x - 0.5) * 18}deg`);
      frame = requestAnimationFrame(tick);
    };

    element.addEventListener("pointermove", move);
    frame = requestAnimationFrame(tick);
    return () => {
      element.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <section ref={root} id="hero" className="hero lithos-hero">
      <video className="hero-video hero-video-primary" src={hero.primaryVideo} autoPlay muted loop playsInline />
      <div className="hero-veil" />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">{hero.affiliation}</p>
        <h1>{hero.headline}</h1>
        <p className="hero-subheading">{hero.subheading}</p>
        <div className="hero-proof" aria-label="School highlights">
          <span>{brand.name}, {brand.location}</span>
          <span>{hero.notice}</span>
          <span>Vyas Bagh, Airport Road, Tarna</span>
        </div>
        <div className="hero-actions">
          <a href="#admissions" className="primary-action" onClick={(event) => scrollToId(event, "admissions")}>
            Admissions Journey <ArrowRight size={18} />
          </a>
          <a href="#content-inventory" className="secondary-action" onClick={(event) => scrollToId(event, "content-inventory")}>
            <FileText size={18} /> View All Pages
          </a>
        </div>
      </motion.div>
      <div className="scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function LegacyTimeline() {
  return (
    <section className="legacy-timeline-section" id="legacy-timeline">
      <div className="legacy-atmosphere" aria-hidden="true" />
      <div className="section-heading light timeline-heading cinematic-reveal">
        <p className="eyebrow">{sections[0].eyebrow}</p>
        <h2>{brand.name}, {brand.location}</h2>
        <p>{sections[0].body}</p>
      </div>
      <div className="timeline-stage">
        <div className="legacy-rail" aria-hidden="true">
          <span className="legacy-rail-fill" />
        </div>
        {legacyTimeline.map((item, index) => (
          <article key={`${item.eyebrow}-${item.title}`} className={`timeline-monument liquid-glass ${item.logo ? "is-origin" : ""}`}>
            <div className="timeline-media">
              <img src={item.media} alt={item.logo ? `${brand.name} ${brand.location} logo` : ""} loading={index === 0 ? "eager" : "lazy"} />
            </div>
            <div>
              <p className="eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StorySection({
  id,
  eyebrow,
  title,
  body,
  media,
  mediaFit,
  index
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  media: string;
  mediaFit?: "cover" | "contain";
  index: number;
}) {
  return (
    <section className="story-panel" id={id}>
      <div className={`story-media ${mediaFit === "contain" ? "is-contain" : ""}`} style={{ "--rotate": `${index % 2 === 0 ? -3 : 3}deg` } as React.CSSProperties}>
        <img src={media} alt="" loading="lazy" />
      </div>
      <div className="story-copy liquid-glass">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="section-pills" aria-label={`${eyebrow} related source routes`}>
          <span>Verified source text</span>
          <span>{brand.location}</span>
        </div>
        <a className="inline-link" href="#content-inventory">
          Explore routes <ChevronRight size={16} />
        </a>
      </div>
    </section>
  );
}

function PrincipalSection() {
  return (
    <section className="principal-section" id="principal-message">
      <div className="principal-portrait">
        <img src={principal.image} alt={`${principal.name}, ${principal.role}`} loading="lazy" />
      </div>
      <div className="principal-copy liquid-glass">
        <p className="eyebrow">Principal's Message</p>
        <h2>{principal.name}</h2>
        <p className="principal-role">{principal.role}</p>
        <blockquote>{principal.quote}</blockquote>
        <p>{principal.message}</p>
        <a className="inline-link" href={routeHref("/principal-message")}>
          Read full message <ChevronRight size={16} />
        </a>
      </div>
    </section>
  );
}

function ResultHighlights() {
  return (
    <section className="results-section" id="result-highlights">
      <div className="section-heading">
        <p className="eyebrow">Result Highlights</p>
        <h2>{resultHighlights.title}</h2>
        <p>{resultHighlights.subtitle}</p>
      </div>
      <div className="result-poster-grid">
        {resultHighlights.posters.map((poster) => (
          <article key={poster.title} className="result-poster liquid-glass">
            <img src={poster.image} alt={poster.title} loading="lazy" />
            <div>
              <h3>{poster.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RouteConstellation({ activePath }: { activePath: string | null }) {
  return (
    <section className="route-constellation" id="content-inventory">
      <div className="section-heading">
        <p className="eyebrow">Original Website Pages</p>
        <h2>All discovered pages now open here.</h2>
        <p>Click any page below to view its local migrated content panel. These links no longer redirect to the old WordPress website.</p>
      </div>
      <div className="route-grid">
        {routes.map((route) => (
          <a key={route.path} className={`route-chip liquid-glass ${activePath === route.path ? "is-active" : ""}`} href={routeHref(route.path)}>
            <Compass size={16} />
            <span>{route.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function PageArchive({ activePath }: { activePath: string | null }) {
  const route = routes.find((item) => item.path === activePath) ?? routes[0];
  const content = getPageContent(activePath ?? "/");

  return (
    <section className="page-archive" id="school-pages">
      <div className="page-shell liquid-glass">
        <div className="page-sidebar">
          <p className="eyebrow">Local Page Browser</p>
          <div className="page-list" aria-label="Original website page list">
            {routes.map((item) => (
              <a key={item.path} href={routeHref(item.path)} className={route.path === item.path ? "is-active" : ""}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <article className="page-detail">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p className="page-summary">{content.summary}</p>
          {content.media?.length ? (
            <div className={`page-media-grid ${content.media.some((item) => item.mode === "poster") ? "is-poster-grid" : ""}`}>
              {content.media.map((item) => (
                <figure key={item.src} className={`page-media ${item.mode ? `is-${item.mode}` : ""}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  {item.caption ? <figcaption>{item.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          ) : null}
          {content.paragraphs?.length ? (
            <div className="page-paragraphs">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          <div className="page-points">
            {content.points.map((point) => (
              <div key={point} className="page-point">
                <span />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className="page-actions">
            {content.ctaHref && content.ctaLabel ? (
              <a className="primary-action" href={content.ctaHref}>
                {content.ctaLabel} <ArrowRight size={18} />
              </a>
            ) : null}
            <a className="secondary-action page-source-note" href="#content-inventory">
              <BookOpen size={18} /> Back to page list
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function JaipuriaTimes() {
  return (
    <section className="times-section" id="jaipuria-times">
      <div className="section-heading light">
        <p className="eyebrow">{jaipuriaTimes.title}</p>
        <h2>{jaipuriaTimes.subtitle}</h2>
      </div>
      <div className="magazine-stage">
        {jaipuriaTimes.issues.map((issue) => (
          <article key={issue.title} className="magazine-cover">
            <img src={issue.cover} alt={`${issue.title} cover`} loading="lazy" />
            <div className="magazine-glass">
              <h3>{issue.title}</h3>
              <div className="reader-tools" aria-label="Magazine reader controls">
                <button type="button" aria-label="Search issue"><Search size={18} /></button>
                <button type="button" aria-label="Zoom issue"><ZoomIn size={18} /></button>
                <a href={issue.pdf} target="_blank" rel="noreferrer" aria-label="Open verified source issue"><Download size={18} /></a>
              </div>
            </div>
          </article>
        ))}
        <div className="reader-shell liquid-glass">
          <BookOpen size={34} />
          <h3>Magazine Reader Shell</h3>
          <div className="section-pills">
            <span>Search</span>
            <span>Zoom</span>
            <span>Progress</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function EdunextExperience() {
  return (
    <section className="edunext-section" id="edunext">
      <div className="phone-stack" aria-hidden="true">
        <div className="phone phone-one"><Smartphone size={72} /></div>
        <div className="phone phone-two"><Sparkles size={72} /></div>
      </div>
      <div className="edunext-copy liquid-glass">
        <p className="eyebrow">Edunext Experience</p>
        <h2>{edunext.title}</h2>
        <div className="section-pills">
          <span>Parent Dashboard</span>
          <span>Student Dashboard</span>
        </div>
      </div>
    </section>
  );
}

function LocationExperience() {
  const mapQuery = encodeURIComponent(`${contact.schoolName}, ${contact.address}`);

  return (
    <section className="location-journey" id="location-journey">
      <div className="location-backdrop" aria-hidden="true" />
      <div className="section-heading light cinematic-reveal">
        <p className="eyebrow">Contact Us</p>
        <h2>{contact.schoolName}</h2>
        <p>{contact.address}</p>
      </div>
      <div className="location-stage">
        <div className="map-cinema">
          <iframe
            className="location-map-frame"
            title={`${contact.schoolName} map`}
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="route-light route-light-one" aria-hidden="true" />
          <div className="route-light route-light-two" aria-hidden="true" />
          <button className="location-marker" type="button" aria-label={`${contact.schoolName}, ${contact.address}`}>
            <MapPin size={24} />
            <span>
              <strong>{contact.schoolName}</strong>
              <small>{contact.address}</small>
            </span>
          </button>
        </div>
        <aside className="location-panel liquid-glass cinematic-reveal">
          <div className="footer-seal is-panel-seal" aria-hidden="true">
            <img src={assets.liveMedia.logo} alt="" />
          </div>
          <h3>{contact.schoolName}</h3>
          <p><MapPin size={18} /> {contact.address}</p>
          <p><Phone size={18} /> {contact.phones.join(" | ")}</p>
          <p><Mail size={18} /> {contact.email}</p>
          <a className="primary-action" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">
            <Navigation size={18} /> Open Map
          </a>
        </aside>
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section className="admissions" id="admissions">
      <div className="section-heading">
        <p className="eyebrow">Admissions Journey</p>
        <h2>Admission Enquiry</h2>
      </div>
      <form className="admission-form liquid-glass" action={admissionForm.sourceAction} method={admissionForm.method}>
        {admissionForm.fields.map((field) => (
          <label key={field.name} className="floating-field">
            <input name={field.name} type={field.type} required={field.required} placeholder=" " />
            <span>{field.label}{field.required ? " *" : ""}</span>
          </label>
        ))}
        <button className="primary-action" type="submit">
          Submit <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact-us">
      <div className="footer-seal" aria-hidden="true">
        <img src={assets.liveMedia.logo} alt="" />
      </div>
      <div>
        <p className="eyebrow">Contact Us</p>
        <h2>{contact.schoolName}</h2>
        <p><MapPin size={18} /> {contact.address}</p>
        <p><Phone size={18} /> {contact.phones.join(" | ")}</p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <div className="footer-links">
        {contact.socials.map((social) => (
          <a key={social} href={social} target="_blank" rel="noreferrer">{new URL(social).hostname.replace("www.", "")}</a>
        ))}
      </div>
    </footer>
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();
  const activePath = useHashPage();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".story-panel").forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0.35, y: 80, rotateX: -8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "bottom 45%",
              scrub: 0.8
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".cinematic-reveal").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 52, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%"
            }
          }
        );
      });

      gsap.fromTo(
        ".legacy-rail-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".legacy-timeline-section",
            start: "top 62%",
            end: "bottom 58%",
            scrub: true
          }
        }
      );

      gsap.utils.toArray<HTMLElement>(".timeline-monument").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: index % 2 === 0 ? -16 : 16 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              end: "top 42%",
              scrub: 0.8
            }
          }
        );
      });

      gsap.fromTo(
        ".location-map-frame",
        { opacity: 0.42, y: 70, rotateX: 10, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".location-journey",
            start: "top 74%",
            end: "center center",
            scrub: 0.8
          }
        }
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ctx.revert();
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const tiltTargets = gsap.utils.toArray<HTMLElement>(".story-media, .page-media, .result-poster, .timeline-monument, .location-panel");
    const buttonTargets = gsap.utils.toArray<HTMLElement>(".primary-action, .secondary-action, .inline-link, .nav-cta, .reader-tools button, .reader-tools a");

    const cleanups: Array<() => void> = [];

    tiltTargets.forEach((target) => {
      const move = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        target.style.setProperty("--tilt-x", `${y * -9}deg`);
        target.style.setProperty("--tilt-y", `${x * 10}deg`);
      };
      const leave = () => {
        target.style.removeProperty("--tilt-x");
        target.style.removeProperty("--tilt-y");
      };
      target.addEventListener("pointermove", move);
      target.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        target.removeEventListener("pointermove", move);
        target.removeEventListener("pointerleave", leave);
      });
    });

    buttonTargets.forEach((target) => {
      const move = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        target.style.setProperty("--magnet-x", `${x * 0.18}px`);
        target.style.setProperty("--magnet-y", `${y * 0.18}px`);
      };
      const leave = () => {
        target.style.removeProperty("--magnet-x");
        target.style.removeProperty("--magnet-y");
      };
      target.addEventListener("pointermove", move);
      target.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        target.removeEventListener("pointermove", move);
        target.removeEventListener("pointerleave", leave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [activePath, reducedMotion]);

  return (
    <>
      <CinematicIntro />
      <CinematicCursor />
      <ThreeEnvironment />
      <FloatingNav />
      <main>
        <LithosHero />
        <LegacyTimeline />
        {sections.map((section, index) => (
          <StorySection key={section.eyebrow} {...section} index={index} />
        ))}
        <PrincipalSection />
        <ResultHighlights />
        <RouteConstellation activePath={activePath} />
        <PageArchive activePath={activePath} />
        <JaipuriaTimes />
        <EdunextExperience />
        <LocationExperience />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
