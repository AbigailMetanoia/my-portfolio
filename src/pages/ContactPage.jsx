import amLogo from "../assets/AM_Vector.png";
import iconLinkedIn from "../assets/skill-icons_linkedin.png";
import iconGmail from "../assets/gmail.png";
import iconWhatsapp from "../assets/logos_whatsapp-icon.png";

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abigail-metanoia-melody-09bb99219/",
    icon: iconLinkedIn,
  },
  { label: "Whatsapp", href: "https://wa.me/6281994055237", icon: iconWhatsapp },
  { label: "Gmail", href: "mailto:abigailmetanoia17@gmail.com", icon: iconGmail },
];

export default function ContactPage() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "160px 72px 80px",
        /* overflow dibiarkan visible agar logo tidak terpotong */
      }}
    >
      {/* ── Ambient glow kuning — bawah kiri ── */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(200,160,0,0.30) 0%, transparent 70%)",
          bottom: "20%",
          left: "10%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* ── Ambient glow pink-ungu — bawah tengah kanan ── */}
      <div
        style={{
          position: "absolute",
          width: "240px",
          height: "240px",
          background: "radial-gradient(circle, rgba(160,40,220,0.32) 0%, transparent 70%)",
          bottom: "10%",
          right: "28%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* ── AM Vector Logo — kanan tengah-bawah, penuh & tidak terpotong ── */}
      <div
        style={{
          position: "fixed",
          right: "0",
          bottom: "-1vh" /* sedikit turun agar A terlihat di bawah */,
          width: "750vw" /* lebar tetap berdasar viewport */,
          maxWidth: "800px",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          /* crop sisi kanan agar tidak overflow horizontal */
          overflow: "hidden",
        }}
      >
        <img
          src={amLogo}
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            opacity: 1,
            filter: "blur(0.6px)",
            /* geser sedikit ke kiri agar M tidak terpotong */
            transform: "translateX(8%)",
          }}
        />
      </div>

      {/* ── Content — kiri ── */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "560px" }}>
        <h1
          style={{
            fontFamily: "'Gruppo', cursive",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: "700",
            color: "#fff",
            margin: "0 0 20px 0",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
            textShadow: "0px 4px 4px rgba(255,255,255,0.40)",
            zIndex: 1,
          }}
        >
          Get in Touch!
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            margin: "0 0 48px 0",
          }}
        >
          Let's be friends, hit me out on the social media through the links below 👇
        </p>

        {/* Contact buttons */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              aria-label={c.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                borderRadius: "50px",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                fontWeight: "500",
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "inset 0 1.5px 0 rgba(255,255,255,0.22), " + "0 8px 24px rgba(0,0,0,0.25)",
                transition:
                  "background 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s, border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow =
                  "inset 0 1.5px 0 rgba(255,255,255,0.30), 0 16px 40px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "inset 0 1.5px 0 rgba(255,255,255,0.22), 0 8px 24px rgba(0,0,0,0.25)";
              }}
            >
              <img
                src={c.icon}
                alt={c.label}
                style={{ width: "22px", height: "22px", objectFit: "contain", flexShrink: 0 }}
              />
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
