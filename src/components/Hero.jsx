import profileImg from "../assets/profile.png"; // ganti dengan nama file foto kamu

const badges = [
  { label: "UI/UX Designer",     style: { bottom: "38%", left: "4%" } },
  { label: "Frontend Developer", style: { top:    "32%", right: "4%" } },
  { label: "Visual Designer",    style: { bottom: "16%", left: "4%" } },
  { label: "Graphic Designer",   style: { bottom: "22%", right: "4%" } },
];

export default function Hero() {
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
      {/* ── Heading (above photo, centered) ── */}
      <div style={{ textAlign: "center", zIndex: 5, position: "relative" }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          color: "#fff",
          fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
          margin: "0 0 4px 0",
          letterSpacing: "-0.02em",
        }}>
          Hi I'm Noia
        </p>

        <h1 style={{
          fontFamily: "'Gruppo', cursive",
          fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
          fontWeight: "400",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
          textShadow: "0px 4px 4px rgba(255,255,255,0.40)",
          lineHeight: 1,
          margin: 0,
          letterSpacing: "0.01em",
        }}>
          UI/UX Designer
        </h1>
      </div>

      {/* ── Photo area — badges float around this ── */}
      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        marginTop: "-40px",   /* photo slightly overlaps heading bottom */
      }}>

        {/* Gradient glows — centred around the photo */}
        <div style={{
          position: "absolute",
          width: "320px", height: "320px",
          background: "radial-gradient(circle, rgba(124,92,252,0.45) 0%, transparent 70%)",
          top: "25%", left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%", pointerEvents: "none", zIndex: 1,
        }} />
        <div style={{
          position: "absolute",
          width: "260px", height: "260px",
          background: "radial-gradient(circle, rgba(255,200,50,0.28) 0%, transparent 70%)",
          bottom: "10%", left: "18%",
          borderRadius: "50%", pointerEvents: "none", zIndex: 1,
        }} />
        <div style={{
          position: "absolute",
          width: "220px", height: "220px",
          background: "radial-gradient(circle, rgba(50,130,255,0.25) 0%, transparent 70%)",
          top: "15%", right: "14%",
          borderRadius: "50%", pointerEvents: "none", zIndex: 1,
        }} />
        <div style={{
          position: "absolute",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(180,50,255,0.22) 0%, transparent 70%)",
          bottom: "5%", right: "12%",
          borderRadius: "50%", pointerEvents: "none", zIndex: 1,
        }} />

        {/* Floating role badges */}
        {badges.map(({ label, style }, i) => (
          <div
            key={label}
            style={{
              position: "absolute",
              ...style,
              background: "rgba(28,28,30,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "60px",
              padding: "16px 32px",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)",   /* ~34px di Figma */
              fontWeight: "500",
              whiteSpace: "nowrap",
              zIndex: 4,
              animation: `floatBadge ${2.6 + i * 0.45}s ease-in-out infinite alternate`,
            }}
          >
            {label}
          </div>
        ))}

        {/* Hero photo — z-index 3 so it's above glows but badges can be above/below */}
        <img
          src={profileImg}
          alt="Noia - UI/UX Designer"
          style={{
            width: "clamp(300px, 42%, 480px)",
            objectFit: "cover",
            display: "block",
            position: "relative",
            zIndex: 3,
            filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))",
          }}
        />
        

        {/* Get in Touch button — bottom-right of photo area */}
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
            fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "600",
            textDecoration: "none",
            zIndex: 5,
            transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
            // boxShadow: "0 8px 32px rgba(124,92,252,0.35)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#6A4AE8";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(124,92,252,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#7C5CFC";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,92,252,0.35)";
          }}
        >
          Get in Touch →
        </a>
      </div>

      <style>{`
        @keyframes floatBadge {
          from { transform: translateY(0px);   }
          to   { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}