import profileImg from "../assets/newest_photo.jpeg";
import iconLinkedIn from "../assets/mdi_linkedin.png";
import iconGmail from "../assets/mdi_gmail.png";
// import iconWhatsapp from "../assets/ic_baseline-whatsapp.png";
import ExperienceTimeline from "../components/ExperienceTimeline";
import useIsMobile from "../hooks/Useismobile";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abigail-metanoia-melody-09bb99219/",
    icon: iconLinkedIn,
  },
  { label: "Gmail", href: "mailto:abigailmetanoia17@gmail.com", icon: iconGmail },
  // { label: "WhatsApp", href: "https://wa.me/6281994055237", icon: iconWhatsapp },
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
      {/* Section label — sekarang pakai font-heading (Fraunces) italic + warna accent,
          sama seperti aksen "friction." di Hero. Sebelumnya pakai font 'Gruppo' sendiri. */}
      <p
        style={{
          fontFamily: "var(--font-heading)",
          fontStyle: "italic",
          fontSize: "var(--text-eyebrow)",
          color: "var(--color-accent-soft)",
          textAlign: "center",
          margin: "0 0 10px 0",
          lineHeight: 1,
        }}
      >
        Who am I?
      </p>

      <h2
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-h2)",
          fontWeight: "700",
          color: "var(--color-text)",
          textAlign: "center",
          margin: "0 0 48px 0",
          letterSpacing: "-0.02em",
        }}
      >
        Getting to Know me
      </h2>

      {/* Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
          gap: isMobile ? "40px" : "72px",
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
                /* foto lebih besar & lebih landscape natural di mobile.
                   Fix: nilai desktop sebelumnya "3s/3" tidak valid (typo), diganti "4/3". */
                aspectRatio: isMobile ? "4/5" : "3/3",
                objectFit: "cover",
                objectPosition: isMobile ? "center top" : "center",
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

            {/* Bottom bar — social + nama, diperbesar di mobile */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? "20px 22px" : "18px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              {/* Social icons — diperbesar */}
              <div
                style={{ display: "flex", gap: isMobile ? "12px" : "8px", alignItems: "center" }}
              >
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: isMobile ? "48px" : "36px",
                      height: isMobile ? "48px" : "36px",
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
                        width: isMobile ? "44px" : "18px",
                        height: isMobile ? "44px" : "18px",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                ))}
              </div>

              {/* Nama + role — pakai token font & warna terpusat */}
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: "700",
                    fontSize: "var(--text-name)",
                    color: "var(--color-text)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Abigail Metanoia Melody
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-caption)",
                    color: "var(--color-text-caption)",
                    margin: "4px 0 0 0",
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
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: 1.85,
              margin: "0 0 36px 0",
              /* justify agar rapi kiri-kanan, bukan ragged */
              textAlign: isMobile ? "justify" : "left",
              textAlignLast: isMobile ? "left" : "auto",
            }}
          >
            I'm a <strong style={{ color: "var(--color-text)" }}>UI/UX designer</strong> focused on{" "}
            <strong style={{ color: "var(--color-text)" }}>reducing friction</strong> and crafting
            experiences shaped by{" "}
            <strong style={{ color: "var(--color-text)" }}>
              real user needs and business goals.
            </strong>{" "}
            My background in{" "}
            <strong style={{ color: "var(--color-text)" }}>Information Technology</strong> gives me
            a technical edge{" "}
            <strong style={{ color: "var(--color-text)" }}> most designers don't have</strong> — I
            can talk to engineers, understand what's feasible, and design accordingly. I'm sharpest
            at{" "}
            <strong style={{ color: "var(--color-text)" }}>
              user research, analysis, and problem solving.
            </strong>
          </p>

          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
