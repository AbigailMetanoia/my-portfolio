import amLogo from "../assets/AM_Vector.png";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Nav bar footer (di atas logo) ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {/* Left nav links */}
        <div style={{ display: "flex", gap: "28px" }}>
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.40)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.40)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.28)",
            margin: 0,
          }}
        >
          © 2026 AbigailMetanoia. All Right Reserved
        </p>
      </div>

      {/* ── Logo besar dekoratif di bawah ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          minHeight: "320px",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      >
        {/* Ambient glow kuning kiri */}
        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            background: "radial-gradient(circle, rgba(200,160,0,0.28) 0%, transparent 70%)",
            bottom: "10%",
            left: "12%",
            borderRadius: "50%",
            mixBlendMode: "screen",
          }}
        />

        {/* Ambient glow biru kanan */}
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(40,120,255,0.32) 0%, transparent 70%)",
            bottom: "20%",
            right: "6%",
            borderRadius: "50%",
            mixBlendMode: "screen",
          }}
        />

        {/* Ambient glow pink-ungu */}
        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, rgba(180,40,220,0.25) 0%, transparent 70%)",
            bottom: "0%",
            right: "32%",
            borderRadius: "50%",
            mixBlendMode: "screen",
          }}
        />

        {/* Logo AM */}
        <img
          src={amLogo}
          alt=""
          aria-hidden="true"
          style={{
            width: "clamp(400px, 65%, 780px)",
            objectFit: "contain",
            display: "block",
            opacity: 0.12,
            marginBottom: "-20px",
          }}
        />
      </div>
    </footer>
  );
}
