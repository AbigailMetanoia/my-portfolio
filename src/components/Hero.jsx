import { useNavigate } from "react-router-dom";

/* ─────────────────────────────────────────────
   FONTS — unified with the rest of the site
   - "Fraunces" → headline only (serif, elegant, has personality without being loud)
   - "Inter"    → everything else (nav, subtitle, button, ticker) — same font
                   already used across About / Project Detail pages

   Add to your index.html <head> for faster loading:
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
───────────────────────────────────────────── */

const skills = ["User research", "Product design", "Prototyping", "Design systems"];

export default function Hero() {
  const navigate = useNavigate();

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate("/projects");
  };

  return (
    <div style={{ background: "#0E0E0E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;1,500&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* ── HERO CONTENT ── */}
      <section style={{ padding: "clamp(48px, 8vw, 100px) 48px 40px" }}>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: "500",
            fontSize: "clamp(2.4rem, 6.5vw, 5.4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#fff",
            margin: "0 0 28px 0",
            maxWidth: "1000px",
          }}
        >
          Designer. Thinker.
          <br />
          who removes{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "#C4B0FF",
              position: "relative",
              display: "inline-block",
              paddingBottom: "4px",
              borderBottom: "2px solid rgba(124,92,252,0.5)",
            }}
          >
            friction.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
            color: "rgba(255,255,255,0.50)",
            letterSpacing: "0.01em",
            margin: "0 0 40px 0",
          }}
        >
          UI/UX Designer · Information Technology background · User Research · Problem Solving
        </p>

        <button
          onClick={scrollToWork}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#7C5CFC",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "14px 28px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "600",
            fontSize: "0.92rem",
            cursor: "pointer",
            transition: "transform 0.15s ease, background 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.background = "#6A4CE0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "#7C5CFC";
          }}
        >
          See the work ↓
        </button>
      </section>

      {/* ── SKILL TICKER — quieter, single accent, no heavy display font ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "48px",
            animation: "tickerScroll 26s linear infinite",
          }}
        >
          {[...skills, ...skills, ...skills].map((label, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "48px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: "500",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {label}
              <span style={{ color: "rgba(124,92,252,0.6)", fontSize: "0.6rem" }}>●</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
