export default function ContactCTA() {
  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        width: "500px",
        height: "300px",
        background: "radial-gradient(ellipse, rgba(124,92,252,0.2) 0%, transparent 70%)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: "700",
        color: "#fff",
        margin: "0 0 16px 0",
        position: "relative",
        zIndex: 1,
      }}>
        Let's Build Something Great
      </h2>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "1rem",
        color: "rgba(255,255,255,0.55)",
        maxWidth: "480px",
        margin: "0 auto 36px",
        lineHeight: 1.7,
        position: "relative",
        zIndex: 1,
      }}>
        Open to new opportunities, collaborations and meaningful projects.
        Let's build something impactful together.
      </p>

      <a
        href="mailto:abigailmetanoia@email.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "#7C5CFC",
          color: "#fff",
          padding: "14px 32px",
          borderRadius: "50px",
          fontSize: "1rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: "600",
          textDecoration: "none",
          position: "relative",
          zIndex: 1,
          transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#6A4AE8";
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 10px 40px rgba(124,92,252,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#7C5CFC";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Get in Touch →
      </a>
    </section>
  );
}