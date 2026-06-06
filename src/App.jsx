import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#1A1A1A",
        minHeight: "100vh",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}