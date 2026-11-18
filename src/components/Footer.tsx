import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vr-coders-logo.webp";

const visitorCountEndpoint = "https://counterapi.com/api/vr-coders-consulting/view/website-visitors";
const visitorSessionKey = "vr-coders-visitor-counted";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    let alreadyCounted = false;

    try {
      alreadyCounted = window.sessionStorage.getItem(visitorSessionKey) === "true";
      if (!alreadyCounted) {
        // Set synchronously so StrictMode remounts and route changes cannot
        // increment the same browser session more than once.
        window.sessionStorage.setItem(visitorSessionKey, "true");
      }
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }

    const endpoint = new URL(visitorCountEndpoint);
    endpoint.searchParams.set("unique", "true");
    endpoint.searchParams.set("startNumber", "1000");
    if (alreadyCounted) endpoint.searchParams.set("readOnly", "true");

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw new Error("Visitor count request failed");
        return response.json() as Promise<{ value?: number | string }>;
      })
      .then((data) => {
        const count = Number(data.value);
        if (active && Number.isFinite(count) && count >= 0) setVisitorCount(count);
      })
      .catch(() => {
        if (!alreadyCounted) {
          try {
            window.sessionStorage.removeItem(visitorSessionKey);
          } catch {
            // Keep the footer usable when browser storage is restricted.
          }
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <img className="brand-logo" src={logo} alt="VR Coders Consulting" />
          </Link>

          <a className="footer-contact-link" href="tel:+919014249898"><Phone size={15} /> +91 90142 49898</a>
          <p className="footer-address"><MapPin size={15} />Padmavathi Residency,<br />Near 2nd Circle, <br />Lahari Green Park,<br />Hyderabad - 500089.</p>
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
        <span className="footer-meta">
          <span className="visitor-count" aria-live="polite" aria-label={visitorCount === null ? "Website visitor count loading" : `${visitorCount.toLocaleString()} website visitors`}>
            Visitors: {visitorCount === null ? "—" : visitorCount.toLocaleString()}
          </span>
          <span>Built for what’s next.</span>
        </span>
      </div>
    </footer>
  );
}
