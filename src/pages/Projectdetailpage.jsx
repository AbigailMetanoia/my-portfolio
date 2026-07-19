import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import useIsMobile from "../hooks/Useismobile";

/* ─────────────────────────────────────────────
   TAG COLORS
───────────────────────────────────────────── */
const tagColors = {
  Edutech: { bg: "rgba(124,92,252,0.25)", color: "#C4B0FF", border: "rgba(124,92,252,0.40)" },
  "Mobile App": { bg: "rgba(50,180,255,0.20)", color: "#7DD4FC", border: "rgba(50,180,255,0.35)" },
  "Mental Health": {
    bg: "rgba(80,220,130,0.20)",
    color: "#6EE7A0",
    border: "rgba(80,220,130,0.35)",
  },
  "UX Research": { bg: "rgba(255,160,60,0.20)", color: "#FFA84E", border: "rgba(255,160,60,0.35)" },
  "Team Project": {
    bg: "rgba(255,99,132,0.20)",
    color: "#FF8FA8",
    border: "rgba(255,99,132,0.35)",
  },
  "UI Design": { bg: "rgba(0,210,200,0.20)", color: "#5EEAE0", border: "rgba(0,210,200,0.35)" },
  "Built-In Website": {
    bg: "rgba(255,205,60,0.20)",
    color: "#FFE08A",
    border: "rgba(255,205,60,0.35)",
  },
  "Study Cased": {
    bg: "rgba(180,120,255,0.22)",
    color: "#D4B8FF",
    border: "rgba(180,120,255,0.40)",
  },
  "Native iOS": {
    bg: "rgba(255,140,200,0.20)",
    color: "#FFB3DC",
    border: "rgba(255,140,200,0.35)",
  },
};

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
function FigmaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M5.5 16C6.88 16 8 14.88 8 13.5V11H5.5C4.12 11 3 12.12 3 13.5C3 14.88 4.12 16 5.5 16Z"
        fill="currentColor"
      />
      <path d="M3 8.5C3 7.12 4.12 6 5.5 6H8V11H5.5C4.12 11 3 9.88 3 8.5Z" fill="currentColor" />
      <path d="M3 3.5C3 2.12 4.12 1 5.5 1H8V6H5.5C4.12 6 3 4.88 3 3.5Z" fill="currentColor" />
      <path d="M8 1H10.5C11.88 1 13 2.12 13 3.5C13 4.88 11.88 6 10.5 6H8V1Z" fill="currentColor" />
      <path
        d="M13 8.5C13 9.88 11.88 11 10.5 11C9.12 11 8 9.88 8 8.5C8 7.12 9.12 6 10.5 6C11.88 6 13 7.12 13 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SketchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polygon
        points="4.5,1.5 11.5,1.5 15,5.5 8,15 1,5.5"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="1" y1="5.5" x2="15" y2="5.5" stroke="currentColor" strokeWidth="1.1" />
      <line x1="4.5" y1="1.5" x2="5.5" y2="5.5" stroke="currentColor" strokeWidth="1.1" />
      <line x1="11.5" y1="1.5" x2="10.5" y2="5.5" stroke="currentColor" strokeWidth="1.1" />
      <line x1="5.5" y1="5.5" x2="8" y2="15" stroke="currentColor" strokeWidth="1.1" />
      <line x1="10.5" y1="5.5" x2="8" y2="15" stroke="currentColor" strokeWidth="1.1" />
      <line x1="4.5" y1="1.5" x2="8" y2="3.2" stroke="currentColor" strokeWidth="1.1" />
      <line x1="11.5" y1="1.5" x2="8" y2="3.2" stroke="currentColor" strokeWidth="1.1" />
      <line x1="8" y1="3.2" x2="8" y2="5.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  );
}

function TestFlightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 8L14 2L10 8L14 14L2 8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M10 8H2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function isSketchUrl(url) {
  return url && url.includes("sketch.com");
}

/* ─────────────────────────────────────────────
   SHARED STYLES
───────────────────────────────────────────── */
const linkButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 18px",
  borderRadius: "50px",
  textDecoration: "none",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.85rem",
  fontWeight: "500",
  color: "#fff",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.20)",
  transition: "background 0.2s, transform 0.2s",
};

const sectionLabel = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.72rem",
  fontWeight: "600",
  color: "rgba(124,92,252,0.80)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 12px 0",
};

const sectionHeading = (isMobile) => ({
  fontFamily: "'Inter', sans-serif",
  fontSize: isMobile ? "1.3rem" : "1.6rem",
  fontWeight: "700",
  color: "#fff",
  margin: "0 0 20px 0",
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
});

