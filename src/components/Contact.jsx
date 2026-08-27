import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import "./Contact.css";

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const sub = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${sub}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to connect? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-heading">Let's work together</h3>
            <p className="contact-text">
              Open to collaborations, internships, or just a good conversation about
              algorithms or web dev. Drop me a message anytime.
            </p>

            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`} className="contact-detail-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">{personalInfo.email}</div>
                </div>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="contact-detail-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value">{personalInfo.phone}</div>
                </div>
              </a>
              <div className="contact-detail-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-value">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            {sent && (
              <div className="form-success">
                ✅ Email client opened! Message ready to send.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="John Doe"
                value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" placeholder="john@example.com"
                value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5}
                placeholder="Tell me about your project or just say hi!"
                value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              ✉️ Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
