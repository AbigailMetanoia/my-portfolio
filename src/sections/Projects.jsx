import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import useIsMobile from "../hooks/Useismobile";

export default function Projects() {
  const isMobile = useIsMobile();

  /* Hanya tampilkan 4 project terbaru di homepage.
     Urutan mengikuti array projects.js — item pertama = terbaru. */
  const recentProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? "60px 20px" : "100px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
          fontWeight: "700",
          color: "#fff",
          textAlign: "center",
          margin: "0 0 48px 0",
          letterSpacing: "-0.02em",
        }}
      >
        My Recent Project
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: isMobile ? "16px" : "28px",
        }}
      >
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
