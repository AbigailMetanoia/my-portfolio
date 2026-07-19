import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useLottie } from "lottie-react";

/* Komponen kecil khusus supaya hook useLottie cuma dipanggil setelah
   data animasi siap (mengikuti Rules of Hooks: komponen ini sendiri
   yang di-mount belakangan, bukan hook-nya yang dipanggil kondisional). */
// function GradientBackground({ data }) {
//   const { View } = useLottie(
//     {
//       animationData: data,
//       loop: true,
//       autoplay: true,
//       rendererSettings: {
//         // "slice" = perilaku seperti CSS object-fit: cover — animasi memenuhi
//         // seluruh kontainer tanpa area kosong, walau sedikit ter-crop di pinggir.
//         preserveAspectRatio: "xMidYMid slice",
//       },
//     },
//     { width: "100%", height: "100%" },
//   );
//   return View;
// }

const skills = ["User research", "Product design", "Prototyping", "Design systems"];

export default function Hero() {
  const navigate = useNavigate();
  const [gradientScene, setGradientScene] = useState(null);

  useEffect(() => {
    fetch("/Scene.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Gagal fetch Scene.json — status ${res.status}`);
        return res.json();
      })
      .then(setGradientScene)
      .catch((err) => console.error("[Hero] Gagal load animasi gradasi:", err));
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate("/projects");
  };

  return (
    <div style={{ background: "#0E0E0E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;1,500&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* ── HERO — penuh 1 layar (100vh), supaya "My Recent Projects" tidak
          ikut kelihatan tanpa scroll. Gradasi & fade HANYA di dalam wrapper
          ini, tidak bocor ke ticker skill di bawahnya. ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Background — animasi gradasi */}
        {gradientScene && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              opacity: 0.55,
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
          >
            {/* <GradientBackground data={gradientScene} /> */}
          </div>
        )}

        {/* Fade tunggal di bagian bawah — meluruhkan gradasi ke hitam
            sebelum masuk ke ticker/section berikutnya. Cuma satu lapis,
            supaya tidak terlalu gelap. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "200px",
            zIndex: 1,
            background: "linear-gradient(to bottom, transparent 0%, #0E0E0E 100%)",
            pointerEvents: "none",
          }}
        />

        {/* ── HERO CONTENT ── */}
        <section
          style={{
            padding: "var(--navbar-safe-top) 48px 0",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: "500",
              fontSize: "clamp(2.4rem, 6.5vw, 5.4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#fff",
              margin: "0 0 28px 0",
              maxWidth: "1000px",
            }}
          >
            Designer. Thinker.
            <br />
            who removes{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "#C4B0FF",
                position: "relative",
                display: "inline-block",
                paddingBottom: "4px",
                borderBottom: "2px solid rgba(124,92,252,0.5)",
              }}
            >
              friction.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              color: "rgba(255,255,255,0.50)",
              letterSpacing: "0.01em",
              margin: "0 0 40px 0",
            }}
          >
            UI/UX Designer · Information Technology background · User Research · Problem Solving
          </p>

          <button
            onClick={scrollToWork}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#7C5CFC",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "14px 28px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "600",
              fontSize: "0.92rem",
              cursor: "pointer",
              transition: "transform 0.15s ease, background 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.background = "#6A4CE0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#7C5CFC";
            }}
          >
            See the work ↓
          </button>
        </section>

        {/* ── SKILL TICKER — di dalam wrapper 100vh juga (biar nempel di
            bawah hero), tapi background-nya solid hitam sendiri, TIDAK
            kena gradasi/fade di atas. Makanya tetap kontras & gampang dibaca. ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            background: "#0E0E0E",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "18px 0",
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "48px",
              animation: "tickerScroll 26s linear infinite",
            }}
          >
            {[...skills, ...skills, ...skills].map((label, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "48px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {label}
                <span style={{ color: "rgba(124,92,252,0.6)", fontSize: "0.6rem" }}>●</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
