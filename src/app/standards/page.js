"use client";

import Link from "next/link";

export default function StandardsPage() {
  return (
    <main>
      {/* Sub-Page Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="breadcrumbs">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">STANDARDS &amp; SAFETY</span>
          </div>
          <h1 className="page-hero-title">QUALITY &amp; <span className="gold-text">SAFETY POLICY</span></h1>
          <p className="page-hero-sub">
            Our zero-accident workplace framework, ISO quality protocols, and sustainable construction practices.
          </p>
        </div>
      </section>

      {/* Safety & Quality Grid */}
      <section>
        <div className="section-container">
          <div className="standards-grid">
            <div className="standard-card">
              <div className="card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="card-title">ZERO-ACCIDENT POLICY</h3>
              <div className="card-subtitle">SITE SAFETY FIRST</div>
              <p className="card-desc">
                Mandatory PPE compliance, daily tool-box safety briefings, certified scaffolding inspections, and trained site first-responders at all project locations.
              </p>
            </div>

            <div className="standard-card">
              <div className="card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="card-title">ISO 9001:2015 COMPLIANCE</h3>
              <div className="card-subtitle">QUALITY ASSURANCE</div>
              <p className="card-desc">
                Standardized material testing for steel yield strength, concrete cube compressive strength, non-destructive ultrasonic testing, and waterproofing guarantees.
              </p>
            </div>

            <div className="standard-card">
              <div className="card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              </div>
              <h3 className="card-title">GREEN BUILDING INITIATIVES</h3>
              <div className="card-subtitle">SUSTAINABLE PRACTICE</div>
              <p className="card-desc">
                Integration of eco-friendly fly-ash bricks, rainwater harvesting systems, solar panel ready roof structures, and waste reduction protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Checkpoints Checklist */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="section-container">
          <div className="label-container">
            <span className="section-label">AUDIT PROTOCOLS</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">OUR 5-STAGE STRUCTURAL AUDIT</h2>

          <div className="process-grid">
            <div className="process-step">
              <h4 style={{ color: "var(--accent-gold)", marginBottom: "8px" }}>STAGE 1</h4>
              <h3 className="card-title" style={{ fontSize: "1rem" }}>SOIL &amp; FOUNDATION</h3>
              <p className="card-desc">Core sample soil bearing capacity testing and rebar tie inspection before concrete pouring.</p>
            </div>

            <div className="process-step">
              <h4 style={{ color: "var(--accent-gold)", marginBottom: "8px" }}>STAGE 2</h4>
              <h3 className="card-title" style={{ fontSize: "1rem" }}>RCC BEAM &amp; SLAB</h3>
              <p className="card-desc">Laser level checks, shuttering stability verification, and concrete cube sampling.</p>
            </div>

            <div className="process-step">
              <h4 style={{ color: "var(--accent-gold)", marginBottom: "8px" }}>STAGE 3</h4>
              <h3 className="card-title" style={{ fontSize: "1rem" }}>MEP CONDUIT AUDIT</h3>
              <p className="card-desc">Pressure testing electrical conduits, plumbing lines, and sewage gradient alignments.</p>
            </div>

            <div className="process-step">
              <h4 style={{ color: "var(--accent-gold)", marginBottom: "8px" }}>STAGE 4</h4>
              <h3 className="card-title" style={{ fontSize: "1rem" }}>WATERPROOFING</h3>
              <p className="card-desc">48-hour terrace and restroom water ponding stress tests prior to tile laying.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
