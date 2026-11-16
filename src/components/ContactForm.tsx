import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const projectTypes = [
  "Website",
  "Web Application",
  "Mobile App",
  "Custom Software",
  "AI Solution",
  "Cloud / DevOps",
  "QA / Testing",
  "Accessibility",
  "Maintenance / Support",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2 size={38} aria-hidden="true" />
        <h2>Thanks for reaching out.</h2>
        <p>Your message is ready. This demo form is not connected to an email or backend yet—please call us at <a href="tel:+919014249898">+91 90142 49898</a> to get in touch.</p>
        <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field">Name <span aria-hidden="true">*</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="form-field">Company
          <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
        </label>
        <label className="form-field">Email <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
        <label className="form-field">Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" />
        </label>
        <label className="form-field">Project type <span aria-hidden="true">*</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label className="form-field">Budget
          <select name="budget" defaultValue="">
            <option value="">Select a range (optional)</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k-plus">$50,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </label>
        <label className="form-field form-field--full">Tell us about your project <span aria-hidden="true">*</span>
          <textarea name="message" rows={5} placeholder="What are you looking to build, improve or solve?" required />
        </label>
      </div>
      <p className="form-note">Your details are only used to respond to your enquiry. Required fields are marked with an asterisk.</p>
      <button className="button form-submit" type="submit">Send project enquiry <Send size={16} aria-hidden="true" /></button>
    </form>
  );
}
