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

/* ── Icons ── */
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

/* Deteksi apakah URL adalah Sketch atau Figma */
function isSketchUrl(url) {
  return url && url.includes("sketch.com");
}

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

/* ── LinkButtons — di luar component utama, terima props ── */
function LinkButtons({ links }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "flex-end" }}>
      {links?.prototype && (
        <a
          href={links.prototype}
          target="_blank"
          rel="noreferrer"
          style={linkButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(124,92,252,0.25)";
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {isSketchUrl(links.prototype) ? <SketchIcon /> : <FigmaIcon />}
          View Prototype
        </a>
      )}
      {links?.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          style={linkButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(124,92,252,0.25)";
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <GithubIcon /> View Code
        </a>
      )}
    </div>
  );
}

/* ── Overview metadata strip ── */
function ProjectOverview({ project, isMobile }) {
  const meta = [
    { label: "Year", value: project.year ?? "—" },
    { label: "Timeline", value: project.timeline ?? "—" },
    { label: "Role", value: project.role ?? "—" },
    { label: "Duration", value: project.duration ?? "—" },
  ];

  return (
    <div
      style={{
        padding: isMobile ? "20px" : "28px 48px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Short description */}
      {project.description && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "0.92rem" : "1rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            margin: "0 0 32px 0",
            maxWidth: "680px",
          }}
        >
          {project.description}
        </p>
      )}

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "28px" }} />

      {/* Metadata grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: isMobile ? "20px 12px" : "0",
        }}
      >
        {meta.map(({ label, value }) => (
          <div key={label}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: "500",
                color: "rgba(255,255,255,0.35)",
                margin: "0 0 6px 0",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.88rem" : "0.95rem",
                fontWeight: "500",
                color: "#fff",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "28px" }} />
    </div>
  );
}

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
  const hasLinks = project.links && (project.links.prototype || project.links.github);

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
      </div>

      {/* ── Title + Tags + Links ── */}
      <div
        style={{
          padding: isMobile ? "20px 20px 0" : "32px 48px 0",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Judul */}
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

        {/* Tags (kiri) + Link buttons (kanan) — satu baris */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: isMobile ? "16px" : "24px",
          }}
        >
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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

          {/* Link buttons — selalu rata kanan */}
          {hasLinks && <LinkButtons links={project.links} />}
        </div>
      </div>

      {/* ── Overview Section (description + metadata) ── */}
      <ProjectOverview project={project} isMobile={isMobile} />

      {/* ── MOBILE: Tab layout ── */}
      {isMobile ? (
        <div style={{ padding: "0 0 80px" }}>
          <div
            className="tab-scroll"
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
              <div style={{ borderLeft: "2px solid rgba(124,92,252,0.50)", paddingLeft: "16px" }}>
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
