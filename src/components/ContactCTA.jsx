import iconLinkedIn from "../assets/skill-icons_linkedin.png";
import iconGmail from "../assets/gmail.png";
import iconWhatsapp from "../assets/logos_whatsapp-icon.png";

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abigail-metanoia-melody-09bb99219/",
    icon: iconLinkedIn,
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/6281994055237",
    icon: iconWhatsapp,
  },
  {
    label: "Gmail",
    href: "mailto:abigailmetanoia17@gmail.com",
    icon: iconGmail,
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        padding: "100px 24px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          width: "360px",
          height: "360px",
          background: "radial-gradient(circle, rgba(30,120,255,0.30) 0%, transparent 70%)",
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
          width: "280px",
          height: "280px",
          background: "radial-gradient(circle, rgba(160,40,240,0.28) 0%, transparent 70%)",
          bottom: "10%",
          right: "2%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Gruppo', cursive",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: "700",
          color: "#fff",
          margin: "0 0 20px 0",
          letterSpacing: "-0.02em",
          position: "relative",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
          textShadow: "0px 4px 4px rgba(255,255,255,0.40)",
          zIndex: 1,
        }}
      >
        Let's Build Something Great !
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.05rem",
          color: "rgba(255, 255, 255, 0.54)",
          maxWidth: "520px",
          margin: "0 auto 48px",
          lineHeight: 1.75,
          position: "relative",
          zIndex: 1,
        }}
      >
        Open to new opportunities, collaborations and meaningful projects. Tap one of this button to
        reach me out!
      </p>

      {/* Contact buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
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
              gap: "10px",
              padding: "12px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              fontWeight: "500",
              color: "#fff",
              /* iOS glass */
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.22), " + "0 8px 24px rgba(0,0,0,0.25)",
              transition:
                "background 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.14)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow =
                "inset 0 1.5px 0 rgba(255,255,255,0.30), " + "0 16px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "inset 0 1.5px 0 rgba(255,255,255,0.22), " + "0 8px 24px rgba(0,0,0,0.25)";
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
    </section>
  );
}
