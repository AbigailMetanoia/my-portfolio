import { useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import useIsMobile from "../hooks/Useismobile";
import ContactCTA from "../components/ContactCTA";

const FILTERS = ["All", "Freelance", "Personal Project", "Apple Developer Academy"];

export default function ProjectsPage() {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "120px 20px 0" : "140px 48px 0",
      }}
    >
      <h1
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
          fontWeight: "700",
          color: "#fff",
          textAlign: "center",
          margin: "0 0 32px 0",
          letterSpacing: "-0.02em",
        }}
      >
        My Recent Projects
      </h1>

      {/* ── Filter chips ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: isMobile ? "40px" : "56px",
          overflowX: isMobile ? "auto" : "visible",
        }}
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: isMobile ? "9px 18px" : "10px 22px",
                borderRadius: "50px",
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.82rem" : "0.9rem",
                fontWeight: isActive ? "600" : "400",
                color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                whiteSpace: "nowrap",
                cursor: "pointer",
                border: isActive
                  ? "1px solid rgba(124,92,252,0.50)"
                  : "1px solid rgba(255,255,255,0.14)",
                background: isActive ? "rgba(124,92,252,0.25)" : "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                boxShadow: isActive
                  ? "inset 0 1px 0 rgba(255,255,255,0.20), 0 0 16px rgba(124,92,252,0.30)"
                  : "inset 0 1px 0 rgba(255,255,255,0.08)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }
              }}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* ── Projects grid ── */}
      {filteredProjects.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "16px" : "28px",
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
            color: "rgba(255,255,255,0.40)",
            fontSize: "0.95rem",
            padding: "40px 0",
          }}
        >
          No projects found in this category.
        </p>
      )}
      <ContactCTA />
    </main>
  );
}
