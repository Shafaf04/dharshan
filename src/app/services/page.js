"use client";

import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What types of construction projects do you handle?",
      a: "We handle turnkey residential villas, high-rise apartments, commercial office spaces, industrial warehouses, factories, and renovation projects."
    },
    {
      q: "Do you offer structural design and plan approvals?",
      a: "Yes, our in-house engineering team handles structural calculations, 3D architectural renders, government authority approvals, and soil testing."
    },
    {
      q: "How do you manage project timelines and prevent cost overruns?",
      a: "We provide itemized BOQ (Bill of Quantities) contracts with fixed milestone deadlines and transparent weekly progress reporting."
    },
    {
      q: "What quality assurance standards do you follow?",
      a: "We follow IS code standards for steel and concrete testing, water-proofing certifications, and 50+ point pre-handover audit checklists."
    }
  ];

  return (
    <main>
      {/* Sub-Page Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="breadcrumbs">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">SERVICES</span>
          </div>
          <h1 className="page-hero-title">STRUCTURAL CONTRACTING <span className="gold-text">SERVICES</span></h1>
          <p className="page-hero-sub">
            High-specification civil engineering, high-rise RCC framing, elevation blockwork, and turnkey site contracting for Sobha Realty developments.
          </p>
        </div>
      </section>

      {/* Deep-Dive Services */}
      <section>
        <div className="section-container">
          <div className="services-grid" style={{ marginBottom: "60px" }}>
            <div className="service-card" style={{ borderRight: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "40px" }}>
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="service-card-title" style={{ fontSize: "1.4rem", marginBottom: "15px" }}>TOWER RCC STRUCTURAL FRAMING</h3>
              <p className="service-card-description" style={{ marginBottom: "20px" }}>
                High-strength concrete structural framing, core load-bearing slabs, and column execution for Sobha Realty high-rise towers.
              </p>
              <ul style={{ listStyle: "square", color: "var(--accent-gold)", paddingLeft: "20px", fontSize: "0.85rem" }}>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Heavy Reinforced Rebar &amp; Formwork Precision</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>High-Grade Compressive Strength Concrete</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Multi-Story Load-Bearing Slab Casting</span></li>
              </ul>
            </div>

            <div className="service-card" style={{ borderBottom: "1px solid var(--border-color)", padding: "40px" }}>
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="16"></line>
                  <line x1="15" y1="22" x2="15" y2="16"></line>
                  <line x1="9" y1="16" x2="15" y2="16"></line>
                </svg>
              </div>
              <h3 className="service-card-title" style={{ fontSize: "1.4rem", marginBottom: "15px" }}>HIGH-RISE ELEVATIONS &amp; BLOCKWORK</h3>
              <p className="service-card-description" style={{ marginBottom: "20px" }}>
                Extensive exterior elevation scaffolding, structural blockwork, and facade perimeter masonry executed for luxury residential towers.
              </p>
              <ul style={{ listStyle: "square", color: "var(--accent-gold)", paddingLeft: "20px", fontSize: "0.85rem" }}>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>High-Elevation Facade Scaffolding</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Thermal &amp; Acoustic Blockwork Masonry</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Quality Assurance Pre-Plaster Inspections</span></li>
              </ul>
            </div>

            <div className="service-card" style={{ borderRight: "1px solid var(--border-color)", padding: "40px" }}>
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20V4h8l2 4h10v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 className="service-card-title" style={{ fontSize: "1.4rem", marginBottom: "15px" }}>ARCHITECTURAL MASONRY</h3>
              <p className="service-card-description" style={{ marginBottom: "20px" }}>
                Precision brickwork, beam lintel reinforcement, and detailed architectural masonry built for high durability and aesthetic finish.
              </p>
              <ul style={{ listStyle: "square", color: "var(--accent-gold)", paddingLeft: "20px", fontSize: "0.85rem" }}>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Precision Wall Alignment &amp; Lintel Casting</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Structural Joint Moisture &amp; Crackproofing</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Strict Tolerance Architectural Detailing</span></li>
              </ul>
            </div>

            <div className="service-card" style={{ padding: "40px" }}>
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="service-card-title" style={{ fontSize: "1.4rem", marginBottom: "15px" }}>TURNKEY SITE SUPERVISION</h3>
              <p className="service-card-description" style={{ marginBottom: "20px" }}>
                On-site structural supervision, safety compliance auditing, material quality testing, and milestone delivery for Sobha projects.
              </p>
              <ul style={{ listStyle: "square", color: "var(--accent-gold)", paddingLeft: "20px", fontSize: "0.85rem" }}>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Zero Incident Safety Protocols</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Daily Work Progress &amp; QA Checklists</span></li>
                <li style={{ marginBottom: "8px" }}><span style={{ color: "var(--text-secondary)" }}>Material Strength &amp; Slump Test Audits</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Methodology / Workflow */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="section-container">
          <div className="label-container">
            <span className="section-label">THE PROCESS</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">HOW WE EXECUTE YOUR PROJECT</h2>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="card-title">CONSULTATION &amp; DESIGN</h3>
              <p className="card-desc">Understanding client objectives, preliminary soil tests, 3D architectural renders, and BOQ estimation.</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="card-title">PERMITS &amp; STRUCTURAL</h3>
              <p className="card-desc">Securing local authority sanctions, structural calculation sign-offs, and site mobilization.</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="card-title">CIVIL CONSTRUCTION</h3>
              <p className="card-desc">Foundation excavation, RCC superstructure framing, brickwork, and MEP conduit installation.</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="card-title">QUALITY AUDIT &amp; HANDOVER</h3>
              <p className="card-desc">Finishing fit-outs, waterproofing stress-tests, client walk-through inspection, and final keys handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section>
        <div className="section-container" style={{ maxWidth: "1000px" }}>
          <div className="label-container">
            <span className="section-label">FAQS</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div 
                  className="faq-question" 
                  style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--accent-gold)", fontSize: "1.2rem" }}>{activeFaq === idx ? "−" : "+"}</span>
                </div>
                {(activeFaq === idx || activeFaq === null) && (
                  <p className="faq-answer" style={{ marginTop: "10px" }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