const bodyText = (isMobile) => ({
  fontFamily: "'Inter', sans-serif",
  fontSize: isMobile ? "0.92rem" : "0.97rem",
  color: "rgba(255,255,255,0.58)",
  lineHeight: 1.85,
  margin: 0,
});

const divider = {
  borderTop: "1px solid rgba(255,255,255,0.07)",
  margin: "0",
};

/* ─────────────────────────────────────────────
   THE 6 FIXED SECTIONS OF EVERY CASE STUDY
───────────────────────────────────────────── */
const SECTION_DEFS = [
  { id: "brief", label: "Brief" },
  { id: "problem", label: "The Problem" },
  { id: "business-impact", label: "Impact" },
  { id: "contribution", label: "Contribution" },
  { id: "outcomes", label: "Outcomes" },
  { id: "learning", label: "Key Learning" },
];

/* ─────────────────────────────────────────────
   LINK BUTTONS
───────────────────────────────────────────── */
function LinkButtons({ links }) {
  const hoverOn = (e) => {
    e.currentTarget.style.background = "rgba(124,92,252,0.25)";
    e.currentTarget.style.transform = "scale(1.04)";
  };
  const hoverOff = (e) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "flex-end" }}>
      {links?.testflight && (
        <a
          href={links.testflight}
          target="_blank"
          rel="noreferrer"
          style={linkButtonStyle}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          <TestFlightIcon /> Try on TestFlight
        </a>
      )}
      {links?.prototype && (
        <a
          href={links.prototype}
          target="_blank"
          rel="noreferrer"
          style={linkButtonStyle}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          {isSketchUrl(links.prototype) ? <SketchIcon /> : <FigmaIcon />} View Prototype
        </a>
      )}
      {links?.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          style={linkButtonStyle}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          <GithubIcon /> View Code
        </a>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION WRAPPER — consistent padding & max-width
───────────────────────────────────────────── */
function Section({ children, isMobile, noPaddingTop }) {
  return (
    <div
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: isMobile
          ? `${noPaddingTop ? "0" : "48px"} 20px 48px`
          : `${noPaddingTop ? "0" : "72px"} 48px 72px`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   INSIGHT CARD — for research findings
───────────────────────────────────────────── */
function InsightCard({ number, text }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "24px",
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.4rem",
          fontWeight: "700",
          color: "rgba(124,92,252,0.6)",
          lineHeight: 1,
          flexShrink: 0,
          minWidth: "32px",
        }}
      >
        {String(number).padStart(2, "0")}
      </span>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9rem",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   QUOTE CARD — cuplikan kalimat asli dari user
   interview, dipakai untuk menunjukkan pain point
   dengan suara langsung dari user (bukan interpretasi).
───────────────────────────────────────────── */
function QuoteCard({ text, source }) {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(124,92,252,0.06)",
        border: "1px solid rgba(124,92,252,0.18)",
        borderRadius: "16px",
        padding: "26px 24px 22px",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "6px",
          left: "20px",
          fontFamily: "'Fraunces', serif",
          fontStyle: "italic",
          fontSize: "2.6rem",
          color: "rgba(124,92,252,0.35)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        “
      </span>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: "rgba(255,255,255,0.80)",
          lineHeight: 1.75,
          margin: "16px 0 10px 0",
          paddingLeft: "8px",
        }}
      >
        {text}
      </p>
      {source && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            fontWeight: "500",
            color: "rgba(124,92,252,0.75)",
            margin: 0,
            paddingLeft: "8px",
          }}
        >
          — {source}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION ILLUSTRATION — slot gambar opsional untuk
   tiap section (Problem, Impact, Contribution, dst).
   Kalau `src` tidak diisi di data project, komponen ini
   tidak render apa-apa — jadi aman ditaruh di semua section.
