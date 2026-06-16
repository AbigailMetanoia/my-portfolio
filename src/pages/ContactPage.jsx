import amLogo from "../assets/AM_Vector.png";
import iconLinkedIn from "../assets/skill-icons_linkedin.png";
import iconGmail from "../assets/gmail.png";
import iconWhatsapp from "../assets/logos_whatsapp-icon.png";
import useIsMobile from "../hooks/Useismobile";

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
  const isMobile = useIsMobile();

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center" /* vertikal center di mobile */,
        padding: isMobile ? "100px 28px 60px" : "160px 72px 80px",
      }}
    >
      {/* Ambient glow kuning — bawah kiri */}
      <div
        style={{
          position: "absolute",
          width: isMobile ? "200px" : "300px",
          height: isMobile ? "200px" : "300px",
          background: "radial-gradient(circle, rgba(200,160,0,0.28) 0%, transparent 70%)",
          bottom: "20%",
          left: isMobile ? "5%" : "10%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* Ambient glow pink-ungu */}
      <div
        style={{
          position: "absolute",
          width: isMobile ? "180px" : "240px",
          height: isMobile ? "180px" : "240px",
          background: "radial-gradient(circle, rgba(160,40,220,0.28) 0%, transparent 70%)",
          bottom: "10%",
          right: isMobile ? "5%" : "28%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* AM Vector Logo — desktop & mobile, ukuran disesuaikan */}
      <div
        style={{
          position: "fixed",
          right: isMobile ? "-10%" : "0",
          bottom: isMobile ? "-5%" : "0",
          width: isMobile ? "100vw" : "52vw",
          maxWidth: isMobile ? "360px" : "600px",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
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
            opacity: isMobile ? 0.1 : 0.15,
            filter: "blur(0.6px)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: isMobile ? "100%" : "560px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Heading — bersih tanpa stroke berlebihan */}
        <h1
          style={{
            fontFamily: isMobile ? "'Inter', sans-serif" : "'Gruppo', cursive",
            fontSize: isMobile ? "2.4rem" : "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: "700",
            color: "#fff",
            margin: "0 0 16px 0",
            letterSpacing: isMobile ? "-0.03em" : "-0.02em",
            lineHeight: 1.1,
            /* Hanya desktop yang pakai stroke effect */
            ...(isMobile
              ? {}
              : {
                  WebkitTextStroke: "1px rgba(255,255,255,0.7)",
                  textShadow: "0px 2px 8px rgba(255,255,255,0.15)",
                }),
          }}
        >
          Get in Touch!
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "0.92rem" : "1rem",
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            margin: "0 0 36px 0",
          }}
        >
          Let's be friends, hit me out on the social media through the links below 👇
        </p>

        {/* Contact buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "12px" : "14px",
            alignItems: "center",
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
                padding: isMobile ? "13px 24px" : "12px 24px",
                width: isMobile ? "80vw" : "auto",
                maxWidth: isMobile ? "280px" : "none",
                justifyContent: "center",
                borderRadius: "50px",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.92rem" : "0.95rem",
                fontWeight: "500",
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.22), 0 8px 24px rgba(0,0,0,0.25)",
                transition:
                  "background 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "inset 0 1.5px 0 rgba(255,255,255,0.30), 0 16px 40px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
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
