import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/Projectdetailpage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  return (
    <div style={{ background: "#0E0E0E", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}
