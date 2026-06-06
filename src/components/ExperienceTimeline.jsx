import experiences from "../data/experiences";

export default function ExperienceTimeline() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
      {experiences.map((exp, i) => (
        <div
          key={exp.id}
          style={{
            display: "flex",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* ── Left: dot + vertical line ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: 0,
              width: "14px",
            }}
          >
            {/* Dot */}
            <div
              style={{
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: exp.active ? "#7C5CFC" : "rgba(255,255,255,0.25)",
                boxShadow: exp.active
                  ? "0 0 12px rgba(124,92,252,0.80), 0 0 24px rgba(124,92,252,0.35)"
                  : "none",
                border: exp.active
                  ? "2px solid rgba(124,92,252,0.50)"
                  : "2px solid rgba(255,255,255,0.15)",
                flexShrink: 0,
                marginTop: "4px",
              }}
            />

            {/* Vertical connector line — tidak muncul di item terakhir */}
            {i < experiences.length - 1 && (
              <div
                style={{
                  width: "1.5px",
                  flex: 1,
                  minHeight: "40px",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  margin: "6px 0",
                }}
              />
            )}
          </div>

          {/* ── Right: content ── */}
          <div
            style={{
              flex: 1,
              paddingBottom: i < experiences.length - 1 ? "36px" : "0",
            }}
          >
            {/* Role + glass time badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "6px",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {exp.role}
              </h4>

              {/* Glass time badge */}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: "rgba(255,255,255,0.70)",
                  whiteSpace: "nowrap",

                  /* iOS glass */
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.20)",
                  borderRadius: "50px",
                  padding: "4px 14px",
                }}
              >
                {exp.period}
              </span>
            </div>

            {/* Company */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.87rem",
                color: "rgba(255,255,255,0.45)",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {exp.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
