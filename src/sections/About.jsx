import profileImg from "../assets/newest_photo.jpeg";
import iconLinkedIn from "../assets/mdi_linkedin.png";
import iconGmail from "../assets/mdi_gmail.png";
import iconWhatsapp from "../assets/ic_baseline-whatsapp.png";
import ExperienceTimeline from "../components/ExperienceTimeline";
import useIsMobile from "../hooks/useIsMobile";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abigail-metanoia-melody-09bb99219/",
    icon: iconLinkedIn,
  },
  { label: "Gmail", href: "mailto:abigailmetanoia17@gmail.com", icon: iconGmail },
  { label: "WhatsApp", href: "https://wa.me/6281994055237", icon: iconWhatsapp },
];

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section
      id="about-detail"
      style={{
        padding: isMobile ? "60px 20px" : "70px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "'Gruppo', cursive",
          fontSize: isMobile ? "1.4rem" : "2rem",
          color: "#fff",
          textAlign: "center",
          margin: "0 0 10px 0",
          letterSpacing: "0.08em",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
          textShadow: "0px 4px 4px rgba(255,255,255,0.40)",
          lineHeight: 1,
        }}
      >
        Who am I?
      </p>

      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? "2rem" : "clamp(2.2rem, 5vw, 3.5rem)",
          fontWeight: "700",
          color: "#fff",
          textAlign: "center",
          margin: "0 0 48px 0",
          letterSpacing: "-0.02em",
        }}
      >
        Getting to Know me
      </h2>

      {/* Layout: stack di mobile, 2 kolom di desktop */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
          gap: isMobile ? "36px" : "72px",
          alignItems: "start",
        }}
      >
        {/* ── LEFT — Photo card ── */}
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.18), 0 24px 80px rgba(0,0,0,0.50)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <img
              src={profileImg}
              alt="Abigail Metanoia Melody"
              style={{
                width: "100%",
                aspectRatio: isMobile ? "1/1" : "3/3",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "50%",
                background: "linear-gradient(to bottom, transparent 0%, rgba(8,8,8,0.92) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Bottom bar — social + nama */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? "12px 16px" : "18px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              {/* Social icons */}
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: isMobile ? "30px" : "36px",
                      height: isMobile ? "30px" : "36px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.10)",
                      backdropFilter: "blur(20px) saturate(180%)",
                      WebkitBackdropFilter: "blur(20px) saturate(180%)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      flexShrink: 0,
                      transition: "background 0.25s, transform 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(124,92,252,0.35)";
                      e.currentTarget.style.transform = "scale(1.14)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <img
                      src={s.icon}
                      alt={s.label}
                      style={{
                        width: isMobile ? "15px" : "18px",
                        height: isMobile ? "15px" : "18px",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                ))}
              </div>

              {/* Nama + role */}
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "600",
                    fontSize: isMobile ? "0.82rem" : "1rem",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Abigail Metanoia
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? "0.70rem" : "0.78rem",
                    color: "rgba(255,255,255,0.55)",
                    margin: "2px 0 0 0",
                  }}
                >
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Bio + Timeline ── */}
        <div style={{ paddingTop: isMobile ? "0" : "8px" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? "0.95rem" : "1.07rem",
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.85,
              margin: "0 0 36px 0",
            }}
          >
            I'm a <strong style={{ color: "#fff" }}>UI/UX designer</strong> with a background in
            Information Technology, <strong style={{ color: "#fff" }}>passionate</strong> about{" "}
            <strong style={{ color: "#fff" }}>learning something new,</strong>{" "}
            <strong style={{ color: "#fff" }}>building digital experiences</strong> and{" "}
            <strong style={{ color: "#fff" }}>solve real problems.</strong>
          </p>

          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
