"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedStat from "@/components/AnimatedStat";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const animObserverRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll-triggered entrance animations
    const fadeElements = document.querySelectorAll(".fade-in-up, .fade-in-right");
    
    const animationOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    };
    
    animObserverRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, animationOptions);
    
    fadeElements.forEach(element => {
      animObserverRef.current.observe(element);
    });

    return () => {
      if (animObserverRef.current) animObserverRef.current.disconnect();
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="section-container hero-container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              BUILDING SPACES.<br />
              <span className="gold-text">CREATING</span> LEGACIES.
            </h1>
            <p className="hero-description">
              Dharshanskyline Contracting delivers quality construction with precision, integrity, and on-time commitment across South India.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-gold btn-outline">GET IN TOUCH</Link>
              <Link href="/services" className="btn btn-gold btn-outline" style={{ opacity: 0.8 }}>EXPLORE SERVICES</Link>
            </div>
          </div>
          <div className="hero-image-wrapper fade-in-right">
            <div className="image-overlay"></div>
            <Image 
              src="/images/hero_building.png" 
              alt="DharshanSkyline Modern Architecture" 
              width={800}
              height={600}
              className="hero-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* Key Company Statistics */}
      <section style={{ paddingTop: 0, paddingBottom: "60px" }}>
        <div className="section-container">
          <div className="stats-grid fade-in-up">
            <div className="stat-card">
              <AnimatedStat value={15} suffix="+" duration={2000} />
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <AnimatedStat value={120} suffix="+" duration={2200} />
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <AnimatedStat value={100} suffix="%" duration={2000} />
              <div className="stat-label">On-Time Handover</div>
            </div>
            <div className="stat-card">
              <AnimatedStat value={0} textValue="Zero" duration={1800} />
              <div className="stat-label">Safety Incidents</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section id="about" className="about-section">
        <div className="section-container about-container">
          <div className="about-content fade-in-up">
            <div className="label-container">
              <span className="section-label">ABOUT US</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">
              WE BUILD WITH PASSION<br />
              <span className="gold-text">AND PURPOSE.</span>
            </h2>
            <p className="about-description">
              At Dharshanskyline Contracting, we turn ideas into strong, functional, and timeless spaces. Whether residential, commercial, or industrial, our focus is on quality craftsmanship, structural safety, and client satisfaction.
            </p>
            <Link href="/about" className="btn btn-gold btn-outline">LEARN MORE ABOUT US</Link>
          </div>
          <div className="about-image-wrapper fade-in-up">
            <Image 
              src="/images/about_detail.png" 
              alt="Architectural Detail" 
              width={600}
              height={520}
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="services-section">
        <div className="section-container">
          <div className="label-container fade-in-up">
            <span className="section-label">WHAT WE DO</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title fade-in-up">OUR CORE SERVICES</h2>
          
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="service-card-title">RESIDENTIAL</h3>
              <p className="service-card-description">Custom luxury homes, apartments, and modern villas built around your lifestyle.</p>
            </div>
            
            {/* Service 2 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="16"></line>
                  <line x1="15" y1="22" x2="15" y2="16"></line>
                  <line x1="9" y1="16" x2="15" y2="16"></line>
                  <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01"></path>
                </svg>
              </div>
              <h3 className="service-card-title">COMMERCIAL</h3>
              <p className="service-card-description">Modern, functional corporate offices and retail spaces for growing businesses.</p>
            </div>

            {/* Service 3 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20V4h8l2 4h10v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                  <path d="M17 12h-6M14 9v6"></path>
                </svg>
              </div>
              <h3 className="service-card-title">INDUSTRIAL</h3>
              <p className="service-card-description">Durable, heavy-duty industrial facilities and warehouses built to last.</p>
            </div>

            {/* Service 4 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="service-card-title">CONSTRUCTION MANAGEMENT</h3>
              <p className="service-card-description">End-to-end turnkey project supervision, cost optimization, and quality assurance.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }} className="fade-in-up">
            <Link href="/services" className="btn btn-gold btn-outline">VIEW DETAILED SERVICES & PROCESS</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Sobha Realty */}
      <section id="projects" className="projects-section" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="section-container">
          <div className="label-container fade-in-up">
            <span className="section-label">FEATURED CLIENT WORK</span>
            <span className="label-line"></span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }} className="fade-in-up">
            <div>
              <h2 className="section-title" style={{ marginBottom: "12px" }}>
                CONTRACTING WORK FOR <span className="gold-text">SOBHA REALTY</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "700px" }}>
                High-precision structural construction, elevation execution, and premium turnkey contracting delivered for Sobha Realty developments.
              </p>
            </div>
            <Link href="/projects" className="btn btn-gold btn-outline">EXPLORE ALL PROJECTS</Link>
          </div>

          <div className="projects-grid fade-in-up" style={{ marginBottom: "40px" }}>
            {/* Project Card 1 */}
            <div className="project-card" style={{ cursor: "pointer" }} onClick={() => setSelectedImage({ src: "/images/sobha/sobha-1.jpg", title: "Sobha Tower - Structural Framing", client: "Sobha Realty" })}>
              <div className="project-image-container">
                <Image src="/images/sobha/sobha-1.jpg" alt="Sobha Realty Structural Contracting" fill className="project-img" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="project-hover-overlay">
                  <div className="project-details">
                    <span className="project-tag">SOBHA REALTY</span>
                    <h3 className="project-card-title">STRUCTURAL TOWER FRAMING</h3>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>Click to view details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card" style={{ cursor: "pointer" }} onClick={() => setSelectedImage({ src: "/images/sobha/sobha-2.jpg", title: "Sobha Heights - Structural Elevation", client: "Sobha Realty" })}>
              <div className="project-image-container">
                <Image src="/images/sobha/sobha-2.jpg" alt="Sobha Heights Structural Elevation" fill className="project-img" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="project-hover-overlay">
                  <div className="project-details">
                    <span className="project-tag">SOBHA REALTY</span>
                    <h3 className="project-card-title">HIGH-RISE ELEVATION WORK</h3>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>Click to view details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card" style={{ cursor: "pointer" }} onClick={() => setSelectedImage({ src: "/images/sobha/sobha-3.jpg", title: "Sobha Residency - Architectural Execution", client: "Sobha Realty" })}>
              <div className="project-image-container">
                <Image src="/images/sobha/sobha-3.jpg" alt="Sobha Residency Architectural Execution" fill className="project-img" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="project-hover-overlay">
                  <div className="project-details">
                    <span className="project-tag">SOBHA REALTY</span>
                    <h3 className="project-card-title">ARCHITECTURAL MASONRY</h3>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>Click to view details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="project-card" style={{ cursor: "pointer" }} onClick={() => setSelectedImage({ src: "/images/sobha/sobha-4.jpg", title: "Sobha Commercial - Site Contracting", client: "Sobha Realty" })}>
              <div className="project-image-container">
                <Image src="/images/sobha/sobha-4.jpg" alt="Sobha Commercial Site Contracting" fill className="project-img" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="project-hover-overlay">
                  <div className="project-details">
                    <span className="project-tag">SOBHA REALTY</span>
                    <h3 className="project-card-title">TURNKEY SITE CONTRACTING</h3>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>Click to view details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Client Trust Section */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="section-container">
          <div className="label-container fade-in-up">
            <span className="section-label">CLIENT REVIEWS</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title fade-in-up">WHAT OUR CLIENTS SAY</h2>

          <div className="team-grid fade-in-up" style={{ marginTop: "30px" }}>
            <div className="team-card">
              <p className="card-desc" style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "DharshanSkyline delivered our corporate headquarters ahead of schedule with zero compromise on structural quality. Highly recommended for commercial projects."
              </p>
              <div className="card-title" style={{ fontSize: "0.95rem" }}>R. Vengatram</div>
              <div className="card-subtitle">Managing Director, Apex Tech</div>
            </div>
            <div className="team-card">
              <p className="card-desc" style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "The engineering precision and transparency during the construction of our villa was exceptional. Every milestone was met seamlessly."
              </p>
              <div className="card-title" style={{ fontSize: "0.95rem" }}>K. Sundaram</div>
              <div className="card-subtitle">Private Home Owner</div>
            </div>
            <div className="team-card">
              <p className="card-desc" style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "Solid industrial execution. Their adherence to safety standards and turnkey project management saved us both time and capital budget."
              </p>
              <div className="card-title" style={{ fontSize: "0.95rem" }}>M. Ananthakrishnan</div>
              <div className="card-subtitle">Head of Operations, Vanguard Logistics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner" style={{ textAlign: "center" }}>
        <div className="section-container fade-in-up">
          <h2 className="section-title">READY TO BUILD YOUR NEXT PROJECT?</h2>
          <p className="hero-description" style={{ margin: "0 auto 30px", maxWidth: "650px" }}>
            Contact our engineering team today to discuss your project requirements and schedule a technical site consultation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Link href="/contact" className="btn btn-gold btn-outline">CONTACT OUR TEAM</Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "100%",
              backgroundColor: "var(--bg-primary)",
              border: "1px solid var(--border-color-hover)",
              padding: "20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "transparent",
                border: "none",
                color: "var(--accent-gold)",
                fontSize: "1.5rem",
                cursor: "pointer",
                zIndex: 10,
              }}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div style={{ position: "relative", width: "100%", height: "500px", marginBottom: "15px" }}>
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                fill 
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <span className="project-tag">{selectedImage.client}</span>
                <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "0.1em" }}>{selectedImage.title}</h3>
              </div>
              <span className="btn btn-gold btn-outline" style={{ padding: "8px 16px", fontSize: "0.65rem" }}>
                OFFICIAL WORK FOR SOBHA REALTY
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
