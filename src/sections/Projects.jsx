import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import useIsMobile from "../hooks/Useismobile";

export default function Projects() {
  const isMobile = useIsMobile();

  /* Hanya tampilkan project yang ditandai `featured: true` di data/projects.js.
     Kalau belum ada yang ditandai, fallback ke 2 project pertama di array. */
  const featuredProjects = projects.some((p) => p.featured)
    ? projects.filter((p) => p.featured)
    : projects.slice(0, 2);

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
          margin: "0 0 64px 0",
          letterSpacing: "-0.02em",
        }}
      >
        My Recent Projects
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "56px" : "120px",
        }}
      >
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
