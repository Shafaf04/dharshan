"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("dharshan_lang") || "en";
    setLang(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = savedLang;
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "ar" : "en";
    setLang(nextLang);
    localStorage.setItem("dharshan_lang", nextLang);
    document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = nextLang;
    window.dispatchEvent(new CustomEvent("dharshan_lang_change", { detail: nextLang }));
  };

  const navItems = lang === "ar" ? [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "الخدمات", href: "/services" },
    { label: "المشاريع", href: "/projects" },
    { label: "المعايير", href: "/standards" },
    { label: "اتصل بنا", href: "/contact" },
  ] : [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "STANDARDS", href: "/standards" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link href="/" className="logo-link" onClick={closeMobileMenu}>
          <Image 
            src="/images/logo.png" 
            alt="DharshanSkyline Contracting Logo" 
            width={240} 
            height={70} 
            style={{ objectFit: "contain", height: "46px", width: "auto" }}
            priority 
          />
        </Link>
        
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`} 
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "15px", marginLeft: "25px" }}>
            {/* Sliding EN / AR Language Switcher */}
            <div 
              className={`lang-toggle-switch ${lang === "ar" ? "is-ar" : ""}`}
              onClick={toggleLanguage}
              title={lang === "en" ? "التحويل إلى العربية" : "Switch to English"}
              role="button"
              tabIndex={0}
            >
              <div className="lang-toggle-slider"></div>
              <span className={`lang-option ${lang === "en" ? "active" : ""}`}>EN</span>
              <span className={`lang-option ${lang === "ar" ? "active" : ""}`}>AR</span>
            </div>

            <Link href="/contact" className="btn btn-filled" style={{ padding: "10px 20px", fontSize: "0.7rem" }} onClick={closeMobileMenu}>
              {lang === "ar" ? "طلب عرض سعر ←" : "GET A QUOTE →"}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
