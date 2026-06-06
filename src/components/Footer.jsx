export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "28px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
    }}>
      {/* Left nav links */}
      <div style={{ display: "flex", gap: "24px" }}>
        {["About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.8rem",
        color: "rgba(255,255,255,0.3)",
        margin: 0,
      }}>
        © 2026 AbigailMetanoia. All Right Reserved
      </p>
    </footer>
  );
}