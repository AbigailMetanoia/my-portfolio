import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function ProjectsPage() {
  return (
    <main style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "140px 48px 100px",
    }}>
      <h1 style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        margin: "0 0 72px 0",
        letterSpacing: "-0.02em",
      }}>
        My Recent Project
      </h1>

      {/* 2-column grid — sama seperti di homepage */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "28px",
      }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}