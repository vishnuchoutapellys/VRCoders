import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/vr-coders-logo.webp";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <img className="brand-logo" src={logo} alt="VR Coders Consulting" />
          </Link>

          <a className="footer-contact-link" href="tel:+919014249898"><Phone size={15} /> +91 90142 49898</a>
          <p className="footer-address"><MapPin size={15} />403, Padmavathi Residency Block-A<br />Lahari Green Park<br />Hyderabad - 500089</p>
        </div>
        <div className="footer-links">
          <p className="footer-label">Explore Links</p>
          <Link to="/#services">Services <ArrowUpRight size={13} /></Link>
          <Link to="/#technologies">Technologies <ArrowUpRight size={13} /></Link>
          <Link to="/#work">Our Work <ArrowUpRight size={13} /></Link>
          <Link to="/#about">About <ArrowUpRight size={13} /></Link>
          <Link to="/contact">Contact <ArrowUpRight size={13} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 VR Coders Consulting. All Rights Reserved.</span>
        <span>Built for what’s next.</span>
      </div>
    </footer>
  );
}
