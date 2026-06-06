import experiences from "../data/experiences";

export default function ExperienceTimeline() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {experiences.map((exp) => (
        <div
          key={exp.id}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >
          {/* Dot indicator */}
          <div style={{ flexShrink: 0, paddingTop: "4px" }}>
            <div style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: exp.active ? "#7C5CFC" : "rgba(255,255,255,0.2)",
              boxShadow: exp.active ? "0 0 10px rgba(124,92,252,0.6)" : "none",
              border: exp.active ? "2px solid rgba(124,92,252,0.4)" : "2px solid rgba(255,255,255,0.1)",
            }} />
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "4px",
            }}>
              <h4 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "#fff",
                margin: 0,
              }}>
                {exp.role}
              </h4>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.4)",
                whiteSpace: "nowrap",
              }}>
                {exp.period}
              </span>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.5)",
              margin: "3px 0 0 0",
            }}>
              {exp.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}