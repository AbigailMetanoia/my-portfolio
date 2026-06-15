import iconLinkedIn from "../assets/mdi_linkedin.png";
import iconGmail from "../assets/mdi_gmail.png";
import iconWhatsapp from "../assets/ic_baseline-whatsapp.png";
import useIsMobile from "../hooks/useIsMobile";

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abigail-metanoia-melody-09bb99219/",
    icon: iconLinkedIn,
  },
  { label: "Whatsapp", href: "https://wa.me/6281994055237", icon: iconWhatsapp },
  { label: "Gmail", href: "mailto:abigailmetanoia17@gmail.com", icon: iconGmail },
];

export default function ContactCTA() {
  const isMobile = useIsMobile();

  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        padding: isMobile ? "60px 20px 80px" : "100px 24px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          background: "radial-gradient(circle, rgba(30,120,255,0.25) 0%, transparent 70%)",
          top: "20%",
          left: "-4%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          background: "radial-gradient(circle, rgba(160,40,240,0.22) 0%, transparent 70%)",
          bottom: "10%",
          right: "2%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: "700",
          color: "#fff",
          margin: "0 0 16px 0",
          letterSpacing: "-0.02em",
          position: "relative",
          zIndex: 1,
        }}
      >
        Let's Build Something Great
      </h2>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? "0.9rem" : "1rem",
          color: "rgba(255,255,255,0.50)",
          maxWidth: "480px",
          margin: "0 auto 36px",
          lineHeight: 1.75,
          position: "relative",
          zIndex: 1,
        }}
      >
        Open to new opportunities, collaborations and meaningful projects. Let's build something
        impactful together.
      </p>

      {/* Contact buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "10px" : "16px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
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
              gap: "8px",
              padding: isMobile ? "10px 18px" : "12px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? "0.85rem" : "0.95rem",
              fontWeight: "500",
              color: "#fff",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.22), 0 8px 24px rgba(0,0,0,0.25)",
              transition: "background 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.14)";
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={c.icon}
              alt={c.label}
              style={{
                width: isMobile ? "18px" : "22px",
                height: isMobile ? "18px" : "22px",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}
