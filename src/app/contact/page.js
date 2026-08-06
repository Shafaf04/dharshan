"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main>
      {/* Sub-Page Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="breadcrumbs">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">CONTACT US</span>
          </div>
          <h1 className="page-hero-title">GET IN <span className="gold-text">TOUCH</span></h1>
          <p className="page-hero-sub">
            Schedule a technical site consultation or inquire about your upcoming civil construction project.
          </p>
        </div>
      </section>

      {/* Direct Contact Form & Office Info */}
      <section className="contact-section" style={{ paddingTop: "60px" }}>
        <div className="section-container">
          <div className="label-container">
            <span className="section-label">INQUIRY FORM</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">SCHEDULE A TECHNICAL SITE CONSULTATION</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px" }}>
            <div>
              {formSubmitted ? (
                <div style={{ padding: "40px", border: "1px solid var(--accent-gold)", backgroundColor: "rgba(201, 168, 106, 0.08)", textTransform: "uppercase", textAlign: "center" }}>
                  <h3 style={{ color: "var(--accent-gold)", marginBottom: "10px" }}>Thank You!</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    Your project inquiry has been received. Our senior civil engineer will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Project Details / Site Location</label>
                    <textarea className="form-control" rows="4" placeholder="Mention plot size, location, planned scope, etc."></textarea>
                  </div>
                  <button type="submit" className="btn btn-filled" style={{ marginTop: "10px" }}>
                    SUBMIT PROJECT INQUIRY &rarr;
                  </button>
                </form>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div style={{ background: "var(--bg-card)", padding: "30px", border: "1px solid var(--border-color)", borderRadius: "12px", boxShadow: "var(--shadow-sm)" }}>
                <h3 className="card-title">HEADQUARTERS OFFICE</h3>
                <p className="card-desc" style={{ marginTop: "8px" }}>
                  DharshanSkyline Contracting Tower,<br />
                  100 Feet Road, Gandhipuram,<br />
                  Coimbatore, Tamil Nadu - 641012
                </p>
              </div>

              <div style={{ background: "var(--bg-card)", padding: "30px", border: "1px solid var(--border-color)", borderRadius: "12px", boxShadow: "var(--shadow-sm)" }}>
                <h3 className="card-title">DIRECT CONTACT</h3>
                <p className="card-desc" style={{ marginTop: "8px" }}>
                  <strong>Phone:</strong> +91 12345 67890 / +91 98765 43210<br />
                  <strong>Email:</strong> dharshanskycon@gmail.com<br />
                  <strong>Hours:</strong> Mon - Sat: 9:00 AM - 6:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
