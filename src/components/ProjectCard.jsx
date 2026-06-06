import { useState } from "react";

const tagColors = {
  Edutech: { bg: "rgba(124,92,252,0.25)", color: "#C4B0FF", border: "rgba(124,92,252,0.40)" },
  "Mobile App": { bg: "rgba(50,180,255,0.20)", color: "#7DD4FC", border: "rgba(50,180,255,0.35)" },
  "Mental Health": {
    bg: "rgba(80,220,130,0.20)",
    color: "#6EE7A0",
    border: "rgba(80,220,130,0.35)",
  },
  "UX Research": { bg: "rgba(255,160,60,0.20)", color: "#FFA84E", border: "rgba(255,160,60,0.35)" },
};

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        /* ── Glass card ── */
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: hovered ? "1px solid rgba(255,255,255,0.20)" : "1px solid rgba(255,255,255,0.10)",
        boxShadow: hovered
          ? "inset 0 1px 0 rgba(255,255,255,0.15), 0 32px 80px rgba(0,0,0,0.50)"
          : "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.30)",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition:
          "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
    >
      {/* ── Project Image — besar, rasio 4/3 ── */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />

        {/* Subtle gradient overlay bawah gambar — biar judul mudah dibaca */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "40%",
            background: "linear-gradient(to bottom, transparent, rgba(10,10,10,0.55))",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── Card Body ── */}
      <div
        style={{
          padding: "20px 22px 22px",
          /* thin top border sebagai separator glass */
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "#fff",
            margin: "0 0 14px 0",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
