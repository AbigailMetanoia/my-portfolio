import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "70px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section heading */}
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "700",
          color: "#fff",
          textAlign: "center",
          margin: "0 0 64px 0",
          letterSpacing: "-0.02em",
        }}
      >
        My Recent Project
      </h2>

      {/* 2-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "28px",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
