import { useState } from "react";
import profileImg from "../assets/profile.png";
import useIsMobile from "../hooks/Useismobile";

const badges = [
  {
    label: "UI/UX Designer",
    pos: { bottom: "50%", left: "2%" },
    mobilePos: { top: "32%", left: "2%" },
  },
  {
    label: "Frontend Developer",
    pos: { top: "32%", right: "2%" },
    mobilePos: { top: "32%", right: "2%" },
  },
  {
    label: "Visual Designer",
    pos: { bottom: "16%", left: "2%" },
    mobilePos: { bottom: "22%", left: "2%" },
  },
  {
    label: "Graphic Designer",
    pos: { bottom: "30%", right: "2%" },
    mobilePos: { bottom: "22%", right: "2%" },
  },
];

export default function Hero() {
  const [hoveredBadge, setHoveredBadge] = useState(null);
  const isMobile = useIsMobile();

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
        paddingTop: isMobile ? "90px" : "120px",
      }}
    >
      {/* ── Heading ── */}
      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: "600",
            color: "#fff",
            fontSize: isMobile ? "1.6rem" : "clamp(2rem, 4.5vw, 3.8rem)",
            margin: "0 0 4px 0",
            letterSpacing: "-0.02em",
          }}
        >
          Hi I'm Noia
        </p>

        <h1
          style={{
            fontFamily: "'Gruppo', cursive",
            fontSize: isMobile ? "3.2rem" : "clamp(3.5rem, 9vw, 7.5rem)",
            fontWeight: "400",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
            textShadow: "0px 4px 4px rgba(255,255,255,0.40)",
            lineHeight: 1,
            margin: 0,
            letterSpacing: "0.01em",
            whiteSpace: isMobile ? "nowrap" : "normal",
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
          maxWidth: isMobile ? "100%" : "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginTop: isMobile ? "-20px" : "-50px",
          minHeight: isMobile ? "420px" : "auto",
        }}
      >
        {/* Gradient glows */}
        <div
          style={{
            position: "absolute",
            width: isMobile ? "220px" : "400px",
            height: isMobile ? "220px" : "400px",
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
        <div
          style={{
            position: "absolute",
            width: isMobile ? "160px" : "300px",
            height: isMobile ? "160px" : "300px",
            background:
              "radial-gradient(circle, rgba(255,185,0,0.75) 0%, rgba(220,140,0,0.35) 50%, transparent 70%)",
            bottom: "15%",
            left: isMobile ? "5%" : "16%",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: isMobile ? "140px" : "260px",
            height: isMobile ? "140px" : "260px",
            background:
              "radial-gradient(circle, rgba(30,160,255,0.70) 0%, rgba(20,100,220,0.35) 50%, transparent 70%)",
            top: "10%",
            right: isMobile ? "5%" : "14%",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: isMobile ? "130px" : "240px",
            height: isMobile ? "130px" : "240px",
            background:
              "radial-gradient(circle, rgba(200,50,255,0.65) 0%, rgba(150,20,200,0.30) 50%, transparent 70%)",
            bottom: "10%",
            right: isMobile ? "5%" : "12%",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />

        {/* ── Floating badges ── */}
        {badges.map(({ label, pos, mobilePos }, i) => {
          const isHovered = hoveredBadge === i;
          const badgePos = isMobile ? mobilePos : pos;
          return (
            <div
              key={label}
              onMouseEnter={() => setHoveredBadge(i)}
              onMouseLeave={() => setHoveredBadge(null)}
              style={{
                position: "absolute",
                ...badgePos,
                background: isHovered ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.10)",
                backdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
                WebkitBackdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
                border: isHovered
                  ? "1px solid rgba(255,255,255,0.35)"
                  : "1px solid rgba(255,255,255,0.25)",
                boxShadow: isHovered
                  ? "inset 0 1.5px 0 rgba(255,255,255,0.40), 0 20px 60px rgba(0,0,0,0.50)"
                  : "inset 0 1.5px 0 rgba(255,255,255,0.30), 0 8px 32px rgba(0,0,0,0.35)",
                borderRadius: "60px",
                padding: isMobile ? "7px 14px" : "10px 28px",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.72rem" : "clamp(1.1rem, 2.2vw, 2.1rem)",
                fontWeight: "500",
                whiteSpace: "nowrap",
                zIndex: 6,
                cursor: "default",
                animationName: "floatBadge",
                animationDuration: `${2.6 + i * 0.45}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                transform: isHovered ? "translateY(0px) scale(1.12)" : undefined,
                animationPlayState: isHovered ? "paused" : "running",
                transition:
                  "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, box-shadow 0.2s ease",
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
              width: isMobile ? "65vw" : "clamp(300px, 42%, 480px)",
              maxWidth: isMobile ? "280px" : "480px",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Blur frosted bottom */}
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

          {/* Gradient fade bawah */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "55%",
              background: `linear-gradient(to bottom,
              rgba(14,14,14,0) 0%, rgba(14,14,14,0.04) 10%,
              rgba(14,14,14,0.10) 20%, rgba(14,14,14,0.22) 32%,
              rgba(14,14,14,0.40) 46%, rgba(14,14,14,0.62) 60%,
              rgba(14,14,14,0.80) 74%, rgba(14,14,14,0.93) 86%,
              rgba(14,14,14,1.00) 100%)`,
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
            bottom: isMobile ? "2%" : "6%",
            right: isMobile ? "4%" : "4%",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#7C5CFC",
            color: "#fff",
            padding: isMobile ? "10px 20px" : "16px 32px",
            borderRadius: "50px",
            fontSize: isMobile ? "0.82rem" : "clamp(1rem, 1.6vw, 1.25rem)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "600",
            textDecoration: "none",
            zIndex: 7,
            boxShadow: "0 0 20px rgba(124,92,252,0.75), 0 0 60px rgba(124,92,252,0.40)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
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
