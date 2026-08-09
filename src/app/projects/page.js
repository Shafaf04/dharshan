"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    category: "framing",
    title: "SOBHA REALTY - TOWER STRUCTURAL FRAMING",
    client: "Sobha Realty",
    location: "Sobha Hartland, Dubai, UAE",
    image: "/images/sobha/sobha-1.jpg",
    description: "High-strength RCC structural framing, load-bearing slab execution, and core tower construction completed under strict safety and quality protocols.",
    specs: ["RCC Frame Construction", "High-Grade Concrete", "Formwork Precision"]
  },
  {
    id: 2,
    category: "elevation",
    title: "SOBHA REALTY - HIGH-RISE ELEVATION WORK",
    client: "Sobha Realty",
    location: "Meydan, Dubai, UAE",
    image: "/images/sobha/sobha-2.jpg",
    description: "Extensive exterior elevation scaffolding, structural blockwork, and exterior masonry finishing executed for luxury residential towers.",
    specs: ["Exterior Blockwork", "Facade Scaffolding", "Quality QA/QC Certified"]
  },
  {
    id: 3,
    category: "masonry",
    title: "SOBHA REALTY - ARCHITECTURAL MASONRY & FINISHES",
    client: "Sobha Realty",
    location: "Sobha Hartland, Dubai, UAE",
    image: "/images/sobha/sobha-3.jpg",
    description: "Precision architectural brickwork, structural beam reinforcement, and multi-story masonry detailing built for long-term durability.",
    specs: ["Precision Masonry", "Structural Reinforcement", "On-Time Handover"]
  },
  {
    id: 4,
    category: "turnkey",
    title: "SOBHA REALTY - TURNKEY SITE CONTRACTING",
    client: "Sobha Realty",
    location: "Dubai, UAE",
    image: "/images/sobha/sobha-4.jpg",
    description: "Full-scale site contracting supervision, material safety management, and structural execution for premier Sobha Realty developments.",
    specs: ["Turnkey Contracting", "Zero Safety Incidents", "Turnkey Supervision"]
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const animObserverRef = useRef(null);

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in-up");
    
    animObserverRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => animObserverRef.current.observe(element));

    return () => {
      if (animObserverRef.current) animObserverRef.current.disconnect();
    };
  }, [activeFilter]);

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <main style={{ paddingTop: "100px" }}>
      {/* Header Banner */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)", padding: "80px 6% 60px" }}>
        <div className="section-container">
          <div className="label-container fade-in-up">
            <span className="section-label">SOBHA REALTY PORTFOLIO</span>
            <span className="label-line"></span>
          </div>
          <h1 className="section-title fade-in-up" style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            OFFICIAL <span className="gold-text">SOBHA REALTY CONTRACTING WORK</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "800px" }} className="fade-in-up">
            Browse our landmark structural contracting projects executed for <strong style={{ color: "var(--accent-gold)" }}>Sobha Realty</strong> across Dubai &amp; the GCC, showcasing premier high-rise RCC framing, exterior elevation work, architectural masonry, and turnkey site execution.
          </p>

          {/* Filter Bar */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "40px" }} className="fade-in-up">
            {[
              { id: "all", label: "ALL SOBHA WORK" },
              { id: "framing", label: "STRUCTURAL FRAMING" },
              { id: "elevation", label: "HIGH-RISE ELEVATIONS" },
              { id: "masonry", label: "MASONRY & FINISHES" },
              { id: "turnkey", label: "TURNKEY CONTRACTING" },
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`btn ${activeFilter === btn.id ? "btn-filled" : "btn-outline"}`}
                style={{
                  padding: "10px 22px",
                  fontSize: "0.7rem",
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sobha Realty Spotlight Banner */}
      <section style={{ padding: "60px 6% 40px", backgroundColor: "var(--bg-primary)" }}>
          <div className="section-container">
            <div style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "16px",
              boxShadow: "var(--shadow-sm)",
              border: "1px solid var(--border-color)",
              padding: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px"
            }} className="fade-in-up">
              <div style={{ maxWidth: "750px" }}>
                <span className="project-tag" style={{ fontSize: "0.75rem", marginBottom: "8px" }}>FEATURED CLIENT CONTRACTOR</span>
                <h2 style={{ fontSize: "1.6rem", letterSpacing: "0.08em", marginBottom: "12px", textTransform: "none" }}>
                  Contracting Work for <span className="gold-serif">Sobha Realty</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Dharshanskyline Contracting takes immense pride in delivering high-specification structural concrete work, blockwork masonry, and exterior tower elevations for Sobha Realty projects.
                </p>
              </div>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <span className="btn btn-filled" style={{ padding: "12px 24px", fontSize: "0.7rem", fontWeight: "bold" }}>
                  OFFICIAL CONTRACTOR WORK
                </span>
              </div>
            </div>
          </div>
        </section>

      {/* Projects Grid */}
      <section style={{ padding: "40px 6% 120px" }}>
        <div className="section-container">
          <div className="projects-grid fade-in-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "30px" }}>
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card" 
                style={{ 
                  backgroundColor: "var(--bg-card)", 
                  border: "1px solid var(--border-color)",
                  borderRadius: "12px",
                  boxShadow: "var(--shadow-sm)",
                  aspectRatio: "4 / 4.5",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-container">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="project-img" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                  <div className="project-hover-overlay" style={{ opacity: 1, background: "linear-gradient(0deg, rgba(14, 14, 14, 0.95) 0%, rgba(14, 14, 14, 0.2) 60%)" }}>
                    <div className="project-details" style={{ transform: "translateY(0)" }}>
                      <span className="project-tag">{project.client}</span>
                      <h3 className="project-card-title" style={{ fontSize: "0.95rem", marginBottom: "8px" }}>{project.title}</h3>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                        📍 {project.location}
                      </p>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {project.specs.slice(0, 2).map((spec, i) => (
                          <span key={i} style={{ fontSize: "0.6rem", padding: "4px 8px", backgroundColor: "rgba(201, 168, 106, 0.15)", border: "1px solid var(--border-color)", color: "var(--accent-gold)" }}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Details Modal */}
      {selectedProject && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(10px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              position: "relative",
              maxWidth: "960px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              backgroundColor: "var(--bg-primary)",
              border: "1px solid var(--border-color-hover)",
              padding: "30px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.9)"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "var(--accent-gold)",
                fontSize: "1.6rem",
                cursor: "pointer",
                zIndex: 10
              }}
              aria-label="Close project modal"
            >
              ✕
            </button>

            <div style={{ position: "relative", width: "100%", height: "450px", marginBottom: "24px" }}>
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                fill 
                style={{ objectFit: "contain" }} 
              />
            </div>

            <div>
              <span className="project-tag" style={{ fontSize: "0.8rem", marginBottom: "6px" }}>
                CLIENT: {selectedProject.client}
              </span>
              <h2 style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "12px", letterSpacing: "0.05em" }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
                {selectedProject.description}
              </p>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.15em", marginBottom: "8px" }}>KEY HIGHLIGHTS</div>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {selectedProject.specs.map((spec, i) => (
                      <span key={i} style={{ fontSize: "0.75rem", padding: "6px 12px", backgroundColor: "rgba(201, 168, 106, 0.1)", border: "1px solid var(--border-color)", color: "var(--accent-gold)" }}>
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn btn-gold btn-outline" style={{ fontSize: "0.7rem" }} onClick={() => setSelectedProject(null)}>
                  INQUIRE SIMILAR PROJECT
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <section className="cta-banner" style={{ textAlign: "center", backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="section-container fade-in-up">
          <h2 className="section-title">HAVE A PROJECT IN MIND?</h2>
          <p className="hero-description" style={{ margin: "0 auto 30px", maxWidth: "650px" }}>
            Partner with Dharshanskyline Contracting for world-class structural execution, quality control, and timely delivery.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-gold btn-outline">REQUEST TECHNICAL CONSULTATION</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
