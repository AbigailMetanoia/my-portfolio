import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import amLogo from "../assets/AM_Logo.png";

const navItems = [
  { label: "About", path: "/#about-detail" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* AM Logo — fixed, top-left */}
      <div style={{ position: "fixed", top: "20px", left: "28px", zIndex: 200 }}>
        <Link to="/">
          <img
            src={amLogo}
            alt="AM Logo"
            style={{ width: "60px", height: "auto", display: "block" }}
          />
        </Link>
      </div>

      {/* Pill Navbar */}
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
          background: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
          backdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
          WebkitBackdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
          border: "1px solid rgba(255,255,255,0.20)",
          boxShadow:
            "inset 0 1.5px 0 rgba(255,255,255,0.25), " +
            "inset 0 -1px 0 rgba(0,0,0,0.10), " +
            "0 8px 32px rgba(0,0,0,0.30)",
          borderRadius: "50px",
          padding: "10px 24px",
          whiteSpace: "nowrap",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            style={{
              color: isActive(path) ? "#fff" : "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: isActive(path) ? "600" : "400",
              transition: "color 0.2s, font-weight 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isActive(path) ? "#fff" : "rgba(255,255,255,0.65)")
            }
          >
            {label}
          </Link>
        ))}

        {/* Download CV */}
        <a
          href="/CV_Abigail Metanoia Melody.pdf"
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
            boxShadow: "0 0 14px rgba(124,92,252,0.50)",
            transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#6A4AE8";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 24px rgba(124,92,252,0.80)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#7C5CFC";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 14px rgba(124,92,252,0.50)";
          }}
        >
          Download CV
        </a>
      </nav>
    </>
  );
}