───────────────────────────────────────────── */
function SectionIllustration({ src, alt, caption }) {
  if (!src) return null;
  return (
    <div style={{ marginTop: "28px" }}>
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <img src={src} alt={alt || ""} style={{ width: "100%", display: "block" }} />
      </div>
      {caption && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.4)",
            margin: "10px 0 0 0",
            textAlign: "center",
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CAROUSEL — dipakai untuk hero (banyak foto/video)
   dan galeri screenshot di Outcomes. Cukup kirim
   array elemen media (img/video) lewat prop `slides`.
───────────────────────────────────────────── */
function Carousel({ slides, height }) {
  const [index, setIndex] = useState(0);

  if (!slides || slides.length === 0) return null;
  const hasMultiple = slides.length > 1;

  const go = (dir) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div style={{ position: "relative", width: "100%", height, overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 0.4s ease",
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} style={{ width: "100%", height: "100%", flexShrink: 0 }}>
            {slide}
          </div>
        ))}
      </div>

      {hasMultiple && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Sebelumnya"
            style={{
              position: "absolute",
              top: "50%",
              left: "16px",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Berikutnya"
            style={{
              position: "absolute",
              top: "50%",
              right: "16px",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>

          <div
            style={{
              position: "absolute",
              bottom: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
              display: "flex",
              gap: "6px",
            }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === index ? "20px" : "7px",
                  height: "7px",
                  borderRadius: "4px",
                  border: "none",
                  background: i === index ? "#fff" : "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.25s ease, background 0.25s ease",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FLOW STEP — optional step-by-step contribution detail
───────────────────────────────────────────── */
function FlowStep({ step, label, description, isLast }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(124,92,252,0.20)",
            border: "1px solid rgba(124,92,252,0.40)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            fontWeight: "700",
            color: "#C4B0FF",
          }}
        >
          {step}
        </div>
        {!isLast && (
          <div
            style={{
              width: "1px",
              flex: 1,
              minHeight: "32px",
              background: "rgba(124,92,252,0.20)",
              margin: "6px 0",
            }}
          />
        )}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : "28px" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.88rem",
            fontWeight: "600",
            color: "#fff",
            margin: "0 0 4px 0",
            lineHeight: 1.3,
          }}
        >
          {label}
        </p>
        {description && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP SIDE NAV — fixed index, always visible,
   lets the reader jump back to any earlier section
───────────────────────────────────────────── */
function StickyNav({ sections, activeId }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "max(20px, calc(50% - 560px))",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "12px 0",
      }}
    >
      {sections.map(({ id, label }, i) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            title={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 0",
              textAlign: "left",
              opacity: isActive ? 1 : 0.35,
              transition: "opacity 0.2s, transform 0.2s",
              transform: isActive ? "translateX(2px)" : "translateX(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = isActive ? "1" : "0.35";
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: "700",
                color: isActive ? "#C4B0FF" : "rgba(255,255,255,0.4)",
                minWidth: "16px",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              style={{
                width: isActive ? "20px" : "10px",
                height: "2px",
                borderRadius: "2px",
                background: isActive ? "#7C5CFC" : "rgba(255,255,255,0.6)",
                transition: "width 0.25s ease, background 0.25s ease",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: "600",
                color: isActive ? "#fff" : "transparent",
                whiteSpace: "nowrap",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                maxWidth: isActive ? "180px" : "0px",
                overflow: "hidden",
                transition: "max-width 0.3s ease, color 0.2s",
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE TOP NAV — horizontally scrollable pills,
   sticky under the header, so a reader can jump
   back to any earlier section with one tap
───────────────────────────────────────────── */
function MobileTopNav({ sections, activeId }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "72px",
        zIndex: 40,
        background: "rgba(14,14,14,0.85)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          padding: "12px 20px",
          scrollbarWidth: "none",
        }}
      >
        {sections.map(({ id, label }, i) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 14px",
                borderRadius: "50px",
                border: isActive
                  ? "1px solid rgba(124,92,252,0.5)"
                  : "1px solid rgba(255,255,255,0.12)",
                background: isActive ? "rgba(124,92,252,0.22)" : "rgba(255,255,255,0.04)",
                color: isActive ? "#C4B0FF" : "rgba(255,255,255,0.55)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: "600",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
              }}
            >
              <span style={{ opacity: 0.7 }}>{String(i + 1).padStart(2, "0")}</span>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const project = projects.find((p) => p.slug === slug);
  const [activeId, setActiveId] = useState("brief");

  const P = project;

  /* Scroll observer — highlight active section as the reader scrolls */
  useEffect(() => {
    if (!P) return;
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(callback, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    });
    SECTION_DEFS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [slug]);

  if (!project) {
    return (
      <div style={{ padding: "160px 24px", textAlign: "center", color: "#fff" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)" }}>
          Project not found.
        </p>
        <button
          onClick={() => navigate("/projects")}
          style={{
            marginTop: 16,
            color: "#7C5CFC",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          ← Back to Projects
        </button>
      </div>
    );
  }

  const hasLinks =
    project.links && (project.links.prototype || project.links.github || project.links.testflight);

  /* ── Fallback helpers so legacy project data (old `sections` array)
     still renders sensibly inside the new 6-part structure ── */
  const legacy = (titles) =>
    P.sections
      ?.filter((s) => titles.includes(s.title))
      .map((s) => s.content)
      .join(" ");

  const problem = P.problem ?? {
    headline: "The Problem",
    body: legacy(["Empathize", "Define"]),
  };
  const businessImpact = P.businessImpact;
  const contribution = P.contribution ?? {
    headline: "My Contribution",
    body: legacy(["Ideate", "Prototype", "Test"]),
  };
  const outcomes = P.outcomes ?? {
    headline: "Outcomes",
    body: legacy(["Result"]) || P.impact?.body,
  };
  const learning =
    P.learning ??
    (P.impact?.reflection ? { headline: "Key Learning", body: P.impact.reflection } : null);

  /* ── Hero slides — HANYA foto UI (video jangan di sini karena
     kepotong di frame hero yang landscape). Urutan prioritas:
     1. `P.heroImages` → array foto
     2. `P.image` tunggal → fallback kalau belum ada array
  ── */
  const heroSlides =
    P.heroImages && P.heroImages.length > 0
      ? P.heroImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${P.title} ${i + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        ))
      : [
          <img
            key="i"
            src={P.image}
            alt={P.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />,
        ];

  return (
    <main style={{ minHeight: "100vh", paddingTop: "72px", background: "#0E0E0E" }}>
      {/* ── NAVIGATION: side rail on desktop, top pills on mobile ── */}
      {!isMobile ? (
        <StickyNav sections={SECTION_DEFS} activeId={activeId} />
      ) : (
        <MobileTopNav sections={SECTION_DEFS} activeId={activeId} />
      )}

      {/* ── HERO — sekarang carousel kalau `heroImages` diisi lebih dari 1 ── */}
      <div
        style={{
          width: "100%",
          height: isMobile ? "240px" : "clamp(320px, 50vw, 560px)",
          overflow: "hidden",
          position: "relative",
          background: "#000",
        }}
      >
        <Carousel slides={heroSlides} height="100%" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, #0E0E0E)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      </div>

      {/* ── 01 BRIEF ── */}
      <div id="brief">
        <Section isMobile={isMobile} noPaddingTop>
          <div style={{ paddingTop: isMobile ? "28px" : "40px" }}>
            <p style={sectionLabel}>01 — Brief</p>
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "#fff",
                margin: "0 0 16px 0",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              {P.title}
            </h1>

            {P.description && (
              <p style={{ ...bodyText(isMobile), marginBottom: "28px", maxWidth: "640px" }}>
                {P.description}
              </p>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {P.tags.map((tag) => {
                  const t = tagColors[tag] || {
                    bg: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    border: "rgba(255,255,255,0.2)",
                  };
                  return (
                    <span
                      key={tag}
                      style={{
                        background: t.bg,
                        color: t.color,
                        border: `1px solid ${t.border}`,
                        padding: "4px 14px",
                        borderRadius: "50px",
                        fontSize: "0.78rem",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              {hasLinks && <LinkButtons links={P.links} />}
            </div>

            <div style={{ ...divider, marginBottom: "28px" }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isMobile ? "20px 12px" : "0",
              }}
            >
              {[
                { label: "Year", value: P.year },
                { label: "Timeline", value: P.timeline },
                { label: "Role", value: P.role },
                { label: "Duration", value: P.duration },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.30)",
                      margin: "0 0 6px 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {value ?? "—"}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ ...divider, marginTop: "28px" }} />
          </div>
        </Section>
      </div>

      {/* ── 02 UNDERSTANDING THE PROBLEM ── */}
      {problem?.body && (
        <>
          <div id="problem">
            <Section isMobile={isMobile}>
              <p style={sectionLabel}>02 — Understanding the Problem</p>
              <h2 style={sectionHeading(isMobile)}>{problem.headline ?? "The Problem"}</h2>
              <p style={bodyText(isMobile)}>{problem.body}</p>
              <SectionIllustration
                src={problem.image}
                alt={problem.headline}
                caption={problem.imageCaption}
              />

              {P.research?.insights && P.research.insights.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "32px",
                  }}
                >
                  {P.research.insights.map((insight, i) => (
                    <InsightCard key={i} number={i + 1} text={insight} />
                  ))}
                </div>
              )}

              {/* ── Pain point langsung dari kalimat user interview ── */}
              {P.research?.quotes && P.research.quotes.length > 0 && (
                <div style={{ marginTop: "32px" }}>
                  <p style={{ ...sectionLabel, marginBottom: "16px" }}>What users said</p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                      gap: "16px",
                    }}
                  >
                    {P.research.quotes.map((q, i) => (
                      <QuoteCard key={i} text={q.text} source={q.source} />
                    ))}
                  </div>
                </div>
              )}
            </Section>
          </div>
          <div style={divider} />
        </>
      )}

      {/* ── 03 BUSINESS IMPACT ── */}
      {businessImpact?.body && (
        <>
          <div id="business-impact">
            <Section isMobile={isMobile}>
              <p style={sectionLabel}>03 — Business Impact</p>
              <h2 style={sectionHeading(isMobile)}>
                {businessImpact.headline ?? "Business Impact"}
              </h2>
              <p style={bodyText(isMobile)}>{businessImpact.body}</p>
              <SectionIllustration
                src={businessImpact.image}
                alt={businessImpact.headline}
                caption={businessImpact.imageCaption}
              />
            </Section>
          </div>
          <div style={divider} />
        </>
      )}

      {/* ── 04 MY CONTRIBUTION ── */}
      {contribution?.body && (
        <>
          <div id="contribution">
            <Section isMobile={isMobile}>
              <p style={sectionLabel}>04 — My Contribution</p>
              <h2 style={sectionHeading(isMobile)}>{contribution.headline ?? "My Contribution"}</h2>
              <p style={bodyText(isMobile)}>{contribution.body}</p>
              <SectionIllustration
                src={contribution.image}
                alt={contribution.headline}
                caption={contribution.imageCaption}
              />
              {contribution.flow && contribution.flow.length > 0 && (
                <div style={{ marginTop: "32px" }}>
                  <p style={{ ...sectionLabel, marginBottom: "20px" }}>Step by Step</p>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "20px",
                      padding: isMobile ? "24px" : "32px",
                    }}
                  >
                    {contribution.flow.map((step, i) => (
                      <FlowStep
                        key={i}
                        step={i + 1}
                        label={step.label}
                        description={step.description}
                        isLast={i === contribution.flow.length - 1}
                      />
                    ))}
                  </div>
                </div>
              )}
            </Section>
          </div>
          <div style={divider} />
        </>
      )}

      {/* ── 05 OUTCOMES ── */}
      {(outcomes?.body ||
        (P.screens && P.screens.length > 0) ||
        P.resultVideo ||
        P.resultImage) && (
        <>
          <div id="outcomes">
            <Section isMobile={isMobile}>
              <p style={sectionLabel}>05 — Outcomes</p>
              <h2 style={sectionHeading(isMobile)}>{outcomes?.headline ?? "Outcomes"}</h2>
              {outcomes?.body && <p style={bodyText(isMobile)}>{outcomes.body}</p>}

              {/* ── Galeri screenshot sekarang carousel, bukan grid ── */}
              {P.screens && P.screens.length > 0 && (
                <div
                  style={{
                    marginTop: "32px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Carousel
                    slides={P.screens.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Screen ${i + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ))}
                    height={isMobile ? "260px" : "420px"}
                  />
                </div>
              )}

              {(P.resultVideo || P.resultImage) && (
                <div
                  style={{
                    marginTop: "32px",
                    maxWidth: "280px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    aspectRatio: "9/20",
                    background: "#000",
                  }}
                >
                  {P.resultVideo ? (
                    <video
                      src={P.resultVideo}
                      controls
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={P.resultImage}
                      alt="Result"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              )}
            </Section>
          </div>
          <div style={divider} />
        </>
      )}

      {/* ── 06 KEY LEARNING ── */}
      {learning?.body && (
        <div id="learning">
          <Section isMobile={isMobile}>
            <p style={sectionLabel}>06 — Key Learning</p>
            <div
              style={{
                padding: "24px 28px",
                background: "rgba(124,92,252,0.08)",
                border: "1px solid rgba(124,92,252,0.20)",
                borderRadius: "16px",
              }}
            >
              <h2
                style={{
                  ...sectionHeading(isMobile),
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  marginBottom: "12px",
                }}
              >
                {learning.headline ?? "What I learned"}
              </h2>
              <p style={bodyText(isMobile)}>{learning.body}</p>
              <SectionIllustration
                src={learning.image}
                alt={learning.headline}
                caption={learning.imageCaption}
              />
            </div>
          </Section>
        </div>
      )}

      {/* ── BACK BUTTON ── */}
      <Section isMobile={isMobile} noPaddingTop>
        <div style={{ paddingTop: "8px", paddingBottom: isMobile ? "60px" : "80px" }}>
          <button
            onClick={() => navigate("/projects")}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50px",
              padding: "10px 22px",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            ← Back to Projects
          </button>
        </div>
      </Section>
    </main>
  );
}
