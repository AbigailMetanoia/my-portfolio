import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import amLogo from "../assets/AM_Logo.png";
import useIsMobile from "../hooks/Useismobile";
import "../styles/Navbar.css";

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

  return (
    <>
      {/* Logo AM — kiri atas, berdiri sendiri */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={amLogo} alt="AM Logo" />
        </Link>
      </div>

      {/* ── DESKTOP: nav pill glass, di tengah, kanan kosong ── */}
      {!isMobile && (
        <nav className={`navbar-desktop ${scrolled ? "navbar-desktop--scrolled" : ""}`}>
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`navbar-link ${isActive(path) ? "navbar-link--active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <a href="/CV_Abigail Metanoia Melody.pdf" download className="navbar-cta">
            Download CV
          </a>
        </nav>
      )}

      {/* ── MOBILE: hamburger button kanan atas ── */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`navbar-hamburger ${scrolled ? "navbar-hamburger--scrolled" : ""}`}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="navbar-hamburger-bar"
              style={{
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
        <div className="navbar-mobile-overlay">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`navbar-mobile-link ${isActive(path) ? "navbar-mobile-link--active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <a href="/CV_Abigail Metanoia Melody.pdf" download className="navbar-mobile-cta">
            Download CV
          </a>
        </div>
      )}
    </>
  );
}
