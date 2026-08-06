"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Sub-Page Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="breadcrumbs">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">ABOUT US</span>
          </div>
          <h1 className="page-hero-title">OUR LEGACY &amp; <span className="gold-text">ENGINEERING</span></h1>
          <p className="page-hero-sub">
            Built on a foundation of structural integrity, modern architectural engineering, and transparent client partnerships.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="about-section">
        <div className="section-container about-container">
          <div className="about-content">
            <div className="label-container">
              <span className="section-label">WHO WE ARE</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">ENGINEERING EXCELLENCE SINCE 2009</h2>
            <p className="about-description" style={{ marginBottom: "20px" }}>
              Dharshanskyline Contracting was established with a singular objective: to raise the standard of civil construction, residential design, and commercial infrastructure in South India.
            </p>
            <p className="about-description" style={{ marginBottom: "30px" }}>
              Our team consists of senior civil engineers, project managers, safety inspectors, and skilled craftsmen who collaborate to transform complex blueprints into enduring architectural monuments.
            </p>
            
            <div className="label-container" style={{ marginTop: "30px" }}>
              <span className="section-label">CORE PILLARS</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ borderLeft: "2px solid var(--accent-gold)", paddingLeft: "16px" }}>
                <h4 style={{ fontSize: "0.9rem", color: "var(--accent-gold)", marginBottom: "6px" }}>UNCOMPROMISING SAFETY</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Rigorous site protocols guaranteeing zero-accident work environments.</p>
              </div>
              <div style={{ borderLeft: "2px solid var(--accent-gold)", paddingLeft: "16px" }}>
                <h4 style={{ fontSize: "0.9rem", color: "var(--accent-gold)", marginBottom: "6px" }}>ON-TIME HANDOVER</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Streamlined milestone schedules keeping project delivery on track.</p>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <Image 
              src="/images/about_detail.png" 
              alt="Dharshanskyline Craftsmanship" 
              width={600}
              height={520}
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="section-container">
          <div className="label-container">
            <span className="section-label">THE TEAM</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">LEADERSHIP &amp; ENGINEERING HEADS</h2>

          <div className="team-grid">
            <div className="team-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="card-title">DHARSHAN SHARMA</h3>
              <div className="card-subtitle">FOUNDER &amp; MANAGING DIRECTOR</div>
              <p className="card-desc">Over 20 years of experience leading major commercial and residential civil developments across the region.</p>
            </div>

            <div className="team-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h3 className="card-title">ER. S. RAGHAVAN</h3>
              <div className="card-subtitle">CHIEF STRUCTURAL ENGINEER</div>
              <p className="card-desc">Specializes in high-rise RCC framing, industrial steel trussing, and seismic-resistant structural calculations.</p>
            </div>

            <div className="team-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3 className="card-title">K. PRAVEEN KUMAR</h3>
              <div className="card-subtitle">HEAD OF PROJECT PLANNING</div>
              <p className="card-desc">Manages material logistics, subcontractor coordination, and strict timeline adherence on all site developments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Fleet Showcase */}
      <section>
        <div className="section-container">
          <div className="label-container">
            <span className="section-label">INFRASTRUCTURE</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">MACHINERY &amp; EQUIPMENT FLEET</h2>

          <div className="fleet-grid">
            <div className="fleet-card">
              <h3 className="card-title">TOWER &amp; MOBILE CRANES</h3>
              <div className="card-subtitle">HEAVY LIFTING</div>
              <p className="card-desc">In-house capacity for high-tonnage material handling and high-rise structural assembly.</p>
            </div>

            <div className="fleet-card">
              <h3 className="card-title">AUTOMATED CONCRETE BATCHING</h3>
              <p className="card-title" style={{ fontSize: "0.75rem", color: "var(--accent-gold)", margin: "4px 0 10px" }}>PRECISION MIXING</p>
              <p className="card-desc">Guarantees high grade compressive strength concrete mixes directly delivered on site.</p>
            </div>

            <div className="fleet-card">
              <h3 className="card-title">TOTAL STATION &amp; 3D LASER</h3>
              <div className="card-subtitle">SURVEY &amp; LAYOUT</div>
              <p className="card-desc">Sub-millimeter accuracy for foundation mapping and architectural alignment.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
