"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedStat from "@/components/AnimatedStat";
import { translations } from "@/utils/translations";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lang, setLang] = useState("en");
  const animObserverRef = useRef(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("dharshan_lang") || "en";
    setLang(savedLang);

    const handleLangChange = (e) => {
      setLang(e.detail || "en");
    };

    window.addEventListener("dharshan_lang_change", handleLangChange);

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
      window.removeEventListener("dharshan_lang_change", handleLangChange);
      if (animObserverRef.current) animObserverRef.current.disconnect();
    };
  }, []);

  const t = translations[lang] || translations.en;

  return (
    <main>
      {/* Diagonal Angled Split Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-diagonal-layout">
          {/* Left Content Column */}
          <div className="hero-left-content fade-in-up">
            <div className="dots-pattern">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="dot-item"></div>
              ))}
            </div>

            <div className="label-container" style={{ marginBottom: "20px" }}>
              <span className="label-line"></span>
              <span className="section-label" style={{ letterSpacing: "0.2em", fontSize: "0.72rem", color: "var(--accent-brown)", fontWeight: "600" }}>
                {t.hero.badge}
              </span>
            </div>

            <h1 className="hero-title" style={{ textTransform: "none" }}>
              {t.hero.t1}<br />
              {t.hero.t2}<br />
              <span className="gold-serif" style={{ fontSize: "4.2rem" }}>{t.hero.t3_serif}</span> {t.hero.t3_end}
            </h1>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "32px" }}>
              <Link href="/contact" className="btn btn-filled">{t.hero.getInTouch}</Link>
              <Link href="/services" className="btn btn-outline">{t.hero.exploreServices}</Link>
            </div>
          </div>

          {/* Right Image Column with Diagonal Slice */}
          <div className="hero-right-image fade-in-right">
            <div className="hero-right-image-wrapper">
              <Image 
                src="/images/sobha_hartland_towers_hero.png" 
                alt="DharshanSkyline Sobha Hartland Master Planned Development" 
                fill 
                className="hero-img-full"
                priority
              />
            </div>
            <div className="diagonal-line"></div>
          </div>
        </div>
      </section>

      {/* Infinite Sliding Marquee Ticker Band */}
      <section className="ticker-section">
        <div className="ticker-track">
          {t.ticker.concat(t.ticker).map((text, idx) => (
            <div key={idx} className="ticker-item">
              <span>{text}</span>
              <span className="ticker-star">★</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Preview Section */}
      <section id="about" className="about-section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="section-container about-container">
          <div className="about-image-wrapper fade-in-up" style={{ position: "relative" }}>
            <Image 
              src="/images/about_construction_no_people.png" 
              alt="Built on Trust Structural Engineering" 
              width={600}
              height={520}
              className="about-img"
            />
          </div>
          <div className="about-content fade-in-up">
            <div className="label-container">
              <span className="section-label">{t.about.label}</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title" style={{ textTransform: "none", fontSize: "2.4rem", lineHeight: "1.2" }}>
              {t.about.title}<br />
              <span className="gold-serif">{t.about.subtitle}</span>
            </h2>
            <p className="about-description">
              {t.about.desc}
            </p>
            <Link href="/about" className="btn btn-filled">{t.about.button}</Link>
          </div>
        </div>
      </section>

      {/* Key Statistics Bar (Moved After About Section) */}
      <section style={{ paddingTop: "20px", paddingBottom: "80px", backgroundColor: "var(--bg-primary)" }}>
        <div className="section-container">
          <div className="stats-grid fade-in-up">
            {/* Stat 1 */}
            <div className="stat-card-item">
              <div className="stat-icon-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="16"></line>
                  <line x1="15" y1="22" x2="15" y2="16"></line>
                  <line x1="9" y1="16" x2="15" y2="16"></line>
                </svg>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="stat-number-value">
                  <AnimatedStat value={150} suffix="+" duration={2000} />
                </div>
                <div className="stat-label-text">{t.stats.s1_label}</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stat-card-item">
              <div className="stat-icon-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="stat-number-value">
                  <AnimatedStat value={12} suffix="+" duration={2200} />
                </div>
                <div className="stat-label-text">{t.stats.s2_label}</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stat-card-item">
              <div className="stat-icon-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="stat-number-value">{t.stats.s3_num}</div>
                <div className="stat-label-text">{t.stats.s3_label}</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="stat-card-item">
              <div className="stat-icon-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="stat-number-value">{t.stats.s4_num}</div>
                <div className="stat-label-text">{t.stats.s4_label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="services-section">
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "40px" }} className="fade-in-up">
            <div className="label-container" style={{ justifyContent: "center" }}>
              <span className="label-line"></span>
              <span className="section-label">{t.services.label}</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title" style={{ textTransform: "none", fontSize: "2.2rem" }}>
              {t.services.title}
            </h2>
          </div>
          
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {/* Service 1 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="service-card-title">{t.services.s1_title}</h3>
              <p className="service-card-description">{t.services.s1_desc}</p>
            </div>
            
            {/* Service 2 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="16"></line>
                  <line x1="15" y1="22" x2="15" y2="16"></line>
                  <line x1="9" y1="16" x2="15" y2="16"></line>
                </svg>
              </div>
              <h3 className="service-card-title">{t.services.s2_title}</h3>
              <p className="service-card-description">{t.services.s2_desc}</p>
            </div>

            {/* Service 3 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="service-card-title">{t.services.s3_title}</h3>
              <p className="service-card-description">{t.services.s3_desc}</p>
            </div>

            {/* Service 4 */}
            <div className="service-card fade-in-up">
              <div className="service-icon-wrapper">
                <svg className="service-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20V4h8l2 4h10v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                  <path d="M17 12h-6M14 9v6"></path>
                </svg>
              </div>
              <h3 className="service-card-title">{t.services.s4_title}</h3>
              <p className="service-card-description">{t.services.s4_desc}</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }} className="fade-in-up">
            <Link href="/services" className="btn btn-outline">{t.services.viewDetails}</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Sobha Realty */}
      <section id="projects" className="projects-section" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="section-container">
          <div className="label-container fade-in-up">
            <span className="section-label">{t.projects.label}</span>
            <span className="label-line"></span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }} className="fade-in-up">
            <div>
              <h2 className="section-title" style={{ textTransform: "none", marginBottom: "12px" }}>
                {t.projects.title_prefix}<span className="gold-serif">{t.projects.title_highlight}</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "700px" }}>
                {t.projects.sub}
              </p>
            </div>
            <Link href="/projects" className="btn btn-filled">{t.projects.viewAll}</Link>
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
                    <p style={{ fontSize: "0.75rem", color: "#E0E0E0", marginTop: "4px" }}>Click to view details</p>
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
                    <p style={{ fontSize: "0.75rem", color: "#E0E0E0", marginTop: "4px" }}>Click to view details</p>
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
                    <p style={{ fontSize: "0.75rem", color: "#E0E0E0", marginTop: "4px" }}>Click to view details</p>
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
                    <p style={{ fontSize: "0.75rem", color: "#E0E0E0", marginTop: "4px" }}>Click to view details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Client Trust Section */}
      <section style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="section-container">
          <div className="label-container fade-in-up">
            <span className="section-label">PARTNER FEEDBACK</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title fade-in-up" style={{ textTransform: "none" }}>Sobha Realty Collaboration Insights</h2>

          <div className="team-grid fade-in-up" style={{ marginTop: "30px" }}>
            <div className="team-card">
              <p className="card-desc" style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "DharshanSkyline delivered structural concrete framing and load-bearing slab execution for our high-rise towers with top-tier safety and engineering precision."
              </p>
              <div className="card-title" style={{ fontSize: "0.95rem" }}>Eng. Tariq Al-Mansoori</div>
              <div className="card-subtitle">Senior Project Lead, Sobha Hartland</div>
            </div>
            <div className="team-card">
              <p className="card-desc" style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "The quality of exterior elevation scaffolding, masonry blockwork, and adherence to Sobha's stringent QA/QC standards has been exceptional."
              </p>
              <div className="card-title" style={{ fontSize: "0.95rem" }}>S. Ramanathan</div>
              <div className="card-subtitle">Chief Site Inspector, Sobha Projects</div>
            </div>
            <div className="team-card">
              <p className="card-desc" style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "Their site supervision and structural execution standards make DharshanSkyline one of our most dependable contracting partners for multi-story developments."
              </p>
              <div className="card-title" style={{ fontSize: "0.95rem" }}>Marcus Vance</div>
              <div className="card-subtitle">Construction Operations Director, Sobha Realty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner" style={{ textAlign: "center", backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="section-container fade-in-up">
          <h2 className="section-title" style={{ textTransform: "none" }}>Ready to Build Your Next Project?</h2>
          <p className="hero-description" style={{ margin: "0 auto 30px", maxWidth: "650px" }}>
            Contact our engineering team today to discuss your project requirements and schedule a technical site consultation.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-filled">CONTACT OUR TEAM &rarr;</Link>
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
            backgroundColor: "rgba(28, 28, 30, 0.85)",
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
              backgroundColor: "var(--bg-card)",
              borderRadius: "16px",
              border: "1px solid var(--border-color-hover)",
              padding: "24px",
              boxShadow: "var(--shadow-md)",
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
                color: "var(--accent-brown)",
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
                <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "0.05em" }}>{selectedImage.title}</h3>
              </div>
              <span className="btn btn-filled" style={{ padding: "8px 16px", fontSize: "0.65rem" }}>
                OFFICIAL WORK FOR SOBHA REALTY
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
