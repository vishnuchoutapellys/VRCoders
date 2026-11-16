import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  }, [pathname, hash, reduceMotion]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main className="min-h-screen bg-ink text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
