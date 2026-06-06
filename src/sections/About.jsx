import profileImg from "../assets/newest_photo.jpeg";
import iconLinkedIn from "../assets/mdi_linkedin.png";
import iconGmail from "../assets/mdi_gmail.png";
import iconWhatsapp from "../assets/ic_baseline-whatsapp.png";
import ExperienceTimeline from "../components/ExperienceTimeline";

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
  return (
    <section
      id="about-detail"
      style={{
        padding: "70px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "'Gruppo', cursive",
          fontSize: "2rem",
          color: "rgb(255,255,255)",
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
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          fontWeight: "700",
          color: "#fff",
          textAlign: "center",
          margin: "0 0 72px 0",
          letterSpacing: "-0.02em",
        }}
      >
        Getting to Know me
      </h2>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "72px",
          alignItems: "start",
        }}
      >
        {/* ══ LEFT — photo card (landscape) ══ */}
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "inset 0 1.5px 0 rgba(255,255,255,0.18), " + "0 24px 80px rgba(0,0,0,0.50)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {/* Photo */}
            <img
              src={profileImg}
              alt="Abigail Metanoia Melody"
              style={{
                width: "100%",
                aspectRatio: "3/3",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />

            {/* Gradient overlay bawah — lebih tinggi agar bottom bar terbaca */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "55%",
                background: "linear-gradient(to bottom, transparent 0%, rgba(8,8,8,0.92) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* ── Bottom bar: social kiri | nama+role kanan ── */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              {/* Social icons — kiri */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "36px",
                      height: "36px",
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
                      transition: "background 0.25s, transform 0.25s, box-shadow 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(124,92,252,0.35)";
                      e.currentTarget.style.transform = "scale(1.14)";
                      e.currentTarget.style.boxShadow =
                        "inset 0 1px 0 rgba(255,255,255,0.28), 0 0 14px rgba(124,92,252,0.50)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.22)";
                    }}
                  >
                    <img
                      src={s.icon}
                      alt={s.label}
                      style={{ width: "18px", height: "18px", objectFit: "contain" }}
                    />
                  </a>
                ))}
              </div>

              {/* Nama + role — kanan */}
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "600",
                    fontSize: "1rem",
                    color: "#fff",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Abigail Metanoia Melody
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.66)",
                    margin: "3px 0 0 0",
                  }}
                >
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ RIGHT — bio + timeline ══ */}
        <div style={{ paddingTop: "8px" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.07rem",
              color: "rgb(255,255,255)",
              lineHeight: 1.85,
              margin: "0 0 48px 0",
            }}
          >
            I'm a <strong style={{ color: "#fff", fontWeight: "700" }}>UI/UX designer</strong> with
            a background in Information Technology,{" "}
            <strong style={{ color: "#fff", fontWeight: "700" }}>passionate</strong> about{" "}
            <strong style={{ color: "#fff", fontWeight: "700" }}>learning something new,</strong>{" "}
            <strong style={{ color: "#fff", fontWeight: "700" }}>
              building digital experiences
            </strong>{" "}
            and <strong style={{ color: "#fff", fontWeight: "700" }}>solve real problems.</strong>
          </p>

          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
