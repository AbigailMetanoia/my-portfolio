import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import amLogo from "../assets/AM_Logo.png";
import useIsMobile from "../hooks/Useismobile";

const navItems = [
  { label: "About", path: "/#about-detail" },
  { label: "Projects", path: "/projects" },
  // { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu saat navigasi
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const glassStyle = {
    background: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
    backdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
    WebkitBackdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
    border: "1px solid rgba(255,255,255,0.20)",
    boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.25), 0 8px 32px rgba(0,0,0,0.30)",
  };

  return (
    <>
      {/* AM Logo */}
      <div style={{ position: "fixed", top: "16px", left: "20px", zIndex: 200 }}>
        <Link to="/">
          <img
            src={amLogo}
            alt="AM Logo"
            style={{ width: isMobile ? "44px" : "60px", height: "auto", display: "block" }}
          />
        </Link>
      </div>

      {/* ── DESKTOP Navbar ── */}
      {!isMobile && (
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
            ...glassStyle,
            borderRadius: "50px",
            padding: "10px 24px",
            whiteSpace: "nowrap",
            transition: "background 0.3s ease",
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
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive(path) ? "#fff" : "rgba(255,255,255,0.65)")
              }
            >
              {label}
            </Link>
          ))}
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
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#6A4AE8";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7C5CFC";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Download CV
          </a>
        </nav>
      )}

      {/* ── MOBILE Hamburger button ── */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            position: "fixed",
            top: "14px",
            right: "20px",
            zIndex: 200,
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            ...glassStyle,
            border: "1px solid rgba(255,255,255,0.20)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            cursor: "pointer",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "#fff",
                borderRadius: "2px",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen
                  ? i === 0
                    ? "translateY(6.5px) rotate(45deg)"
                    : i === 2
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      )}

      {/* ── MOBILE Menu overlay ── */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "rgba(14,14,14,0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "36px",
          }}
        >
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "2rem",
                fontWeight: "600",
                letterSpacing: "-0.02em",
                opacity: isActive(path) ? 1 : 0.6,
                transition: "opacity 0.2s",
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="/CV_Abigail Metanoia Melody.pdf"
            download
            style={{
              marginTop: "8px",
              background: "#7C5CFC",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: "50px",
              fontSize: "1rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 0 24px rgba(124,92,252,0.50)",
            }}
          >
            Download CV
          </a>
        </div>
      )}
    </>
  );
}
