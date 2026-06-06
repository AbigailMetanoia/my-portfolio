import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          : "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "50px",
        padding: "10px 20px",
        transition: "background 0.3s ease",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.4rem",
          fontWeight: "700",
          color: "#fff",
          letterSpacing: "-0.02em",
          marginRight: "0.5rem",
        }}
      >
        AM
      </span>

      {/* Nav Links */}
      {["About", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          style={{
            color: "rgba(255,255,255,0.75)",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "400",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#fff")}
          onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
        >
          {item}
        </a>
      ))}

      {/* CTA Button */}
      <a
        href="/cv.pdf"
        download
        style={{
          background: "#7C5CFC",
          color: "#fff",
          padding: "8px 18px",
          borderRadius: "50px",
          fontSize: "0.85rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: "500",
          textDecoration: "none",
          transition: "background 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "#6A4AE8";
          e.target.style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "#7C5CFC";
          e.target.style.transform = "scale(1)";
        }}
      >
        Download CV
      </a>
    </nav>
  );
}