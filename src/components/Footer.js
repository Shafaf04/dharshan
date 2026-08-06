"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { translations } from "@/utils/translations";

export default function Footer() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("dharshan_lang") || "en";
    setLang(savedLang);

    const handleLangChange = (e) => {
      setLang(e.detail || "en");
    };

    window.addEventListener("dharshan_lang_change", handleLangChange);
    return () => window.removeEventListener("dharshan_lang_change", handleLangChange);
  }, []);

  const t = translations[lang] || translations.en;

  return (
    <footer className="contact-section">
      <div className="section-container contact-container">
        <div className="contact-left fade-in-up">
          <Link href="/" className="logo-link">
            <Image 
              src="/images/logo.png" 
              alt="DharshanSkyline Contracting Logo" 
              width={240} 
              height={70} 
              style={{ objectFit: "contain", height: "48px", width: "auto", marginBottom: "16px" }}
            />
          </Link>
          <p className="footer-desc">
            {t.footer.tagline}
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        <div className="contact-center fade-in-up">
          <h3 className="footer-title">{t.footer.quickLinks}</h3>
          <ul className="footer-links">
            <li><Link href="/">{lang === "ar" ? "الرئيسية" : "HOME"}</Link></li>
            <li><Link href="/about">{lang === "ar" ? "من نحن" : "ABOUT US"}</Link></li>
            <li><Link href="/services">{lang === "ar" ? "الخدمات" : "SERVICES"}</Link></li>
            <li><Link href="/projects">{lang === "ar" ? "المشاريع" : "OUR PROJECTS"}</Link></li>
            <li><Link href="/standards">{lang === "ar" ? "المعايير والأنظمة" : "SAFETY & STANDARDS"}</Link></li>
            <li><Link href="/contact">{lang === "ar" ? "اتصل بنا" : "CONTACT US"}</Link></li>
          </ul>
        </div>

        <div className="contact-right fade-in-up">
          <h3 className="footer-title">{t.footer.contact}</h3>
          <ul className="contact-info">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:dharshanskycon@gmail.com" className="info-link">dharshanskycon@gmail.com</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+911234567890" className="info-link">+91 12345 67890</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span className="info-text">{t.footer.location}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
