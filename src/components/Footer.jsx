import amLogo from "../assets/AM_Vector.png";
import useIsMobile from "../hooks/Useismobile";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>
      {/* Logo dekoratif — AM_Vector, jelas tanpa blur */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          minHeight: isMobile ? "160px" : "320px",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, rgba(200,160,0,0.28) 0%, transparent 70%)",
            bottom: "10%",
            left: "12%",
            borderRadius: "50%",
            mixBlendMode: "screen",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "160px",
            height: "160px",
            background: "radial-gradient(circle, rgba(40,120,255,0.32) 0%, transparent 70%)",
            bottom: "20%",
            right: "6%",
            borderRadius: "50%",
            mixBlendMode: "screen",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "140px",
            height: "140px",
            background: "radial-gradient(circle, rgba(180,40,220,0.25) 0%, transparent 70%)",
            bottom: "0%",
            right: "32%",
            borderRadius: "50%",
            mixBlendMode: "screen",
          }}
        />

        <img
          src={amLogo}
          alt=""
          aria-hidden="true"
          style={{
            width: isMobile ? "70%" : "clamp(400px, 65%, 780px)",
            objectFit: "contain",
            display: "block",
            opacity: 0.35,
            /* tanpa blur — logo terlihat tajam/jelas */
            marginBottom: "-10px",
          }}
        />
      </div>

      {/* Nav bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: isMobile ? "16px 20px" : "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", gap: isMobile ? "16px" : "28px" }}>
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.78rem" : "0.85rem",
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
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "0.68rem" : "0.8rem",
            color: "rgba(255,255,255,0.28)",
            margin: 0,
          }}
        >
          © 2026 AbigailMetanoia. All Right Reserved
        </p>
      </div>
    </footer>
  );
}
