import { useState, useEffect } from "react";
import amLogo from "../assets/AM_Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* AM Logo — fixed, top-left, outside navbar */}
      <div style={{
        position: "fixed",
        top: "20px",
        left: "28px",
        zIndex: 200,
      }}>
        <img
          src={amLogo}
          alt="AM Logo"
          style={{
            width: "60px",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Pill Navbar — centered */}
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          background: scrolled
            ? "rgba(20, 20, 20, 0.95)"
            : "rgba(30, 30, 30, 0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "50px",
          padding: "10px 24px",
          transition: "background 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {/* Nav Links */}
        {["About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
          >
            {item}
          </a>
        ))}

        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          download
          style={{
            background: "#7C5CFC",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "50px",
            fontSize: "0.9rem",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "500",
            textDecoration: "none",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#6A4AE8";
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#7C5CFC";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Download CV
        </a>
      </nav>
    </>
  );
}