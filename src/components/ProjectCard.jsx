const tagColors = {
  Edutech: { bg: "rgba(124,92,252,0.2)", color: "#A78BFA" },
  "Mobile App": { bg: "rgba(50,180,255,0.15)", color: "#60C8FF" },
  "Mental Health": { bg: "rgba(80,220,130,0.15)", color: "#6EE7A0" },
  "UX Research": { bg: "rgba(255,160,60,0.15)", color: "#FFA84E" },
};

export default function ProjectCard({ project }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(124,92,252,0.2)";
        e.currentTarget.style.borderColor = "rgba(124,92,252,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {/* Project Image */}
      <div style={{
        width: "100%",
        aspectRatio: "16/9",
        background: "rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Card Body */}
      <div style={{ padding: "16px" }}>
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.95rem",
          fontWeight: "600",
          color: "#fff",
          margin: "0 0 12px 0",
          lineHeight: 1.4,
        }}>
          {project.title}
        </h3>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => {
            const style = tagColors[tag] || { bg: "rgba(255,255,255,0.1)", color: "#fff" };
            return (
              <span
                key={tag}
                style={{
                  background: style.bg,
                  color: style.color,
                  padding: "4px 12px",
                  borderRadius: "50px",
                  fontSize: "0.75rem",
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
    </div>
  );
}