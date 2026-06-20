import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
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
      </motion.div>

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
        {/* ── Gradient blobs — gerakan organik, lambat, tidak sinkron ── */}

        {/* Ungu */}
        <motion.div
          animate={{
            x: [0, 14, -8, 6, 0],
            y: [0, -10, 8, -4, 0],
            scale: [1, 1.06, 0.97, 1.03, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.55, 0.8, 1],
          }}
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(110,60,255,0.80) 0%, rgba(80,30,200,0.40) 45%, transparent 70%)",
            top: "5%",
            left: "50%",
            marginLeft: "-200px",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />

        {/* Kuning-emas */}
        <motion.div
          animate={{
            x: [0, -10, 12, -6, 0],
            y: [0, 12, -6, 8, 0],
            scale: [1, 0.95, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.28, 0.6, 0.82, 1],
          }}
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
        <motion.div
          animate={{
            x: [0, 10, -14, 4, 0],
            y: [0, -8, 6, -10, 0],
            scale: [1, 1.04, 0.96, 1.02, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.32, 0.58, 0.85, 1],
          }}
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
        <motion.div
          animate={{
            x: [0, -12, 8, -4, 0],
            y: [0, 9, -11, 5, 0],
            scale: [1, 0.97, 1.05, 0.99, 1],
          }}
          transition={{
            duration: 15.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.26, 0.52, 0.78, 1],
          }}
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

        {/* ── Floating badges ── */}
        {badges.map(({ label, pos }, i) => {
          const isHovered = hoveredBadge === i;
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.0 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={() => navigate("/projects")}
              onMouseEnter={() => setHoveredBadge(i)}
              onMouseLeave={() => setHoveredBadge(null)}
              style={{
                position: "absolute",
                ...pos,
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
                padding: "9px 20px",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.75rem, 1.1vw, 1rem)",
                fontWeight: "500",
                whiteSpace: "nowrap",
                zIndex: 6,
                cursor: "pointer",
                animationName: "floatBadge",
                animationDuration: `${2.6 + i * 0.45}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationDelay: `${2.0 + i * 0.12 + 0.5}s`,
                animationPlayState: isHovered ? "paused" : "running",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
            >
              {label}
            </motion.div>
          );
        })}

        {/* ── Hero photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            zIndex: 5,
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "1px",
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

          {/* Gradient fade bawah — single seamless layer, overlap penuh ke tepi */}
          <div
            style={{
              position: "absolute",
              bottom: "-2px",
              left: "-2px",
              width: "calc(100% + 4px)",
              height: "60%",
              background: `linear-gradient(
              to bottom,
              rgba(14,14,14,0)    0%,
              rgba(14,14,14,0.01) 6%,
              rgba(14,14,14,0.03) 14%,
              rgba(14,14,14,0.07) 22%,
              rgba(14,14,14,0.13) 31%,
              rgba(14,14,14,0.22) 40%,
              rgba(14,14,14,0.34) 49%,
              rgba(14,14,14,0.48) 58%,
              rgba(14,14,14,0.63) 67%,
              rgba(14,14,14,0.77) 76%,
              rgba(14,14,14,0.89) 85%,
              rgba(14,14,14,0.97) 94%,
              rgba(14,14,14,1.00) 100%
            )`,
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
        </motion.div>

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
