import { motion, AnimatePresence } from "framer-motion";
import amLogo from "../assets/AM_Logo.png";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0E0E0E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            src={amLogo}
            alt="AM Logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ width: "90px", height: "auto" }}
          />

          {/* Subtle pulse glow di belakang logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, rgba(124,92,252,0.4) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
