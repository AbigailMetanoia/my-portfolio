import profileImg from "../assets/images/profile.png"; // ganti dengan nama file foto kamu
import ExperienceTimeline from "../components/ExperienceTimeline";

// Import icon SVGs atau gunakan emoji/teks sebagai placeholder
const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/abigailmetanoia", icon: "in" },
  { label: "Email", href: "mailto:abigailmetanoia@email.com", icon: "✉" },
  { label: "WhatsApp", href: "https://wa.me/62xxxxxxxx", icon: "✆" },
];

export default function About() {
  return (
    <section
      id="about-detail"
      style={{
        padding: "80px 48px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        color: "rgba(255,255,255,0.4)",
        textAlign: "center",
        margin: "0 0 8px 0",
        letterSpacing: "0.05em",
      }}>
        Who am I?
      </p>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        margin: "0 0 60px 0",
      }}>
        Getting to Know me
      </h2>

      {/* Two-column layout */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.3fr",
        gap: "60px",
        alignItems: "start",
      }}>

        {/* Left — photo + social */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div style={{
            width: "100%",
            maxWidth: "320px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <img
              src={profileImg}
              alt="Abigail Metanoia"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "16px" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: "700",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(124,92,252,0.25)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "600",
              fontSize: "1rem",
              color: "#fff",
              margin: 0,
            }}>
              Abigail Metanoia
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.45)",
              margin: "4px 0 0 0",
            }}>
              UI/UX Designer
            </p>
          </div>
        </div>

        {/* Right — bio + timeline */}
        <div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.75,
            margin: "0 0 36px 0",
          }}>
            I'm a <strong style={{ color: "#fff" }}>UI/UX designer</strong> with a background in
            Information Technology, <strong style={{ color: "#fff" }}>passionate</strong> about learning
            something new, <strong style={{ color: "#fff" }}>building digital experiences</strong> and
            <strong style={{ color: "#fff" }}> solve real problems.</strong>
          </p>

          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}