import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-heading">
          <Link className="back-link" to="/"><ArrowLeft size={15} /> Back to home</Link>
          <p className="eyebrow">Let’s make the next move</p>
          <h1>Tell us what<br /><span>you’re building.</span></h1>
          <p className="section-description">Share a little about your project or challenge. We’ll take it from there.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Talk to our team</p>
            <h2>Good conversations<br />start with a hello.</h2>
            <a className="contact-detail" href="tel:+919014249898"><span><Phone size={17} /></span><div><small>Call us</small><strong>+91 90142 49898</strong></div></a>
            <div className="contact-detail"><span><MapPin size={17} /></span><div><small>Visit us</small><strong>Padmavathi Residency,<br />Near 2nd Circle, <br />Lahari Green Park,<br />Hyderabad - 500089.</strong></div></div>

            <div className="contact-aside-note"><span className="live-dot" />Based in Hyderabad. Ready to work wherever you are.</div>
          </div>
          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
