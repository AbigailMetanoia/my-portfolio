import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import PageTransition from "./components/PageTransition";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/Projectdetailpage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";
  const [isLoading, setIsLoading] = useState(true);

  // Loading screen hanya muncul sekali saat pertama kali buka website
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Scroll ke atas setiap pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ background: "#0E0E0E", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <LoadingScreen isLoading={isLoading} />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectDetailPage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      {!hideFooter && <Footer />}
    </div>
  );
}
