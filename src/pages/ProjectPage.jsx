import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import useIsMobile from "../hooks/Useismobile";
import ContactCTA from "../components/ContactCTA";

export default function ProjectsPage() {
  const isMobile = useIsMobile();

  /* Hanya tampilkan project yang ditandai `featured: true` di data/projects.js.
     Kalau belum ada satupun yang ditandai, fallback tampilkan semua —
     supaya halaman ini tidak pernah kosong tanpa sengaja. */
  const featuredProjects = projects.some((p) => p.featured)
    ? projects.filter((p) => p.featured)
    : projects;

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
          margin: "0 0 64px 0",
          letterSpacing: "-0.02em",
        }}
      >
        My Recent Projects
      </h1>

      {/* ── Projects — full-width showcase, bukan grid ── */}
      {featuredProjects.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "56px" : "120px",
            marginBottom: isMobile ? "56px" : "100px",
          }}
        >
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
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
          No projects found.
        </p>
      )}
      <ContactCTA />
    </main>
  );
}
