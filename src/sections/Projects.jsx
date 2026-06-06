import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 48px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section heading */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        margin: "0 0 48px 0",
      }}>
        My Recent Project
      </h2>

      {/* 2x2 grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
      }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}