import iconLinkedIn from "../assets/skill-icons_linkedin.png";
import iconGmail from "../assets/gmail.png";
import useIsMobile from "../hooks/Useismobile";

/* ─────────────────────────────────────────────
   Buttons:
   - "Drop an email"  → solid accent pill (primary action)
   - "Download resume" → outline pill, update the href below
   - "LinkedIn"        → outline pill, external link
   Update hrefs as needed. Icons are gone in favor of
   plain text + arrow glyphs, matching the reference's
   cleaner look.
───────────────────────────────────────────── */

const RESUME_HREF = "/resume.pdf"; // ← update this path to your actual resume file
const LINKEDIN_HREF = "https://www.linkedin.com/in/abigail-metanoia-melody-09bb99219/";
const EMAIL_HREF = "mailto:abigailmetanoia17@gmail.com";

export default function ContactCTA() {
  const isMobile = useIsMobile();

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "60px 20px 60px" : "110px 48px 90px",
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
          background: "radial-gradient(circle, rgba(30,120,255,0.20) 0%, transparent 70%)",
          top: "10%",
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
          background: "radial-gradient(circle, rgba(124,92,252,0.20) 0%, transparent 70%)",
          bottom: "10%",
          right: "2%",
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      <div style={{ maxWidth: "980px", position: "relative", zIndex: 1 }}>
        {/* Small caption */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "0.82rem" : "0.9rem",
            color: "rgba(255,255,255,0.35)",
            margin: "0 0 20px 0",
            letterSpacing: "0.02em",
          }}
        >
          Currently procrastinating on this exact section.
        </p>

        {/* Bold statement headline, one word ghosted */}
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: "500",
            fontSize: isMobile ? "2rem" : "clamp(2.2rem, 5.5vw, 4.4rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            color: "#fff",
            margin: "0 0 48px 0",
          }}
        >
          You've seen the work.
          <br />
          Now here's the <span style={{ color: "rgba(255,255,255,0.12)" }}>awkward</span>
          <br />
          reaching-out part.
        </h2>

        {/* Button row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? "10px" : "14px",
          }}
        >
          <a
            // href={EMAIL_HREF}
            // style={{ ...pillBase, background: "#7c5cfc1f", color: "#fff", border: "none" }}
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.background = "#6A4CE0";
            //   e.currentTarget.style.transform = "scale(1.04)";
            // }}
            // onMouseLeave={(e) => {
            //   e.currentTarget.style.background = "#7C5CFC";
            //   e.currentTarget.style.transform = "scale(1)";
            // }}
            href={EMAIL_HREF}
            download
            style={{ ...pillBase, ...pillOutline }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
          >
            <img
              src={iconGmail}
              alt=""
              style={{ width: "20px", height: "20px", objectFit: "contain", flexShrink: 0 }}
            />
            Drop an email
          </a>

          <a
            href={RESUME_HREF}
            download
            style={{ ...pillBase, ...pillOutline }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
          >
            Download resume ↓
          </a>

          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noreferrer"
            style={{ ...pillBase, ...pillOutline }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
          >
            <img
              src={iconLinkedIn}
              alt=""
              style={{ width: "20px", height: "20px", objectFit: "contain", flexShrink: 0 }}
            />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

const pillBase = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "14px 26px",
  borderRadius: "50px",
  textDecoration: "none",
  fontFamily: "'Inter', sans-serif",
  fontWeight: "600",
  fontSize: "0.92rem",
  cursor: "pointer",
  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
};

const pillOutline = {
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.18)",
};
