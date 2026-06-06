import heroImg from "../assets/hero.png"; // ganti dengan nama file foto kamu

const roles = ["UI/UX Designer", "Frontend Developer", "Visual Designer", "Graphic Designer"];

const rolePositions = [
  { top: "38%", left: "2%" },
  { top: "38%", right: "2%" },
  { top: "60%", left: "5%" },
  { top: "60%", right: "5%" },
];

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{
        position: "absolute", width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(124,92,252,0.35) 0%, transparent 70%)",
        top: "10%", left: "-10%", borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(255,200,50,0.2) 0%, transparent 70%)",
        top: "5%", right: "-8%", borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(50,180,255,0.15) 0%, transparent 70%)",
        bottom: "5%", right: "10%", borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Heading */}
      <div style={{ textAlign: "center", zIndex: 2, marginBottom: "-20px" }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "rgba(255,255,255,0.75)",
          fontSize: "1.1rem",
          marginBottom: "4px",
        }}>
          Hi I'm Noia
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: "700",
          color: "#fff",
          lineHeight: 1,
          margin: 0,
          letterSpacing: "-0.02em",
        }}>
          UI/UX Designer
        </h1>
      </div>

      {/* Hero image + floating badges */}
      <div style={{ position: "relative", width: "100%", maxWidth: "700px", margin: "0 auto" }}>
        {/* Floating role badges */}
        {roles.map((role, i) => (
          <div
            key={role}
            style={{
              position: "absolute",
              ...rolePositions[i],
              background: "rgba(30,30,30,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50px",
              padding: "10px 20px",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: "500",
              whiteSpace: "nowrap",
              zIndex: 3,
              animation: `floatBadge ${2.5 + i * 0.4}s ease-in-out infinite alternate`,
            }}
          >
            {role}
          </div>
        ))}

        {/* Hero photo */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
          <img
            src={heroImg}
            alt="Noia - UI/UX Designer"
            style={{
              width: "clamp(280px, 45%, 420px)",
              objectFit: "cover",
              display: "block",
              filter: "drop-shadow(0 20px 60px rgba(124,92,252,0.3))",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes floatBadge {
          from { transform: translateY(0px); }
          to   { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}