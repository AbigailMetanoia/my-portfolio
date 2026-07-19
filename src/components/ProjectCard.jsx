import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/Useismobile";

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
    bg: "rgba(25, 38, 178, 0.22)",
    color: "#b8c7ff",
    border: "rgba(120, 201, 255, 0.4)",
  },
};

/* ─────────────────────────────────────────────
   Full-width showcase card — gambar di satu sisi,
   cerita project di sisi lain. `reverse` membalik
   sisi gambar/teks supaya beberapa card berturut-turut
   tidak monoton semua gambar di kiri.
───────────────────────────────────────────── */
export default function ProjectCard({ project, reverse = false }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const goToDetail = () => navigate(`/projects/${project.slug}`);

  return (
    <div
      onClick={goToDetail}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
        alignItems: "center",
        gap: isMobile ? "28px" : "64px",
        width: "100%",
        cursor: "pointer",
      }}
    >
      {/* ── Gambar ── */}
      <div
        style={{
          flex: isMobile ? "none" : "1 1 52%",
          width: isMobile ? "100%" : undefined,
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          border: hovered ? "1px solid rgba(255,255,255,0.20)" : "1px solid rgba(255,255,255,0.10)",
          boxShadow: hovered ? "0 32px 80px rgba(0,0,0,0.50)" : "0 12px 40px rgba(0,0,0,0.35)",
          transition: "border-color 0.25s, box-shadow 0.25s",
        }}
      >
        <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            />
          )}
        </div>
      </div>

      {/* ── Teks ── */}
      <div style={{ flex: isMobile ? "none" : "1 1 48%", width: isMobile ? "100%" : undefined }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: "600",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-accent-soft)",
            margin: "0 0 12px 0",
          }}
        >
          {project.category}
        </p>

        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontSize: isMobile ? "1.6rem" : "clamp(1.7rem, 2.6vw, 2.3rem)",
            fontWeight: "700",
            color: "var(--color-text)",
            margin: "0 0 16px 0",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        {project.description && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--color-text-body)",
              lineHeight: 1.75,
              margin: "0 0 22px 0",
            }}
          >
            {project.description}
          </p>
        )}

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "26px" }}>
          {project.tags.map((tag) => {
            const t = tagColors[tag] || {
              bg: "rgba(255,255,255,0.10)",
              color: "#fff",
              border: "rgba(255,255,255,0.20)",
            };
            return (
              <span
                key={tag}
                style={{
                  background: t.bg,
                  color: t.color,
                  border: `1px solid ${t.border}`,
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-body)",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "var(--color-text)",
            borderBottom: "2px solid var(--color-accent)",
            paddingBottom: "3px",
          }}
        >
          See Study Case
          <span
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.25s",
            }}
          >
            →
          </span>
        </span>
      </div>
    </div>
  );
}
