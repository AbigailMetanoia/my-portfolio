import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.png";

const badges = [
  { label: "UI/UX Designer", pos: { bottom: "50%", left: "2%" } },
  { label: "Frontend Developer", pos: { top: "32%", right: "2%" } },
  { label: "Visual Designer", pos: { bottom: "16%", left: "2%" } },
  { label: "Graphic Designer", pos: { bottom: "30%", right: "2%" } },
];

export default function Hero() {
  const [hoveredBadge, setHoveredBadge] = useState(null);
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
        paddingTop: "120px",
      }}
    >
      {/* ── Heading ── */}
      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          marginBottom: "0px",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: "600",
            color: "#fff",
            fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
            margin: "0 0 4px 0",
            letterSpacing: "-0.02em",
          }}
        >
          Hi I'm Noia
        </p>

        <h1
          style={{
            fontFamily: "'Gruppo', cursive",
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            fontWeight: "400",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
            textShadow: "0px 4px 4px rgba(255,255,255,0.40)",
            lineHeight: 1,
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          UI/UX Designer
        </h1>
      </div>

      {/* ── Photo + badge container ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "-50px",
        }}
      >
        {/* Ungu */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(110,60,255,0.80) 0%, rgba(80,30,200,0.40) 45%, transparent 70%)",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />
        {/* Kuning-emas */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(255,185,0,0.75) 0%, rgba(220,140,0,0.35) 50%, transparent 70%)",
            bottom: "15%",
            left: "16%",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />
        {/* Biru */}
        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            background:
              "radial-gradient(circle, rgba(30,160,255,0.70) 0%, rgba(20,100,220,0.35) 50%, transparent 70%)",
            top: "10%",
            right: "14%",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />
        {/* Pink-ungu */}
        <div
          style={{
            position: "absolute",
            width: "240px",
            height: "240px",
            background:
              "radial-gradient(circle, rgba(200,50,255,0.65) 0%, rgba(150,20,200,0.30) 50%, transparent 70%)",
            bottom: "10%",
            right: "12%",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />

        {/* ── Floating badges — ukuran proporsional, klik ke /projects ── */}
        {badges.map(({ label, pos }, i) => {
          const isHovered = hoveredBadge === i;
          return (
            <div
              key={label}
              onClick={() => navigate("/projects")}
              onMouseEnter={() => setHoveredBadge(i)}
              onMouseLeave={() => setHoveredBadge(null)}
              style={{
                position: "absolute",
                ...pos,
                /* glass */
                background: isHovered ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.10)",
                backdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
                WebkitBackdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
                border: isHovered
                  ? "1px solid rgba(255,255,255,0.35)"
                  : "1px solid rgba(255,255,255,0.25)",
                boxShadow: isHovered
                  ? "inset 0 1.5px 0 rgba(255,255,255,0.40), inset 0 -1px 0 rgba(0,0,0,0.15), 0 20px 60px rgba(0,0,0,0.50)"
                  : "inset 0 1.5px 0 rgba(255,255,255,0.30), inset 0 -1px 0 rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.35)",
                borderRadius: "60px",
                /* ukuran compact — tidak terlalu besar di desktop */
                padding: "9px 20px",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.75rem, 1.1vw, 1rem)",
                fontWeight: "500",
                whiteSpace: "nowrap",
                zIndex: 6,
                cursor: "pointer",
                /* float animation */
                animationName: "floatBadge",
                animationDuration: `${2.6 + i * 0.45}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationPlayState: isHovered ? "paused" : "running",
                transform: isHovered ? "translateY(0px) scale(1.10)" : undefined,
                transition:
                  "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              }}
            >
              {label}
            </div>
          );
        })}

        {/* ── Hero photo ── */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={profileImg}
            alt="Noia - UI/UX Designer"
            style={{
              width: "clamp(300px, 42%, 480px)",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Layer 1 — blur frosted */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "30%",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* Layer 2 — gradient smooth multi-stop */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "55%",
              background: `linear-gradient(
              to bottom,
              rgba(14,14,14,0)    0%,
              rgba(14,14,14,0.04) 10%,
              rgba(14,14,14,0.10) 20%,
              rgba(14,14,14,0.22) 32%,
              rgba(14,14,14,0.40) 46%,
              rgba(14,14,14,0.62) 60%,
              rgba(14,14,14,0.80) 74%,
              rgba(14,14,14,0.93) 86%,
              rgba(14,14,14,1.00) 100%
            )`,
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
        </div>

        {/* ── Get in Touch button ── */}
        <a
          href="#contact"
          style={{
            position: "absolute",
            bottom: "6%",
            right: "4%",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#7C5CFC",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: "50px",
            fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "600",
            textDecoration: "none",
            zIndex: 7,
            boxShadow:
              "0 0 20px rgba(124,92,252,0.75), 0 0 60px rgba(124,92,252,0.40), 0 0 100px rgba(124,92,252,0.20)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(124,92,252,0.95), 0 0 80px rgba(124,92,252,0.60), 0 0 120px rgba(124,92,252,0.30)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(124,92,252,0.75), 0 0 60px rgba(124,92,252,0.40), 0 0 100px rgba(124,92,252,0.20)";
          }}
        >
          Get in Touch →
        </a>
      </div>

      <style>{`
        @keyframes floatBadge {
          from { transform: translateY(0px); }
          to   { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
