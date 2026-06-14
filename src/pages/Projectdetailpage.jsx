import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

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

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Scroll spy — highlight sidebar sesuai section yang terlihat
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, [project]);

  if (!project) {
    return (
      <div style={{ padding: "160px 48px", textAlign: "center", color: "#fff" }}>
        <p>Project not found.</p>
        <button
          onClick={() => navigate("/projects")}
          style={{
            marginTop: 16,
            color: "#7C5CFC",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <main style={{ minHeight: "100vh", paddingTop: "80px" }}>
      {/* ── Hero Image — full width, tall ── */}
      <div
        style={{
          width: "100%",
          height: "clamp(320px, 50vw, 560px)",
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
            objectPosition: "center top",
          }}
        />
        {/* Gradient fade bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "40%",
            background: "linear-gradient(to bottom, transparent, #0E0E0E)",
            pointerEvents: "none",
          }}
        />
        {/* Tag badge — pojok kanan bawah gambar */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "24px",
            display: "flex",
            gap: "8px",
          }}
        >
          {project.tags.slice(-1).map((tag) => {
            const t = tagColors[tag] || {
              bg: "rgba(255,255,255,0.15)",
              color: "#fff",
              border: "rgba(255,255,255,0.3)",
            };
            return (
              <span
                key={tag}
                style={{
                  background: t.bg,
                  color: t.color,
                  border: `1px solid ${t.border}`,
                  padding: "6px 16px",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      {/* ── Title + Tags ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "36px 48px 0" }}>
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: "700",
            color: "#fff",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h1>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px" }}>
          {project.tags.map((tag) => {
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
                  padding: "5px 16px",
                  borderRadius: "50px",
                  fontSize: "0.82rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* ── Two-column: sidebar + content ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Sidebar — sticky */}
          <div style={{ position: "sticky", top: "100px" }}>
            {project.sections.map((sec, i) => (
              <button
                key={sec.title}
                onClick={() => {
                  sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "8px 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: activeSection === i ? "700" : "400",
                  color: activeSection === i ? "#fff" : "rgba(255,255,255,0.30)",
                  cursor: "pointer",
                  transition: "color 0.2s, font-weight 0.2s",
                  letterSpacing: "-0.01em",
                }}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Main content */}
          <div style={{ paddingBottom: "120px" }}>
            {project.sections.map((sec, i) => (
              <div
                key={sec.title}
                ref={(el) => (sectionRefs.current[i] = el)}
                style={{ marginBottom: "56px", scrollMarginTop: "120px" }}
              >
                <h2
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: "700",
                    color: "#fff",
                    margin: "0 0 16px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {sec.title}
                </h2>

                {sec.content && (
                  <div
                    style={{
                      borderLeft: "2px solid rgba(255,255,255,0.08)",
                      paddingLeft: "20px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.60)",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {sec.content}
                    </p>
                  </div>
                )}

                {/* Result section — link + image */}
                {sec.title === "Result" && (
                  <div
                    style={{ borderLeft: "2px solid rgba(255,255,255,0.08)", paddingLeft: "20px" }}
                  >
                    {sec.link && (
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.55)",
                          margin: "0 0 24px 0",
                        }}
                      >
                        Link :{" "}
                        <a
                          href={sec.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#A78BFA", textDecoration: "underline" }}
                        >
                          {sec.link}
                        </a>
                      </p>
                    )}
                    {project.resultImage && (
                      <div
                        style={{
                          borderRadius: "16px",
                          overflow: "hidden",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <img
                          src={project.resultImage}
                          alt="Result"
                          style={{ width: "100%", display: "block", objectFit: "cover" }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
