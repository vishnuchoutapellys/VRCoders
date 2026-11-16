import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/vr-coders-logo.webp";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Technologies", href: "/#technologies" },
  { label: "Industries", href: "/#work" },
  { label: "Our Work", href: "/#work" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
    >
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="VR Coders Consulting home">
          <img className="brand-logo" src={logo} alt="VR Coders Consulting" />
        </Link>
        <div className="desktop-nav" style={{ marginLeft: "20%" }}>
          <Link to="/">Home</Link>
          {links.map((link) => <Link key={link.label} to={link.href}>{link.label}</Link>)}
          <Link to="/contact">Contact</Link>
        </div>
        <Link className="button button--small nav-cta" to="/contact">
          Start a Project <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            <Link to="/">Home</Link>
            {links.map((link) => <Link key={link.label} to={link.href}>{link.label}</Link>)}
            <Link to="/contact">Contact</Link>
            <Link className="button mobile-project-link" to="/contact">Start a Project <ArrowUpRight size={16} /></Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
