import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import useIsMobile from "../hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  const project = projects.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState(0);

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

  const activeSection = project.sections[activeTab];

  return (
    <main style={{ minHeight: "100vh", paddingTop: "72px" }}>
      {/* ── Hero Image ── */}
      <div
        style={{
          width: "100%",
          height: isMobile ? "240px" : "clamp(320px, 50vw, 560px)",
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
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background: "linear-gradient(to bottom, transparent, #0E0E0E)",
            pointerEvents: "none",
          }}
        />
        {/* Tag pojok kanan bawah */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
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
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "0.78rem",
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
      <div
        style={{
          padding: isMobile ? "20px 20px 0" : "32px 48px 0",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "1.3rem" : "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: "700",
            color: "#fff",
            margin: "0 0 12px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: isMobile ? "24px" : "40px",
          }}
        >
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
      </div>

      {/* ── MOBILE: Tab layout ── */}
      {isMobile ? (
        <div style={{ padding: "0 0 80px" }}>
          {/* Tab bar — horizontal scroll */}
          <div
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              display: "flex",
              gap: "0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              padding: "0 20px",
            }}
          >
            <style>{`
              .tab-scroll::-webkit-scrollbar { display: none; }
              @keyframes floatBadge {
                from { transform: translateY(0px); }
                to   { transform: translateY(-12px); }
              }
            `}</style>
            {project.sections.map((sec, i) => (
              <button
                key={sec.title}
                onClick={() => setActiveTab(i)}
                style={{
                  flexShrink: 0,
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === i ? "2px solid #7C5CFC" : "2px solid transparent",
                  padding: "12px 16px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: activeTab === i ? "600" : "400",
                  color: activeTab === i ? "#fff" : "rgba(255,255,255,0.40)",
                  cursor: "pointer",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: "28px 20px" }}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "#fff",
                margin: "0 0 16px 0",
              }}
            >
              {activeSection.title}
            </h2>

            {activeSection.content && (
              <div
                style={{
                  borderLeft: "2px solid rgba(124,92,252,0.50)",
                  paddingLeft: "16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.92rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {activeSection.content}
                </p>
              </div>
            )}

            {/* Result — link + image */}
            {activeSection.title === "Result" && (
              <div style={{ borderLeft: "2px solid rgba(124,92,252,0.50)", paddingLeft: "16px" }}>
                {activeSection.link && (
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.55)",
                      margin: "0 0 20px 0",
                      wordBreak: "break-all",
                    }}
                  >
                    Link:{" "}
                    <a
                      href={activeSection.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#A78BFA", textDecoration: "underline" }}
                    >
                      {activeSection.link}
                    </a>
                  </p>
                )}
                {project.resultImage && (
                  <div
                    style={{
                      borderRadius: "12px",
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

          {/* Tab navigation arrows — prev / next */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
              marginTop: "8px",
            }}
          >
            <button
              onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
              disabled={activeTab === 0}
              style={{
                background: activeTab === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50px",
                padding: "10px 20px",
                color: activeTab === 0 ? "rgba(255,255,255,0.25)" : "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: "500",
                cursor: activeTab === 0 ? "default" : "pointer",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "background 0.2s",
              }}
            >
              ← Prev
            </button>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.35)",
                alignSelf: "center",
              }}
            >
              {activeTab + 1} / {project.sections.length}
            </span>
            <button
              onClick={() =>
                setActiveTab((prev) => Math.min(project.sections.length - 1, prev + 1))
              }
              disabled={activeTab === project.sections.length - 1}
              style={{
                background:
                  activeTab === project.sections.length - 1
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50px",
                padding: "10px 20px",
                color:
                  activeTab === project.sections.length - 1 ? "rgba(255,255,255,0.25)" : "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: "500",
                cursor: activeTab === project.sections.length - 1 ? "default" : "pointer",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "background 0.2s",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        /* ── DESKTOP: Sidebar + scroll layout ── */
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px 120px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Sidebar sticky */}
            <div style={{ position: "sticky", top: "100px" }}>
              {project.sections.map((sec, i) => (
                <button
                  key={sec.title}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "8px 0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: activeTab === i ? "700" : "400",
                    color: activeTab === i ? "#fff" : "rgba(255,255,255,0.30)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                >
                  {sec.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div>
              {project.sections.map((sec) => (
                <div key={sec.title} style={{ marginBottom: "56px" }}>
                  <h2
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: "700",
                      color: "#fff",
                      margin: "0 0 16px 0",
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
                  {sec.title === "Result" && (
                    <div
                      style={{
                        borderLeft: "2px solid rgba(255,255,255,0.08)",
                        paddingLeft: "20px",
                      }}
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
                          Link:{" "}
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
      )}
    </main>
  );
}
