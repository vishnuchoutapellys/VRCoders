import { CheckCircle2, MessageCircle } from "lucide-react";
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
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const budget = form.elements.namedItem("budget");
    const budgetLabel = budget instanceof HTMLSelectElement
      ? budget.selectedOptions[0]?.textContent?.trim()
      : "";
    const message = [
      "New project enquiry — VR Coders Consulting",
      "",
      `Name: ${values.get("name")}`,
      `Company: ${values.get("company") || "Not provided"}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone") || "Not provided"}`,
      `Project type: ${values.get("projectType")}`,
      `Budget: ${budgetLabel || "Not specified"}`,
      "",
      "Project details:",
      String(values.get("message") || ""),
    ].join("\n");

    setWhatsappUrl(`https://wa.me/919014249898?text=${encodeURIComponent(message)}`);
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} hidden={Boolean(whatsappUrl)}>
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
        <p className="form-note">Submitting opens WhatsApp with your details prefilled. Review the message and press Send there to complete your enquiry. Required fields are marked with an asterisk.</p>
        <button className="button form-submit" type="submit">Continue to WhatsApp <MessageCircle size={16} aria-hidden="true" /></button>
      </form>
      {whatsappUrl && (
        <div className="form-success" role="status" aria-live="polite">
          <CheckCircle2 size={38} aria-hidden="true" />
          <h2>Your enquiry is ready.</h2>
          <p>Thanks for reaching out. Your details are prepared—continue to WhatsApp to review your message and press Send to complete your enquiry.</p>
          <a className="button form-submit" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Open WhatsApp to Send <MessageCircle size={16} aria-hidden="true" />
          </a>
          <button className="text-link" type="button" onClick={() => setWhatsappUrl("")}>Edit your details</button>
        </div>
      )}
    </>
  );
}
