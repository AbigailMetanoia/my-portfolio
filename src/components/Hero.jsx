import profileImg from "../assets/profile.png";

const badges = [
  { label: "UI/UX Designer",     pos: { bottom: "50%", left: "4%" } },
  { label: "Frontend Developer", pos: { top:    "32%", right: "4%" } },
  { label: "Visual Designer",    pos: { bottom: "16%", left: "4%" } },
  { label: "Graphic Designer",   pos: { bottom: "22%", right: "4%" } },
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
      {/* ── Heading — z-index RENDAH agar foto bisa overlap di atasnya ── */}
      <div style={{
        textAlign: "center",
        position: "relative",
        zIndex: 2,          /* < zIndex foto (5) → foto di depan heading */
        marginBottom: "0px",
      }}>
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

      {/* ── Photo + badge container ── */}
      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        marginTop: "-50px",
      }}>

        {/* ── GRADIENT GLOWS — lebih pekat & saturated ── */}

        {/* Ungu — tepat di belakang kepala */}
        <div style={{
          position: "absolute",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(110,60,255,0.80) 0%, rgba(80,30,200,0.40) 45%, transparent 70%)",
          top: "5%", left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%", pointerEvents: "none",
          zIndex: 3,          /* sama dengan foto, tapi foto di depannya */
          mixBlendMode: "screen",
        }} />

        {/* Kuning-emas — bawah kiri */}
        <div style={{
          position: "absolute",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(255,185,0,0.75) 0%, rgba(220,140,0,0.35) 50%, transparent 70%)",
          bottom: "15%", left: "16%",
          borderRadius: "50%", pointerEvents: "none",
          zIndex: 3,
          mixBlendMode: "screen",
        }} />

        {/* Biru — kanan atas */}
        <div style={{
          position: "absolute",
          width: "260px", height: "260px",
          background: "radial-gradient(circle, rgba(30,160,255,0.70) 0%, rgba(20,100,220,0.35) 50%, transparent 70%)",
          top: "10%", right: "14%",
          borderRadius: "50%", pointerEvents: "none",
          zIndex: 3,
          mixBlendMode: "screen",
        }} />

        {/* Pink-ungu — kanan bawah */}
        <div style={{
          position: "absolute",
          width: "240px", height: "240px",
          background: "radial-gradient(circle, rgba(200,50,255,0.65) 0%, rgba(150,20,200,0.30) 50%, transparent 70%)",
          bottom: "10%", right: "12%",
          borderRadius: "50%", pointerEvents: "none",
          zIndex: 3,
          mixBlendMode: "screen",
        }} />

        {/* ── Floating role badges — true iOS glass ── */}
        {badges.map(({ label, pos }, i) => (
          <div
            key={label}
            style={{
              position: "absolute",
              ...pos,
              /* iOS-style glass: putih transparan + saturate tinggi */
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
              WebkitBackdropFilter: "blur(30px) saturate(200%) brightness(1.1)",
              /* border terang di atas, gelap di bawah — efek depth kaca */
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow:
                "inset 0 1.5px 0 rgba(255,255,255,0.30), " +   /* highlight atas */
                "inset 0 -1px 0 rgba(0,0,0,0.15), " +           /* shadow bawah */
                "0 8px 32px rgba(0,0,0,0.35)",                  /* outer shadow */
              borderRadius: "60px",
              padding: "16px 32px",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)",
              fontWeight: "500",
              whiteSpace: "nowrap",
              zIndex: 6,        /* di atas foto */
              animation: `floatBadge ${2.6 + i * 0.45}s ease-in-out infinite alternate`,
            }}
          >
            {label}
          </div>
        ))}

        {/* ── Hero photo wrapper — z-index 5 → DI DEPAN heading (z:2) ── */}
        <div style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          justifyContent: "center",
        }}>
          <img
            src={profileImg}
            alt="Noia - UI/UX Designer"
            style={{
              width: "clamp(300px, 42%, 480px)",
              objectFit: "cover",
              display: "block",
              /* drop shadow agar foto menyatu dengan bg */
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.7))",
            }}
          />

          {/* Gradient fade BAWAH saja — transisi halus, tidak membentuk kotak */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "20%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(14,14,14,0.6) 50%, #0E0E0E 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }} />
        </div>

        {/* ── Get in Touch button — glowing ── */}
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
            // boxShadow:
            //   "0 0 20px rgba(124,92,252,0.75), " +
            //   "0 0 60px rgba(124,92,252,0.40), " +
            //   "0 0 100px rgba(124,92,252,0.20)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(124,92,252,0.95), " +
              "0 0 80px rgba(124,92,252,0.60), " +
              "0 0 120px rgba(124,92,252,0.30)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(124,92,252,0.75), " +
              "0 0 60px rgba(124,92,252,0.40), " +
              "0 0 100px rgba(124,92,252,0.20)";
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